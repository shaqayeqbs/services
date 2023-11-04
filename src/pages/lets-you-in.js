import React, { useState } from "react";
import { FaFacebook, FaGoogle, FaApple, FaEnvelope } from "react-icons/fa";
import { BsFacebook } from "react-icons/bs";
import { Link } from "react-router-dom";

function LetsYouIn() {
  const [rememberMe, setRememberMe] = useState(false);

  const handleRememberMeChange = () => {
    setRememberMe(!rememberMe);
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="max-w-600">
        <img
          src="/assets/lets-you-in.svg"
          alt="Lest You In"
          width="80"
          height="80"
          className="bg-cover w-full pl-10  m-auto max-w-[400px]"
        />
        <h1 className="text-center">Lets you in</h1>
        <div>
          <button className="secondary-button">
            <BsFacebook size={28} className="" />
            <p className="text-left w-full">Continue with Facebook</p>
          </button>
        </div>
        <div>
          <button className="secondary-button">
            <FaGoogle size={24} />
            <p className="text-left w-full">Continue with Google</p>
          </button>
        </div>
        <div>
          <button className="secondary-button">
            <FaApple className="icons" size={28} />
            <p className="text-left w-full">Continue with Apple</p>
          </button>
        </div>
        <div className="flex items-center mt-4">
          <hr className="border-t border-gray-300 flex-grow mr-3" />
          <div className="text-gray-500">or</div>
          <hr className="border-t border-gray-300 flex-grow ml-3" />
        </div>
        <div>
          <Link to="/auth" className="button">
            Sign in with password
          </Link>
        </div>
        <p className="text-center mt-6 text-mutedText">
          Don't have an account?{" "}
          <Link className="text-primary" to="/auth">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
}

export default LetsYouIn;
