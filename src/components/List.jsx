import React from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import { useState, useEffect } from "react";
import { MdClose } from "react-icons/md";
import { watch_movie } from "../redux/actions";
import { useDispatch } from "react-redux";
const List = () => {
  const dispatch = useDispatch();
  const showListmovie = useSelector((state) => state.showListmovie);
  const [listmovies, setListmovie] = useState([]);
  const close_button = () => {
    document.getElementById("view").style.display = "none";
    document.body.style.overflow = "auto";
  };
  useEffect(() => {
    axios.get(showListmovie.url).then((response) => {
      setListmovie(response.data.results);
    });
  }, [showListmovie.url]);


  return (
    <div style={{ display: "none" }} id="view" className={list_style.list}>
      <div className={list_style.list__content}>
        <div className={list_style.content}>
          <button className={list_style.button} onClick={close_button}>
            <MdClose style={{ fill: "white" }} />
          </button>
          <div className={list_style.title}>{showListmovie.title}</div>
          <div className={list_style.list_movie}>
            <div className={list_style.frame_list}>
              {listmovies === undefined ? (
                <div></div>
              ) : (
                listmovies.map((movie, id) => (
                  <div className={list_style.frame_movie} key={id}>{movie?.poster_path && <img
                      onClick={() => {
                        const Item = movie;
                        const Id = movie.id;
                        dispatch(watch_movie({ Item, Id }));
                        document.body.style.overflow = "hidden";
                        document.getElementById("movie").style.display =
                          "block";
                      }}
                      className={list_style.img}
                      src={`https://image.tmdb.org/t/p/original/${movie?.poster_path}`}
                      alt=""
                    />}
                    
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default List;

const list_style = {
  list: "z-[150] h-full w-full fixed bg-black/60 overflow-y-scroll will-change-scroll text-white",
  list__content: " flex justify-center box-border relative	",
  button: "right-0 mr-3 mt-3 absolute",
  list_movie: "pt-[2rem] w-full h-full relative first:last:text-[1.6rem]",
  frame_list: "lg:grid-cols-4 gap-4 grid  md:grid-cols-2 mx-3 gird",
  frame_movie: "inline-block cursor-pointer relative p-2",
  img: "w-full rounded h-auto block pb-4",
  content:
    "mt-7 rounded-xl relative text-[1.6rem] h-full  self-center w-full min-h-[100vh] md:w-[80vw] bg-[#242424]",
  title:
    "h-[100px]  md:h-[240px] lg:h-[20rem] flex justify-center items-center md:text-[4rem] sm:text-[2rem] font-bold px-[6%] text-center ",
};