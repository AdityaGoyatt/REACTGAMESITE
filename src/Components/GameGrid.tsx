import useGames from "../hooks/useGames";
const GameGrid = () => {
  const { gameList, error } = useGames();

  return (
    <div>
      {gameList.map((game) => (
        <li key={game.id}>{game.name}</li>
      ))}
    </div>
  );
};

export default GameGrid;
