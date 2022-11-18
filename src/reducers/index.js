import { combineReducers } from "redux";
import showListmovie from "./showlistmovie";
import watchMovie from "./watchmovie";
const allReducers = combineReducers({
  showListmovie,
  watchMovie,
});

export default allReducers;
