import React from "react";
import useHttp from "../hooks/useHttp";
import useGenre from "../hooks/useGenre";

const GenreMainList = () => {
  const { dataList, error, loading } = useGenre();

  return (
    <>
      {dataList.map((data) => (
        <li>{data.name}</li>
      ))}
    </>
  );
};
export default GenreMainList;
