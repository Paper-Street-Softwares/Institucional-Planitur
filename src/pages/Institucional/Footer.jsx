import React from "react";
import { Instagram, Linkedin, MapPin, Phone } from "lucide-react";
import SectionArea from "../../components/sectionElements/SectionArea";
import SectionWrapper from "../../components/sectionElements/SectionWrapper";
import content from "../../content/content";

export default function Footer() {
  return (
    <SectionArea paddingTopAndBottom={false}>
      <footer className="bg-terciary text-primaryDark/80 border-t w-full pb-10 font-mainFont flex justify-center">
        <SectionWrapper>
          <div className="flex flex-col w-full pt-[20px] tablet2:flex-row tablet2:pt-[50px] items-start justify-center gap-12 tablet2:gap-6 phone3:grid phone3:grid-cols-2 tablet1:grid-cols-4 desktop1:grid-cols-4">
            {/* COLUNA 1 - LOGO */}
            <div className="flex flex-col gap-8">
              <img
                src={content.texts.navbar.logo.img}
                alt="Miguel Neto Advogados"
                className="w-[220px]"
              />

              <div className="flex flex-col gap-4">
                <h1 className="font-secondFont">Siga a PLANITUR</h1>
                <div className="flex gap-4">
                  <a
                    href={content.texts.links.instagram}
                    target="_blank"
                    className="bg-primaryDark/20 flex justify-center items-center w-8 h-8 rounded-md cursor-pointer hover:scale-90 duration-500 transition-all"
                  >
                    <Instagram width={18} className="text-primaryDark/70" />
                  </a>
                  <a
                    href={content.texts.links.linkedin}
                    target="_blank"
                    className="bg-primaryDark/20 flex justify-center items-center w-8 h-8 rounded-md cursor-pointer hover:scale-90 duration-500 transition-all"
                  >
                    <Linkedin width={18} className="text-primaryDark/70" />
                  </a>
                </div>
              </div>
            </div>

            {/* COLUNA 2 - LINKS */}
            <div className="space-y-10 text-sm flex flex-col tablet2:h-auto ">
              <div>
                <h3 className="text-primaryLight font-semibold mb-3">
                  SOBRE NÓS
                </h3>
                <ul className="space-y-2 text-sm text-primaryDark/80 flex flex-col">
                  <a
                    href="/about"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-primaryLight duration-300 transition-all cursor-pointer"
                  >
                    Nosso Escritório
                  </a>
                  <a
                    href="/team"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-primaryLight duration-300 transition-all cursor-pointer"
                  >
                    Nossa Equipe
                  </a>
                  <a
                    href="/contato"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-primaryLight duration-300 transition-all cursor-pointer"
                  >
                    Contato
                  </a>
                </ul>
              </div>

              {/* <div>
              <h3 className="text-primaryLight font-semibold mb-3">
                ADVOGADOS
              </h3>
            </div> */}

              {/* <div>
              <h3 className="text-primaryLight font-semibold mb-3">
                NOTÍCIAS E PUBLICAÇÕES
              </h3>
              <ul className="space-y-2 text-primaryDark/80">
                <li>Imprensa</li>
                <li>Informativos</li>
                <li>Reconhecimentos</li>
                <li>Eventos</li>
              </ul>
            </div> */}

              {/* <div>
              <h3 className="text-primaryLight font-semibold">TRACK RECORD</h3>
            </div> */}
            </div>

            {/* COLUNA 3 - ÁREAS DE ATUAÇÃO */}
            <div className="">
              <h3 className="text-primaryLight font-semibold mb-4">
                ÁREAS DE ATUAÇÃO
              </h3>
              <ul className="space-y-2 text-sm text-primaryDark/80 flex flex-col">
                <a
                  href="/features/tecnicocursivo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primaryLight duration-300 transition-all cursor-pointer"
                >
                  Ambiental, ESG e Energia
                </a>
                <a
                  href="/features/formativoeducacional"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primaryLight duration-300 transition-all cursor-pointer"
                >
                  Compliance e Investigações Corporativas
                </a>
                <a
                  href="/features/pesquisaeproducaodeconhecimento"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primaryLight duration-300 transition-all cursor-pointer"
                >
                  Concorrencial
                </a>
              </ul>
            </div>

            {/* COLUNA 4 - CONTATO */}
            <div className="flex flex-col justify-between text-sm">
              <div className="space-y-10">
                <div className="flex flex-col space-y-6">
                  <div className="flex items-center gap-3">
                    <Phone size={18} className="text-primaryLight" />
                    <span className="text-[12px] desktop1:text-[14px]">
                      {content.texts.infos.phone} - Planitur
                    </span>
                  </div>

                  <div className="flex items-center gap-3">
                    <Phone size={18} className="text-primaryLight" />
                    <span className="text-[12px] desktop1:text-[14px]">
                      {content.texts.infos.phoneSecundario} - Tarcísio Cunha
                    </span>
                  </div>

                  <div className="flex items-center gap-3">
                    <Phone size={18} className="text-primaryLight" />
                    <span className="text-[12px] desktop1:text-[14px]">
                      {content.texts.infos.phoneTerciario} - Angelice Motter
                    </span>
                  </div>
                </div>

                {/* <div className="flex items-start gap-3">
                <MapPin size={18} className="mt-1 text-primaryLight" />
                <p className="text-primaryDark/80">
                  Rua Fidêncio Ramos, 308
                  <br />
                  2º Andar - Torre A - Vila Olímpia
                  <br />
                  CEP 04551-010 - São Paulo - SP
                </p>
              </div> */}
              </div>
            </div>
          </div>

          <div className="text-xs text-gray-400 mt-[62px] flex justify-center items-center text-center">
            ©{content.texts.footer.copyrightLine}
          </div>
        </SectionWrapper>
      </footer>
    </SectionArea>
  );
}
