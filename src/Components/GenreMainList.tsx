import React from "react";
import useHttp from "../hooks/useHttp";
interface genre {
  id: number;
  name: string;
  slug: string;
}

const GenreMainList = () => {
  const { dataList, error, loading } = useHttp<genre>("/genres");

  return (
    <>
      {dataList.map((data) => (
        <li>{data.name}</li>
      ))}
    </>
  );
};
export default GenreMainList;
