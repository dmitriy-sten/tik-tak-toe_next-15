"use client";

import { GameId } from "@/kernel/ids";
import React from "react";
import { GameLayout } from "../ui/layout";
import { GamePlayers } from "../ui/players";
import { GameDomain } from "@/entities/game";
import { GameStatus } from "../ui/status";
import { GameField } from "../ui/field";
import { useEventSource } from "@/shared/lib/sse/client";

interface Props {
  className?: string;
  gameId: GameId;
}

export const Game: React.FC<Props> = ({ className, gameId }) => {
  const { dataStream } = useEventSource(`/game/${gameId}/stream`, 1);

  const game: GameDomain.GameEntity = {
    id: "1",
    creator: {
      id: "1",
      login: "test",
      rating: 999,
    },
    status: "idle",
    field: Array(9).fill(null),
  };


  return (
    <GameLayout
      status={<GameStatus game={game} />}
      field={<GameField game={game} />}
      players={<GamePlayers game={game} />}
      actions={undefined}
    />
  );
};
