import React from "react";
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

function Contato({ colorMode }) {
  const linksContato = {
    link1: {
      icon: (
        <>
          <Phone width={20} />
        </>
      ),
      text: "+55 (11) 5502-1200",
    },
    link2: {
      icon: (
        <>
          <SearchCheck width={20} />
        </>
      ),
      text: (
        <>
          Rua Fidêncio Ramos, 308 <br />
          2º andar - Torre A - Vila Olímpia <br />
          CEP 04551-010 - São Paulo - SP
        </>
      ),
    },
    link3: {
      icon: (
        <>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-id-card-lanyard-icon lucide-id-card-lanyard"
          >
            <path d="M13.5 8h-3" />
            <path d="m15 2-1 2h3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h3" />
            <path d="M16.899 22A5 5 0 0 0 7.1 22" />
            <path d="m9 2 3 6" />
            <circle cx="12" cy="15" r="3" />
          </svg>
        </>
      ),
      text: "Mauricio Khalil",
    },
    link4: {
      icon: (
        <>
          <Phone width={20} />
        </>
      ),
      text: "+55 (11) 99291-2709",
    },
    link5: {
      icon: (
        <>
          <Mail width={20} />
        </>
      ),
      text: "mauricio@assessoriaexclusiva.com.br",
    },
    link6: {
      icon: (
        <>
          <>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-id-card-lanyard-icon lucide-id-card-lanyard"
            >
              <path d="M13.5 8h-3" />
              <path d="m15 2-1 2h3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h3" />
              <path d="M16.899 22A5 5 0 0 0 7.1 22" />
              <path d="m9 2 3 6" />
              <circle cx="12" cy="15" r="3" />
            </svg>
          </>
        </>
      ),
      text: "José Amaro",
    },
    link7: {
      icon: (
        <>
          <Phone width={20} />
        </>
      ),
      text: "+55 (11) 99477-8678",
    },
    link8: {
      icon: (
        <>
          <Mail width={20} />
        </>
      ),
      text: "marinho@assessoriaexclusiva.com.br",
    },
  };

  return (
    <div id="contencioso">
      <section className="relative h-[65vh] phone2:h-[80vh] phone3:h-[90vh] tablet1:h-[47vh] flex flex-col items-center justify-center overflow-hidden w-full">
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
        <div className="z-10 w-full flex justify-center absolute bottom-0 tablet2:bottom-10">
          <ScrollMouse />
        </div>
      </section>

      <SectionArea paddingbot={false}>
        <SectionWrapper>
          <div className="font-mainFont flex flex-col tablet2:flex-row gap-4 w-full tablet2:justify-around">
            <div className="flex flex-col gap-4">
              <h1 className="text-primaryLight text-xl font-medium">
                Miguel Neto Advogados
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
            </div>
          </div>
        </SectionWrapper>

        <div className="flex gap-4 mt-14">
          <a href={content.texts.links.instagram} target="_blank">
            {" "}
            <Instagram width={20} className="text-white/70" />
          </a>
          <a href={content.texts.links.linkedin} target="_blank">
            <Linkedin width={20} className="text-white/70" />
          </a>
        </div>

        <div className="mt-14 w-full">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3656.2614431294246!2d-46.68979028938481!3d-23.594954862738145!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce5734159c2187%3A0xe683167378e65193!2sMiguel%20Neto%20Advogados!5e0!3m2!1spt-BR!2sbr!4v1772043619800!5m2!1spt-BR!2sbr"
            width="100%"
            height=""
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Mapa do local da empresa"
            className="h-[350px] desktop1:h-[420px]"
          ></iframe>
        </div>
      </SectionArea>
    </div>
  );
}

export default Contato;
