import React, { useEffect, useRef } from "react";
import SectionHeaderNovo from "../../../components/sectionElements/SectionHeaderNovo";
import { ScrollMouse } from "../../../components/animation/MouseScroll";
import SectionArea from "../../../components/sectionElements/SectionArea";
import aboutImgRota from "../../../assets/imgs/about/rotaAbout/aboutRota.webp";
import "../../../styles/ScrollPanelDemo.css";
import content from "../../../content/content";
import SocialMedia from "../../../components/sections/SocialMediaTemplate";
import MotionDivDownToUp from "../../../components/animation/MotionDivDownToUp";

function ConteudoAbout({ colorMode }) {
  const boxRef = useRef(null);

  useEffect(() => {
    const el = $(boxRef.current);
    const dot = $(".scroll-dot");
    window.scrollTo(0, 0);

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
        className="font-mainFont relative min-h-[500px] h-[47vh] max-h-[405px] flex flex-col items-center justify-center overflow-hidden w-full"
      >
        <div className="absolute inset-0 z-0">
          <img
            src={content.texts.about.imagemBg}
            alt="Cityscape"
            className="w-full h-full object-cover bg-center"
          />
        </div>

        <MotionDivDownToUp className="z-10 w-full flex justify-center absolute bottom-10">
          <div>
            <ScrollMouse />
          </div>
        </MotionDivDownToUp>
      </section>

      <SectionArea className={`bg-secondary`} paddingbot={false}>
        <div className="flex flex-col gap-20">
          <div className="relative w-[90%] max-w-7xl mx-auto flex flex-col tablet2:flex-row gap-14">
            <MotionDivDownToUp className={`w-full`}>
              <img
                src={aboutImgRota}
                alt="imagem representativa do Consultório"
                className="w-[90%] tablet2:w-[350px] desktop2:w-[400px] z-10 rounded-md mx-auto"
              />
            </MotionDivDownToUp>

            <MotionDivDownToUp className={`w-full`}>
              <div className="relative w-[80%] mx-auto flex tablet1:w-[94%] desktop1:w-full desktop2:max-w-[700px]">
                {/* Área com scroll */}
                <div ref={boxRef} className="custom-native-scroll flex-1">
                  <p className="text-justify font-light font-mainFont text-black/70">
                    <SectionHeaderNovo
                      miniTitle={content.texts.about.miniTag}
                      subtitle={content.texts.about.subtitle}
                      title={content.texts.about.FirstPart}
                      colorMode={colorMode}
                      type="article"
                      className={`mb-6`}
                    />
                    {content.texts.about.paragraph}
                  </p>
                </div>

                {/* Linha + bolinha */}
                <div className="scroll-indicator">
                  <span className="scroll-dot" />
                </div>
              </div>
            </MotionDivDownToUp>
          </div>
          <SocialMedia />
        </div>
      </SectionArea>
    </div>
  );
}

export default ConteudoAbout;
