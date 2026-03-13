import React from "react";
import SectionArea from "../sectionElements/SectionArea";
import SectionWrapper from "../sectionElements/SectionWrapper";
import SectionHeaderNovo from "../sectionElements/SectionHeaderNovo";
import content from "../../content/content";
import MotionDivDownToUp from "../animation/MotionDivDownToUp";

function Mapa({ colorMode }) {
  return (
    <SectionArea>
      <SectionHeaderNovo
        colorMode={colorMode}
        miniTitle={content.texts.maps.minitag}
        title={content.texts.maps.title}
        subtitle={content.texts.maps.subtitle}
      />
      <SectionWrapper>
        <MotionDivDownToUp className="w-[90%]">
          <div>
            <iframe
              src="https://www.google.com/maps/d/embed?mid=1Dww8t0DOx1bY-AyFUx5MU6tw5TsxcCA&ehbc=2E312F"
              width="100%"
              height=""
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Mapa do local da empresa"
              className="h-[350px] desktop1:h-[420px] rounded-md"
            ></iframe>
          </div>
        </MotionDivDownToUp>
      </SectionWrapper>
    </SectionArea>
  );
}

export default Mapa;
