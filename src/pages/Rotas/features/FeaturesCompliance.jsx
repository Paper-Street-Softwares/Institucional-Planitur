import React from "react";
import SectionArea from "../../../components/sectionElements/SectionArea";
import SectionHeaderNovo from "../../../components/sectionElements/SectionHeaderNovo";
import { ScrollMouse } from "../../../components/animation/MouseScroll";
import TeamMember from "../../../components/cards/TeamMember";
import bgImg from "../../../assets/imgs/features/rotas/featureCompliance.webp";

function FeaturesCompliance({ colorMode }) {
  return (
    <div id="compliance">
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
          title="Compliance e Investigações Corporativas"
          className="mb-4"
        />

        <div className="w-full">
          <p className="text-corOutrosTextosPreto/80 mx-auto w-[90%] text-justify max-w-[800px] mb-24 font-mainFont">
            A área de Compliance e Investigações Corporativas do Miguel Neto
            Advogados assegura que empresas estejam em conformidade com leis,
            regulamentos, normas internas e princípios éticos, prevenindo e
            detectando atividades ilegais ou antiéticas. Em um ambiente de
            negócios cada vez mais complexo, essas medidas são essenciais para
            mitigar riscos legais e reputacionais.
            <br />
            <br />
            Nossa atuação em Compliance envolve o desenvolvimento, implementação
            e monitoramento de políticas e controles internos para garantir que
            as empresas cumpram todas as obrigações legais e regulatórias,
            reduzindo a exposição a sanções e litígios.
            <br />
            <br />
            No âmbito das Investigações Corporativas, conduzimos apurações
            detalhadas sobre suspeitas de fraude, corrupção, lavagem de
            dinheiro, assédio e outras violações, utilizando análise documental,
            entrevistas e elaboração de relatórios estratégicos para recomendar
            medidas corretivas e ações disciplinares.
            <br />
            <br /> Além de proteger a integridade organizacional, essas
            iniciativas fortalecem a cultura ética e a confiança de clientes,
            investidores e reguladores, demonstrando o compromisso da empresa
            com a transparência e a governança responsável.
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

export default FeaturesCompliance;
