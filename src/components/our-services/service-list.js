import React, { useState } from "react";
import {
  FaBroom,
  FaWrench,
  FaPaintBrush,
  FaTshirt,
  FaToolbox,
  FaTruckMoving,
  FaEllipsisH,
} from "react-icons/fa";
import ServiceItem from "./service-item";

const categories = [
  { name: "All", icon: <FaEllipsisH /> },
  { name: "Cleaning", icon: <FaBroom /> },
  { name: "Repairing", icon: <FaWrench /> },
  { name: "Painting", icon: <FaPaintBrush /> },
  { name: "Laundry", icon: <FaTshirt /> },
  { name: "Appliance", icon: <FaToolbox /> },
  { name: "Plumbing", icon: <FaWrench /> },
  { name: "Shifting", icon: <FaTruckMoving /> },
];

const services = [
  {
    name: "Service 1",
    category: "Cleaning",
    price: 25,
    title: "House Cleaning",
    rating: 4.8,
    views: 8560,
    image: "/assets/work.png",
  },
  {
    name: "Service 2",
    category: "Repairing",
    price: 30,
    title: "Appliance Repair",
    rating: 4.9,
    views: 6000,
    image: "/assets/work1.png",
  },
  {
    name: "Service 3",
    category: "Painting",
    price: 35,
    title: "Interior Painting",
    rating: 4.7,
    views: 7200,
    image: "/assets/work.png",
  },
  {
    name: "Service 4",
    category: "Cleaning",
    price: 28,
    title: "Carpet Cleaning",
    rating: 4.6,
    views: 9000,
    image: "/assets/work.png",
  },
  {
    name: "Service 5",
    category: "Laundry",
    price: 18,
    title: "Laundry Service",
    rating: 4.5,
    views: 5000,
    image: "/assets/work1.png",
  },
  {
    name: "Service 6",
    category: "Repairing",
    price: 32,
    title: "Electrical Repair",
    rating: 4.8,
    views: 8900,
    image: "/assets/work.png",
  },
  {
    name: "Service 7",
    category: "Painting",
    price: 38,
    title: "Exterior Painting",
    rating: 4.6,
    views: 7800,
    image: "/assets/work.png",
  },
  {
    name: "Service 8",
    category: "Laundry",
    price: 20,
    title: "Dry Cleaning",
    rating: 4.9,
    views: 6500,
    image: "/assets/work.png",
  },
  {
    name: "Service 9",
    category: "Appliance",
    price: 29,
    title: "Appliance Installation",
    rating: 4.7,
    views: 8400,
    image: "/assets/work.png",
  },
  {
    name: "Service 10",
    category: "Plumbing",
    price: 27,
    title: "Plumbing Services",
    rating: 4.8,
    views: 8800,
    image: "/assets/work.png",
  },
  {
    name: "Service 11",
    category: "Shifting",
    price: 40,
    title: "House Shifting",
    rating: 4.9,
    views: 6200,
    image: "/assets/work.png",
  },
  {
    name: "Service 12",
    category: "Appliance",
    price: 26,
    title: "Appliance Repair",
    rating: 4.7,
    views: 7200,
    image: "/assets/work.png",
  },
];

const ServiceList = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const filteredServices =
    selectedCategory === "All"
      ? services
      : services.filter((service) => service.category === selectedCategory);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div>
      <div className="flex overflow-x-scroll my-5 mb-8  no-scrollbar">
        {categories.map((category, index) => (
          <div
            key={index}
            onClick={() => handleCategoryClick(category.name)}
            className={`cursor-pointer  hover:bg-gray-200 rounded-2xl mx-2 ${
              category.name === selectedCategory ? "bg-primary" : ""
            }`}
          >
            <p
              className={`cursor-pointer p-1 px-3 text-[13px] hover:bg-gray-200 rounded-2xl ${
                category.name === selectedCategory
                  ? "bg-primary !text-[white] "
                  : " border-primary border-2 "
              }`}
            >
              {category.name}
            </p>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {filteredServices.map((service, index) => (
          <ServiceItem key={index} service={service} />
        ))}
      </div>
    </div>
  );
};

export default ServiceList;
