import React from "react";
import useGames, { game } from "../hooks/useGames";

import {
  Card,
  CardBody,
  Image,
  Stack,
  Heading,
  Text,
  Divider,
  CardFooter,
  ButtonGroup,
  Button,
} from "@chakra-ui/react";

interface Props {
  gameObject: game;
}

const GameCard = ({ gameObject }: Props) => {
  return (
    <Card borderRadius="10px" overflow="hidden">
      <Image src={gameObject.background_image} borderRadius="sm" />
      <CardBody>
        <Heading fontSize="2xl">{gameObject.name}</Heading>
      </CardBody>
    </Card>
  );
};

export default GameCard;
