'use client'

import { GameId } from "@/kernel/ids";
import React from "react";
import { GameLayout } from "../ui/layout";
import { GamePlayers } from "../ui/players";
import { GameStatus } from "../ui/status";
import { GameField } from "../ui/field";
import { useGame } from "../model/use-game";

interface Props {
  className?: string;
  gameId: GameId;
}

export const GameClient: React.FC<Props> = ({ className, gameId }) => {
  const { game, isPending } = useGame(gameId);

  if (!game || isPending) {
    return <GameLayout status={"Loading"} />;
  }

  return (
    <GameLayout
      status={<GameStatus game={game} />}
      field={<GameField game={game} />}
      players={<GamePlayers game={game} />}
      actions={undefined}
    />
  );
};
