'use server'

import { createUser, sessionService } from "@/entities/user/server"
import { redirect } from "next/navigation"

import { z } from "zod"




export type SignUpFormState = {
    formData?: FormData,
    errors?: {
        login?: string,
        password?: string,
        _errors?: string
    }
}

const formDataSchema = z.object({
    login: z.string().min(3),
    password: z.string().min(3)
})

export const signUpAction = async (state: unknown, formData: FormData) => {

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
    const createUserResult = await createUser(result.data)


    if (createUserResult.type === 'right') {
        await sessionService.addSession(createUserResult.value)

        redirect('/')
    }

    const errors = {
        'user-login-exists': "Wrong login or password"
    }[createUserResult.error]

    return {
        formData,
        errors: {
            _errors: errors
        }
    }
}