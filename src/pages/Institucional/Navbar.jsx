import React, { useState, useEffect } from "react";
import { Menu, ChevronDown, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileOfficeOpen, setMobileOfficeOpen] = useState(false);
  const [mobileAreasOpen, setMobileAreasOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [activeSection, setActiveSection] = useState("home");
  const [closeTimer, setCloseTimer] = useState(null);

  const location = useLocation();

  const sections = ["/", "office", "service", "team", "reconhecimento"];

  useEffect(() => {
    if (location.pathname !== "/" || mobileOpen) return;

    const observers = [];

    sections.forEach((id) => {
      const section = document.getElementById(id);
      if (!section) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(id);
          }
        },
        {
          root: null,
          rootMargin: "-40% 0px -55% 0px",
          threshold: 0,
        },
      );

      observer.observe(section);
      observers.push(observer);
    });

    return () => observers.forEach((observer) => observer.disconnect());
  }, [location.pathname, mobileOpen]);

  useEffect(() => {
    if (location.pathname !== "/") {
      setActiveSection(null);
    }
  }, [location.pathname]);

  const routeActive = () => {
    if (location.pathname === "/") return "home";
    if (location.pathname === "/contato") return "contato";
    if (location.pathname === "/about") return "office";
    if (location.pathname.startsWith("/features")) return "service";
    return null;
  };

  const currentRoute = routeActive();

  const handleOpen = (menu) => {
    if (closeTimer) clearTimeout(closeTimer);
    setOpenDropdown(menu);
  };

  const handleClose = () => {
    const timer = setTimeout(() => {
      setOpenDropdown(null);
    }, 300);
    setCloseTimer(timer);
  };

  const linkClass = (id) =>
    `relative transition duration-500 hover:text-primaryLight ${
      (location.pathname === "/" ? activeSection === id : currentRoute === id)
        ? "text-primaryLight"
        : "text-white"
    }`;

  const underline = (id) =>
    (location.pathname === "/"
      ? activeSection === id
      : currentRoute === id) && (
      <span className="absolute left-0 -bottom-2 w-full h-[2px] bg-primaryLight" />
    );

  return (
    <div
      className={`bg-primaryDark fixed w-full z-50 ${mobileOpen ? "" : " border-b-2 border-[#C03D1A]"}`}
    >
      <div className="max-w-7xl mx-auto px-0">
        <div className="flex items-center justify-between py-0">
          {/* LOGO */}
          <div className="w-[45%] tablet2:w-[20%] desktop1ex:w-[20%]">
            <Link to="/">
              <img
                src="https://miguelneto.com.br/wp-content/uploads/2025/04/MiguelNeto-LogoNegativo-Color-FundoTransparente.png"
                alt="Miguel Neto Advogados"
                className="w-full"
              />
            </Link>
          </div>

          {/* DESKTOP MENU */}
          <div className="hidden desktop1ex:flex items-center gap-5 text-white text-sm tracking-wide font-mainFont font-light">
            <Link to="/" className={linkClass()}>
              HOME
              {underline("home")}
            </Link>

            <span className="text-primaryLight">•</span>

            {/* NOSSO ESCRITÓRIO */}
            <div
              className="relative"
              onMouseEnter={() => handleOpen("escritorio")}
              onMouseLeave={handleClose}
            >
              <button type="button" className={linkClass()}>
                NOSSO ESCRITÓRIO{" "}
                <ChevronDown size={16} className="inline ml-1" />
                {underline("office")}
              </button>

              <div
                className={`absolute top-full left-0 mt-4 bg-primaryDark uppercase text-white shadow-xl w-56 py-3 transition-all duration-300 ${
                  openDropdown === "escritorio"
                    ? "opacity-100 visible"
                    : "opacity-0 invisible"
                }`}
              >
                <Link
                  to="/about"
                  className="block px-4 py-2 hover:text-primaryLight transition"
                >
                  Sobre Nós
                </Link>

                <a
                  href="/team"
                  className="block px-4 py-2 hover:text-primaryLight transition"
                >
                  Nossa equipe
                </a>

                {/* <a
                  href="#office"
                  className="block px-4 py-2 hover:text-primaryLight transition"
                >
                  Carreira
                </a> */}
              </div>
            </div>

            <span className="text-primaryLight">•</span>

            {/* ÁREAS DE ATUAÇÃO */}
            <div
              className="relative uppercase"
              onMouseEnter={() => handleOpen("areas")}
              onMouseLeave={handleClose}
            >
              <button
                type="button"
                className={linkClass()}
                onClick={() => navigate("/features")}
              >
                ÁREAS DE ATUAÇÃO
                <ChevronDown size={16} className="inline ml-1" />
                {underline("service")}
              </button>

              <div
                className={`absolute top-full left-0 mt-4 bg-primaryDark shadow-xl w-64 py-3 transition-all duration-300 normal-case ${
                  openDropdown === "areas"
                    ? "opacity-100 visible"
                    : "opacity-0 invisible"
                }`}
              >
                <Link
                  to="/features/ambiental"
                  className="block px-4 py-2 hover:text-primaryLight"
                >
                  Ambiental, ESG e Energia
                </Link>
                <Link
                  to="/features/compliance"
                  className="block px-4 py-2 hover:text-primaryLight"
                >
                  Compliance e Investigações Corporativas
                </Link>
                <Link
                  to="/features/concorrencial"
                  className="block px-4 py-2 hover:text-primaryLight"
                >
                  Concorrencial
                </Link>
                <Link
                  to="/features/contencioso"
                  className="block px-4 py-2 hover:text-primaryLight"
                >
                  Contencioso
                </Link>
              </div>
            </div>

            <span className="text-primaryLight">•</span>

            {/* <a href="#team" className={linkClass()}>
              ADVOGADOS
              {underline("team")}
            </a>

            <span className="text-primaryLight">•</span> */}

            {/* <a href="#reconhecimento" className={linkClass()}>
              RECONHECIMENTOS
              {underline("reconhecimento")}
            </a>

            <span className="text-primaryLight">•</span> */}

            <Link to="/contato" className={linkClass()}>
              CONTATO
              {underline("contato")}
            </Link>
          </div>

          {/* RIGHT SIDE */}
          <section className="flex gap-4">
            <div className="desktop1ex:hidden flex items-center gap-4">
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="text-primaryLight"
              >
                {mobileOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>

            <div className="flex flex-col gap-0">
              <button className="text-white">PT</button>
              <button className="text-white/40 hover:text-white">EN</button>
            </div>
          </section>
        </div>
      </div>

      {/* MOBILE MENU */}
      <div
        className={`xl:hidden bg-primaryDark text-white px-6 text-sm space-y-4 font-light
  transition-all duration-300 ease-out transform origin-top
  ${
    mobileOpen
      ? "scale-y-100 opacity-100 translate-y-0 max-h-screen"
      : "scale-y-0 opacity-0 -translate-y-4 max-h-0 overflow-hidden"
  }`}
      >
        <Link
          to="/"
          onClick={() => setMobileOpen(false)}
          className={`block ${linkClass("/")}`}
        >
          HOME
        </Link>

        <div>
          <button
            onClick={() => {
              setMobileOfficeOpen(!mobileOfficeOpen);
              setMobileAreasOpen(false); // fecha o outro
            }}
            className={`w-full flex items-center justify-between ${linkClass("office")}`}
          >
            <span>NOSSO ESCRITÓRIO</span>
            <ChevronDown
              size={16}
              className={`transition-transform ${
                mobileOfficeOpen ? "rotate-180" : ""
              }`}
            />
          </button>

          {mobileOfficeOpen && (
            <div className="mt-2 ml-4 flex flex-col gap-2 text-sm uppercase">
              <Link
                to="/about"
                onClick={() => setMobileOpen(false)}
                className={linkClass("office")}
              >
                Sobre Nós
              </Link>
              <a href="/team" onClick={() => setMobileOpen(false)}>
                Nossa equipe
              </a>
              {/* <a href="#office" onClick={() => setMobileOpen(false)}>
                Carreira
              </a> */}
            </div>
          )}
        </div>

        <div>
          <button
            onClick={() => {
              setMobileAreasOpen(!mobileAreasOpen);
              setMobileOfficeOpen(false);
            }}
            className={`w-full flex items-center justify-between ${linkClass("features")}`}
          >
            <span>ÁREAS DE ATUAÇÃO</span>
            <ChevronDown
              size={16}
              className={`transition-transform ${
                mobileAreasOpen ? "rotate-180" : ""
              }`}
            />
          </button>

          {mobileAreasOpen && (
            <div className="mt-2 ml-4 flex flex-col gap-2 text-sm normal-case">
              <Link
                to="/features/ambiental"
                onClick={() => setMobileOpen(false)}
                className={`${linkClass("/features/ambiental")}`}
              >
                Ambiental, ESG e Energia
              </Link>
              <Link
                to="/features/compliance"
                onClick={() => setMobileOpen(false)}
                className={`${linkClass("/features/compliance")}`}
              >
                Compliance e Investigações Corporativas
              </Link>
              <Link
                to="/features/concorrencial"
                onClick={() => setMobileOpen(false)}
                className={`${linkClass("/features/concorrencial")}`}
              >
                Concorrencial
              </Link>
              <Link
                to="/features/contencioso"
                onClick={() => setMobileOpen(false)}
                className={`${linkClass("/features/contencioso")}`}
              >
                Contencioso
              </Link>
            </div>
          )}
        </div>

        <Link
          to="/contato"
          onClick={() => setMobileOpen(false)}
          className={`block ${linkClass("contato")} pb-4`}
        >
          CONTATO
        </Link>

        {/* <div className="flex gap-3 pt-4 border-t border-white/20">
            <button>PT</button>
            <button className="text-white/50">EN</button>
          </div> */}
      </div>
    </div>
  );
}

export default Navbar;
