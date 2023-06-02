import { CanceledError } from "axios";
import apiClient from "../../../apiCLient";
import { useEffect, useState } from "react";

export interface genre {
  id: number;
  name: string;
  slug: string;
}

export interface genreResults {
  count: number;
  results: Array<genre>;
}

const useGenre = () => {
  const [genreList, setGenreList] = useState<genre[]>([]);
  const [error, setError] = useState("");

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    setLoading(true);
    apiClient
      .get<genreResults>("/genres", { signal: controller.signal })
      .then((res) => {
        setGenreList([...res.data.results]);
        setLoading(false);
        console.log(res.data.results);
      })
      .catch((error) => {
        if (error instanceof CanceledError) return;
        setError(error.message);
        setLoading(false);
      });

    return () => controller.abort();
  }, []);

  return { genreList, error, loading };
};
export default useGenre;
