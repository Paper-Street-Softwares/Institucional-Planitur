import React from "react";
import Navbar from "../../Institucional/Navbar";
import ConteudoAbout from "./ConteudoAbout";
import Footer from "../../Institucional/Footer";

function RouteAbout({ colorMode }) {
  return (
    <div>
      <Navbar />
      <ConteudoAbout colorMode={colorMode} />
      <Footer />
    </div>
  );
}

export default RouteAbout;
