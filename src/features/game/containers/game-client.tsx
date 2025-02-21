"use client";

import { GameId } from "@/kernel/ids";
import React from "react";
import { GameLayout } from "../ui/layout";
import { GamePlayers } from "../ui/players";
import { GameStatus } from "../ui/status";
import { GameField } from "../ui/field";
import { useGame } from "../model/use-game";
import { GameDomain } from "@/entities/game";

interface Props {
  defaultGame: GameDomain.GameEntity;
}

export const GameClient: React.FC<Props> = ({ defaultGame }) => {
  const { game = defaultGame } = useGame(defaultGame.id);

  return (
    <GameLayout
      status={<GameStatus game={game} />}
      field={<GameField game={game} />}
      players={<GamePlayers game={game} />}
      actions={undefined}
    />
  );
};
