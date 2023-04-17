import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const {  logIn } = UserAuth();
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await logIn(email, password);
      navigate("/movie-react");
    } catch (error) {
      alert(error);
    }
  };
  const style={
    auth :"w-full h-screen",
    img:"hidden  sm:block absolute w-full h-full object-cover",
    filter: "bg-black/60 fixed top-0 left-0 w-full h-screen",
    content:"fixed w-full px-4 py-24 z-50"
  }
  return (
      <div className={style.auth}>
        <img
          className={style.img}
          src="https://assets.nflxext.com/ffe/siteui/vlv3/908077b4-cf0a-43c3-b2c9-435fb990299b/2e21f5ae-4f34-47da-80fb-bf55bc06a297/VN-en-20220829-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="/"
        />
        <div className={style.filter}></div>
        <div className={style.content}>
          <div className=" max-w-[450px] h-[600px] mx-auto rounded-md bg-black/60 text-white">
            <div className="max-w-[320px] mx-auto py-16">
              <h1 className="text-3xl font-bold">Sign In</h1>
              <form
                onSubmit={handleSubmit}
                className="w-full flex flex-col py-4"
              >
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  className="p-3 my-2 bg-gray-200 placeholder:text-gray-600 text-gray-900 rounded"
                  type="email"
                  placeholder="Email"
                  autoComplete="email"
                />
                <input
                  onChange={(e) => setPassword(e.target.value)}
                  className="p-3 my-2 bg-gray-200 placeholder:text-gray-600 text-gray-900 rounded"
                  type="password"
                  placeholder="Password"
                  autoComplete="current-password"
                />
                <button className="bg-red-700 py-3 mt-6 my-2 rounded font-bold">
                  Sign In
                </button>
              </form>
              <div className="flex justify-between items-center text-gray-600">
                <p>
                  <input className="mr-2" type="checkbox" />
                  Remember
                </p>
                <p>Need Helps</p>
              </div>
              <div>
                <p className="py-4">
                  <span className="text-gray-600">
                    Already subscribed to Netflix?
                  </span>{" "}
                  <Link to="/login">Sign up now.</Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
};

export default Login;
