export type ProjectCategory = "RESIDENCIAL" | "COMERCIAL" | "HOSPITALITY";

/** Contenido editorial para landings genéricas (Casa Horizonte usa página dedicada). */
export type ProjectLandingBlocks = {
  eyebrow: string;
  location: string;
  area: string;
  duration: string;
  /** Una línea bajo el título */
  thesis: string;
  intro: [string, string];
  narrativeTitle: string;
  narrativeBody: string;
  narrativeImage: string;
  slides: { src: string; title: string; text: string }[];
  materials: { name: string; src: string }[];
};

export type ProjectItem = {
  id: string;
  num: string;
  title: string;
  category: ProjectCategory;
  aspect: "4/5" | "1" | "5/4";
  image: string;
  /** Si existe, ruta a landing genérica; Casa Horizonte usa componente propio. */
  landing?: ProjectLandingBlocks;
};

export const projectPath = (id: string) => `/proyectos/${id}`;

export function getProjectBySlug(slug: string | undefined): ProjectItem | undefined {
  if (!slug) return undefined;
  return PROJECTS.find((p) => p.id === slug);
}

export function getSiblingProjects(id: string): {
  prev?: ProjectItem;
  next?: ProjectItem;
} {
  const i = PROJECTS.findIndex((p) => p.id === id);
  if (i < 0) return {};
  return {
    prev: i > 0 ? PROJECTS[i - 1] : undefined,
    next: i < PROJECTS.length - 1 ? PROJECTS[i + 1] : undefined,
  };
}

export const PROJECTS: ProjectItem[] = [
  {
    id: "casa-horizonte",
    num: "01",
    title: "Casa Horizonte",
    category: "RESIDENCIAL",
    aspect: "4/5",
    image:
      "https://images.unsplash.com/photo-1600210492493-0946911123ea?w=1200&q=85",
  },
  {
    id: "villa-elemental",
    num: "02",
    title: "Villa Elemental",
    category: "RESIDENCIAL",
    aspect: "5/4",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=85",
    landing: {
      eyebrow: "RESIDENCIAL • 2023",
      location: "Mérida, Yucatán",
      area: "380 m²",
      duration: "10 meses",
      thesis: "Geometría clara, atmósfera cálida.",
      intro: [
        "Villa Elemental se plantea como un pabellón habitado: tres volúmenes desplazados que generan patios de aire y sombra. La piedra local marca el zócalo; arriba, yeso y madera matizan la luz.",
        "El interior evita el ruido decorativo: cada habitación se ordena en torno a una sola vista fuerte y un solo material dominante por estancia.",
      ],
      narrativeTitle: "Ritmo y silencio",
      narrativeBody:
        "Los pasillos se alargan como galerías. La luz cenital entra en baños y vestíbulo con la misma intención escultórica que en el volumen social.",
      narrativeImage:
        "https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=1400&q=85",
      slides: [
        {
          src: "https://images.unsplash.com/photo-1600566753190-17f0baa2ada6?w=1400&q=85",
          title: "Sala doble altura",
          text: "El mobiliario bajo y la alfombra de lana definen islas de conversación sin cerrar el espacio.",
        },
        {
          src: "https://images.unsplash.com/photo-1600210492486-724fe5c67f85?w=1400&q=85",
          title: "Cocina y comedor",
          text: "Una sola losa de piedra une ambos usos; la iluminación lineal marca el eje.",
        },
        {
          src: "https://images.unsplash.com/photo-1600585154084-4e5fe7c39198?w=1400&q=85",
          title: "Detalle de materia",
          text: "Cerámica artesanal y vegetación filtran la luz en el desayunador.",
        },
      ],
      materials: [
        {
          name: "Piedra verde local",
          src: "https://images.unsplash.com/photo-1615976337492-443e2b2b4b61?w=900&q=85",
        },
        {
          name: "Carpintería de encino",
          src: "https://images.unsplash.com/photo-1600585154363-67eb9e2e2099?w=900&q=85",
        },
        {
          name: "Textil crudo",
          src: "https://images.unsplash.com/photo-1600210491892-03d1c2872e62?w=900&q=85",
        },
      ],
    },
  },
  {
    id: "espacio-atelier",
    num: "03",
    title: "Espacio Atelier",
    category: "COMERCIAL",
    aspect: "1",
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&q=85",
    landing: {
      eyebrow: "COMERCIAL • 2024",
      location: "Ciudad de México",
      area: "120 m²",
      duration: "5 meses",
      thesis: "Un salón de trabajo que se muestra sin gritar.",
      intro: [
        "Showroom-atelier para una firma de textiles: la mercancía se cuelga como obra, con fondos oscuros que hacen saltar el color sin competir.",
        "El recorrido es lineal: recepción, laboratorio visible y sala de reunión íntima al fondo, separada por una vitrina de hierro fino.",
      ],
      narrativeTitle: "Exhibir con tacto",
      narrativeBody:
        "Los módulos son desmontables; la luz indirecta corre tras paneles de madera perforada que suavizan el techo técnico.",
      narrativeImage:
        "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=1400&q=85",
      slides: [
        {
          src: "https://images.unsplash.com/photo-1600121848594-d8644e57abab?w=1400&q=85",
          title: "Fachada interior",
          text: "El visitante atraviesa un umbral bajo antes de abrirse al volumen principal.",
        },
        {
          src: "https://images.unsplash.com/photo-1600573472592-401b489a3cdc?w=1400&q=85",
          title: "Módulos textiles",
          text: "Perfiles de latón y lino sin blanquear estructuran la exhibición.",
        },
        {
          src: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1400&q=85",
          title: "Sala de reunión",
          text: "Mesa única y pared tapizada absorben el sonido del tráfico exterior.",
        },
      ],
      materials: [
        { name: "Hierro negro", src: "https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=900&q=85" },
        { name: "Roble ahumado", src: "https://images.unsplash.com/photo-1600585154363-67eb9e2e2099?w=900&q=85" },
        { name: "Microcemento", src: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=900&q=85" },
      ],
    },
  },
  {
    id: "refugio-tulum",
    num: "04",
    title: "Refugio Tulum",
    category: "HOSPITALITY",
    aspect: "4/5",
    image:
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1200&q=85",
    landing: {
      eyebrow: "HOSPITALITY • 2022",
      location: "Tulum, Quintana Roo",
      area: "26 suites",
      duration: "14 meses",
      thesis: "Penumbra caribeña y brisa constante.",
      intro: [
        "Un pequeño hotel donde cada suite mira al follaje, no al pasillo. Los corredores exteriores y los muros calados filtran calor y privacidad.",
        "La paleta es arena, verde oscuro y negro volcánico: materiales que envejecen con la sal y el sol.",
      ],
      narrativeTitle: "Hospedar en lo esencial",
      narrativeBody:
        "Los baños abiertos se resuelven con doble altura vegetal; las duchas exteriores son un gesto de lujo silencioso.",
      narrativeImage:
        "https://images.unsplash.com/photo-1600210492493-0946911123ea?w=1400&q=85",
      slides: [
        {
          src: "https://images.unsplash.com/photo-1600210492486-724fe5c67f85?w=1400&q=85",
          title: "Suite jardín",
          text: "Cama baja, lino y una sola lámpara de mesa definen el ritual nocturno.",
        },
        {
          src: "https://images.unsplash.com/photo-1600566753190-17f0baa2ada6?w=1400&q=85",
          title: "Pasillo al mar",
          text: "Sombras alargadas y piedra fría bajo los pies marcan el camino común.",
        },
        {
          src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1400&q=85",
          title: "Lounge",
          text: "Tejidos de palma y sillones tapizados conviven sin folclore forzado.",
        },
      ],
      materials: [
        { name: "Chukum", src: "https://images.unsplash.com/photo-1615976337492-443e2b2b4b61?w=900&q=85" },
        { name: "Parota", src: "https://images.unsplash.com/photo-1600585154363-67eb9e2e2099?w=900&q=85" },
        { name: "Losa terrazo", src: "https://images.unsplash.com/photo-1600210491892-03d1c2872e62?w=900&q=85" },
      ],
    },
  },
  {
    id: "penthouse-polanco",
    num: "05",
    title: "Penthouse Polanco",
    category: "RESIDENCIAL",
    aspect: "1",
    image:
      "https://images.unsplash.com/photo-1600566753190-17f0baa2ada6?w=1200&q=85",
    landing: {
      eyebrow: "RESIDENCIAL • 2024",
      location: "Ciudad de México",
      area: "290 m²",
      duration: "9 meses",
      thesis: "Ciudad arriba, calma adentro.",
      intro: [
        "Un ático con vistas de 270° donde el cristal se dosifica: bandas altas y esquinas ciegas para no vivir en vitrina.",
        "El núcleo de servicios concentra baños y cocina; el perímetro queda libre para estar, comer y biblioteca.",
      ],
      narrativeTitle: "Horizonte contenido",
      narrativeBody:
        "Los cielos rasos alojan iluminación indirecta continua; el suelo de roble largo unifica el plano social.",
      narrativeImage:
        "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1400&q=85",
      slides: [
        {
          src: "https://images.unsplash.com/photo-1600210492493-0946911123ea?w=1400&q=85",
          title: "Estancia principal",
          text: "Sofás perimetrales y alfombra de yute anclan la escala humana frente al ventanal.",
        },
        {
          src: "https://images.unsplash.com/photo-1600585154084-4e5fe7c39198?w=1400&q=85",
          title: "Bar y vinoteca",
          text: "Latón satinado y espejo envejecido multiplican la luz sin chillar.",
        },
        {
          src: "https://images.unsplash.com/photo-1600573472592-401b489a3cdc?w=1400&q=85",
          title: "Estudio",
          text: "Biblioteca a medida y escritorio flotante para trabajo concentrado.",
        },
      ],
      materials: [
        { name: "Roble europeo", src: "https://images.unsplash.com/photo-1600585154363-67eb9e2e2099?w=900&q=85" },
        { name: "Mármol gris", src: "https://images.unsplash.com/photo-1615976337492-443e2b2b4b61?w=900&q=85" },
        { name: "Bronce", src: "https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=900&q=85" },
      ],
    },
  },
  {
    id: "casa-mar",
    num: "06",
    title: "Casa Mar",
    category: "RESIDENCIAL",
    aspect: "5/4",
    image:
      "https://images.unsplash.com/photo-1600210492486-724fe5c67f85?w=1200&q=85",
    landing: {
      eyebrow: "RESIDENCIAL • 2021",
      location: "Progreso, Yucatán",
      area: "310 m²",
      duration: "11 meses",
      thesis: "Brisa, sal y tabiques que respiran.",
      intro: [
        "Casa de fin de semana frente al Golfo: aberturas corredizas enteras y celosías fijas que filtran la luz lateral dura.",
        "El comedor se vuelca al deck de madera; la cocina queda en el núcleo, protegida del viento dominante.",
      ],
      narrativeTitle: "Umbral al agua",
      narrativeBody:
        "Los pisos interiores y exteriores comparten misma losa visual; solo cambia el tratamiento antideslizante al aire libre.",
      narrativeImage:
        "https://images.unsplash.com/photo-1600210492486-724fe5c67f85?w=1400&q=85",
      slides: [
        {
          src: "https://images.unsplash.com/photo-1600210492493-0946911123ea?w=1400&q=85",
          title: "Deck",
          text: "Teca recuperada y sombra de palapa de líneas rectas.",
        },
        {
          src: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1400&q=85",
          title: "Dormitorio principal",
          text: "Cabecero tapizado y mesas mínimas; la vista manda.",
        },
        {
          src: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=1400&q=85",
          title: "Ducha exterior",
          text: "Pavimento drenante y vegetación baja delimitan el gesto.",
        },
      ],
      materials: [
        { name: "Teca", src: "https://images.unsplash.com/photo-1600585154363-67eb9e2e2099?w=900&q=85" },
        { name: "Concreto pulido", src: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=900&q=85" },
        { name: "Aluminio pintado", src: "https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=900&q=85" },
      ],
    },
  },
  {
    id: "loft-industrial",
    num: "07",
    title: "Loft Industrial",
    category: "COMERCIAL",
    aspect: "4/5",
    image:
      "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=1200&q=85",
    landing: {
      eyebrow: "COMERCIAL • 2023",
      location: "Monterrey, N.L.",
      area: "200 m²",
      duration: "4 meses",
      thesis: "Oficina creativa en nave existente.",
      intro: [
        "Rehabilitación de una bodega con forjado visto: insertamos volúmenes de madera para reuniones y cabinas acústicas.",
        "La luz natural entra por lucernarios nuevos; el piso de resina gris unifica polvo y taller.",
      ],
      narrativeTitle: "Contraste frío / cálido",
      narrativeBody:
        "El acero y el hormigón se calientan con cortinas de lino y alfombras de lana en zonas de pausa.",
      narrativeImage:
        "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=1400&q=85",
      slides: [
        {
          src: "https://images.unsplash.com/photo-1600121848594-d8644e57abab?w=1400&q=85",
          title: "Open workspace",
          text: "Mesas compartidas y biombos móviles permiten reconfigurar equipos.",
        },
        {
          src: "https://images.unsplash.com/photo-1600573472592-401b489a3cdc?w=1400&q=85",
          title: "Sala de juntas",
          text: "Caja de madera con vidrio polarizado para privacidad sin perder conexión visual.",
        },
        {
          src: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1400&q=85",
          title: "Recepción",
          text: "Mostrador monolítico y logo grabado al relieve, sin retroiluminación.",
        },
      ],
      materials: [
        { name: "Resina epóxica", src: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=900&q=85" },
        { name: "Acero oxidado", src: "https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=900&q=85" },
        { name: "Pino tratado", src: "https://images.unsplash.com/photo-1600585154363-67eb9e2e2099?w=900&q=85" },
      ],
    },
  },
  {
    id: "casa-niebla",
    num: "08",
    title: "Casa Niebla",
    category: "RESIDENCIAL",
    aspect: "1",
    image:
      "https://images.unsplash.com/photo-1600573472592-401b489a3cdc?w=1200&q=85",
    landing: {
      eyebrow: "RESIDENCIAL • 2023",
      location: "Valle de Bravo, Edo. Méx.",
      area: "340 m²",
      duration: "12 meses",
      thesis: "Bosque, niebla y ventanas esquina.",
      intro: [
        "Residencia de fin de semana en pendiente: la planta se escalona en tres plataformas que siguen la topografía.",
        "Grandes ventanas en esquina capturan el gris matutino; interiores en tonos fríos que acentúan el verde exterior.",
      ],
      narrativeTitle: "Escala en la ladera",
      narrativeBody:
        "Escalera de concreto visto como escultura; barandillas de vidrio empotrado casi invisible.",
      narrativeImage:
        "https://images.unsplash.com/photo-1600573472592-401b489a3cdc?w=1400&q=85",
      slides: [
        {
          src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1400&q=85",
          title: "Sala y chimenea",
          text: "Hogar lineal y leña apilada como composición estática.",
        },
        {
          src: "https://images.unsplash.com/photo-1600210492493-0946911123ea?w=1400&q=85",
          title: "Terraza cubierta",
          text: "Losas de concreto finas proyectan sombra sobre el comedor exterior.",
        },
        {
          src: "https://images.unsplash.com/photo-1600566753190-17f0baa2ada6?w=1400&q=85",
          title: "Recámara",
          text: "Textiles grises y luz indirecta tras el cabecero.",
        },
      ],
      materials: [
        { name: "Concreto aparente", src: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=900&q=85" },
        { name: "Pizarra", src: "https://images.unsplash.com/photo-1615976337492-443e2b2b4b61?w=900&q=85" },
        { name: "Vidrio claro", src: "https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=900&q=85" },
      ],
    },
  },
  {
    id: "estudio-vertice",
    num: "09",
    title: "Estudio Vértice",
    category: "COMERCIAL",
    aspect: "5/4",
    image:
      "https://images.unsplash.com/photo-1600121848594-d8644e57abab?w=1200&q=85",
    landing: {
      eyebrow: "COMERCIAL • 2024",
      location: "Guadalajara, Jal.",
      area: "95 m²",
      duration: "3 meses",
      thesis: "Consultorio y laboratorio en planta única.",
      intro: [
        "Espacio para firma de arquitectura: recepción oscura, sala de maquetas con luz cenital y oficina abierta al fondo.",
        "Los planos se colocan en paredes magnéticas; el color corporativo se reduce a un solo trazo de cobre en el mostrador.",
      ],
      narrativeTitle: "Trabajo visible",
      narrativeBody:
        "El taller de modelos tiene vitrina hacia el pasillo: el proceso se muestra como parte de la marca.",
      narrativeImage:
        "https://images.unsplash.com/photo-1600121848594-d8644e57abab?w=1400&q=85",
      slides: [
        {
          src: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1400&q=85",
          title: "Recepción",
          text: "Volumen suspendido en nogal y fondo negro mate.",
        },
        {
          src: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=1400&q=85",
          title: "Sala de maquetas",
          text: "Mesas bajas y luz difusa para lectura de volumetrías.",
        },
        {
          src: "https://images.unsplash.com/photo-1600585154084-4e5fe7c39198?w=1400&q=85",
          title: "Sala de juntas",
          text: "Mesa ovalada y sillas tapizadas en lino gris.",
        },
      ],
      materials: [
        { name: "Nogal americano", src: "https://images.unsplash.com/photo-1600585154363-67eb9e2e2099?w=900&q=85" },
        { name: "Pintura mineral", src: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=900&q=85" },
        { name: "Granito negro", src: "https://images.unsplash.com/photo-1615976337492-443e2b2b4b61?w=900&q=85" },
      ],
    },
  },
];

export const FEATURED_PROJECTS = PROJECTS.slice(0, 3);
