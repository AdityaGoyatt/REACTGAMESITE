import { CanceledError } from "axios";
import apiClient from "../../../apiCLient";
import { useEffect, useState } from "react";
import useHttp from "./useHttp";
import { genre } from "./useGenre";
import { PlatformListItem } from "./usePlatforms";
import { gameQuery } from "../App";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

export interface game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  genres: Array<genre>;
}

const useGames = (gameQuery: gameQuery) =>
  useHttp<game>(
    "/games",
    {
      params: {
        genres: gameQuery.genre?.id,
        parent_platforms: gameQuery.platform?.id,
        ordering: gameQuery.sortOrder,
      },
    },
    [gameQuery.genre?.id, gameQuery.platform?.id, gameQuery.sortOrder]
  );

export default useGames;
