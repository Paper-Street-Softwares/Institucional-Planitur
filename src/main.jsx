import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ReactDOM from "react-dom/client";
import "./styles/utilities.css";
import "./index.css";

import $ from "jquery";
window.$ = $;
window.jQuery = $;

import "malihu-custom-scrollbar-plugin/jquery.mCustomScrollbar.css";
import "malihu-custom-scrollbar-plugin/jquery.mCustomScrollbar.concat.min.js";

import Index from "./pages/Index.jsx";

import { useColorMode } from "./context/UseContextArchive.jsx";
import { ColorModeProvider } from "./context/UseContextArchive.jsx";
import GlobalClickEvent from "./context/GlobalClickEvent.jsx";
import RouteAbout from "./pages/Rotas/about/RouteAbout.jsx";
import { color } from "framer-motion";
import RoutesFeatures from "./pages/Rotas/features/RoutesFeatures.jsx";
import Features1 from "./pages/Rotas/features/Features1.jsx";
import Features2 from "./pages/Rotas/features/Features2.jsx";
import Features3 from "./pages/Rotas/features/Features3.jsx";
import FeaturesContencioso from "./pages/Rotas/features/FeaturesContencioso.jsx";
import RouteContato from "./pages/Rotas/contato/RouteContato.jsx";
import RouteTeam from "./pages/Rotas/team/RouteTeam.jsx";

// Altere aqui para "LP" ou "site"
const mode = "LP"; // só muda isso e o resto se adapta

ReactDOM.createRoot(document.getElementById("root")).render(
  <ColorModeProvider>
    <GlobalClickEvent />{" "}
    <Router>
      <Routes>
        <Route path="/" element={<Index mode={mode} />} />
        <Route path="/about" element={<RouteAbout colorMode={mode} />} />
        <Route path="/contato" element={<RouteContato colorMode={mode} />} />
        <Route path="/team" element={<RouteTeam colorMode={mode} />} />

        <Route path="/features" element={<RoutesFeatures />}>
          <Route index element={<Features1 />} />
          <Route path="tecnicocursivo" element={<Features1 />} />
          <Route path="formativoeducacional" element={<Features2 />} />
          <Route
            path="pesquisaeproducaodeconhecimento"
            element={<Features3 />}
          />
          {/* <Route path="contencioso" element={<FeaturesContencioso />} /> */}
        </Route>
      </Routes>
    </Router>
  </ColorModeProvider>,
);
