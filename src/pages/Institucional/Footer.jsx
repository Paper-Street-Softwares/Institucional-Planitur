import React from "react";
import { Instagram, Linkedin, MapPin, Phone } from "lucide-react";
import SectionArea from "../../components/sectionElements/SectionArea";
import content from "../../content/content";

export default function Footer() {
  return (
    <SectionArea paddingTopAndBottom={false}>
      <footer className="bg-primaryDark text-white border-t w-full border-[#C03D1A] pb-10 font-mainFont">
        <div className="flex flex-col px-[20px] tablet2:flex-row tablet2:pt-[50px] items-start justify-center gap-12">
          {/* COLUNA 1 - LOGO */}
          <div className="flex self-start tablet2:self-center">
            <img
              src={content.texts.navbar.logo.img}
              alt="Miguel Neto Advogados"
              className="w-[220px]"
            />
          </div>

          {/* COLUNA 2 - LINKS */}
          <div className="space-y-10 text-sm flex flex-col tablet2:h-112 ">
            <div>
              <h3 className="text-primaryLight font-semibold mb-3">
                SOBRE NÓS
              </h3>
              <ul className="space-y-2 text-gray-300">
                <li>Carreira</li>
                <li>Contato</li>
                <li>Nosso Escritório</li>
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
              <ul className="space-y-2 text-gray-300">
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
            <ul className="space-y-2 text-sm text-gray-300 flex flex-col">
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
            <div className="space-y-24">
              <div className="flex flex-col space-y-6">
                <div className="flex items-center gap-3">
                  <Phone size={18} className="text-primaryLight" />
                  <span>{content.texts.infos.phone} - Planitur</span>
                </div>

                <div className="flex items-center gap-3">
                  <Phone size={18} className="text-primaryLight" />
                  <span>
                    {content.texts.infos.phoneSecundario} - Tarcísio Cunha
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <Phone size={18} className="text-primaryLight" />
                  <span>
                    {content.texts.infos.phoneTerciario} - Angelice Motter
                  </span>
                </div>
              </div>

              {/* <div className="flex items-start gap-3">
                <MapPin size={18} className="mt-1 text-primaryLight" />
                <p className="text-gray-300">
                  Rua Fidêncio Ramos, 308
                  <br />
                  2º Andar - Torre A - Vila Olímpia
                  <br />
                  CEP 04551-010 - São Paulo - SP
                </p>
              </div> */}

              <div className="flex gap-4 pt-2">
                <a href={content.texts.links.instagram} target="_blank">
                  {" "}
                  <Instagram width={18} className="text-white/70" />
                </a>
                <a href={content.texts.links.linkedin} target="_blank">
                  <Linkedin width={18} className="text-white/70" />
                </a>
              </div>
            </div>

            <div className="text-xs text-gray-400 tablet2:mt-[82px]">
              ©{content.texts.footer.copyrightLine}
            </div>
          </div>
        </div>
      </footer>
    </SectionArea>
  );
}
