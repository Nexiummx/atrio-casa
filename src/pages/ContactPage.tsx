import { FormEvent, useState } from "react";
import { motion } from "framer-motion";
import { fadeUpInView, easePremium, buttonTap } from "../lib/animations";

const inputClass =
  "peer w-full border-0 border-b border-primary-border bg-transparent py-4 font-sans text-sm font-light text-ink-primary outline-none transition-[border-color] duration-atrio-fast ease-atrio placeholder:text-transparent focus:border-accent-copper";

const labelFloating =
  "pointer-events-none absolute left-0 origin-left font-sans text-sm font-light text-ink-secondary transition-all duration-atrio-fast ease-atrio";

export function ContactPage() {
  const [projectType, setProjectType] = useState("");
  const [budget, setBudget] = useState("");

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget).entries());
    console.log("Atrio Casa — consulta:", data);
  };

  const labelForSelect = (hasValue: boolean) =>
    [
      labelFloating,
      hasValue
        ? "-top-2 text-xs text-accent-copper"
        : "top-4 group-focus-within:-top-2 group-focus-within:text-xs group-focus-within:text-accent-copper",
    ].join(" ");

  return (
    <div className="bg-primary-bg pb-20 pt-8 sm:pb-28 sm:pt-12 md:pb-32">
      <div className="mx-auto grid max-w-[90rem] grid-cols-1 gap-12 px-4 sm:gap-16 sm:px-6 md:gap-20 md:px-10 lg:grid-cols-2 lg:gap-24 lg:px-12 xl:px-16 2xl:px-20">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: easePremium }}
        >
          <h1 className="font-display text-[clamp(2.25rem,5vw+1rem,4.5rem)] font-light leading-[0.95] tracking-tight text-ink-primary md:text-6xl xl:text-7xl">
            Empecemos.
          </h1>
          <div className="mt-10 space-y-6 font-sans text-sm font-light leading-loose text-ink-secondary sm:mt-12 sm:space-y-8">
            <p>
              <span className="block text-xs uppercase tracking-[0.2em] text-ink-muted">Email</span>
              hola@atriocasa.mx
            </p>
            <p>
              <span className="block text-xs uppercase tracking-[0.2em] text-ink-muted">
                Teléfono
              </span>
              +52 999 000 0000
            </p>
            <p>
              <span className="block text-xs uppercase tracking-[0.2em] text-ink-muted">
                Estudio
              </span>
              Calle 60 #482, García Ginerés
              <br />
              Mérida, Yucatán, México
            </p>
            <p>
              <span className="block text-xs uppercase tracking-[0.2em] text-ink-muted">
                Horarios
              </span>
              Lun — Vie · 9:00 — 18:00
              <br />
              Cita previa recomendada.
            </p>
          </div>
        </motion.div>

        <motion.form
          onSubmit={onSubmit}
          className="space-y-8 sm:space-y-10"
          variants={fadeUpInView}
          initial="hidden"
          animate="show"
        >
          <div className="group relative pt-2">
            <input id="nombre" name="nombre" className={inputClass} placeholder=" " required />
            <label
              htmlFor="nombre"
              className={`${labelFloating} top-4 peer-focus:-top-2 peer-focus:text-xs peer-focus:text-accent-copper peer-[:not(:placeholder-shown)]:-top-2 peer-[:not(:placeholder-shown)]:text-xs`}
            >
              Nombre
            </label>
          </div>
          <div className="group relative pt-2">
            <input
              id="email"
              name="email"
              type="email"
              className={inputClass}
              placeholder=" "
              required
            />
            <label
              htmlFor="email"
              className={`${labelFloating} top-4 peer-focus:-top-2 peer-focus:text-xs peer-focus:text-accent-copper peer-[:not(:placeholder-shown)]:-top-2 peer-[:not(:placeholder-shown)]:text-xs`}
            >
              Email
            </label>
          </div>
          <div className="group relative pt-2">
            <input id="telefono" name="telefono" className={inputClass} placeholder=" " />
            <label
              htmlFor="telefono"
              className={`${labelFloating} top-4 peer-focus:-top-2 peer-focus:text-xs peer-focus:text-accent-copper peer-[:not(:placeholder-shown)]:-top-2 peer-[:not(:placeholder-shown)]:text-xs`}
            >
              Teléfono
            </label>
          </div>
          <div className="group relative pt-2">
            <select
              id="tipo"
              name="tipo"
              value={projectType}
              onChange={(e) => setProjectType(e.target.value)}
              className={`${inputClass} appearance-none pr-8`}
              required
            >
              <option value="" disabled>
                {"\u00a0"}
              </option>
              <option value="residencial">Residencial</option>
              <option value="comercial">Comercial</option>
              <option value="hospitality">Hospitality</option>
              <option value="otro">Otro</option>
            </select>
            <label htmlFor="tipo" className={labelForSelect(!!projectType)}>
              Tipo de proyecto
            </label>
          </div>
          <div className="group relative pt-2">
            <select
              id="presupuesto"
              name="presupuesto"
              value={budget}
              onChange={(e) => setBudget(e.target.value)}
              className={`${inputClass} appearance-none pr-8`}
              required
            >
              <option value="" disabled>
                {"\u00a0"}
              </option>
              <option value="<500k">&lt; MXN 500k</option>
              <option value="500k-1.5M">MXN 500k — 1.5M</option>
              <option value="1.5M-4M">MXN 1.5M — 4M</option>
              <option value=">4M">&gt; MXN 4M</option>
              <option value="na">Prefiero comentarlo en persona</option>
            </select>
            <label htmlFor="presupuesto" className={labelForSelect(!!budget)}>
              Presupuesto estimado
            </label>
          </div>
          <div className="group relative pt-2">
            <textarea
              id="mensaje"
              name="mensaje"
              rows={4}
              className={`${inputClass} resize-none`}
              placeholder=" "
              required
            />
            <label
              htmlFor="mensaje"
              className={`${labelFloating} top-4 peer-focus:-top-2 peer-focus:text-xs peer-focus:text-accent-copper peer-[:not(:placeholder-shown)]:-top-2 peer-[:not(:placeholder-shown)]:text-xs`}
            >
              Mensaje
            </label>
          </div>
          <motion.button
            type="submit"
            className="w-full border border-accent-copper bg-transparent py-4 font-sans text-xs font-medium uppercase tracking-widest text-ink-primary transition-colors duration-atrio-fast ease-atrio hover:bg-accent-copper hover:text-primary-bg"
            whileHover={{ scale: 1.01 }}
            {...buttonTap}
          >
            ENVIAR CONSULTA →
          </motion.button>
        </motion.form>
      </div>
    </div>
  );
}
