import { CanceledError } from "axios";
import apiClient from "../../../apiCLient";
import { useEffect, useState } from "react";
import useHttp from "./useHttp";
import { genre } from "./useGenre";

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

const useGames = (selectedGenre: genre | null) =>
  useHttp<game>("/games", { params: { genres: selectedGenre?.id } }, [
    selectedGenre?.id,
  ]);

export default useGames;
