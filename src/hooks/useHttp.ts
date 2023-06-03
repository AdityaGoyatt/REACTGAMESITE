import { AxiosRequestConfig, CanceledError } from "axios";
import apiClient from "../../../apiCLient";
import { useEffect, useState } from "react";

export interface DataResult<T> {
  count: number;
  results: Array<T>;
}

const useHttp = <T>(
  endPoint: string,
  requestConfig?: AxiosRequestConfig,
  deps?: any[]
) => {
  const uniquePoint = endPoint;
  const [dataList, setGameList] = useState<T[]>([]);
  const [error, setError] = useState("");

  const [loading, setLoading] = useState(false);

  useEffect(
    () => {
      const controller = new AbortController();
      setLoading(true);
      apiClient
        .get<DataResult<T>>(uniquePoint, {
          signal: controller.signal,
          ...requestConfig,
        })
        .then((res) => {
          setGameList([...res.data.results]);
          setLoading(false);
        })
        .catch((error) => {
          if (error instanceof CanceledError) return;
          setError(error.message);
          setLoading(false);
        });

      return () => controller.abort();
    },
    deps ? [...deps] : []
  );

  return { dataList, error, loading };
};

export default useHttp;
