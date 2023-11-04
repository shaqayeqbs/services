import React from "react";
import { FaArrowLeft } from "react-icons/fa";
function BackButton({ title }) {
  return (
    <button
      onClick={() => window.history.back()}
      className="flex my-5 items-center gap-4 text-md"
    >
      <div className="opacity-50">
        {" "}
        <FaArrowLeft />
      </div>
      <h2 className="text-lg font-bold">{title}</h2>
    </button>
  );
}

export default BackButton;
