import { Either, matchEither } from "@/shared/lib/either";
import { Alert, AlertDescription } from "@/shared/ui/alert";
import React from "react";

interface Props {
  error?: string;
}

export const ErrorMessage: React.FC<Props> = ({ error }) => {
  if (error) {
    return (
      <Alert variant={"destructive"}>
        <AlertDescription>{error}</AlertDescription>
      </Alert>
    );
  }
  return null;
};
