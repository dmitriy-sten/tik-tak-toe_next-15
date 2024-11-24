import { getIdleGames } from "@/entities/game/server";
import { Card, CardContent, CardHeader, CardTitle } from "@/shared/ui/card";

export async function GamesList() {
  const ganes = await getIdleGames();

  return (
    <div className="grid grid-cols-2 gap-4">
      {ganes.map((game) => (
        <Card key={game.id}>
          <CardHeader>
            <CardTitle>Game with <span className="text-red-400">{game.creator.login}</span></CardTitle>
          </CardHeader>
          <CardContent>Rating : {game.creator.rating}</CardContent>
        </Card>
      ))}
    </div>
  );
}
