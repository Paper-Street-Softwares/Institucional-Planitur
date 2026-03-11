import { Outlet } from "react-router-dom";
import Navbar from "../../Institucional/Navbar";
import Footer from "../../Institucional/Footer";

function RoutesFeatures({ colorMode }) {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}

export default RoutesFeatures;
