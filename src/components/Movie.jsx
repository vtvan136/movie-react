import React from "react";
import { useDispatch } from "react-redux";
import {watch_movie } from "../redux/actions";

const Movie = ({ item }) => {
  const dispatch = useDispatch();
  const watchMovie = () => {
    const Item = item;
    const Id = item.id;
    dispatch(watch_movie({ Item, Id }));
    document.body.style.overflow = "hidden";
    document.getElementById("movie").style.display = "block";
  };

  return (
    <>
      {item?.poster_path === null ? (
        <div className={movie_style.div__none}></div>
      ) : (
        <div className={movie_style.poster}>
          <img
            onClick={watchMovie}
            className={movie_style.img__poster}
            src={`https://image.tmdb.org/t/p/w500/${item?.poster_path}`}
            alt={item.title}
          />{" "}
        </div>
      )}
    </>
  );
};

export default Movie;

const movie_style ={
    div__none : "hidden",
    img__poster: "w-full rounded h-full block",
    poster:"w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer relative p-2"
}
