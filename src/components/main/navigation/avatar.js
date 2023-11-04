import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { UilUser } from "@iconscout/react-unicons";
function Avatar() {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  return (
    <div className="flex items-center">
      {isLoggedIn ? (
        <Link to="/profile" className="flex gap-2 items-center">
          <img
            src="/assets/profile.jpg" // Replace with the actual path to the user's profile picture
            alt="User"
            className="w-10 h-10 rounded-full cursor-pointer"
          />
          <div>
            {" "}
            <p className="text-mutedText text-[10px]">Good morning</p>
            <p>name</p>
          </div>
        </Link>
      ) : (
        <Link to="/lets-you-in">
          <UilUser size="24" color="gray" className="cursor-pointer" />
          {/* <p className="text-mutedText text-[10px]">Good morning</p> */}
        </Link>
      )}
    </div>
  );
}

export default Avatar;
