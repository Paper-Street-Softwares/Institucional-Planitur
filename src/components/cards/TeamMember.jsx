import { Phone, Mail, Linkedin } from "lucide-react";

export default function TeamMember({
  img,
  alt,
  name,
  phone,
  email,
  linkedIn,
  description,
  onOpenModal,
}) {
  return (
    <div className="flex flex-col items-center text-center font-secondFont mx-auto p-4 justify-between">
      {/* Foto */}
      <img
        src={img}
        alt={alt}
        width={260}
        height={260}
        className="w-[260px] h-auto tablet2:w-[300px] desktop1:w-[170px] desktop2:w-[200px] rounded-full object-cover"
      />

      {/* Nome */}
      <h2 className="mt-6 text-[16px] font-medium text-primaryDark">{name}</h2>

      {/* Botão para abrir modal */}
      {description && (
        <button
          onClick={() => onOpenModal(description)}
          className="mt-3 px-4 py-2 text-sm border border-primaryDark text-primaryDark rounded-full hover:bg-primaryDark hover:text-white transition"
        >
          Ver mais
        </button>
      )}

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

      {/* LinkedIn */}
      {linkedIn && (
        <a className="p-3" href={linkedIn} target="_blank" rel="noreferrer">
          <Linkedin size={24} />
        </a>
      )}
    </div>
  );
}
