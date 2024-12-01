import { left } from "@/shared/lib/either"
import { userRepository } from "../repositories/user"
import cuid from "cuid"
import { DEFAULT_RATING } from "../domain"

export const createUser = async ({ login, password }: { login: string, password: string }) => {

    const userWithLogin = await userRepository.getUser({ login })

    if (userWithLogin) {
        return left('user-login-exists')
    }

    await userRepository.saveUser({
        id: cuid(),
        login: login,
        rating: DEFAULT_RATING,
        passwordHash: password,
        salt: '',

    })
}