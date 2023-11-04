import React, { useState } from "react";
import {
  FaEye,
  FaEyeSlash,
  FaEnvelope,
  FaFacebook,
  FaGoogle,
  FaApple,
  FaArrowLeft,
} from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { toggleLogin } from "../states/auth-slice";
function AuthPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isSignUp, setIsSignUp] = useState(true);

  const navigate = useNavigate();
  const dispatch = useDispatch(); // Get the dispatch function

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleMode = () => {
    setIsSignUp(!isSignUp);
    setEmail("");
    setPassword("");
  };

  const handleGoBack = () => {
    navigate(-1); // Navigate back to the previous page
  };

  const handleSubmitBtn = () => {
    dispatch(toggleLogin());

    navigate("/");
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="max-w-600">
        <div className="text-left mb-2">
          <button
            onClick={handleGoBack}
            className="text-primary opacity-50 text-lg mb-10"
          >
            <FaArrowLeft className="" />
          </button>
        </div>
        <h1 className="text-center mb-10">
          {isSignUp ? "Create Your Account" : "Login to your Account"}
        </h1>
        <form>
          <div className="input-container">
            <FaEnvelope className="input-icon" />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="input-container">
            {showPassword ? (
              <FaEyeSlash
                className="input-icon"
                onClick={togglePasswordVisibility}
              />
            ) : (
              <FaEye
                className="input-icon"
                onClick={togglePasswordVisibility}
              />
            )}
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="custom-checkbox !mt-7 flex justify-center gap-1 ">
            <input type="checkbox" id="rememberMe" className="w-min" />
            <label htmlFor="rememberMe"></label>
            <span className="">remember me</span>
          </div>

          <button type="submit" className="button" onClick={handleSubmitBtn}>
            {isSignUp ? "Sign Up" : "Login"}
          </button>
        </form>
        {!isSignUp && (
          <Link
            to="#"
            className="text-primary text-center inline-block w-full mb-5"
          >
            Forgot password?
          </Link>
        )}
        <div className="flex items-center mt-4">
          <hr className="border-t border-gray-300 flex-grow mr-3" />
          <div className="text-mutedText">or Continue with</div>
          <hr className="border-t border-gray-300 flex-grow ml-3" />
        </div>

        <div className="flex justify-center gap-10 w-full mt-4">
          <FaFacebook size={60} className="social-icon" />
          <FaGoogle size={60} className="social-icon" />
          <FaApple size={60} className="social-icon" />
        </div>

        <p className="text-center mt-4 text-mutedText">
          {isSignUp ? "Already have an account? " : "Don't have an account? "}
          <button
            onClick={toggleMode}
            className=" text-primary underline hover:no-underline"
          >
            {isSignUp ? "Login" : "Sign Up"}
          </button>
        </p>
      </div>
    </div>
  );
}

export default AuthPage;
