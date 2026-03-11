import React from "react";
import SectionArea from "../../components/sectionElements/SectionArea";
import SectionHeaderNovo from "../../components/sectionElements/SectionHeaderNovo";
import content from "../../content/content";

function About({ colorMode }) {
  return (
    <SectionArea className={`bg-[#F0E3D1] `} paddingTopAndBottom={false}>
      <div className="flex flex-col tablet2:flex-row">
        {" "}
        <div className="flex justify-center items-center  desktop1:pl-4">
          <div className="bg-primaryDark w-full tablet2:w-[384px] py-2 my-[70px] max-h-64 desktop1:h-52 desktop3:h-72 desktop1:w-[512px] desktop3:w-[720px] flex justify-center items-center desktop3:justify-end desktop3:pr-10">
            <div className="w-[50%] phone3:w-[70%] tablet1:w-[75%] tablet2:w-[244px] desktop1:w-[80%] desktop3:w-[50%]">
              <img
                src={content.texts.about.imagem.img}
                alt={content.texts.about.imagem.alt}
                className="w-full"
              />
            </div>
          </div>
        </div>
        <div className="p-[70px]">
          <SectionHeaderNovo
            colorMode={colorMode}
            title={content.texts.about.FirstPart}
            subtitle={content.texts.about.paragraph}
            type="article"
          />
        </div>
      </div>
    </SectionArea>
  );
}

export default About;
