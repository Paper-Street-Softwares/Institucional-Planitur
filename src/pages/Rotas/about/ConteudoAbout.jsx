import React, { useEffect, useRef } from "react";
import SectionHeaderNovo from "../../../components/sectionElements/SectionHeaderNovo";
import { ScrollMouse } from "../../../components/animation/MouseScroll";
import SectionArea from "../../../components/sectionElements/SectionArea";
import imgAbout from "../../../assets/imgs/about/aboutRouteImg.webp";
import "../../../styles/ScrollPanelDemo.css";
import content from "../../../content/content";
import SocialMedia from "../../../components/sections/SocialMediaTemplate";

function ConteudoAbout({ colorMode }) {
  const boxRef = useRef(null);

  useEffect(() => {
    const el = $(boxRef.current);
    const dot = $(".scroll-dot");

    el.css({
      height: "435px",
      overflowY: "auto",
    });

    el.on("scroll", function () {
      const scrollTop = el.scrollTop();
      const scrollHeight = el[0].scrollHeight - el.outerHeight();
      const percent = scrollTop / scrollHeight;

      const indicatorHeight = $(".scroll-indicator").height() - dot.height();
      const topPos = percent * indicatorHeight;

      dot.css("top", `${topPos}px`);
    });

    return () => {
      el.off("scroll");
    };
  }, []);

  return (
    <div>
      <section
        id="home"
        className="font-mainFont relative h-[65vh] phone2:h-[80vh] phone3:h-[90vh] tablet1:h-[47vh] flex flex-col items-center justify-center overflow-hidden w-full"
      >
        <div className="absolute inset-0 z-0">
          <img
            src={content.texts.about.imagemBg}
            alt="Cityscape"
            className="w-full h-full object-cover bg-center"
          />
          {/* <div className="absolute inset-0 bg-[#0f2a3a]/40 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0f2a3a] via-transparent to-transparent" /> */}
        </div>

        <div className="z-10 w-full flex justify-center absolute bottom-0 tablet2:bottom-10">
          <ScrollMouse />
        </div>
      </section>

      <SectionArea>
        <SectionHeaderNovo
          colorMode={colorMode}
          title={content.texts.about.FirstPart}
          className="mb-4"
        />

        <div className="flex flex-col gap-20">
          <div className="relative w-[90%] max-w-7xl mx-auto flex flex-col tablet2:flex-row gap-14">
            <img
              src={content.texts.about.imagem.img}
              alt="imagem representativa do Consultório"
              className="w-[90%] tablet2:w-[350px] h-fit desktop1:w-[595px] mt-24 phone2:mt-10 tablet2:mt-12 z-10"
            />

            <div className="bg-primaryDark w-[280px] h-[200px] absolute left-1/2 -translate-x-1/2 tablet2:left-44 desktop1:translate-y-[40%] desktop1:-translate-x-[30%] desktop1:w-[350px] desktop1:h-[250px] desktop2:translate-y-[60%] desktop2:-translate-x-[20%]" />
            <div className="relative w-[80%] mx-auto flex tablet1:w-[94%] tablet2:w-[565px]">
              {/* Área com scroll */}
              <div
                ref={boxRef}
                className="custom-native-scroll flex-1 tablet2:pt-20"
              >
                <p className="text-justify font-light font-mainFont text-black/70">
                  A PLANITUR é uma empresa socioambiental especializada na
                  gestão e no desenvolvimento de projetos em turismo, recreação,
                  uso público em áreas protegidas e desenvolvimento territorial.
                  Atuamos em todo o Brasil conectando pessoas, territórios e
                  natureza para fortalecer destinos e iniciativas que valorizem
                  modos de vida em equilíbrio com a conservação do meio
                  ambiente, com foco em impacto positivo e resultados
                  duradouros.
                  <br />
                  <br />
                  Nosso propósito é fazer do turismo uma ferramenta de
                  transformação socioambiental, capaz de conservar a natureza,
                  valorizar culturas locais, fortalecer identidades e ampliar
                  oportunidades para comunidades e territórios. Acreditamos no
                  turismo como um meio de cuidado com os lugares e com as
                  pessoas que os habitam.
                  <br />
                  <br />
                  Entregamos soluções que unem rigor técnico, sensibilidade
                  territorial e diálogo com os atores locais, orientadas por
                  processos participativos e pela construção de legados que
                  permanecem além dos projetos.
                  <br />
                  <br />
                  Atuamos com consultoria, assessoria, planejamento, curadoria,
                  pesquisa, instrutoria e capacitações, além do desenvolvimento
                  e implementação de projetos voltados ao turismo responsável e
                  sustentável. Também apoiamos instituições na estruturação de
                  propostas e captação de recursos, transformando boas ideias em
                  projetos viáveis e financiáveis.
                </p>
              </div>

              {/* Linha + bolinha */}
              <div className="scroll-indicator tablet2:mt-20">
                <span className="scroll-dot" />
              </div>
            </div>
          </div>
          <SocialMedia />
        </div>
      </SectionArea>
    </div>
  );
}

export default ConteudoAbout;
