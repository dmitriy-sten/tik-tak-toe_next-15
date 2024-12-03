'use server'

import { sessionService, verifyUserPassword } from "@/entities/user/server"
import { redirect } from "next/navigation"

import { z } from "zod"

const formDataSchema = z.object({
    login: z.string().min(3),
    password: z.string().min(3)
})

export type SignInFormState = {
    formData?: FormData,
    errors?: {
        login?: string,
        password?: string,
        _errors?: string
    }
}


export const signInAction = async (state: unknown, formData: FormData): Promise<SignInFormState> => {

    const data = Object.fromEntries(formData.entries())

    const result = formDataSchema.safeParse(data)

    if (!result.success) {
        const formatedError = result.error.format()
        return {
            formData,
            errors: {
                login: formatedError.login?._errors.join(''),
                password: formatedError.password?._errors.join(''),
                _errors: formatedError._errors.join('')

            }
        }
    }

    const verifyUserResult = await verifyUserPassword(result.data)


    if (verifyUserResult.type === 'right') {
        await sessionService.addSession(verifyUserResult.value)

        redirect('/')
    }
    const errors = {
        'wrong-login-or-password': "Wrong login or password"
    }[verifyUserResult.error]

    return {
        formData,
        errors: {
            _errors: errors
        }
    }
}