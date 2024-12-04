import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/shared/ui/card";
import React from "react";

interface Props {
  status: React.ReactNode;
  field: React.ReactNode;
  actions: React.ReactNode;
  players?: React.ReactNode;
}

export const GameLayout: React.FC<Props> = ({
  status,
  field,
  actions,
  players,
}) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Tik Tak Toe 3x3</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-4">
        {players}
        {status}
        <div className="flex items-center justify-center mt-3">{field}</div>
      </CardContent>
      <CardFooter>{actions}</CardFooter>
    </Card>
  );
};
