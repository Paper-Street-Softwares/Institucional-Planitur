import React from "react";
import SectionArea from "../../components/sectionElements/SectionArea";
import SectionHeaderNovo from "../../components/sectionElements/SectionHeaderNovo";
import content from "../../content/content";
import SectionWrapper from "../../components/sectionElements/SectionWrapper";

function Apresentation({ colorMode }) {
  return (
    <SectionArea className={`bg-white`}>
      <SectionWrapper>
        <div className="flex flex-col tablet2:flex-row items-center gap-6 tablet2:gap-4 desktop2:gap-10 desktop1:justify-between">
          <div className="flex justify-center items-center desktop1:pl-4 w-fit">
            <div className="">
              <img
                src={content.texts.apresentation.img}
                alt=""
                className="w-fit mx-auto"
              />
            </div>
          </div>
          <div className="w-full">
            <SectionHeaderNovo
              colorMode={colorMode}
              title={content.texts.apresentation.title}
              subtitle={content.texts.apresentation.text}
              type="article"
            />
          </div>
        </div>
      </SectionWrapper>
    </SectionArea>
  );
}

export default Apresentation;
