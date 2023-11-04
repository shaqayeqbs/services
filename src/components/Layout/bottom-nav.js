import React from "react";
import { NavLink } from "react-router-dom";
import {
  UilComment,
  UilUser,
  UilEstate,
  UilBookOpen,
  UilCalendarAlt,
} from "@iconscout/react-unicons";

const navigationItems = [
  { to: "/", text: "Home", icon: <UilEstate color="#D4BFBF" size="24" /> },
  {
    to: "/booking",
    text: "Booking",
    icon: <UilBookOpen color="#D4BFBF" size="24" />,
  },
  {
    to: "/calendar",
    text: "Calendar",
    icon: <UilCalendarAlt color="#D4BFBF" size="24" />,
  },
  {
    to: "/inbox",
    text: "Inbox",
    icon: <UilComment color="#D4BFBF" size="24" />,
  },
  {
    to: "/profile",
    text: "Profile",
    icon: <UilUser color="#D4BFBF" size="24" />,
  },
];

const BottomNavigation = () => {
  const navLinkStyles = ({ isActive }) => {
    console.log(isActive, "sssss");
    return {
      background: isActive ? "#7210FF " : "",
      borderRadius: isActive ? "7px" : "",
      padding: isActive ? "2px 5px" : "",
    };
  };

  return (
    <nav className="fixed bottom-0 left-0 right-0 text-[10px] bg-myGray flex justify-around p-3 border-t">
      {navigationItems.map((item, index) => (
        <NavLink key={index} to={item.to} style={navLinkStyles}>
          {item.icon}
          <p className="text-mutedText">{item.text}</p>
        </NavLink>
      ))}
    </nav>
  );
};

export default BottomNavigation;
