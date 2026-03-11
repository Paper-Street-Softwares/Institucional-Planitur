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
              src="https://miguelneto.com.br/wp-content/uploads/2025/04/MiguelNeto-LogoNegativo-Color-FundoTransparente.png"
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

            <div>
              <h3 className="text-primaryLight font-semibold mb-3">
                ADVOGADOS
              </h3>
            </div>

            <div>
              <h3 className="text-primaryLight font-semibold mb-3">
                NOTÍCIAS E PUBLICAÇÕES
              </h3>
              <ul className="space-y-2 text-gray-300">
                <li>Imprensa</li>
                <li>Informativos</li>
                <li>Reconhecimentos</li>
                <li>Eventos</li>
              </ul>
            </div>

            <div>
              <h3 className="text-primaryLight font-semibold">TRACK RECORD</h3>
            </div>
          </div>

          {/* COLUNA 3 - ÁREAS DE ATUAÇÃO */}
          <div className="">
            <h3 className="text-primaryLight font-semibold mb-4">
              ÁREAS DE ATUAÇÃO
            </h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>Ambiental, ESG e Energia</li>
              <li>Compliance e Investigações Corporativas</li>
              <li>Concorrencial</li>
              <li>Contencioso e Arbitragem</li>
              <li>Contratos e Negociações Empresariais</li>
              <li>Empresarial e Societário</li>
              <li>Família e Sucessões</li>
              <li>Fusões e Aquisições (M&A)</li>
              <li>Imobiliário</li>
              <li>Mercado de Capitais</li>
              <li>Planejamento Patrimonial</li>
              <li>Privacidade e Proteção de Dados</li>
              <li>Setores Regulados</li>
              <li>Tributário</li>
              <li>Trabalhista e Previdenciário</li>
            </ul>
          </div>

          {/* COLUNA 4 - CONTATO */}
          <div className="flex flex-col justify-between text-sm">
            <div className="space-y-24">
              <div className="flex items-center gap-3">
                <Phone size={18} className="text-primaryLight" />
                <span>+55 (11) 5502-1200</span>
              </div>

              <div className="flex items-start gap-3">
                <MapPin size={18} className="mt-1 text-primaryLight" />
                <p className="text-gray-300">
                  Rua Fidêncio Ramos, 308
                  <br />
                  2º Andar - Torre A - Vila Olímpia
                  <br />
                  CEP 04551-010 - São Paulo - SP
                </p>
              </div>

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
              © 2025 Miguel Neto Advogados. Todos os direitos reservados.
            </div>
          </div>
        </div>
      </footer>
    </SectionArea>
  );
}
