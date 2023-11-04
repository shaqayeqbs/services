import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addBookmark, removeBookmark } from "../states/book-marks-slice";
import { UilBookmark } from "@iconscout/react-unicons";
const ServiceItem = ({ service }) => {
  const { image, name, title, price, rating, views } = service;

  const dispatch = useDispatch();
  const bookmarks = useSelector((state) => state.bookmark.bookmarks);
  console.log(bookmarks, "nnnnnn");
  const isBookmarked = bookmarks?.some((bookmark) => bookmark.name === name);
  console.log(isBookmarked);
  const toggleBookmark = () => {
    console.log("object");
    if (isBookmarked) {
      dispatch(removeBookmark(service));
      console.log("done");
    } else {
      dispatch(addBookmark(service));
    }
  };
  console.log(bookmarks);

  return (
    <div className="flex items-center px-2 border py-2 rounded-2xl">
      <img
        src={image}
        alt={name}
        className="w-[82px] h-[82px] rounded-lg mr-4"
      />
      <div>
        <h3 className="text-sm font-semibold text-textColor">{name}</h3>
        <p className="text-xl font-semibold">{title}</p>
        <p className="text-primary font-semibold">${price}</p>
        <div className="flex items-center text-sm">
          <div className="flex text-mutedText items-center mr-2">
            <span className="ml-1 text-mutedText">{rating}</span>
          </div>
          <p className="mr-2 text-mutedText">|</p>
          <p className="text-mutedText">{views} views</p>
        </div>
      </div>
      <button
        onClick={toggleBookmark}
        className="text-lg ml-auto cursor-pointer"
      >
        {isBookmarked ? (
          <UilBookmark color="rgb(114,16,255)" className="!text-primary" />
        ) : (
          <UilBookmark />
        )}
      </button>
    </div>
  );
};

export default ServiceItem;
