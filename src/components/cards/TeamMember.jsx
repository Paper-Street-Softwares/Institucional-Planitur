import { Phone, Mail } from "lucide-react";

export default function TeamMember({ img, alt, name, phone, email }) {
  return (
    <div className="flex flex-col items-center text-center font-secondFont mx-auto p-4">
      {/* Foto */}
      <img
        src={img}
        alt={alt}
        width={260}
        height={260}
        className="w-[260px] h-auto tablet2:w-[300px] desktop1:w-[170px] desktop2:w-[200px] rounded-full object-cover"
      />

      {/* Nome */}
      <h2 className="mt-6 text-[16px] font-medium text-orange-600">{name}</h2>

      {/* Telefone */}
      <div className="flex items-center gap-2 font-light text-sm mt-0 text-gray-600">
        <Phone size={16} />
        <span>{phone}</span>
      </div>

      {/* Email */}
      <div className="flex items-center gap-2 text-sm mt-0 font-light text-gray-600">
        <Mail size={16} />
        <span>{email}</span>
      </div>
    </div>
  );
}
