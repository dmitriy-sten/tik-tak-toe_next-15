"use client";
import { GameDomain } from "@/entities/game";
import { Button } from "@/shared/ui/button";
import React from "react";

interface Props {
  game: GameDomain.GameEntity;
  onCellClick: (index: number) => void;
}

export const GameField: React.FC<Props> = ({ game, onCellClick }) => {
  return (
    <div className="grid grid-cols-3">
      {game.field.map((symbol, index) => (
        <Button
          onClick={() => onCellClick(index)}
          key={index}
          className="bg-transparent flex items-center justify-center border border-primary size-16"
        >
          {symbol ?? ""}
        </Button>
      ))}
    </div>
  );
};
