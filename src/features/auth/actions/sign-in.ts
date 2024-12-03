'use server'

import { createUser, sessionService, verifyUserPassword } from "@/entities/user/server"
import { left, mapLeft } from "@/shared/lib/either"
import { redirect } from "next/navigation"

import { z } from "zod"

const formDataSchema = z.object({
    login: z.string().min(3),
    password: z.string().min(3)
})

export type SignInFormState = {
    formData?:FormData,
    errors?: {
      login?:string,
      password?:string,
      _errors?:string
    }
  }


export const signInAction = async (state: unknown, formData: FormData) => {

    const data = Object.fromEntries(formData.entries())

    const result = formDataSchema.safeParse(data)

    if (!result.success) {
        return left(`Validation-error ${result.error.message}`)
    }

    const verifyUserResult = await verifyUserPassword(result.data)


    if (verifyUserResult.type === 'right') {
        await sessionService.addSession(verifyUserResult.value)

        redirect('/')
    }

    return mapLeft(verifyUserResult, (error) => {
        return {
            'wrong-login-or-password': "Wrong login or password"
        }[error]
    })
}