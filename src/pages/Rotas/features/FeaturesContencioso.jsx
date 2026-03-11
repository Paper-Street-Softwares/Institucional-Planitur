import React from "react";
import SectionArea from "../../../components/sectionElements/SectionArea";
import SectionHeaderNovo from "../../../components/sectionElements/SectionHeaderNovo";
import { ScrollMouse } from "../../../components/animation/MouseScroll";
import TeamMember from "../../../components/cards/TeamMember";
import bgImg from "../../../assets/imgs/features/rotas/featuresContencioso.webp";

function FeaturesContencioso({ colorMode }) {
  return (
    <div id="contencioso">
      <section className="relative h-[63vh] phone2:h-[60vh] phone3:h-[65vh] tablet1:h-[68vh] tablet2:h-[73vh] desktop1:h-[56vh] flex flex-col items-center justify-center overflow-hidden w-full">
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

      <SectionArea>
        <SectionHeaderNovo
          colorMode={colorMode}
          title="Contencioso e Arbitragem"
          className="mb-4"
        />

        <div className="w-full">
          <p className="text-corOutrosTextosPreto/80 mx-auto w-[90%] text-justify max-w-[800px] mb-24 font-mainFont">
            Nossa equipe atua de forma estratégica na prevenção e resolução de
            litígios empresariais, oferecendo segurança jurídica e soluções
            alinhadas aos interesses comerciais de nossos clientes.
            <br />
            <br />
            No contencioso cível, representamos empresas em disputas
            contratuais, societárias, de responsabilidade civil, construção e
            engenharia, seguros complexos (como D&O), entre outras. Atuamos em
            todas as instâncias judiciais, incluindo tribunais superiores, e
            assessoramos desde a fase pré-contenciosa — com a análise de riscos
            e a negociação de soluções — até a condução de processos
            administrativos e judiciais de alta complexidade.
            <br />
            <br />
            Em arbitragem, conduzimos disputas nacionais e internacionais
            perante instituições como ICC, LCIA e CAM-CCBC, estruturando
            estratégias eficientes para litígios relacionados a contratos
            empresariais, fusões e aquisições, joint ventures e disputas
            societárias.
          </p>

          <hr className=" max-w-[1200px] mx-auto" />

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
          </div>
        </div>
      </SectionArea>
    </div>
  );
}

export default FeaturesContencioso;
