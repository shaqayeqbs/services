import React, { useState } from "react";

import BackButton from "../../@core/utils/back-button";

const SpecialOfferList = () => {
  const images = [
    "/assets/offer.png",
    "/assets/offer1.png",
    "/assets/offer2.png",
    "/assets/offer3.png",
    "/assets/offer.png",
    "/assets/offer1.png",
    "/assets/offer2.png",
    "/assets/offer3.png",
    "/assets/offer.png",
    "/assets/offer1.png",
    "/assets/offer2.png",
    "/assets/offer3.png",
  ];
  const [loadedImages, setLoadedImages] = useState([]);

  const handleImageLoad = (index) => {
    if (!loadedImages.includes(index)) {
      setLoadedImages([...loadedImages, index]);
    }
  };

  return (
    <div className="p-4">
      <BackButton title="Special Offers" />
      <ul className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {images.map((image, index) => (
          <li key={index} className="relative">
            {/* {loadedImages.includes(index) ? ( */}
            <img
              src={image}
              alt={`Offer ${index}`}
              // onLoad={() => handleImageLoad(index)}
              className="w-full"
            />
            {/* ) : (
              <div className="w-full h-48 flex justify-center items-center bg-gray-200">
                Loading...
              </div>
            )} */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SpecialOfferList;
