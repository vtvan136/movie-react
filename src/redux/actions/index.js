import { createActions, createAction } from 'redux-actions';

export const getType = (reduxAction) => {
  return reduxAction().type;
};
export const createFilm = createActions({
  createFilmRequest: (payload) => payload,
  createFilmSuccess: (payload) => payload,
  createFilmFailure: (err) => err,
});
export const show_list = createAction("SHOW_LIST_MOVIE");
export const watch_movie = createAction("WATCH_MOVIE");
