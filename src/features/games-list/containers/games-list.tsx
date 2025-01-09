import { getIdleGames } from "@/entities/game/server";
import { Layout } from "../ui/layout";
import { GameCard } from "../ui/game-card";
import { CreateButton } from "./create-button";
import { createGameAction } from "../actions/create-game";
import { Button } from "@/shared/ui/button";
import Link from "next/link";
import { routes } from "@/kernel/routes";

export async function GamesList() {
  const games = await getIdleGames();

  return (
    <Layout actions={<CreateButton />}>
      {games.map((game) => (
        <GameCard
          login={game.creator.login}
          rating={game.creator.rating}
          key={game.id}
          actions={
            <Button asChild>
              <Link href={routes.game(game.id)}>Connect</Link>
            </Button>
          }
        />
      ))}
    </Layout>
  );
}
