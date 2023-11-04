import React from "react";
import { Route, Routes } from "react-router-dom";
import NotFound from "./pages/not-found";
import LetsYouIn from "./pages/lets-you-in";
import AuthPage from "./pages/auth";
import Dashboard from "./pages/index";
import SpecialOfferList from "./components/special-offers";
import OurServices from "./components/our-services/categories";
import MostPopularServices from "./pages/most-popular-services";
import BookmarkPage from "./pages/bookmarks";
import Profile from "./components/profile/index";
import NotificationPage from "./pages/notification";

import Layout from "./components/Layout";

const RoutesList = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Dashboard />} exact />
        <Route path="profile" element={<Profile />} />
      </Route>

      <Route path="lets-you-in" element={<LetsYouIn />} />
      <Route path="auth" element={<AuthPage />} />
      <Route path="special-offers" element={<SpecialOfferList />} />
      <Route path="our-services" element={<OurServices />} />
      <Route path="most-popular-services" element={<MostPopularServices />} />
      <Route path="my-bookmarks" element={<BookmarkPage />} />
      <Route path="profile" element={<Profile />} />
      <Route path="notification" element={<NotificationPage />} />

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default RoutesList;
