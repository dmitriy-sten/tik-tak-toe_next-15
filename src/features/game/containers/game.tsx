import { GameId } from "@/kernel/ids";
import React from "react";
import { GameClient } from "./game-client";
import { getCurrentUser } from "@/entities/user/server";
import { getGameById, startGame } from "@/entities/game/server";
import { gameEvents } from "../services/game-events";

interface Props {
  gameId: GameId;
}

export const Game: React.FC<Props> = async ({ gameId }) => {
  const user = await getCurrentUser();

  let game = await getGameById(gameId)

  if (user) {
    const startGameResult = await startGame(gameId, user);

    if (startGameResult?.type === "right") {
      gameEvents.emit(startGameResult.value);
    }
  }

  return <GameClient gameId={gameId} />;
};
