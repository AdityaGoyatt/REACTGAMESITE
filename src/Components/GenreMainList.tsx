import React from "react";
import useGenre from "../hooks/useGenre";

const GenreMainList = () => {
  const { genreList, error, loading } = useGenre();
  return (
    <div>
      {genreList.map((data) => (
        <li>{data.name}</li>
      ))}
    </div>
  );
};

export default GenreMainList;
