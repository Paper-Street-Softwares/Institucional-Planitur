import React from "react";
import { Calendar, User, ArrowRight } from "lucide-react";

function NewsCardsInstitucional({ imageUrl, title, link }) {
  return (
    <a
      href={link}
      className="overflow-hidden transition-all duration-300 flex flex-col
                 tablet2:w-[48%] desktop1:w-[487px] desktop1ex:w-[228px] desktop2:w-[280px]"
    >
      <div className="relative w-full h-auto overflow-hidden">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-auto object-cover transition-transform duration-700"
        />
      </div>

      <div className="flex flex-col flex-1">
        <h1 className="font-mainFont text-lg font-bold text-primaryLight mt-3 leading-6">
          {title}
        </h1>

        <div className="mt-auto pt-1">
          <button className="text-[#0f2a3a] text-xs font-medium flex items-center">
            Leia Mais
          </button>
        </div>
      </div>
    </a>
  );
}

export default NewsCardsInstitucional;
