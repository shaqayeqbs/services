import React from "react";
import RoutesList from "./routes";
import "react-toastify/dist/ReactToastify.css";
import { Provider } from "react-redux";
import ErrorBoundary from "./@core/errors/error-boundary";
import { ToastContainer } from "react-toastify";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import store from "./components/states/store.js";
function App() {
  return (
    // <ErrorBoundary>
    <Provider store={store}>
      <ToastContainer
        position="top-right"
        theme="colored"
        autoClose={4000}
        rtl={true}
        limit={2}
      />
      <RoutesList />
    </Provider>
    // </ErrorBoundary>
  );
}

export default App;
