import { getIdleGames } from "@/entities/game/server";
import { Layout } from "../ui/layout";
import { GameCard } from "../ui/game-card";
import { CreateButton } from "./create-button";
import { createGameAction } from "../actions/create-game";

export async function GamesList() {
  const ganes = await getIdleGames();

  return (
    <Layout actions={<CreateButton />}>
      {ganes.map((game) => (
        <GameCard
          login={game.creator.login}
          rating={game.creator.rating}
          key={game.id}
        />
      ))}
    </Layout>
  );
}
