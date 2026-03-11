import React from "react";
import SectionArea from "../../components/sectionElements/SectionArea";
import SectionHeaderNovo from "../../components/sectionElements/SectionHeaderNovo";

function About({ colorMode }) {
  return (
    <SectionArea className={`bg-[#F0E3D1] `} paddingTopAndBottom={false}>
      <div className="flex flex-col tablet2:flex-row">
        {" "}
        <div className="flex justify-center items-center  desktop1:pl-4">
          <div className="bg-primaryDark w-full tablet2:w-[384px] py-2 my-[70px] max-h-64 desktop1:h-52 desktop3:h-72 desktop1:w-[512px] desktop3:w-[720px] flex justify-center items-center desktop3:justify-end desktop3:pr-10">
            <div className="w-[50%] phone3:w-[70%] tablet1:w-[75%] tablet2:w-[244px] desktop1:w-[80%] desktop3:w-[50%]">
              <img
                src="https://miguelneto.com.br/wp-content/uploads/2022/11/Empresa-fotos-1-768x513.jpg"
                alt=""
                className="w-full"
              />
            </div>
          </div>
        </div>
        <div className="p-[70px]">
          <SectionHeaderNovo
            colorMode={colorMode}
            title="Miguel Neto Advogados"
            subtitle={
              <p>
                Com 35 anos de trajetória, o Miguel Neto Advogados se consolidou
                como um dos escritórios mais respeitados por sua atuação
                estratégica, versátil e com forte presença em operações
                nacionais e internacionais.
                <br />
                <br />
                Assessoramos empresas de diversos setores, combinando excelência
                técnica, visão de negócios e profundo compromisso com os
                objetivos de cada cliente.
              </p>
            }
            type="article"
          />
        </div>
      </div>
    </SectionArea>
  );
}

export default About;
