import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SiteLayout } from "./components/SiteLayout";
import { AboutPage } from "./pages/AboutPage";
import { ContactPage } from "./pages/ContactPage";
import { HomePage } from "./pages/HomePage";
import { ProjectEntryPage } from "./pages/ProjectEntryPage";
import { ProjectsPage } from "./pages/ProjectsPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<SiteLayout />}>
          <Route index element={<HomePage />} />
          <Route path="proyectos" element={<ProjectsPage />} />
          <Route path="proyectos/:slug" element={<ProjectEntryPage />} />
          <Route path="sobre-nosotros" element={<AboutPage />} />
          <Route path="contacto" element={<ContactPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
