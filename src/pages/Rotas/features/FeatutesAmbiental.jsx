import React from "react";
import SectionArea from "../../../components/sectionElements/SectionArea";
import SectionHeaderNovo from "../../../components/sectionElements/SectionHeaderNovo";
import { ScrollMouse } from "../../../components/animation/MouseScroll";
import TeamMember from "../../../components/cards/TeamMember";
import bgImg from "../../../assets/imgs/features/rotas/featureAmbiental.webp";

function FeaturesAmbiental({ colorMode }) {
  return (
    <div id="ambiental">
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
          title="Ambiental, ESG e Energia"
          className="mb-4"
        />

        <div className="w-full">
          <p className="text-corOutrosTextosPreto/80 mx-auto w-[90%] text-justify max-w-[800px] mb-24 font-mainFont">
            A crescente ênfase na sustentabilidade e na responsabilidade
            ambiental exige que empresas de diversos setores adotem práticas que
            atendam tanto às normativas aplicáveis quanto às melhores
            estratégias de mercado. A incorporação de diretrizes ambientais,
            sociais e de governança tornou-se indispensável para mitigar riscos,
            atrair investimentos e consolidar negócios sustentáveis e
            resilientes.
            <br />
            <br />
            Nossa equipe assessora empresas na adequação às exigências
            ambientais, na estruturação e aprimoramento de políticas ESG e na
            viabilização de projetos no setor de energia, com especial foco em
            fontes renováveis. Atuamos na gestão e prevenção de passivos
            ambientais, no suporte a auditorias e due diligence, na obtenção de
            licenças e autorizações e na elaboração de pareceres que
            proporcionam segurança jurídica às operações empresariais.
            <br />
            <br />
            Com uma abordagem estratégica e integrada, auxiliamos empresas na
            adoção de práticas que promovem a sustentabilidade corporativa,
            fortalecem a governança e agregam valor aos negócios em um mercado
            cada vez mais competitivo e dinâmico.
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

export default FeaturesAmbiental;
