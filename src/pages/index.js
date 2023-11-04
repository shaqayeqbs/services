import React from "react";
import NavigationBar from "../components/main/navigation/navigation-bar";
import SearchBox from "../components/main/search-box";
import SpecialOffers from "../components/main/special-offers";

import Services from "../components/main/services";
import MostPopularServices from "../components/main/most-popular-services";

function Dashboard() {
  return (
    <>
      <NavigationBar />
      <SearchBox />
      <SpecialOffers />
      <Services />
      <MostPopularServices />
    </>
  );
}

export default Dashboard;
