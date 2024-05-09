import React, { useState } from "react";
import "./Login.css";
import {Link} from  "react-router-dom"
import useLogin from "../../hooks/useLogin";

const Login = () => {
  const [username,setUsername]=useState("");
  const [password,setPassword]=useState("");
const {loading,login}= useLogin()
  const handleSubmit=async(e)=>{
    e.preventDefault();
    await login(username,password);
  }
  return (
    <>
    <div className="contain">
     <div className="image1">
      <video
        autoPlay
        loop
        muted
        playsInline
       
        className="video"
      >
        <source
          src="https://cdn.pixabay.com/video/2023/08/05/174647-852025116_large.mp4"
          type="video/mp4"
        />
      </video>
      </div>
      <div className="flex flex-col items-center justify-center min-w-96 mx-auto  log">
        <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
          <h1 className=" font-semibold text-center text-gray-300">
            Login<br></br>
            <span className="text-orange-500">Chatify</span>
          </h1>
          <form onSubmit={handleSubmit}>
            <div>
              <label className="label p-2">
                <span className="label1">Username</span>
              </label>
              <input
                type="text"
                className="input1  input-bordered input"
                placeholder="Enter Username"
                value={username}
                onChange={(e) =>setUsername ( e.target.value)}
                style={{
                  width: "80%",
                  boxShadow: "0px 0px 10px #000",
                }}
              />
            </div>

            <div>
              <label className="label p-2">
                <span className="label1 pass">Password</span>
              </label>
              <input
                type="password"
                className="input1  input-bordered input"
                placeholder="Enter Password"
                value={password}
                onChange={(e) =>setPassword ( e.target.value)}
                style={{
                  width: "80%",
                  boxShadow: "0px 0px 10px #000",
                }}
              />
            </div>
            <Link
              to="/signup"
              className="text-sm hover:underline hover:text-blue-600 mt-2 inline-block acc"
            >
              {"Don't"} have an account?
            </Link>
            <div>
              <button className="btn mt-2 but" disabled={loading}>
              {loading ? <span className="loading loading-spinner"></span>:"Login"}
              </button>
            </div>
            <br></br>
            <br></br>
          </form>
        </div>
      </div>
      </div>
      
    </>
  );
};

export default Login;
