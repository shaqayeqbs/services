import { Outlet } from "react-router-dom";

import BottomNavigation from "./bottom-nav";

function Layout() {
  return (
    <>
      <main>
        <Outlet />
      </main>
      <BottomNavigation />
    </>
  );
}

export default Layout;
