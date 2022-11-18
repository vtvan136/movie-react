import axios from "axios";
import { useEffect, useState, React } from "react";
import Movie from "./Movie";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import { listmovie } from "../actions/showlistmovie";
import { useDispatch } from "react-redux";

const Row = ({ title, fetchURL, rowID }) => {
  const dispatch = useDispatch();
  const [movies, setMovie] = useState([]);
  useEffect(() => {
    axios.get(fetchURL).then((response) => {
      setMovie(response.data.results);
    });
  }, [fetchURL]);
  const slideLeft = () => {
    var slider = document.getElementById("slider" + rowID);
    slider.scrollLeft = slider.scrollLeft - 500;
  };
  const slideRight = () => {
    var slider = document.getElementById("slider" + rowID);
    slider.scrollLeft = slider.scrollLeft + 500;
  };
  const viewAll = () => {
    const titles = title;
    const urls = fetchURL;
    dispatch(listmovie({ titles, urls }));
    document.body.style.overflow = "hidden";
    document.getElementById("view").style.display = "block";
  };

  return (
    <div className="group mb-8">
      <h2 className="text-white font-bold md:text-xl p-4 flex items-center outline-white">
        {title}
        <div className=" flex items-center ">
          <i
            onClick={viewAll}
            className="pl-3 text-xs text-blue-300 group-hover:block hidden delay-2000"
          >
            View all
          </i>
          <MdChevronRight
            className=" group-hover:block hidden"
            size={28}
            style={{ fill: "#2596be" }}
          />
        </div>
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
          {movies.map((item, id) => (
            <Movie item={item} key={id} />
          ))}
        </div>
        <MdChevronRight
          onClick={slideRight}
          className="bg-black h-full right-0 rounded absolute opacity-50 hover:opacity-80 cursor-pointer z-10 hidden group-hover:block"
          size={60}
          style={{ fill: "white" }}
        />
      </div>
    </div>
  );
};

export default Row;
