import { pbkdf2, randomBytes } from 'node:crypto'


async function hashPassword(password: string, salt = randomBytes(16).toString('hex')) {

    return new Promise<Buffer>((res, rej) => pbkdf2(
        password, salt, 1000, 64, 'sha512', (error, value) =>
        error ? rej(error) : res(value)
    )).then(r => r.toString())
}



async function comparePasswords({ password, hash, salt }:
    { password: string, hash: string, salt: string }) {

    return hash === await hashPassword(password, salt)
}



export const passwordService = { hashPassword, comparePasswords }