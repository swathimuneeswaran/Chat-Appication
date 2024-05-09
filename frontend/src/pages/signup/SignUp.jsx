import React, { useState } from 'react'
import "./SignUp.css"
import GenderCheckbox from './GenderCheckbox'
import { Link } from 'react-router-dom'
import useSignup from '../../hooks/useSignup.js'

const SignUp = () => {

  const [inputs,setInputs]=useState({
    fullName:"",
    username:"",
    password:"",
    confirmPassword:"",
    gender:""
  })


 const {loading,signup}= useSignup();



  const handleSubmit=async(e)=>{
    e.preventDefault();
    await signup(inputs)
   
  }


  const handleCheckbox = (gender) => {
    setInputs({...inputs,gender});

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
      className='vid'
    >
      <source
        src="https://cdn.pixabay.com/video/2023/10/16/185209-875022131_large.mp4"
        type="video/mp4"
      />
    </video>
    </div>
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto  log">
      <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
        <h1 className=" font-semibold text-center text-gray-300 sign">
          SignUp<br></br>
          <span className="text-orange-500">Chatify</span>
        </h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label className="label p-2">
              <span className="label1">Full Name</span>
            </label>
            <input
              type="text"
              className="input1  input-bordered input"
              placeholder="Jackson"
              value={inputs.fullName}
              onChange={(e) =>setInputs ({...inputs, fullName: e.target.value})}
              style={{
                width: "80%",
                boxShadow: "0px 0px 10px #000",
              }}
            />
          </div>

          <div>
          <label className="label p-2">
                <span className="label1">Username</span>
              </label>
              <input
                type="text"
                className="input1  input-bordered input"
                placeholder="jackson"
                value={inputs.username}
                onChange={(e) =>setInputs ({...inputs, username: e.target.value})}
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
              value={inputs.password}
              onChange={(e) =>setInputs ({...inputs, password: e.target.value})}
              style={{
                width: "80%",
                boxShadow: "0px 0px 10px #000",
              }}
            />
            </div>
            
          <div>
          <label className="label p-2">
            <span className="label1 pass">Confirm Password</span>
          </label>
          <input
              type="password"
              className="input1  input-bordered input"
              placeholder=" Enter Confirm Password"
              value={inputs.confirmPassword}
              onChange={(e) =>setInputs ({...inputs, confirmPassword: e.target.value})}
              style={{
                width: "80%",
                boxShadow: "0px 0px 10px #000",
              }}
            />
            </div>
            <GenderCheckbox  onCheckboxChange={handleCheckbox} selectedGender={inputs.gender}/>
            <Link to="/login" className="text-sm hover:underline hover:text-blue-600 mt-2 inline-block acc" style={{color:"black",fontWeight:"600"}}>
             Already have an account?
            </Link>
            <div>
              <button className="btn mt-2 but" disabled={loading}>
                {loading ? <span className="loading loading-spinner"></span>:"Sign Up"}
              </button>
            </div>
            <br></br>
            <br></br>
        </form>
      </div>
    </div>
    </div>
  </>
  )
}

export default SignUp