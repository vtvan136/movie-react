import React from "react";
import { UserAuth } from "../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";
const Nav = () => {
  const { user, logOut } = UserAuth();
  const navigate = useNavigate();
  const handle_logout = async () => {
    try {
      await logOut();
      navigate("/movie-react");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={nav_style.nav}>
      <Link to="/movie-react">
        <h1 className={nav_style.nav__logo}>NETFLIX</h1>
      </Link>
      {user?.email ? (
        <div>
          <Link to="/account">
            <button className={nav_style.name__use}>
              {user.email.slice(0, 3)}
            </button>
          </Link>
          <button onClick={handle_logout} className={nav_style.button}>
            Log Out
          </button>
        </div>
      ) : (
        <div>
          <Link to="/login">
            <button className={nav_style.button__signin}>Sign In</button>
          </Link>
          <Link to="/signup">
            <button className={nav_style.button}>Sign Up</button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Nav;

const nav_style = {
  button__signin: "text-white pr-4",
  name__use: "text-white mr-4 bg-sky-500 px-3 py-2 rounded",
  nav__logo: "text-red-600 text-4xl font-bold cursor-pointer",
  button: "bg-red-600 px-6 py-2 rounded cursor-pointer text-white",
  nav: "p-4 z-[99] w-full absolute flex items-center bg-black/60 justify-between",
};