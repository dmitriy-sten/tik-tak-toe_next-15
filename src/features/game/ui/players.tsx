import { GameDomain } from "@/entities/game";
import React from "react";

interface Props {
  game: GameDomain.GameEntity;
}

export const GamePlayers: React.FC<Props> = ({ game }) => {
  const firstPlayer = game?.status === "idle" ? game.creator : game?.players[0];

  const secondPlayer = game?.status === "idle" ? undefined : game?.players[1];

  return (
    <div className="flex gap-4 justify-between">
      <div className="flex text-lg">
        X - {firstPlayer.login}:{firstPlayer.rating}
      </div>
      <div className="flex text-lg">
        O - {secondPlayer?.login ?? '...'}:{secondPlayer?.rating}
      </div>
    </div>
  );
};
