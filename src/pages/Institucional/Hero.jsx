import React from "react";
import SectionArea from "../../components/sectionElements/SectionArea";
import SectionWrapper from "../../components/sectionElements/SectionWrapper";
import { motion } from "framer-motion";
import { Button } from "@mui/material";
import { ScrollMouse } from "../../components/animation/MouseScroll";

function Hero() {
  return (
    <SectionArea className={``} paddingTopAndBottom={false}>
      <section
        id="/"
        className="relative h-[65vh] phone2:h-[80vh] phone3:h-[90vh] tablet1:h-[47vh] desktop1:h-[60vh] flex flex-col items-center justify-center overflow-hidden w-full"
      >
        <div className="absolute inset-0 z-0">
          {" "}
          <img
            src="https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?ixlib=rb-4.0.3&auto=format&fit=crop&w=2072&q=80"
            alt="Cityscape"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#0f2a3a]/40 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0f2a3a] via-transparent to-transparent" />
        </div>

        <div className="container relative z-10 px-4 md:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="w-fit mx-auto text-[29px] desktop2:text-[50px] font-mainFont font-light text-[#ECDDC6] leading-8 desktop1:leading-[60px] drop-shadow-lg">
              ADVOCACIA
              <br />
              FOCADA NO
              <br />
              SEU NEGÓCIO
            </h1>
          </motion.div>
        </div>
        <div className="z-10 w-full flex justify-center absolute bottom-0 tablet2:bottom-10">
          {" "}
          <ScrollMouse />
        </div>
      </section>
    </SectionArea>
  );
}

export default Hero;
