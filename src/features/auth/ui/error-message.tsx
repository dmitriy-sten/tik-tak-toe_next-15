import { Either, matchEither } from "@/shared/lib/either";
import { Alert, AlertDescription } from "@/shared/ui/alert";
import React from "react";

interface Props {
  error: Either<string, unknown>;
}

export const ErrorMessage: React.FC<Props> = ({ error }) => {
  return matchEither(error, {
    left: (error) => (
      <Alert variant={"destructive"}>
        <AlertDescription>{error}</AlertDescription>
      </Alert>
    ),

    right: () => null,
  });
};
