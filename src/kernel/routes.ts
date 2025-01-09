import { GameId } from "./ids";

export const routes = {
    signUp: () => '/sign-up',
    signIn: () => '/sign-in',
    game: (gameId: GameId) => `/game/${gameId}`,
    gameStream: (gameId: GameId) => `/game/${gameId}/stream`

}