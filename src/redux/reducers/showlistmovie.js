import { getType, show_list } from "../actions";
const defaultMovies = {
  title: "",
  url: "",
};
const showListmovie = (state = defaultMovies, action) => {
  switch (action.type) {
    case getType(show_list):
      return { title: action.payload.titles, url: action.payload.urls };
    default:
      return state;
  }
};

export default showListmovie;
