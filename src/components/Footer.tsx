import { Link } from "react-router-dom";
import { PROJECTS, projectPath } from "../lib/projects";

export function Footer() {
  return (
    <footer className="ap-footer">
      <div className="ap-footer__inner">
        <div className="ap-footer__note">
          <p>
            Atrio Casa diseña arquitectura interior, casas, hoteles pequeños y comercios desde el centro
            de Mérida. La primera visita se agenda por correo o WhatsApp.
          </p>
          <p className="at-credits">
            Fotografías de Mérida y Yucatán vía Wikimedia Commons: “Casa Montejo, patio central” y “Casa
            del Lagarto, patio exterior” de EMC studio (CC0); “Casona en calles 50 y 61” de Inri (CC0);
            “Esquina de El Colonial” (CC0); “Hacienda Tabi, Yucatán” de Sharon Hahn Darlin (CC BY 2.0).
          </p>
        </div>

        <div className="ap-footer__cols">
          <div>
            <h3>Proyectos</h3>
            <ul>
              {PROJECTS.slice(0, 4).map((p) => (
                <li key={p.id}>
                  <Link to={projectPath(p.id)}>{p.title}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3>Más proyectos</h3>
            <ul>
              {PROJECTS.slice(4, 8).map((p) => (
                <li key={p.id}>
                  <Link to={projectPath(p.id)}>{p.title}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3>Estudio</h3>
            <ul>
              <li>
                <Link to="/sobre-nosotros">Equipo</Link>
              </li>
              <li>
                <Link to="/proyectos">Todos los proyectos</Link>
              </li>
              <li>
                <Link to="/contacto">Contacto</Link>
              </li>
            </ul>
          </div>
          <div>
            <h3>Visítanos</h3>
            <ul>
              <li>Centro, Mérida, Yucatán</li>
              <li>
                <a href="mailto:hola@atriocasa.mx">hola@atriocasa.mx</a>
              </li>
              <li>
                <a href="https://wa.me/529990000000">+52 999 000 0000</a>
              </li>
              <li>
                <a href="https://www.instagram.com/">Instagram</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="ap-footer__legal">
          <span>© {new Date().getFullYear()} Atrio Casa. Sitio de demostración.</span>
          <a href="#top">Volver arriba</a>
        </div>
      </div>
    </footer>
  );
}
