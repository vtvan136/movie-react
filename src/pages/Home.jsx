import React from "react";
import Items from "../components/Items";
import List from "../components/List";
import Main from "../components/Main";
import Row from "../components/Row";
import SaveMovie from "../components/SaveMovie";
import { UserAuth } from "../context/AuthContext";
import requests from "../Requests";

const Home = () => {
  const {user} = UserAuth()
  return (
    <>
      <List />
      <Items />
      <Main />
      <Row title="UpComing" rowID="1" fetchURL={requests.requestUpcoming} />
      <Row title="Trending" rowID="2" fetchURL={requests.requestTrending} />
      <Row title="Top Rating" rowID="3" fetchURL={requests.requestTopRated} />
      <Row title="Popular" rowID="4" fetchURL={requests.requestPopular} />
      <Row title="Horror" rowID="5" fetchURL={requests.requestHorror} />
      {user?.email ? (<SaveMovie title="Saved Movie" rowID="6"/>):(<div></div>)}
      
    </>
  );
};

export default Home;
