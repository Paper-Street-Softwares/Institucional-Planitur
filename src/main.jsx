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
import {
  ColorModeProvider,
  useColorMode,
} from "./context/UseContextArchive.jsx";
import GlobalClickEvent from "./context/GlobalClickEvent.jsx";
import RouteAbout from "./pages/Rotas/about/RouteAbout.jsx";
import RoutesFeatures from "./pages/Rotas/features/RoutesFeatures.jsx";
import Features1 from "./pages/Rotas/features/Features1.jsx";
import Features2 from "./pages/Rotas/features/Features2.jsx";
import Features3 from "./pages/Rotas/features/Features3.jsx";
import RouteContato from "./pages/Rotas/contato/RouteContato.jsx";
import RouteTeam from "./pages/Rotas/team/RouteTeam.jsx";

const mode = "LP";

function MainApp() {
  const { colorMode } = useColorMode();

  return (
    <>
      <GlobalClickEvent />
      <Router>
        <Routes>
          <Route path="/" element={<Index mode={mode} />} />
          <Route path="/about" element={<RouteAbout colorMode={colorMode} />} />
          <Route
            path="/contato"
            element={<RouteContato colorMode={colorMode} />}
          />
          <Route path="/team" element={<RouteTeam colorMode={colorMode} />} />

          <Route
            path="/features"
            element={<RoutesFeatures colorMode={colorMode} />}
          >
            <Route index element={<Features1 />} />
            <Route path="tecnicocursivo" element={<Features1 />} />
            <Route path="formativoeducacional" element={<Features2 />} />
            <Route
              path="pesquisaeproducaodeconhecimento"
              element={<Features3 />}
            />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <ColorModeProvider>
    <MainApp />
  </ColorModeProvider>,
);
