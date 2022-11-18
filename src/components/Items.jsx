import React from "react";
import { MdClose } from "react-icons/md";
import { MdPlayArrow, MdFavoriteBorder } from "react-icons/md";
import { useState } from "react";
import { UserAuth } from "../context/AuthContext";
import { db } from "../firebase";
import { arrayUnion, updateDoc, doc } from "firebase/firestore";
import axios from "axios";
import { useSelector } from "react-redux";
import Youtube from 'react-youtube'
const Item = () => {
  const watchMovie = useSelector((state) => state.watchMovie.item);
  const [like, setLike] = useState(false);
  const { user } = UserAuth();
  const movieID = doc(db, "users", `${user?.email}`);
  const [trailer,setTrailer] = useState()
  const saveShow = () => {
    if (user?.email) {
      setLike(true);
      updateDoc(movieID, {
        saveShow: arrayUnion({
          id: watchMovie.id,
          title: watchMovie.title,
          poster_path: watchMovie.poster_path,
        }),
      });
    } else {
      alert("Please log in to save a movie");
    }
  };
  const fetchMovie = async (Id) => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/movie/${Id}/videos?api_key=7362fd7aa2d436d95baf0de6e8fdf2f9&language=en-US`
    )
    if (data && data.results) {
      const trailer = data.results.find(
        (vid) => vid.name === "Official Trailer"
      );
      setTrailer(trailer ? trailer : data.results[0]);
      setPlaying(true)
    }
    if (data.results.length ===0){
      alert('not movie')
      setPlaying(false)
    }
  };
  const [playing, setPlaying]= useState(false)
  const selectMovie =()=>{
    if(watchMovie){
      fetchMovie(watchMovie.id)
    }
  }
  return (
    <>
      <div
        id="movie"
        className="z-[250] h-full w-full fixed bg-black/60 overflow-y-scroll will-change-scroll text-white hidden "
      >
        <div className=" flex justify-center box-border relative	">
          <div
            onClick={() => {
              setLike(false)
              setPlaying(false)
              document.getElementById("movie").style.display = "none";
              if (document.getElementById("view").style.display === "block") {
                return;
              } else {
                document.body.style.overflow = "auto";
              }
            }}
            className=" absolute h-screen w-full"
          ></div>
          {watchMovie === undefined ? (
            <div></div>
          ) : (
            <div className="mt-[50px]  rounded-xl relative text-[1.6rem] h-full  self-center sm:w-full  md:w-[70vw]  min-h-[100vh] z-[280] bg-[#242424]">
              <button
                className="right-0 mr-3 mt-3 absolute !z-[9990] bg-gray-500 rounded-3xl p-3"
                onClick={() => {
                  setLike(false)
                  setPlaying(false)
                  document.getElementById("movie").style.display = "none";
                  if (document.getElementById("view").style.display === "block") {
                    return;
                  } else {
                    document.body.style.overflow = "auto";
                  }
                }}
              >
                <MdClose style={{ fill: "white" }} />
              </button>
              {playing ?( <div>{trailer ? (
                <div className="z-[300]">
              <Youtube
                    videoId={trailer.key}
                    className=" top-0  w-full h-[600px]"
                    opts={{
                      width: "100%",
                      height: "100%",
                      playerVars: {
                        autoplay: 1,
                        controls: 0,
                        cc_load_policy: 0,
                        fs: 0,
                        iv_load_policy: 0,
                        modestbranding: 0,
                        rel: 0,
                        showinfo: 0,
                      },
                    }}
                  /></div>):(<div></div>)}</div>):(<img
                    className="object-cover rounded-t-xl z-[249]"
                    alt={watchMovie.title}
                    src={`https://image.tmdb.org/t/p/original/${watchMovie?.backdrop_path}`}
                  />)}
              
              <div className="flex gap-8 -top-20 z-[99] relative px-5 md:px-20">
                <button onClick={selectMovie} className="border-0 rounded  bg-gray-100 text-black h-10 border-gray-300 text-xl flex px-10 py-[2px]  items-center hover:bg-gray-300">
                  <MdPlayArrow size={40} style={{ padding: "0 10 0 0" }} />
                  Play
                </button>
                <button
                  onClick={saveShow}
                  className="bg-black/50 hover:bg-black/70 hover:border-gray-100 px-[6px] border-gray-500 border-2 rounded-[50%]"
                >
                  {!like ? (
                    <MdFavoriteBorder />
                  ) : (
                    <MdFavoriteBorder style={{ fill: "red" }} />
                  )}
                </button>
              </div>
              <div className="text-xl -top-10 relative px-[6%]">
                <h2 className="text-3xl font-bold pt-4">
                  Title: {watchMovie.title}
                </h2>
                <h3 className="py-4 text-justify">
                  Overview: {watchMovie.overview}
                </h3>
                <h4 className="text-lg font-normal pb-2">
                  Release date: {watchMovie.release_date}
                </h4>
                <h4 className="text-lg font-normal pb-2">
                  Popularity: {watchMovie.popularity}
                </h4>
                <h4 className="text-lg font-normal pb-2">
                  Vote average: {watchMovie.vote_average}
                </h4>
                <h4 className="text-lg font-normal pb-2">
                  Vote count: {watchMovie.vote_count}
                </h4>
              </div>
              
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Item;
