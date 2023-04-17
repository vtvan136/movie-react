import {  useState, React, useEffect } from "react";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";


const SaveMovie = ({ title, rowID }) => {
  
  const [movies,setMovies] = useState();
  useEffect(()=>{
    const movie =JSON.parse(localStorage.getItem('movie_list'))
    setMovies(movie )
  },[localStorage.getItem('movie_list')])
  //setMovies(localStorage.getItem('movie_list'))
  const slideLeft = () => {
    var slider = document.getElementById("slider" + rowID);
    slider.scrollLeft = slider.scrollLeft - 500;
  };
  const slideRight = () => {
    var slider = document.getElementById("slider" + rowID);
    slider.scrollLeft = slider.scrollLeft + 500;
  };
  return (
    
    <div className="group mb-8 ">
       {movies && <div>
      <h2 className="text-white font-bold md:text-xl p-4 flex items-center outline-white">
        {title}
      </h2>
     
      <div className="relative flex items-center">
        <MdChevronLeft
          onClick={slideLeft}
          className="bg-black h-full left-0 rounded absolute opacity-50 hover:opacity-80 cursor-pointer z-10 hidden group-hover:block"
          size={60}
          style={{ fill: "white" }}
        />
        <div
          id={"slider" + rowID}
          className="w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative"
        >
          {movies.map(item => (
            <div
              key={item.id}
              className="w-[160px]  sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer relative p-2"
            >
              <img
                className="w-full rounded h-auto block"
                src={`https://image.tmdb.org/t/p/w500/${item?.poster_path}`}
                alt={item.title}
              />
            </div>
          ))}
        </div>
        <MdChevronRight
          onClick={slideRight}
          className="bg-black h-full right-0 rounded absolute opacity-50 hover:opacity-80 cursor-pointer z-10 hidden group-hover:block"
          size={60}
          style={{ fill: "white" }}
        />
      </div></div>}
    </div>
  );
};

export default SaveMovie;
