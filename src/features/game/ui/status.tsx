import { GameDomain } from "@/entities/game";
import React from "react";

interface Props {
  game?: GameDomain.GameEntity;
}

export const GameStatus: React.FC<Props> = ({ game }) => {
  switch (game?.status) {
    case "idle": {
      return <div className="text-lg">Waiting for player</div>;
    }
    case "inProgress": {
      const currentSymbol = GameDomain.getGameCurrentStep(game);
      return <div className="text-lg">{currentSymbol} to move</div>;
    }
    case "gameOver": {
      const currentSymbol = GameDomain.getGameCurrentStep(game);

      return <div className="text-lg">Winner {currentSymbol}</div>;
    }
    case "gameOverDraw": {
      return <div className="text-lg">Waiting for player</div>;
    }
  }
};
