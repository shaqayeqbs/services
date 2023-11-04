import React, { useEffect } from "react";
import {
  UilUser,
  UilSetting,
  UilBell,
  UilShield,
  UilEnglishToChinese,
  UilMoon,
  UilLock,
  UilUserPlus,
  UilSignout,
  UilQuestionCircle,
} from "@iconscout/react-unicons";
import BackButton from "../../@core/utils/back-button";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toggleLogin } from "../states/auth-slice";

function ProfilePage() {
  const navigate = useNavigate();
  const dispatch = useDispatch(); // Get the dispatch function
  const isLogged = useSelector((state) => state.auth.isLoggedIn);

  useEffect(() => {
    if (!isLogged) {
      navigate("/lets-you-in");
    }
  }, [isLogged, navigate]);

  const profileOptions = [
    {
      icon: <UilUser size="24" />,
      label: "Edit Profile",
      onClick: () => handleOptionClick("Edit Profile"),
    },
    {
      icon: <UilSetting size="24" />,
      label: "Settings",
      onClick: () => handleOptionClick("Settings"),
    },
    {
      icon: <UilBell size="24" />,
      label: "Notifications",
      onClick: () => handleOptionClick("Notifications"),
    },
    {
      icon: <UilShield size="24" />,
      label: "Payment & Security",
      onClick: () => handleOptionClick("Payment & Security"),
    },
    {
      icon: <UilEnglishToChinese size="24" />,
      label: "Language",
      onClick: () => handleOptionClick("Language"),
    },
    {
      icon: <UilMoon size="24" />,
      label: "Dark Mode",
      onClick: () => handleOptionClick("Dark Mode"),
    },
    {
      icon: <UilLock size="24" />,
      label: "Privacy Policy",
      onClick: () => handleOptionClick("Privacy Policy"),
    },
    {
      icon: <UilUserPlus size="24" />,
      label: "Invite Friends",
      onClick: () => handleOptionClick("Invite Friends"),
    },
    {
      icon: <UilSignout size="24" />,
      label: "Logout",
      onClick: () => {
        dispatch(toggleLogin());

        navigate("/");
      },
    },
    {
      icon: <UilQuestionCircle size="24" />,
      label: "Help Center",
      onClick: () => handleOptionClick("Help Center"),
    },
  ];

  const handleOptionClick = (optionLabel) => {
    console.log(`Clicked on: ${optionLabel}`);
  };

  return (
    <div className="p-4 my-10 ">
      <BackButton title="Profile" />
      <div className="flex items-center space-x-4 mb-4">
        <img
          src="/assets/profile.jpg"
          alt="User"
          className="w-28 h-28 rounded-full mx-auto "
        />
      </div>
      <div className="text-center border-b-2 pb-4 mb-4">
        <h2 className="text-xl font-bold">Your Name</h2>
      </div>
      <div className="space-y-4">
        {profileOptions.map((option, index) => (
          <button
            key={index}
            className="flex items-center space-x-4"
            onClick={option.onClick}
          >
            {option.icon}
            <p>{option.label}</p>
          </button>
        ))}
      </div>
    </div>
  );
}

export default ProfilePage;
