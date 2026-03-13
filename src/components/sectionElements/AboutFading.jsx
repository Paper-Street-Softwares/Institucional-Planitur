import content from "../../content/content";

export default function AboutFading() {
  return (
    <div className="relative font-secondFont text-paragraph4 text-paragraphLight overflow-hidden text-corOutrosTextosPreto/80">
      {content.texts.apresentation.paragraph}
      <div className="bottom-0 absolute w-full h-[80px] bg-gradient-to-b from-transparent to-terciary"></div>
    </div>
  );
}
