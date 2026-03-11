import { Outlet } from "react-router-dom";
import Navbar from "../../Institucional/Navbar";
import Footer from "../../Institucional/Footer";
import Contato from "./ConteudoContato";

function RouteContato({ colorMode }) {
  return (
    <>
      <Navbar />
      <Contato />
      <Footer />
    </>
  );
}

export default RouteContato;
