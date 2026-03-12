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

  const sendToWhatsApp = () => {
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

    const phoneWhatsApp = "5592992951515";

    const text = `
Nova candidatura recebida pelo site.

Nome: ${name}
Cidade/Estado: ${location}
Telefone: ${phone}
E-mail: ${email}
Área de atuação: ${area}

Experiência:
${experience}

Currículo enviado pelo formulário.
`;

    const url = `https://wa.me/${phoneWhatsApp}?text=${encodeURIComponent(text)}`;

    window.open(url, "_blank");

    setName("");
    setLocation("");
    setPhone("");
    setEmail("");
    setArea("");
    setExperience("");
    setResume(null);

    setIsSubmitting(false);
  };

  const sendToEmail = () => {
    setIsSubmitting(true);
    const validationErrors = {};

    if (!name) validationErrors.name = "O campo Nome é obrigatório.";
    if (!phone) validationErrors.phone = "O campo Telefone é obrigatório.";
    if (!email) validationErrors.email = "O campo Email é obrigatório.";
    if (!contractInfo)
      validationErrors.contractInfo =
        "O campo Informações do contrato é obrigatório.";
    if (!type) validationErrors.type = "O campo Tipo é obrigatório.";
    if (!financedValue)
      validationErrors.financedValue =
        "O campo Valor Financiado é obrigatório.";
    if (!installments)
      validationErrors.installments =
        "O campo Quantidade de Parcelas é obrigatório.";
    if (!paidInstallments)
      validationErrors.paidInstallments =
        "O campo Quantidade de parcelas pagas é obrigatório.";
    if (!installmentValue)
      validationErrors.installmentValue =
        "O campo Valor da Parcela é obrigatório.";
    if (!lateInstallments)
      validationErrors.lateInstallments =
        "O campo Parcelas em atraso é obrigatório.";
    if (!message) validationErrors.message = "O campo Mensagem é obrigatório.";

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setIsSubmitting(false);
      return;
    }

    const templateParams = {
      name,
      phone,
      email,
      contractInfo,
      type,
      financedValue,
      installments,
      paidInstallments,
      installmentValue,
      lateInstallments,
      message,
    };

    emailjs
      .send(
        "service_gik4w8p", // substitua pelo seu Service ID
        "template_o4kc0ak", // substitua pelo seu Template ID
        templateParams,
        "8bJXn-qPMOzTraXbd", // substitua pela sua Public Key
      )
      .then(
        () => {
          alert("Mensagem enviada por email com sucesso!");
          setIsSubmitting(false);
          // Limpar campos
          setName("");
          setPhone("");
          setEmail("");
          setContractInfo("");
          setType("");
          setFinancedValue("");
          setInstallments("");
          setPaidInstallments("");
          setInstallmentValue("");
          setLateInstallments("");
          setMessage("");
          setErrors({});
        },
        (error) => {
          alert("Erro ao enviar email: " + error.text);
          setIsSubmitting(false);
        },
      );
  };

  return (
    <div className="bg-white shadow-lg p-6 rounded-[10px] w-[90%] max-w-[700px] h-auto font-secondFont">
      <div className=" text-paragraph3 phone3:text-paragraph4">
        {/* Nome */}
        <div className="mb-6">
          <label className="block font-medium mb-1 text-gray-400">
            Nome completo:
          </label>
          <div className="flex text-primaryDark">
            <div className="flex items-center justify-center w-12 px-1 bg-white shadow-md rounded-md">
              <User />
            </div>
            <input
              className="px-1 py-2 border-0 rounded-none bg-transparent border-b-2 border-black/30 w-[90%] ml-4 text-black outline-none"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Nome completo"
            />
          </div>
          {errors.name && <p className="text-red-500 mt-2">{errors.name}</p>}
        </div>

        {/* Cidade / Estado */}
        <div className="mb-6">
          <label className="block font-medium mb-1 text-gray-400">
            Cidade / Estado:
          </label>
          <div className="flex text-primaryDark">
            <div className="flex items-center justify-center w-12 px-1 bg-white shadow-md rounded-md">
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
          <div className="flex text-primaryDark">
            <div className="flex items-center justify-center w-12 px-1 bg-white shadow-md rounded-md">
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
          {errors.phone && <p className="text-red-500 mt-2">{errors.phone}</p>}
        </div>

        {/* Email */}
        <div className="mb-6">
          <label className="block font-medium mb-1 text-gray-400">Email:</label>
          <div className="flex text-primaryDark">
            <div className="flex items-center justify-center w-12 px-1 bg-white shadow-md rounded-md">
              <Mail />
            </div>
            <input
              className="px-1 py-2 border-0 rounded-none bg-transparent border-b-2 border-black/30 w-[90%] ml-4 text-black outline-none"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="E-mail"
            />
          </div>
          {errors.email && <p className="text-red-500 mt-2">{errors.email}</p>}
        </div>

        {/* Área */}
        <div className="mb-6">
          <label className="block font-medium mb-1 text-gray-400">
            Área de atuação:
          </label>
          <div className="flex text-primaryDark">
            <div className="flex items-center justify-center w-12 px-1 bg-white shadow-md rounded-md">
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
          <div className="flex text-primaryDark">
            <div className="flex items-start justify-center w-12 px-1 bg-white shadow-md rounded-md">
              <MessageCircle className="m-auto" />
            </div>
            <textarea
              className="px-1 py-2 border-0 rounded-none bg-transparent border-b-2 border-black/30 w-[90%] ml-4 text-black outline-none"
              value={experience}
              onChange={(e) => setExperience(e.target.value)}
              placeholder="Conte um pouco da sua experiência"
            />
          </div>
          {errors.experience && (
            <p className="text-red-500 mt-2">{errors.experience}</p>
          )}
        </div>

        {/* Upload currículo */}
        <div className="mb-6">
          <label className="block font-medium mb-1 text-gray-400">
            Upload do currículo:
          </label>
          <div className="flex text-primaryDark">
            <div className="flex items-center justify-center w-12 px-1 bg-white shadow-md rounded-md">
              <FileText />
            </div>
            <input
              className="px-1 py-2 w-[90%] ml-4"
              type="file"
              accept=".pdf,.doc,.docx"
              onChange={(e) => setResume(e.target.files[0])}
            />
          </div>
        </div>

        {/* Botão */}
        <ButtonReflexo
          type="button"
          className="flex items-center w-full text-white"
          onClick={sendToWhatsApp}
          disabled={isSubmitting}
          icon={content.texts.svgs.wpp}
          label={isSubmitting ? "Enviando..." : "Enviar Mensagem"}
        >
          <div className="flex items-center justify-center w-full">
            <img
              src={WhatsAppIcon}
              className="w-6 h-6 mr-2 phone2:w-8 phone2:h-8"
              alt="WhatsApp Icon"
            />
          </div>
        </ButtonReflexo>
      </div>
    </div>
  );
};

export default WhatsappForm;
