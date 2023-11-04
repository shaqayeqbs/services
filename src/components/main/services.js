import React from "react";
import { Link } from "react-router-dom";
import {
  FaBroom,
  FaWrench,
  FaPaintBrush,
  FaTshirt,
  FaToolbox,
  FaTruckMoving,
  FaEllipsisH,
} from "react-icons/fa";

function Services() {
  const services = [
    { name: "Cleaning", icon: <FaBroom /> },
    { name: "Repairing", icon: <FaWrench /> },
    { name: "Painting", icon: <FaPaintBrush /> },
    { name: "Laundry", icon: <FaTshirt /> },
    { name: "Appliance", icon: <FaToolbox /> },
    { name: "Plumbing", icon: <FaWrench /> },
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
  ];

  const displayedServices = services.slice(0, 8);

  return (
    <>
      <div className="flex font-bold justify-between my-4">
        <h2 className="">Services</h2>
        <Link to="/our-services" className="text-primary">
          See All
        </Link>
      </div>
      <div className="p-">
        <div className="grid grid-cols-4 sm:grid-cols-4 lg:grid-cols-4 gap-4">
          {displayedServices.map((service, index) => (
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
    </>
  );
}

export default Services;
