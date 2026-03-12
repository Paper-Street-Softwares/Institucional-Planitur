import React, { useState } from "react";
import SectionHeaderNovo from "../../../components/sectionElements/SectionHeaderNovo";
import { ScrollMouse } from "../../../components/animation/MouseScroll";
import SectionArea from "../../../components/sectionElements/SectionArea";
import "../../../styles/ScrollPanelDemo.css";
import TeamMember from "../../../components/cards/TeamMember";
import SectionWrapper from "../../../components/sectionElements/SectionWrapper";
import content from "../../../content/content";
import { Dialog } from "primereact/dialog";

function ConteudoTeam({ colorMode }) {
  const [visible, setVisible] = useState(false);
  const [selectedDescription, setSelectedDescription] = useState("");

  const openDescription = (description) => {
    setSelectedDescription(description);
    setVisible(true);
  };

  return (
    <div>
      <section className="relative h-[65vh] phone2:h-[80vh] phone3:h-[90vh] tablet1:h-[47vh] flex flex-col items-center justify-center overflow-hidden w-full">
        <div className="absolute inset-0 z-0">
          <img
            src={content.texts.team.imgFundo}
            alt="Cityscape"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="z-10 w-full flex justify-center absolute bottom-0 tablet2:bottom-10">
          <ScrollMouse />
        </div>
      </section>

      <SectionArea className={`bg-[#F0E3D1]`}>
        <SectionHeaderNovo
          title={content.texts.team.title}
          className={`mb-4`}
          colorMode={colorMode}
        />

        <SectionWrapper>
          <div className="mx-auto px-4 md:px-0 my-10">
            {/* <SectionHeaderNovo
              title={content.texts.team.subtitle}
              colorMode={colorMode}
              className={`mb-6`}
            /> */}

            <div className="flex flex-wrap gap-6 tablet2:gap-12 desktop1:gap-[0%]">
              <TeamMember
                img={content.texts.team.cards.card1.img}
                name={content.texts.team.cards.card1.name}
                linkedIn={content.texts.team.cards.card1.linkedIn}
                description={content.texts.team.cards.card1.description}
                onOpenModal={openDescription}
              />

              <TeamMember
                img={content.texts.team.cards.card2.img}
                name={content.texts.team.cards.card2.name}
                linkedIn={content.texts.team.cards.card2.linkedIn}
                description={content.texts.team.cards.card2.description}
                onOpenModal={openDescription}
              />
            </div>
          </div>

          <div className="mx-auto px-4 md:px-0 mt-12 mb-10">
            <SectionHeaderNovo
              title={content.texts.team.titleParceiros}
              colorMode={colorMode}
              className={`mb-6`}
            />

            <div className="flex flex-wrap gap-6 tablet2:gap-12 desktop1:gap-[1%]">
              <img
                src={content.texts.team.paceiros}
                alt="Imagem de Logomarcas parceiras"
              />
            </div>
          </div>
        </SectionWrapper>
      </SectionArea>

      <Dialog
        header="Saiba mais"
        visible={visible}
        onHide={() => setVisible(false)}
        style={{ width: "30vw" }}
        breakpoints={{ "960px": "75vw", "641px": "90vw" }}
      >
        <p className="m-0">{selectedDescription}</p>
      </Dialog>
    </div>
  );
}

export default ConteudoTeam;
