import React from "react";
import { Link } from "react-router-dom";
import ServiceList from "../our-services/service-list";

function MostPopularServices() {
  return (
    <>
      <div className="flex font-bold justify-between my-4">
        <h2 className="">Most Popular Services</h2>
        <Link to="/most-popular-services" className="text-primary">
          See All
        </Link>
      </div>
      <ServiceList />
    </>
  );
}

export default MostPopularServices;
