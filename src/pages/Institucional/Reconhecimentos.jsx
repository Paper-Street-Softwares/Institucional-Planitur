import React from "react";
import SectionArea from "../../components/sectionElements/SectionArea";
import SectionHeaderNovo from "../../components/sectionElements/SectionHeaderNovo";
import SectionWrapper from "../../components/sectionElements/SectionWrapper";
import image1 from "../../assets/imgs/socialProof/img1.webp";
import image2 from "../../assets/imgs/socialProof/img2.webp";
import image3 from "../../assets/imgs/socialProof/img3.webp";
import image4 from "../../assets/imgs/socialProof/img4.webp";
import image5 from "../../assets/imgs/socialProof/img5.webp";
import image6 from "../../assets/imgs/socialProof/img6.webp";
import image7 from "../../assets/imgs/socialProof/img7.webp";
import { Carousel } from "primereact/carousel";
import "primereact/resources/themes/lara-light-blue/theme.css"; // ou outro tema

function Reconhecimentos({ colorMode }) {
  const logos = [
    { src: image1, alt: "Logo 1" },
    { src: image2, alt: "Logo 2" },
    { src: image3, alt: "Logo 3" },
    { src: image4, alt: "Logo 4" },
    { src: image5, alt: "Logo 5" },
    { src: image6, alt: "Logo 6" },
    { src: image7, alt: "Logo 7" },
  ];

  const responsiveOptions = [
    { breakpoint: "1400px", numVisible: 2, numScroll: 1 },
    { breakpoint: "1199px", numVisible: 3, numScroll: 1 },
    { breakpoint: "767px", numVisible: 2, numScroll: 1 },
    { breakpoint: "575px", numVisible: 1, numScroll: 1 },
  ];

  const itemTemplate = (item) => {
    return (
      <div className="flex justify-center items-center h-40">
        <img
          src={item.src}
          alt={item.alt}
          className="max-h-full object-contain"
        />
      </div>
    );
  };

  return (
    <SectionArea>
      <SectionWrapper>
        <div className="flex flex-col tablet2:flex-row items-center gap-6">
          <SectionHeaderNovo
            colorMode={colorMode}
            title="Reconhecimentos"
            subtitle="O Miguel Neto Advogados é destaque nas principais publicações do mercado jurídico."
            type="article"
            className="max-w-[300px]"
          />
          <div className="w-[90%] mx-auto">
            <Carousel
              value={logos}
              numVisible={3}
              numScroll={1}
              responsiveOptions={responsiveOptions}
              circular
              showIndicators
              autoplayInterval={false}
              itemTemplate={itemTemplate}
            />
          </div>{" "}
        </div>
      </SectionWrapper>
    </SectionArea>
  );
}

export default Reconhecimentos;
