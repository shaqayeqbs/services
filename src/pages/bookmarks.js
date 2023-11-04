import React from "react";
import { useSelector } from "react-redux";
import ServiceItem from "../components/our-services/service-item";
import BackButton from "../@core/utils/back-button";

const BookmarkPage = () => {
  const bookmarks = useSelector((state) => state.bookmark?.bookmarks);

  return (
    <div>
      <BackButton title="My Bookmarks" />
      {bookmarks.length > 0 ? (
        bookmarks.map((service, index) => (
          <ServiceItem key={index} service={service} />
        ))
      ) : (
        <p>No bookmarked services yet.</p>
      )}
    </div>
  );
};

export default BookmarkPage;
