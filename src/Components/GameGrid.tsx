import {
  Box,
  SimpleGrid,
  Skeleton,
  SkeletonCircle,
  SkeletonText,
  Text,
} from "@chakra-ui/react";
import useGames, { game } from "../hooks/useGames";
import GameCard from "./GameCard";
import Skeletons from "./Skeletons";
import useHttp from "../hooks/useHttp";
const GameGrid = () => {
  const { dataList, error, loading } = useGames();
  const skeleton = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
        spacing={10}
        p="10px"
        m={2}
      >
        {loading && skeleton.map((data) => <Skeletons />)}
        {dataList.map((game) => (
          <>
            <GameCard key={game.id} gameObject={game}></GameCard>
          </>
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
