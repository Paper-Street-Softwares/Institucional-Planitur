import {
  Phone,
  Mail,
  Linkedin,
  Book,
  BookDown,
  BookMarked,
} from "lucide-react";
import MotionDivDownToUp from "../animation/MotionDivDownToUp";

export default function TeamMember({
  img,
  alt,
  name,
  phone,
  email,
  linkedIn,
  description,
  onOpenModal,
  role,
}) {
  return (
    <div className="flex flex-col items-center text-center font-secondFont mx-auto p-4 h-full justify-between bg-primaryDark/5 rounded-md max-w-[400px]">
      {/* Foto */}
      <MotionDivDownToUp>
        <img
          src={img}
          alt={alt}
          width={260}
          height={260}
          className="max-w-[260px] h-auto desktop1:w-[170px] desktop2:w-[200px] rounded-full object-cover"
        />
      </MotionDivDownToUp>

      {/* Nome */}
      <MotionDivDownToUp>
        <h2 className="mt-4 text-[16px] font-medium text-primaryDark">
          {name}
        </h2>
        <p className="text-sm text-primaryDark/80 mx-auto">{role}</p>
      </MotionDivDownToUp>
      {/* Botão para abrir modal */}
      <MotionDivDownToUp
        className={` flex flex-col items-center justify-center`}
      >
        {/* Telefone */}
        {phone && (
          <div className="flex items-center gap-2 font-light text-sm mt-3 text-gray-600">
            <Phone size={16} />
            <span>{phone}</span>
          </div>
        )}

        {/* Email */}
        {email && (
          <div className="flex items-center gap-2 text-sm mt-1 font-light text-gray-600">
            <Mail size={16} />
            <span>{email}</span>
          </div>
        )}

        <div className="flex gap-4 items-center mt-2">
          {description && (
            <button
              onClick={() => onOpenModal(description)}
              className="mt-3 px-4 py-2 text-sm border bg-primaryDark text-white rounded-full hover:scale-90 transition-all duration-500 flex gap-2 items-center outline-none"
            >
              <span>
                <BookMarked width={18} />
              </span>{" "}
              Ver mais
            </button>
          )}
          {/* LinkedIn */}
          {linkedIn && (
            <a
              href={linkedIn}
              target="_blank"
              rel="noreferrer"
              className="mt-4 bg-primaryDark/20 flex justify-center items-center w-8 h-8 rounded-md cursor-pointer hover:scale-90 duration-500 transition-all"
            >
              <Linkedin size={18} className="text-primaryDark" />
            </a>
          )}
        </div>
      </MotionDivDownToUp>
    </div>
  );
}
