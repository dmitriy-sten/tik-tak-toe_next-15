import { GameId } from "@/kernel/ids";
import React from "react";
import { GameLayout } from "../ui/layout";
import { GamePlayers } from "../ui/players";
import { GameDomain } from "@/entities/game";

interface Props {
  className?: string;
  gameId: GameId;
}

export const Game: React.FC<Props> = ({ className, gameId }) => {
  const game: GameDomain.GameEntity = {
    id: "1",
    creator: {
      id: "1",
      login: "test",
      rating: 999,
    },
    status: "idle",
  };

  return (
    <GameLayout
      status={undefined}
      field={undefined}
      actions={undefined}
      players={<GamePlayers game={game} />}
    />
  );
};
