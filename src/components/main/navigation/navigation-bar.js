import React from "react";
import Profile from "./avatar";
import Icons from "./icons";

function NavigationBar() {
  return (
    <header className="flex items-center justify-between w-full pt-6">
      <Profile />
      <Icons />
    </header>
  );
}

export default NavigationBar;
