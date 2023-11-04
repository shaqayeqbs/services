import React from "react";
import BackButton from "../@core/utils/back-button";
import ServiceList from "../components/our-services/service-list";

function MostPopularServices() {
  return (
    <>
      <BackButton title="Most Popular Services" />
      <ServiceList />
    </>
  );
}

export default MostPopularServices;
