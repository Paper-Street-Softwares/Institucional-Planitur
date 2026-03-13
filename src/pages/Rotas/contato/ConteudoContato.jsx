import React, { useEffect } from "react";
import SectionArea from "../../../components/sectionElements/SectionArea";
import SectionHeaderNovo from "../../../components/sectionElements/SectionHeaderNovo";
import { ScrollMouse } from "../../../components/animation/MouseScroll";
import TeamMember from "../../../components/cards/TeamMember";
import bgImg from "../../../assets/imgs/contato/bgImg.webp";
import {
  Instagram,
  Linkedin,
  Mail,
  Phone,
  Search,
  SearchCheck,
} from "lucide-react";
import SectionWrapper from "../../../components/sectionElements/SectionWrapper";
import content from "../../../content/content";
import MotionDivDownToUp from "../../../components/animation/MotionDivDownToUp";

function Contato({ colorMode }) {
  const linksContato = {
    link1: {
      icon: (
        <>
          <Phone width={20} className={`text-primaryLight`} />
        </>
      ),
      text: "51 98225-1864",
    },
    // link2: {
    //   icon: (
    //     <>
    //       <SearchCheck width={20} className={`text-primaryLight`} />
    //     </>
    //   ),
    //   text: (
    //     <>
    //       Rua Fidêncio Ramos, 308 <br />
    //       2º andar - Torre A - Vila Olímpia <br />
    //       CEP 04551-010 - São Paulo - SP
    //     </>
    //   ),
    // },
    // link3: {
    //   icon: (
    //     <>
    //       <svg
    //         xmlns="http://www.w3.org/2000/svg"
    //         width="20"
    //         height="20"
    //         viewBox="0 0 24 24"
    //         fill="none"
    //         stroke="currentColor"
    //         stroke-width="2"
    //         stroke-linecap="round"
    //         stroke-linejoin="round"
    //         class="lucide lucide-id-card-lanyard-icon lucide-id-card-lanyard"
    //       >
    //         <path d="M13.5 8h-3" />
    //         <path d="m15 2-1 2h3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h3" />
    //         <path d="M16.899 22A5 5 0 0 0 7.1 22" />
    //         <path d="m9 2 3 6" />
    //         <circle cx="12" cy="15" r="3" />
    //       </svg>
    //     </>
    //   ),
    //   text: "Mauricio Khalil",
    // },
    // link4: {
    //   icon: (
    //     <>
    //       <Phone width={20} className={`text-primaryLight`} />
    //     </>
    //   ),
    //   text: "51 98225-1864",
    // },
    link5: {
      icon: (
        <>
          <Mail width={20} className={`text-primaryLight`} />
        </>
      ),
      text: "planitur.consultoria@gmail.com",
    },
    // link6: {
    //   icon: (
    //     <>
    //       <>
    //         <svg
    //           xmlns="http://www.w3.org/2000/svg"
    //           width="20"
    //           height="20"
    //           viewBox="0 0 24 24"
    //           fill="none"
    //           stroke="currentColor"
    //           stroke-width="2"
    //           stroke-linecap="round"
    //           stroke-linejoin="round"
    //           class="lucide lucide-id-card-lanyard-icon lucide-id-card-lanyard"
    //         >
    //           <path d="M13.5 8h-3" />
    //           <path d="m15 2-1 2h3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h3" />
    //           <path d="M16.899 22A5 5 0 0 0 7.1 22" />
    //           <path d="m9 2 3 6" />
    //           <circle cx="12" cy="15" r="3" />
    //         </svg>
    //       </>
    //     </>
    //   ),
    //   text: "José Amaro",
    // },
    // link7: {
    //   icon: (
    //     <>
    //       <Phone width={20} className={`text-primaryLight`} />
    //     </>
    //   ),
    //   text: "+55 (11) 99477-8678",
    // },
    link8: {
      icon: (
        <>
          <Mail width={20} className={`text-primaryLight`} />
        </>
      ),
      text: "contato@planiturconsultoria.com",
    },
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <div id="contencioso">
      <section className="relative min-h-[500px] h-[47vh] max-h-[405px] flex flex-col items-center justify-center overflow-hidden w-full">
        {" "}
        <div className="absolute inset-0 z-0">
          <img
            src={bgImg}
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

      <SectionArea className={`bg-secondary`}>
        <SectionWrapper>
          <MotionDivDownToUp className={`w-full`}>
            <div className="font-mainFont flex flex-col tablet2:flex-row gap-4 w-full tablet2:justify-around">
              <div className="flex flex-col gap-4">
                <h1 className="text-primaryLight text-xl font-medium">
                  Vamos conversar?
                </h1>
                <div className="flex flex-col gap-4">
                  {Object.values(linksContato)
                    .slice(0, 2)
                    .map((item, index) => (
                      <div key={index} className="flex gap-2 items-center">
                        {item.icon}
                        <span className="text-corOutrosTextosPreto/70 text-md">
                          {item.text}
                        </span>
                      </div>
                    ))}
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <h1 className="text-primaryLight text-xl font-medium">
                  Assessoria de Imprensa
                </h1>
                <div className="flex flex-col gap-4">
                  {Object.values(linksContato)
                    .slice(2, 8)
                    .map((item, index) => (
                      <div key={index} className="flex gap-2 items-center">
                        {item.icon}
                        <span className="text-corOutrosTextosPreto/70 text-md">
                          {item.text}
                        </span>
                      </div>
                    ))}
                </div>
                <div className="flex gap-4">
                  <a
                    href={content.texts.links.instagram}
                    target="_blank"
                    className="bg-primaryDark/20 flex justify-center items-center w-8 h-8 rounded-md cursor-pointer hover:scale-90 duration-500 transition-all"
                  >
                    {" "}
                    <Instagram width={20} className="text-primaryDark/70" />
                  </a>
                  <a
                    href={content.texts.links.linkedin}
                    target="_blank"
                    className="bg-primaryDark/20 flex justify-center items-center w-8 h-8 rounded-md cursor-pointer hover:scale-90 duration-500 transition-all"
                  >
                    <Linkedin width={20} className="text-primaryDark/70" />
                  </a>
                </div>
              </div>
            </div>
          </MotionDivDownToUp>
        </SectionWrapper>

        <MotionDivDownToUp className={`w-[90%] mt-10`}>
          <div className="mt-8 w-full">
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
      </SectionArea>
    </div>
  );
}

export default Contato;
