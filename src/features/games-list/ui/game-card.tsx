import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/shared/ui/card";
import React from "react";

interface Props {
  className?: string;
  login: string;
  rating: number;
  actions: React.ReactNode;
}

export const GameCard: React.FC<Props> = ({ rating, login, actions }) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>
          Game with <span className="text-red-400">{login}</span>
        </CardTitle>
      </CardHeader>
      <CardContent>Rating : {rating}</CardContent>
      <CardFooter>{actions}</CardFooter>
    </Card>
  );
};
