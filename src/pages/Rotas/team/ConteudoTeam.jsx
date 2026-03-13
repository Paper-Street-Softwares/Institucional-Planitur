import React, { useState } from "react";
import SectionHeaderNovo from "../../../components/sectionElements/SectionHeaderNovo";
import { ScrollMouse } from "../../../components/animation/MouseScroll";
import SectionArea from "../../../components/sectionElements/SectionArea";
import "../../../styles/ScrollPanelDemo.css";
import TeamMember from "../../../components/cards/TeamMember";
import SectionWrapper from "../../../components/sectionElements/SectionWrapper";
import content from "../../../content/content";
import { Dialog } from "primereact/dialog";
import MotionDivDownToUp from "../../../components/animation/MotionDivDownToUp";

function ConteudoTeam({ colorMode }) {
  const [visible, setVisible] = useState(false);
  const [selectedDescription, setSelectedDescription] = useState("");

  const openDescription = (description) => {
    setSelectedDescription(description);
    setVisible(true);
  };

  const instituicoesAtendidas = Object.values(
    content.texts.team.instituicoesAtendidas,
  );
  const parceiros = Object.values(content.texts.team.parceirosLogo);
  const clientes = Object.values(content.texts.team.clientesLogo);

  return (
    <div>
      <section className="relative min-h-[500px] h-[47vh] max-h-[405px] flex flex-col items-center justify-center overflow-hidden w-full">
        <div className="absolute inset-0 z-0">
          <img
            src={content.texts.team.imgFundo}
            alt="Cityscape"
            className="w-full h-full object-cover"
          />
        </div>

        <MotionDivDownToUp className="z-10 w-full flex justify-center absolute bottom-10">
          <div>
            <ScrollMouse />
          </div>
        </MotionDivDownToUp>
      </section>

      <SectionArea className={`bg-terciary`}>
        <SectionHeaderNovo
          title={content.texts.team.title}
          subtitle={content.texts.team.subtitle}
          className={`mb-2`}
          colorMode={colorMode}
        />

        <SectionWrapper>
          <div className="mx-auto md:px-0 my-10 ">
            <div className="grid tablet1:grid-cols-2 justify-center items-start flex-wrap gap-6 tablet2:gap-4 desktop1:gap-2">
              <MotionDivDownToUp>
                <TeamMember
                  img={content.texts.team.cards.card1.img}
                  name={content.texts.team.cards.card1.name}
                  role={content.texts.team.cards.card1.role}
                  linkedIn={content.texts.team.cards.card1.linkedIn}
                  description={content.texts.team.cards.card1.description}
                  onOpenModal={openDescription}
                />
              </MotionDivDownToUp>

              <MotionDivDownToUp>
                <TeamMember
                  img={content.texts.team.cards.card2.img}
                  name={content.texts.team.cards.card2.name}
                  role={content.texts.team.cards.card2.role}
                  linkedIn={content.texts.team.cards.card2.linkedIn}
                  description={content.texts.team.cards.card2.description}
                  onOpenModal={openDescription}
                />
              </MotionDivDownToUp>
            </div>
          </div>
        </SectionWrapper>
      </SectionArea>
      <SectionArea className={`bg-secondary`}>
        <SectionWrapper>
          <SectionHeaderNovo
            colorMode={colorMode}
            title={content.texts.team.sectionTitle}
          />

          <div className="flex flex-col gap-14">
            {/* Clientes */}
            <div className="mx-auto">
              <SectionHeaderNovo
                title={content.texts.team.titleClientes}
                colorMode={colorMode}
                className={`mb-4`}
              />

              <div className="flex flex-wrap justify-center gap-4">
                {clientes.map((item, index) => (
                  <div key={index} className="">
                    <img
                      src={item.img}
                      alt={item.alt}
                      className="max-w-[120px] rounded-sm"
                    />
                  </div>
                ))}
              </div>
            </div>
            {/* Parceiros */}
            <div className="mx-auto">
              <SectionHeaderNovo
                title={content.texts.team.titleParceiros}
                colorMode={colorMode}
                className={`mb-4`}
              />

              <div className="flex flex-wrap justify-center gap-4">
                {parceiros.map((item, index) => (
                  <div key={index} className="">
                    <img
                      src={item.img}
                      alt={item.alt}
                      className="max-w-[120px] rounded-sm"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Instituições */}
            <div className="mx-auto">
              <SectionHeaderNovo
                title={content.texts.team.titleInstituicoes}
                colorMode={colorMode}
                className={`mb-4`}
              />

              <div className="flex flex-wrap justify-center gap-4 tablet2:grid tablet2:grid-cols-4 desktop2:grid-cols-8">
                {instituicoesAtendidas.map((item, index) => (
                  <div key={index} className="">
                    <img
                      src={item.img}
                      alt={item.alt}
                      className="max-w-[120px] rounded-sm"
                    />
                  </div>
                ))}
              </div>
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
