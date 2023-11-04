import React from "react";
import { FaBookmark, FaBell } from "react-icons/fa";
import { Link } from "react-router-dom";

function Icons() {
  return (
    <div className="flex gap-4 opacity-50">
      <Link to="my-bookmarks">
        {" "}
        <FaBookmark className="bookmark-icon" />
      </Link>
      <Link to="notification">
        <FaBell className="notification-icon" />
      </Link>
    </div>
  );
}

export default Icons;
