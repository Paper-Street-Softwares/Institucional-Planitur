/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import WhatsAppIcon from "../../assets/importAssets/WhatsAppIcon.webp";
import emailjs from "emailjs-com";
import {
  User,
  Phone,
  Mail,
  FileText,
  ListChecks,
  MapPin,
  MessageCircle,
} from "lucide-react";
import ButtonReflexo from "./ButtonReflexo";
import content from "../../content/content";

const WhatsappForm = () => {
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [area, setArea] = useState("");
  const [experience, setExperience] = useState("");
  const [resume, setResume] = useState(null);

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  //   const sendToWhatsApp = () => {
  //     setIsSubmitting(true);

  //     const validationErrors = {};

  //     if (!name) validationErrors.name = "O campo Nome é obrigatório.";
  //     if (!location)
  //       validationErrors.location = "O campo Cidade/Estado é obrigatório.";
  //     if (!phone) validationErrors.phone = "O campo Telefone é obrigatório.";
  //     if (!email) validationErrors.email = "O campo Email é obrigatório.";
  //     if (!area) validationErrors.area = "O campo Área é obrigatório.";
  //     if (!experience)
  //       validationErrors.experience = "O campo Experiência é obrigatório.";

  //     if (Object.keys(validationErrors).length > 0) {
  //       setErrors(validationErrors);
  //       setIsSubmitting(false);
  //       return;
  //     }

  //     const phoneWhatsApp = "5592992951515";

  //     const text = `
  // Nova candidatura recebida pelo site.

  // Nome: ${name}
  // Cidade/Estado: ${location}
  // Telefone: ${phone}
  // E-mail: ${email}
  // Área de atuação: ${area}

  // Experiência:
  // ${experience}

  // Currículo enviado pelo formulário.
  // `;

  //     const url = `https://wa.me/${phoneWhatsApp}?text=${encodeURIComponent(text)}`;

  //     window.open(url, "_blank");

  //     setName("");
  //     setLocation("");
  //     setPhone("");
  //     setEmail("");
  //     setArea("");
  //     setExperience("");
  //     setResume(null);

  //     setIsSubmitting(false);
  //   };

  const sendToEmail = () => {
    setIsSubmitting(true);

    const validationErrors = {};

    if (!name) validationErrors.name = "O campo Nome é obrigatório.";
    if (!location)
      validationErrors.location = "O campo Cidade/Estado é obrigatório.";
    if (!phone) validationErrors.phone = "O campo Telefone é obrigatório.";
    if (!email) validationErrors.email = "O campo Email é obrigatório.";
    if (!area) validationErrors.area = "O campo Área é obrigatório.";
    if (!experience)
      validationErrors.experience = "O campo Experiência é obrigatório.";

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setIsSubmitting(false);
      return;
    }

    const templateParams = {
      name,
      location,
      phone,
      email,
      area,
      experience,
    };

    emailjs
      .send(
        "service_A_Definir",
        "template_A_Definir",
        templateParams,
        "8bJXn-A_Definir",
      )
      .then(
        () => {
          alert("Mensagem enviada por email com sucesso!");
          setIsSubmitting(false);

          setName("");
          setLocation("");
          setPhone("");
          setEmail("");
          setArea("");
          setExperience("");
          setResume(null);

          setErrors({});
        },
        (error) => {
          alert("Erro ao enviar email: " + error.text);
          setIsSubmitting(false);
        },
      );
  };

  return (
    <div className="bg-white shadow-lg p-6 rounded-[10px] w-full max-w-[1215px] h-auto font-secondFont">
      <div className="flex flex-col gap-0 tablet2:flex-row tablet2:gap-6 text-paragraph3 phone3:text-paragraph4">
        <div className="tablet2:w-[55%]">
          {/* Nome */}
          <div className="mb-6">
            <label className="block font-medium mb-1 text-gray-400">
              Nome completo:
            </label>
            <div className="flex text-primaryLight">
              <div className="flex items-center justify-center w-12 px-1 bg-primaryLight/15 rounded-md">
                <User />
              </div>
              <input
                className="px-1 py-2 border-0 rounded-none bg-transparent border-b-2 border-black/30 w-[90%] ml-4 text-black outline-none"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Seu Nome completo"
              />
            </div>
            {errors.name && <p className="text-red-500 mt-2">{errors.name}</p>}
          </div>

          {/* Cidade / Estado */}
          <div className="mb-6">
            <label className="block font-medium mb-1 text-gray-400">
              Cidade / Estado:
            </label>
            <div className="flex text-primaryLight">
              <div className="flex items-center justify-center w-12 px-1 bg-primaryLight/15 rounded-md">
                <MapPin />
              </div>
              <input
                className="px-1 py-2 border-0 rounded-none bg-transparent border-b-2 border-black/30 w-[90%] ml-4 text-black outline-none"
                type="text"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                placeholder="Ex: São Paulo / SP"
              />
            </div>
            {errors.location && (
              <p className="text-red-500 mt-2">{errors.location}</p>
            )}
          </div>

          {/* Telefone */}
          <div className="mb-6">
            <label className="block font-medium mb-1 text-gray-400">
              Telefone:
            </label>
            <div className="flex text-primaryLight">
              <div className="flex items-center justify-center w-12 px-1 bg-primaryLight/15 rounded-md">
                <Phone />
              </div>
              <input
                className="px-1 py-2 border-0 rounded-none bg-transparent border-b-2 border-black/30 w-[90%] ml-4 text-black outline-none"
                type="tel"
                value={phone}
                onChange={(e) => {
                  let value = e.target.value;

                  value = value.replace(/\D/g, "");
                  value = value.substring(0, 11);

                  if (value.length > 6) {
                    value = `(${value.substring(0, 2)}) ${value.substring(
                      2,
                      7,
                    )}-${value.substring(7)}`;
                  } else if (value.length > 2) {
                    value = `(${value.substring(0, 2)}) ${value.substring(2)}`;
                  } else if (value.length > 0) {
                    value = `(${value}`;
                  }

                  setPhone(value);
                }}
                placeholder="(00) 00000-0000"
              />
            </div>
            {errors.phone && (
              <p className="text-red-500 mt-2">{errors.phone}</p>
            )}
          </div>
        </div>
        <div className="tablet2:w-[55%]">
          {/* Email */}
          <div className="mb-6">
            <label className="block font-medium mb-1 text-gray-400">
              Email:
            </label>
            <div className="flex text-primaryLight">
              <div className="flex items-center justify-center w-12 px-1 bg-primaryLight/15 rounded-md">
                <Mail />
              </div>
              <input
                className="px-1 py-2 border-0 rounded-none bg-transparent border-b-2 border-black/30 w-[90%] ml-4 text-black outline-none"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Seu E-mail"
              />
            </div>
            {errors.email && (
              <p className="text-red-500 mt-2">{errors.email}</p>
            )}
          </div>
          {/* Área */}
          <div className="mb-6">
            <label className="block font-medium mb-1 text-gray-400">
              Área de atuação:
            </label>
            <div className="flex text-primaryLight">
              <div className="flex items-center justify-center w-12 px-1 bg-primaryLight/15 rounded-md">
                <ListChecks />
              </div>
              <input
                className="px-1 py-2 border-0 rounded-none bg-transparent border-b-2 border-black/30 w-[90%] ml-4 text-black outline-none"
                type="text"
                value={area}
                onChange={(e) => setArea(e.target.value)}
                placeholder="Ex: Direito Civil"
              />
            </div>
            {errors.area && <p className="text-red-500 mt-2">{errors.area}</p>}
          </div>

          {/* Experiência */}
          <div className="mb-6">
            <label className="block font-medium mb-1 text-gray-400">
              Breve resumo da experiência:
            </label>
            <div className="flex text-primaryLight">
              <div className="flex items-start justify-center w-12 px-1 bg-primaryLight/15 rounded-md">
                <MessageCircle className="m-auto" />
              </div>
              <textarea
                className="px-1 py-2 border-0 h-12 rounded-none border-b-2 border-black/30 w-[90%] bg-primaryLight/10 rounded-tl-md rounded-tr-md ml-4 text-black outline-none"
                value={experience}
                onChange={(e) => setExperience(e.target.value)}
                // placeholder="Conte-nos sua experiência"
              />
            </div>
            {errors.experience && (
              <p className="text-red-500 mt-2">{errors.experience}</p>
            )}
          </div>
        </div>
      </div>
      {/* Upload currículo */}
      <div className="mb-6">
        <label className="block font-medium mb-1 text-gray-400">
          Upload do currículo:
        </label>

        <div className="flex flex-col tablet1:flex-row gap-2">
          <div className="flex text-primaryLight items-center">
            <div className="flex items-center justify-center w-12 py-2 bg-primaryLight/15 rounded-md">
              <FileText />
            </div>

            <label className="ml-4 cursor-pointer bg-primaryLight text-white px-4 py-2 rounded-md">
              Escolher arquivo
              <input
                type="file"
                accept=".pdf,.doc,.docx"
                className="hidden"
                onChange={(e) => setResume(e.target.files[0])}
              />
            </label>
          </div>
          <p className="text-sm text-gray-400 mt-2">
            {resume ? resume.name : "Nenhum arquivo escolhido"}
          </p>
        </div>
      </div>
      {/* Botão */}
      <div className="flex justify-center">
        <ButtonReflexo
          type="button"
          className="flex items-center w-fit text-white"
          bgClass={`bg-primaryLight`}
          onClick={sendToEmail}
          icon={<Mail width={18} />}
          disabled={isSubmitting}
          label={isSubmitting ? "Enviando..." : "Enviar Formulário"}
        ></ButtonReflexo>
      </div>
    </div>
  );
};

export default WhatsappForm;
