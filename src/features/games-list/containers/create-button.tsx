"use client";

import { Button } from "@/shared/ui/button";
import React, { startTransition, useActionState } from "react";
import { createGameAction } from "../actions/create-game";
import { mapLeft, matchEither, right } from "@/shared/lib/either";

interface Props {
  className?: string;
}

export const CreateButton: React.FC<Props> = () => {
  const [data, dispatch, isPending] = useActionState(
    createGameAction,
    //@ts-ignore
    right(undefined),
  );

  return (
    <Button
      disabled={isPending}
      onClick={()=> startTransition(dispatch)}
      error={mapLeft(
        data,
        (e) =>
          ({
            ["can-create-only-one-game"]: "Yuo can create only one game",
            ["user-not-found"]: "User not found",
          })[e],
      )}
    >
      Create game
    </Button>
  );
};
