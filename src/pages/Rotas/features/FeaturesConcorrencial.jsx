import React from "react";
import SectionArea from "../../../components/sectionElements/SectionArea";
import SectionHeaderNovo from "../../../components/sectionElements/SectionHeaderNovo";
import { ScrollMouse } from "../../../components/animation/MouseScroll";
import TeamMember from "../../../components/cards/TeamMember";
import bgImg from "../../../assets/imgs/features/rotas/featureConcorrencial.webp";

function FeaturesConcorrencial({ colorMode }) {
  return (
    <div id="concorrencial">
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
          title="Concorrencial"
          className="mb-4"
        />

        <div className="w-full">
          <p className="text-corOutrosTextosPreto/80 mx-auto w-[90%] text-justify max-w-[800px] mb-24 font-mainFont">
            Assessoramos empresas em questões concorrenciais estratégicas,
            representando clientes em negociações de acordos e em processos
            administrativos perante o Conselho Administrativo de Defesa
            Econômica (CADE). Nossa atuação abrange desde a prevenção e
            mitigação de riscos antitruste até a defesa em investigações e
            litígios regulatórios.
            <br />
            <br />
            Em operações de M&A, conduzimos a análise e submissão de atos de
            concentração ao CADE, inclusive em casos complexos com repercussão
            internacional. Nossa experiência permite desenvolver estratégias que
            garantem a conformidade regulatória e promovem a eficiência na
            tramitação dos processos.
            <br />
            <br />
            Além disso, auxiliamos empresas na avaliação de riscos
            concorrenciais, na estruturação de políticas internas e na revisão
            de contratos, assegurando que suas práticas comerciais estejam
            alinhadas às normas de defesa da concorrência e mitigando potenciais
            infrações.
            <br />
            <br /> Nosso compromisso é oferecer soluções jurídicas assertivas e
            inovadoras, protegendo os interesses dos nossos clientes em um
            ambiente regulatório cada vez mais desafiador.
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

export default FeaturesConcorrencial;
