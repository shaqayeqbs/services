import React, { useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import {
  FaBroom,
  FaWrench,
  FaPaintBrush,
  FaTshirt,
  FaToolbox,
  FaTruckMoving,
  FaEllipsisH,
} from "react-icons/fa";
const OurCategories = () => {
  const services = [
    { name: "Cleaning", icon: <FaBroom /> },
    { name: "Repairing", icon: <FaWrench /> },
    { name: "Painting", icon: <FaPaintBrush /> },
    { name: "Laundry", icon: <FaTshirt /> },
    { name: "Appliance", icon: <FaToolbox /> },
    { name: "Plumbing", icon: <FaWrench /> },
    { name: "Shifting", icon: <FaTruckMoving /> },
    { name: "More", icon: <FaEllipsisH /> },
    { name: "Cleaning", icon: <FaBroom /> },
    { name: "Repairing", icon: <FaWrench /> },
    { name: "Painting", icon: <FaPaintBrush /> },
    { name: "Laundry", icon: <FaTshirt /> },
    { name: "Appliance", icon: <FaToolbox /> },
    { name: "Plumbing", icon: <FaWrench /> },
    { name: "Shifting", icon: <FaTruckMoving /> },
    { name: "Shifting", icon: <FaTruckMoving /> },
    { name: "More", icon: <FaEllipsisH /> },
  ];

  // Define background colors with 50% opacity
  const backgroundColors = [
    "rgba(209, 16, 255, 0.5)",
    "rgba(255, 191, 16, 0.5)",
    "rgba(16, 255, 182, 0.5)",
    "rgba(16, 214, 255, 0.5)",
    "rgba(114, 16, 255, 0.5)",
    "rgba(16, 255, 32, 0.5)",
    "rgba(16, 255, 255, 0.5)",
    "rgba(255, 16, 96, 0.5)",
    "rgba(209, 16, 255, 0.5)",
    "rgba(255, 191, 16, 0.5)",
    "rgba(16, 255, 182, 0.5)",
    "rgba(16, 214, 255, 0.5)",
    "rgba(114, 16, 255, 0.5)",
    "rgba(16, 255, 32, 0.5)",
    "rgba(16, 255, 255, 0.5)",
    "rgba(255, 16, 96, 0.5)",
    "rgba(255, 16, 96, 0.5)",
  ];

  return (
    <div className="p-3">
      <button
        onClick={() => window.history.back()}
        className="flex my-5 items-center gap-4 text-md"
      >
        <div className="opacity-50">
          {" "}
          <FaArrowLeft />
        </div>
        <h2 className="text-lg font-bold">All Services</h2>
      </button>
      <div className="grid grid-cols-4 sm:grid-cols-4 lg:grid-cols-4 gap-4">
        {services.map((service, index) => (
          <div key={index} className="">
            <div
              className="w-min mx-auto p-4 text-center rounded-full"
              style={{ backgroundColor: backgroundColors[index] }}
            >
              {service.icon}
            </div>

            <p className="text-sm text-center my-2">{service.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurCategories;
