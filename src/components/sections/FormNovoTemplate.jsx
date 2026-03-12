import React from "react";
import SectionArea from "../sectionElements/SectionArea";
import SectionWrapper from "../sectionElements/SectionWrapper";
import SectionHeaderNovo from "../sectionElements/SectionHeaderNovo";
import WhatsappForm from "../interactives/WhatsappForm";
import content from "../../content/content";

function FormNovoTemplate() {
  return (
    <SectionArea>
      <SectionWrapper>
        <SectionHeaderNovo
          miniTitle=""
          title="Quer colaborar com a PLANITUR em projetos e ações técnicas?"
          subtitle=""
        />
        <WhatsappForm />
      </SectionWrapper>
    </SectionArea>
  );
}

export default FormNovoTemplate;
