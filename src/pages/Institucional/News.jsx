import React from "react";
import SectionArea from "../../components/sectionElements/SectionArea";
import SectionWrapper from "../../components/sectionElements/SectionWrapper";
import SectionHeaderNovo from "../../components/sectionElements/SectionHeaderNovo";
import { Button } from "@mui/material";
import { ArrowRight } from "lucide-react";
import NewsCardsInstitucional from "../../components/cards/NewsCardsInstitucional";

function News({ colorMode }) {
  return (
    <SectionArea paddingtop={false}>
      <SectionWrapper
        className={`min-w-[300px] phone2:min-w-[355px] phone3:min-w-[405px] tablet1:min-w-[620px] tablet2:min-w-[748px] desktop1:min-w-[1004px] w-[95%] font-mainFont`}
      >
        <section className="pt-[60px]">
          <div className=" w-full">
            <SectionHeaderNovo
              title="Notícias e Publicações"
              colorMode={colorMode}
            />

            <div className="flex flex-wrap gap-10 tablet2:gap-7 desktop2:gap-6">
              <NewsCardsInstitucional
                category="Artigo"
                title="Novas regras sobre trabalho aos domingos e feriados começam a valer em março. Entenda"
                excerpt="Análise detalhada sobre as principais mudanças trazidas pela Lei nº 14.133/2021 e seus impactos."
                date="15 MAI 2024"
                author="Miguel Neto"
                link={`https://miguelneto.com.br/informativos/novas-regras-do-vale-refeicao-e-alimentacao-precos-vao-cair-o-que-muda-para-trabalhador/`}
                imageUrl="https://miguelneto.com.br/wp-content/uploads/2026/02/post_Marcel_Cordeiro_23-02-2026.png"
              />
              <NewsCardsInstitucional
                category="Institucional"
                title="Como empresas vão poder pedir reembolso de ‘tarifaço’ de Trump?"
                excerpt="Pelo 10º ano consecutivo, figuramos entre os escritórios mais admirados do Brasil."
                date="02 ABR 2024"
                author="Equipe MNA"
                link={`https://miguelneto.com.br/informativos/como-empresas-vao-poder-pedir-reembolso-de-tarifaco-de-trump/`}
                imageUrl="https://miguelneto.com.br/wp-content/uploads/2026/02/Miguel-Neto-23-02-Globo.png"
              />
              <NewsCardsInstitucional
                category="Tributário"
                title="Censo de Capitais Estrangeiros no País 2026: Declaração Quinquenal e Trimestral"
                excerpt="Entenda os impactos da PEC 45/2019 para as empresas prestadoras de serviços."
                date="20 MAR 2024"
                z
                author="Ana Silva"
                link={`https://miguelneto.com.br/informativos/censo-de-capitais-estrangeiros-no-pais-2026-declaracao-quinquenal-e-trimestral/`}
                imageUrl="https://miguelneto.com.br/wp-content/uploads/2026/02/Censo-.png"
              />
              <NewsCardsInstitucional
                category="Trabalhista"
                title="Receita ajusta pagamento de prêmios sem encargo previdenciário"
                excerpt="As recentes alterações na legislação trabalhista sobre o regime de teletrabalho."
                date="10 FEV 2024"
                author="Carlos Souza"
                link={`https://miguelneto.com.br/informativos/receita-ajusta-pagamento-de-premios-sem-encargo-previdenciario/`}
                imageUrl="https://miguelneto.com.br/wp-content/uploads/2026/02/Post-artigo-Marcel-e-Djalma.png"
              />
            </div>

            <div className="mt-8 text-center">
              <a
                href="https://miguelneto.com.br/noticias-e-publicacoes/"
                className="bg-[#0f2a3a] cursor-pointer hover:scale-110 transition-all inline-flex duration-200 hover:bg-primaryLight text-white w-fit py-3 px-6 text-[15px] rounded-sm"
              >
                TODAS AS NOTÍCIAS
              </a>
            </div>
          </div>
        </section>
      </SectionWrapper>
    </SectionArea>
  );
}

export default News;
