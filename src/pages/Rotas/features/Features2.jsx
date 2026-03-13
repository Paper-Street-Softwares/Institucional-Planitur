import React from "react";
import SectionArea from "../../../components/sectionElements/SectionArea";
import SectionHeaderNovo from "../../../components/sectionElements/SectionHeaderNovo";
import { ScrollMouse } from "../../../components/animation/MouseScroll";
import TeamMember from "../../../components/cards/TeamMember";
import content from "../../../content/content";
import MotionDivDownToUp from "../../../components/animation/MotionDivDownToUp";

function Features2({ colorMode }) {
  return (
    <div id="formativoeducacional">
      <section className="relative min-h-[500px] h-[47vh] max-h-[405px]  flex flex-col items-center justify-center overflow-hidden w-full">
        <div className="absolute inset-0 z-0">
          <img
            src={content.texts.features.cards.card2.imgFeatures2}
            alt="Cityscape"
            className="w-full h-full object-cover"
          />
          {/* <div className="absolute inset-0 bg-[#0f2a3a]/40 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0f2a3a] via-transparent to-transparent" /> */}
        </div>

        <MotionDivDownToUp className="z-10 w-full flex justify-center absolute bottom-10">
          <div>
            <ScrollMouse />
          </div>
        </MotionDivDownToUp>
      </section>

      <SectionArea paddingbot={false}>
        <SectionHeaderNovo
          colorMode={colorMode}
          title={content.texts.features.cards.card2.title}
          className="mb-4"
        />

        <MotionDivDownToUp>
          <div className="w-full">
            <p className="text-corOutrosTextosPreto/80 mx-auto w-[90%] text-justify max-w-[800px] mb-24 font-mainFont">
              {content.texts.features.cards.card2.description}
            </p>
          </div>
        </MotionDivDownToUp>
      </SectionArea>
    </div>
  );
}

export default Features2;
