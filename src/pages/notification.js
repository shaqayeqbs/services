import React from "react";
import BackButton from "../@core/utils/back-button";

const notificationsData = [
  {
    date: "Today",
    items: [
      {
        image: "/assets/profile.jpg",
        title: "Payment Successful!",
        description: "You have made a service payment.",
      },
      {
        image: "/assets/profile.jpg",
        title: "New category services!",
        description: "The plumbing service is available.",
      },
    ],
  },
  {
    date: "Yesterday",
    items: [
      {
        image: "/assets/profile.jpg",
        title: "Special offers!",
        description: "You get Special promo today.",
      },
    ],
  },
  {
    date: "December 22, 2021",
    items: [
      {
        image: "/assets/profile.jpg",
        title: "Credit card connected!",
        description: "Credit card has been linked!",
      },
      {
        image: "/assets/profile.jpg",
        title: "Account setup successful!",
        description: "Your account has been created.",
      },
    ],
  },
];

const NotificationPage = () => {
  return (
    <div className="p-4 my-10">
      <BackButton title="Notifications" />
      {notificationsData.map((dateSection, index) => (
        <div key={index} className="mt-4">
          <h2 className="text-lg font-semibold">{dateSection.date}</h2>
          {dateSection.items.map((item, itemIndex) => (
            <div
              key={itemIndex}
              className="flex items-center rounded-xl p-4 border-1 border-mutedText/30 shaow-md space-x-4 my-2"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-16 h-16 rounded-full"
              />
              <div>
                <h3 className="text-md font-semibold">{item.title}</h3>
                <p className="text-mutedText">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default NotificationPage;
