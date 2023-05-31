import { CanceledError } from "axios";
import apiClient from "../../../apiCLient";
import { useEffect, useState } from "react";

export interface game {
  id: number;
  name: string;
  background_image: string;
}

export interface games {
  count: number;
  results: Array<game>;
}

const useGames = () => {
  const [gameList, setGameList] = useState<game[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const controller = new AbortController();
    const request = apiClient
      .get<games>("/games", { signal: controller.signal })
      .then((res) => {
        setGameList([...res.data.results]);
        console.log(res.data.results[0].background_image);
      })
      .catch((error) => {
        if (error instanceof CanceledError) return;
        setError(error.message);
      });

    const cancel = () => controller.abort();
    return cancel;
  }, []);

  return { gameList, error };
};

export default useGames;
