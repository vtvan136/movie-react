import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import requests from "../Requests";
import { MdPlayArrow, MdInfoOutline } from "react-icons/md";
import { useDispatch } from "react-redux";
import { watch_movie } from "../redux/actions";
const Main = () => {
  const [movies, setMovie] = useState([]);
  const dispatch = useDispatch();
  const movie = movies[Math.floor(Math.random() * movies.length)];
  useEffect(() => {
    axios.get(requests.requestTrending).then((response) => {
      setMovie(response.data.results);
    });
  }, []);


  return (
    <div className="w-full h-screen text-white">
      <div className="w-full h-full">
        <div className="absolute w-full h-[400] bg-gradient-to-t from-black"></div>
        {movie?.backdrop_path === undefined ? (
          <div></div>
        ) : (
          <img
            className="w-full h-full object-cover"
            src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
            alt={movie?.title}
          />
        )}
        <div className="absolute w-full top-[40%] p-4 md:p-8 flex-col space-y-8">
          <h1 className="text-3xl md:text-5xl font-bold">{movie?.title}</h1>
          <p className="w-full md:max-w-[70%] lg:max-w-[50%] xl:max-w-[35%] text-gray-200">
            {truncateString(movie?.overview, 350)}
          </p>
          <div className="flex">
            <button
              onClick={() => {
                const Item = movie;
                const Id = movie.id;
                dispatch(watch_movie({ Item, Id }));
                document.body.style.overflow = "hidden";
                document.getElementById("movie").style.display = "block";
              }}
              className="border-0 rounded  bg-gray-100 text-black border-gray-300 py-2 px-10 flex  items-center hover:bg-gray-300"
            >
              <MdPlayArrow size={32} style={{ padding: "0 10 0 0" }} />
              Play
            </button>
            <button className="border-0 rounded  bg-gray-700/60 text-white  py-2 px-5 ml-4 flex items-center hover:bg-gray-400">
              <MdInfoOutline
                size={30}
                style={{ padding: "0 10 0 0", fill: "white" }}
              />
              Watch Later
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;

const truncateString = (str, num) => {
  if (str?.length > num) {
    return str.slice(0, num) + "...";
  } else {
    return str;
  }
};