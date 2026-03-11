import { motion } from "framer-motion";
import { CheckCircle2, ShieldCheck, Zap, UserCheck, Clock } from "lucide-react";
import SectionArea from "../sectionElements/SectionArea.jsx";
import SectionWrapper from "../sectionElements/SectionWrapper.jsx";
import { Check } from "lucide-react";
import content from "../../content/content.jsx";

export function Diferences({ colorMode }) {
  let backgroundMode,
    text,
    textOpacity,
    textDestaque,
    bgCards,
    borderSVG,
    bgContainer;
  switch (colorMode) {
    case "light":
      backgroundMode = "bg-transparent";
      text = "text-corTitulosPreto";
      textOpacity = "text-corOutrosTextosPreto";
      textDestaque = "text-primaryLight";
      bgCards = "bg-white shadow";
      borderSVG = "border-primaryLight";
      bgContainer = "bg-terciary";
      break;

    case "dark":
      backgroundMode = "bg-transparent";
      text = "text-corTitulosBranca";
      textOpacity = "text-corOutrosTextosBranca";
      textDestaque = "text-primaryLight";
      bgCards = "bg-black";
      borderSVG = "border-primaryLight";
      bgContainer = "bg-darkOpacity";
      break;

    case "defaultDark":
      backgroundMode = "bg-transparent";
      text = "text-corTitulosPreto";
      textOpacity = "text-corOutrosTextosPreto";
      textDestaque = "text-primaryLight";
      bgCards = "bg-white shadow";
      borderSVG = "border-primaryLight";
      bgContainer = "bg-terciary";
      break;

    case "defaultLight":
      backgroundMode = "bg-transparent";
      text = "text-corTitulosBranca";
      textOpacity = "text-corOutrosTextosBranca";
      textDestaque = "text-primaryLight";
      bgCards = "bg-primaryLight";
      borderSVG = "border-primaryLight";
      bgContainer = "";
  }
  const differentials = Object.values(content.texts.diferences.cards);

  return (
    <SectionArea
      paddingtop={false}
      className={`py-24 relative overflow-hidden ${backgroundMode}`}
    >
      <SectionWrapper>
        <div className="container mx-auto relative z-10">
          <div className="max-w-5xl mx-auto">
            <div
              className={`backdrop-blur-sm rounded-xl overflow-hidden shadow-2xl ${bgContainer}`}
            >
              <div className="p-8 md:p-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  <div className="space-y-6 text-left">
                    <motion.div
                      initial={{ opacity: 0, x: -50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.8, ease: "easeOut" }}
                      className={`text-sm font-bold tracking-wides uppercase block font-secondFont ${text}`}
                    >
                      {content.texts.diferences.miniTag}
                    </motion.div>
                    <motion.h2
                      initial={{ opacity: 0, x: -50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.8, ease: "easeOut" }}
                      className={`text-3xl md:text-4xl lg:text-5xl font-mainFont font-bold leading-tight ${text}`}
                    >
                      {content.texts.diferences.title}
                    </motion.h2>
                    <motion.p
                      initial={{ opacity: 0, x: -50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.8, ease: "easeOut" }}
                      className={`text-lg leading-relaxed border-l-2 ${borderSVG} font-secondFont pl-6 ${textOpacity}`}
                    >
                      {content.texts.diferences.subtitle}
                    </motion.p>
                  </div>

                  <div className="space-y-4">
                    {differentials.map((item, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="flex items-center gap-4 p-4 rounded-xl bg-white/[0.03] border border-white/5 group hover:bg-white/[0.05] transition-colors"
                      >
                        <div
                          className={`w-auto p-1 rounded-lg flex items-center justify-center ${bgCards} group-hover:scale-110 transition-transform text-black`}
                        >
                          <span>
                            {" "}
                            <item.icon className={`w-5 h-5 ${textDestaque}`} />
                          </span>
                        </div>
                        <span
                          className={`font-bold text-lg font-secondFont ${textOpacity}`}
                        >
                          {item.text}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>
    </SectionArea>
  );
}
