import React from "react";
import { game } from "../hooks/useGames";

import { Card, CardBody, Image, Heading, Text } from "@chakra-ui/react";
import PlatformIcons from "./PlatformIcons";

interface Props {
  gameObject: game;
}

const GameCard = ({ gameObject }: Props) => {
  return (
    <Card borderRadius="10px" overflow="hidden">
      <Image src={gameObject.background_image} borderRadius="sm" />
      <CardBody>
        <Heading fontSize="2xl">{gameObject.name}</Heading>
        <PlatformIcons
          platforms={gameObject.parent_platforms.map((p) => p.platform)}
        />
      </CardBody>
    </Card>
  );
};

export default GameCard;
