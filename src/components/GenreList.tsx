import useGenres from "@/hooks/useGenres";
import React from "react";

const GenreList = () => {
  const { genre } = useGenres();
  return (
    <ul>
      {genre.map((genre) => (
        <li key={genre.id}>{genre.name}</li>
      ))}
    </ul>
  );
};

export default GenreList;
