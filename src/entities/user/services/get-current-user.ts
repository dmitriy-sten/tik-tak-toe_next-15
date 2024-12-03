import { sessionService } from "./session";
import { userRepository } from "../repositories/user";


export async function getCurrentUser() {
    const { session } = await sessionService.verifySession()
    const user = userRepository.getUser({ id: session.id })
    return user
}