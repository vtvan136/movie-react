
  const watchMovie = (state = {item:{}, id:""}, action) => {
    
    switch (action.type) {
      case "WATCH_MOVIE":
        return { item: action.payload.Item ,id: action.payload.Id};
      default:
        return state;
    }
  };
  
  export default watchMovie;
  