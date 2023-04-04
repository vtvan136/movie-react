import axios from "axios";
import { useEffect, useState, React } from "react";
import Movie from "./Movie";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import { useDispatch } from "react-redux";
import {show_list} from "../redux/actions"
const Row = ({ title, fetchURL, rowID }) => {

  const slide_left = () => {
    var slider = document.getElementById("slider" + rowID);
    slider.scrollLeft = slider.scrollLeft - 500;
  };

  const slide_right = () => {
    var slider = document.getElementById("slider" + rowID);
    slider.scrollLeft = slider.scrollLeft + 500;
  };

  const view_all = () => {
    const titles = title;
    const urls = fetchURL;
    dispatch(show_list({ titles, urls }));
    document.body.style.overflow = "hidden";
    document.getElementById("view").style.display = "block";
  };

  const dispatch = useDispatch();
  const [movies, setMovie] = useState([]);

  useEffect(() => {
    axios.get(fetchURL).then((response) => {
      setMovie(response.data.results);
    });
  }, [fetchURL]);
  

  return (
    <div className="group mb-8">
      <h2 className="text-white font-bold md:text-xl p-4 flex items-center outline-white">
        {title}
        <div className=" flex items-center ">
          <i
            onClick={view_all}
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
          onClick={slide_left}
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
          onClick={slide_right}
          className="bg-black h-full right-0 rounded absolute opacity-50 hover:opacity-80 cursor-pointer z-10 hidden group-hover:block"
          size={60}
          style={{ fill: "white" }}
        />
      </div>
    </div>
  );
};

export default Row;
