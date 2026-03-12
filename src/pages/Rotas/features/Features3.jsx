import React from "react";
import SectionArea from "../../../components/sectionElements/SectionArea";
import SectionHeaderNovo from "../../../components/sectionElements/SectionHeaderNovo";
import { ScrollMouse } from "../../../components/animation/MouseScroll";
import TeamMember from "../../../components/cards/TeamMember";
import content from "../../../content/content";

function Features3({ colorMode }) {
  return (
    <div id="pesquisaeproducaodeconhecimento">
      <section className="relative min-h-[500px] h-[65vh] max-h-[750px] flex flex-col items-center justify-center overflow-hidden w-full">
        <div className="absolute inset-0 z-0">
          <img
            src={content.texts.features.cards.card3.imgFeatures3}
            alt="Cityscape"
            className="w-full h-full object-cover"
          />
          {/* <div className="absolute inset-0 bg-[#0f2a3a]/40 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0f2a3a] via-transparent to-transparent" /> */}
        </div>

        <div className="z-10 w-full flex justify-center absolute bottom-10">
          <ScrollMouse />
        </div>
      </section>

      <SectionArea>
        <SectionHeaderNovo
          colorMode={colorMode}
          title={content.texts.features.cards.card3.title}
          className="mb-4"
        />

        <div className="w-full">
          <p className="text-corOutrosTextosPreto/80 mx-auto w-[90%] text-justify max-w-[800px] mb-24 font-mainFont">
            {content.texts.features.cards.card3.description}
          </p>

          {/* <hr className=" max-w-[1200px] mx-auto" />

          <div className="mt-16 max-w-[1170px] mx-auto">
            <SectionHeaderNovo
              colorMode={colorMode}
              title="Advogados"
              className="mb-4"
            />

            <div className=" mx-auto px-4 md:px-6">
              <div className="flex flex-wrap gap-6 tablet2:gap-12 desktop1:gap-[2%]">
                <TeamMember
                  img="https://miguelneto.com.br/wp-content/uploads/2016/04/Miguel_neto_600x600-2-300x300.png"
                  name="J. A Miguel Neto"
                  phone=" 11 5502-1205"
                  email=" mno@miguelneto.com.br"
                />
                <TeamMember
                  img="https://miguelneto.com.br/wp-content/uploads/2016/04/Decio_600x600_-300x300.png"
                  name="Décio Andrade"
                  phone="11 5502-1216"
                  email=" dae@miguelneto.com.br"
                />
              </div>
            </div>
          </div> */}
        </div>
      </SectionArea>
    </div>
  );
}

export default Features3;
