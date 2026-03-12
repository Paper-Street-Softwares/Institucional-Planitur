import React from "react";
import SectionArea from "../../components/sectionElements/SectionArea";
import SectionWrapper from "../../components/sectionElements/SectionWrapper";
import { motion } from "framer-motion";
import { Button } from "@mui/material";
import { ScrollMouse } from "../../components/animation/MouseScroll";
import content from "../../content/content";

function Hero() {
  return (
    <SectionArea className={``} paddingTopAndBottom={false}>
      <section
        id="/"
        className="relative min-h-[500px] h-[65vh] max-h-[750px] flex flex-col items-center justify-center overflow-hidden w-full"
      >
        <div className="absolute inset-0 z-0">
          {" "}
          <img
            src={content.texts.hero.heroBg}
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
            <h1 className="w-fit mx-auto text-[29px] desktop2:text-[50px] font-mainFont font-light text-[#ECDDC6] leading-8 desktop2:leading-[44px] drop-shadow-lg">
              {content.texts.hero.FirstPart}
              <br />
              {content.texts.hero.Destaque}
              <br />
              {content.texts.hero.SecondPart}
            </h1>
          </motion.div>
        </div>
        <div className="z-10 w-full flex justify-center absolute bottom-10">
          {" "}
          <ScrollMouse />
        </div>
      </section>
    </SectionArea>
  );
}

export default Hero;
