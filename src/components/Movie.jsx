import React from "react";
import { useDispatch } from "react-redux";
import { watchmovie } from "../actions/watchmovie";
const Movie = ({ item }) => {
  const items = item.backdrop_path;
  const dispatch = useDispatch();
  const watchMovie = () => {
    const Item = item;
    const Id = item.id
    dispatch(watchmovie({Item,Id}));
    document.body.style.overflow = "hidden";
    document.getElementById("movie").style.display = "block";
  };
  return (
    <div className="w-[160px]  sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer relative p-2">
      {items === null ? (
        <div></div>
      ) : (
        <img
          onClick={watchMovie}
          className="w-full rounded h-auto block"
          src={`https://image.tmdb.org/t/p/w500/${item?.poster_path}`}
          alt={item.title}
        />
      )}
    </div>
  );
};

export default Movie;
