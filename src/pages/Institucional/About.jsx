import React from "react";
import SectionArea from "../../components/sectionElements/SectionArea";
import SectionWrapper from "../../components/sectionElements/SectionWrapper";
import SectionHeaderNovo from "../../components/sectionElements/SectionHeaderNovo";
import content from "../../content/content";

function About({ colorMode }) {
  return (
    <SectionArea className={`bg-[#F0E3D1] `}>
      <SectionWrapper>
        <div className="flex flex-col tablet2:flex-row gap-4">
          <div className="flex justify-center items-center">
            <div className="w-full">
              <img
                src={content.texts.about.imagem.img}
                alt={content.texts.about.imagem.alt}
                className="w-[90%] tablet1:w-[95%] tablet2:w-full mx-auto rounded-md"
              />
            </div>
          </div>
          <div className="px-4">
            <SectionHeaderNovo
              colorMode={colorMode}
              title={content.texts.apresentation.title}
              subtitle={content.texts.apresentation.subtitle}
              type="article"
            />
          </div>
        </div>
      </SectionWrapper>
    </SectionArea>
  );
}

export default About;
