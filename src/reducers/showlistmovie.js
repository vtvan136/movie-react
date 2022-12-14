const defaultMovies = {
  title: "",
  url: "",
};
const showListmovie = (state = defaultMovies, action) => {
  switch (action.type) {
    case "LIST_MOVIE":
      return { title: action.payload.titles, url: action.payload.urls };
    default:
      return state;
  }
};

export default showListmovie;
