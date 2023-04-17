import { getType, watch_movie } from "../actions";
const watchMovie = (state = { item: {}, id: "" }, action) => {
  switch (action.type) {
    case getType(watch_movie):
      return { item: action.payload.Item, id: action.payload.Id };
    default:
      return state;
  }
};

export default watchMovie;
