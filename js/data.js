// Contenido y traducciones del portfolio de Sofía Zapata.
const BASE = "./assets/";

const TRANSLATIONS = {
  es: {
    banner: {
      eyebrow: "Disponible para trabajos freelance",
      titlePart1: "Desarrollo web",
      titlePart2: "edición de video",
      subtitle:
        "Soy Sofía Zapata. Combino frontend y contenido audiovisual para crear sitios web claros, modernos y piezas visuales pensadas para mostrar marcas, productos y proyectos de forma más profesional.",
      btnProjects: "Ver proyectos web",
      btnVideo: "Ver edición",
      btnContact: "Escribime",
      btnCopyLink: "Copiar link",
      btnCopied: "¡Link copiado!",
    },
    focusAreas: {
      eyebrow: "Áreas principales",
      title: "Dos líneas de trabajo, un mismo portfolio",
      intro:
        "Trabajo tanto en desarrollo web como en edición de video. Las dos áreas forman parte de mi perfil y de lo que hoy quiero ofrecer de forma freelance.",
      devTag: "Desarrollo web",
      devTitle: "Interfaces, sitios y experiencia visual",
      devText:
        "Desarrollo portfolios, landing pages, catálogos y experiencias frontend donde priorizo claridad visual, estructura y responsive.",
      devList: ["React y maquetado responsive", "Portfolios, landings y catálogos", "Diseño UI con foco visual"],
      devBtn: "Ver proyectos web",
      videoTag: "Edición de video",
      videoTitle: "Contenido audiovisual para redes y marcas",
      videoText:
        "También trabajo en edición de piezas visuales y videos cortos pensados para comunicar mejor una marca, producto o proyecto.",
      videoList: ["Reels y contenido para redes", "Videos promocionales", "Ritmo, orden visual y estética"],
      videoBtn: "Ver edición de video",
    },
    about: {
      eyebrow: "Sobre mí",
      titlePart1: "Lo que aporto",
      titlePart2: "a un proyecto",
      intro:
        "Soy Sofía, desarrolladora frontend en formación. Me enfoco en combinar React, diseño visual y una estructura clara para crear sitios web modernos, bien presentados y fáciles de usar.",
      cards: [
        { num: "01", title: "Frontend", text: "Desarrollo interfaces claras, prolijas y responsive con foco en una buena experiencia visual." },
        { num: "02", title: "Diseño UI", text: "Me interesa que cada web comunique mejor una marca, proyecto o producto desde lo visual." },
        { num: "03", title: "Freelance", text: "Busco trabajar en proyectos donde pueda aportar diseño, estructura y una presentación más profesional." },
      ],
      chips: ["UI visualmente cuidada", "Responsive", "Contenido digital"],
    },
    skills: {
      eyebrow: "Skills",
      title: "Tecnologías y herramientas",
      subtitle: "Herramientas con las que desarrollo interfaces, prototipos y proyectos visualmente cuidados.",
    },
    videoSkills: {
      eyebrow: "Skills audiovisuales",
      titlePart1: "Herramientas de",
      titlePart2: "edición de video",
      subtitle: "El stack con el que genero, edito y armo mis piezas de video con IA, de la idea al resultado final.",
      hint: "Arrastrá para explorar",
    },
    projects: {
      eyebrow: "Desarrollo web",
      titlePart1: "Proyectos",
      titlePart2: "seleccionados",
      intro: "Podés recorrer mis trabajos con las flechas y abrir cada proyecto para ver su detalle completo.",
      btnDetail: "Ver detalle",
      labelFeatured: "Destacado",
      btnDemo: "Ver demo",
      btnRepo: "Ver repositorio",
      soonLabel: "Demo pronto",
      descriptions: {
        "Cine Paseo Aldrey":
          "Rediseño completo de la experiencia digital del único cine del shopping en Mar del Plata — de la cartelera al checkout — resolviendo duplicados, redirección externa y ausencia de diseño mobile.",
        "Las Golondrinas":
          "Rediseño UX/UI del flujo de reservas de una posada y spa en Sierra de la Ventana — de una web informativa a un recorrido guiado con reserva demostrativa en seis pasos.",
        "Tienda Multiskin":
          "Catálogo de una tienda de cosmética vegana con backend, autenticación y panel de administración. Es el proyecto más completo del portfolio y combina frontend, backend y presentación visual.",
        "Tienda Skincare":
          "Cuestionario de piel y recomendación de productos con una experiencia visual simple, clara y enfocada en la navegación.",
        "Tienda de Café": "E-commerce simple de café con filtros y búsqueda de productos orientado a una navegación clara.",
        "Tienda de Bebidas":
          "Catálogo de bebidas con cards y detalle de producto, desarrollado con Sass y pensado para una estética más comercial.",
        "Tienda Safaris": "Catálogo visual de safaris con cards y detalle de producto, diseñado para una navegación simple y atractiva.",
      },
    },
    videoEditing: {
      eyebrow: "Trabajo audiovisual",
      titlePart1: "Edición",
      titlePart2: "de video",
      intro:
        "Esta parte del portfolio reúne mi perfil audiovisual: edición de piezas limpias, dinámicas y pensadas para comunicar mejor una marca o una idea en formatos digitales.",
      items: [
        "Edición de reels y videos cortos para redes sociales",
        "Piezas promocionales para marcas, productos o servicios",
        "Cortes, ritmo, música, textos y orden visual",
        "Contenido pensado para Instagram, TikTok o presentaciones",
      ],
      reelsEyebrow: "Últimas piezas",
      reelsTitle: "Ejemplos recientes",
      reelsHint: "2 piezas",
      aiTag: "Generado con IA",
      processLabel: "Cómo se hizo:",
      btnDetail: "Ver detalle",
      btn: "Consultar por edición",
      footnote: "Respuesta en 24-48 h hábiles",
      hero: {
        label: "Proyecto destacado",
        tag: "Generado con Higgsfield AI",
        title: "Las Golondrinas",
        duration: "0:08 · Horizontal 16:9",
        desc: "Video hero para la home del rediseño de Las Golondrinas, animado con IA a partir de la imagen final del sitio.",
        summary:
          "Pieza audiovisual para la primera pantalla del rediseño web de Posada y Spa Las Golondrinas (Sierra de la Ventana): un video corto en loop que le da movimiento y atmósfera al hero, reforzando la sensación de calma y naturaleza de la marca desde el primer segundo.",
        process:
          "Higgsfield AI es una plataforma de generación de video con inteligencia artificial especializada en animar imágenes fijas (imagen a video), agregando movimiento de cámara y de elementos del entorno —nubes, luz, vegetación— sin perder fidelidad al diseño original. Se partió de la imagen final del hero ya diseñada para el sitio y se generó el clip con ese modelo; después se optimizó el archivo y se integró como fondo de video en loop, con autoplay silencioso, en el hero del sitio rediseñado.",
        ctaLive: "Ver sitio rediseñado",
        ctaCase: "Ver caso de estudio",
      },
      videos: [
        {
          title: "Kyvrapets",
          duration: "0:30 · Vertical 9:16",
          desc: "Mascota animada para una marca de cuidado dental canino.",
          summary:
            "Pieza de branded content para una marca ficticia de cuidado dental canino: diseño de una mascota 3D generada con IA, guion con gancho, problema, producto en acción y validación veterinaria, y montaje final con subtítulos y música.",
          process:
            "Diseño del personaje y del set con IA de imagen, generación de cada plano en video a partir de esas referencias, y edición, subtítulos y ritmo en CapCut.",
        },
        {
          title: "PlataClara",
          duration: "0:35 · Vertical 9:16",
          desc: "Explicador de finanzas personales con mascota propia.",
          summary:
            "Mascota y contenido original para una marca ficticia de finanzas personales: un personaje propio (Pipo, la ardilla) explicando la regla de ahorro 50/30/20 con una metáfora visual clara, pensado como pieza de storytelling de marca.",
          process:
            "Investigación de qué contenido de finanzas funciona en redes, diseño del personaje y del escenario, generación de cada plano en video y edición final con textos y voz en off.",
        },
      ],
    },
    contact: {
      eyebrow: "Disponible para freelance",
      titlePart1: "Trabajemos",
      titlePart2: "juntos",
      intro:
        "Si tenés una idea, una marca o un proyecto para mostrar, podés escribirme desde acá. Trabajo tanto en desarrollo web como en edición de video.",
      labelName: "Nombre",
      placeholderName: "Tu nombre",
      labelEmail: "Email",
      placeholderEmail: "tunombre@email.com",
      labelMessage: "Mensaje",
      placeholderMessage: "Contame sobre tu proyecto...",
      btnSend: "Enviar mensaje",
      cardEmailLabel: "Email directo",
      cardWorkLabel: "Qué hago",
      cardWorkItems: ["Desarrollo web", "Landing pages y portfolios", "Edición de video y contenido visual"],
      cardSocialLabel: "Redes",
      mailSubject: "Consulta desde portfolio",
      mailName: "Nombre",
      mailMessage: "Mensaje",
    },
    certificates: {
      summary: "Formación complementaria",
      intro: "Algunos cursos y certificados que forman parte de mi recorrido.",
      btnDownload: "Descargar",
    },
    floatingCV: { label: "Descargar CV" },
    nav: [
      { label: "Proyectos", id: "projects" },
      { label: "Sobre mí", id: "about" },
      { label: "Skills", id: "skills" },
      { label: "Video", id: "video-editing" },
      { label: "Contacto", id: "contact" },
    ],
    footer: { built: "Diseñado y desarrollado por Sofía · 2026" },
    controls: {
      dark: "Modo oscuro",
      light: "Modo claro",
      es: "Cambiar a Español",
      en: "Switch to English",
    },
  },
  en: {
    banner: {
      eyebrow: "Available for freelance work",
      titlePart1: "Web development",
      titlePart2: "video editing",
      subtitle:
        "I'm Sofía Zapata. I combine frontend development and audiovisual content to create clear, modern websites and visual pieces designed to showcase brands, products and projects more professionally.",
      btnProjects: "See web projects",
      btnVideo: "See editing",
      btnContact: "Contact me",
      btnCopyLink: "Copy link",
      btnCopied: "Link copied!",
    },
    focusAreas: {
      eyebrow: "Main areas",
      title: "Two lines of work, one portfolio",
      intro: "I work in both web development and video editing. Both areas are part of my profile and what I offer as a freelancer.",
      devTag: "Web development",
      devTitle: "Interfaces, websites and visual experience",
      devText:
        "I develop portfolios, landing pages, catalogs and frontend experiences where I prioritize visual clarity, structure and responsiveness.",
      devList: ["React and responsive layouts", "Portfolios, landings and catalogs", "UI design with visual focus"],
      devBtn: "See web projects",
      videoTag: "Video editing",
      videoTitle: "Audiovisual content for social media and brands",
      videoText:
        "I also work on editing visual pieces and short videos designed to better communicate a brand, product or project.",
      videoList: ["Reels and social media content", "Promotional videos", "Rhythm, visual order and aesthetics"],
      videoBtn: "See video editing",
    },
    about: {
      eyebrow: "About me",
      titlePart1: "What I bring",
      titlePart2: "to a project",
      intro:
        "I'm Sofía, a frontend developer in training. I focus on combining React, visual design and clear structure to create modern, well-presented and easy-to-use websites.",
      cards: [
        { num: "01", title: "Frontend", text: "I develop clear, neat and responsive interfaces focused on a good visual experience." },
        { num: "02", title: "UI Design", text: "I care about each website visually communicating a brand, project or product more effectively." },
        { num: "03", title: "Freelance", text: "I look to work on projects where I can contribute design, structure and a more professional presentation." },
      ],
      chips: ["Visually polished UI", "Responsive", "Digital content"],
    },
    skills: {
      eyebrow: "Skills",
      title: "Technologies & tools",
      subtitle: "Tools I use to develop interfaces, prototypes and visually polished projects.",
    },
    videoSkills: {
      eyebrow: "Audiovisual skills",
      titlePart1: "Video editing",
      titlePart2: "tools",
      subtitle: "The stack I use to generate, edit and put together my AI video pieces, from idea to final result.",
      hint: "Drag to explore",
    },
    projects: {
      eyebrow: "Web development",
      titlePart1: "Selected",
      titlePart2: "projects",
      intro: "Browse my work with the arrows and open each project to see its full detail.",
      btnDetail: "View details",
      labelFeatured: "Featured",
      btnDemo: "See demo",
      btnRepo: "See repository",
      soonLabel: "Demo coming soon",
      descriptions: {
        "Cine Paseo Aldrey":
          "Complete redesign of the digital experience for Mar del Plata's only shopping cinema — from the billboard to checkout — solving duplicates, external redirects and lack of mobile design.",
        "Las Golondrinas":
          "UX/UI redesign of the booking flow for an inn and spa in Sierra de la Ventana — from an informational website to a guided journey with a six-step demo reservation.",
        "Tienda Multiskin":
          "Catalog for a vegan cosmetics store with backend, authentication and admin panel. The most complete project in the portfolio, combining frontend, backend and visual presentation.",
        "Tienda Skincare": "Skin quiz and product recommendation with a simple, clear visual experience focused on navigation.",
        "Tienda de Café": "Simple coffee e-commerce with product filters and search, focused on clear navigation.",
        "Tienda de Bebidas":
          "Beverage catalog with cards and product detail, built with Sass and designed for a more commercial aesthetic.",
        "Tienda Safaris": "Visual safari catalog with cards and product detail, designed for simple and attractive navigation.",
      },
    },
    videoEditing: {
      eyebrow: "Audiovisual work",
      titlePart1: "Video",
      titlePart2: "editing",
      intro:
        "This part of the portfolio brings together my audiovisual profile: editing clean, dynamic pieces designed to better communicate a brand or idea in digital formats.",
      items: [
        "Editing reels and short videos for social media",
        "Promotional pieces for brands, products or services",
        "Cuts, rhythm, music, text and visual order",
        "Content designed for Instagram, TikTok or presentations",
      ],
      reelsEyebrow: "Latest pieces",
      reelsTitle: "Recent examples",
      reelsHint: "2 pieces",
      aiTag: "AI-generated",
      processLabel: "How it was made:",
      btnDetail: "View details",
      btn: "Inquire about editing",
      footnote: "Reply within 24-48 business hours",
      hero: {
        label: "Featured project",
        tag: "Generated with Higgsfield AI",
        title: "Las Golondrinas",
        duration: "0:08 · Horizontal 16:9",
        desc: "Hero video for the homepage of the Las Golondrinas redesign, animated with AI from the site's final image.",
        summary:
          "Audiovisual piece for the first screen of the Las Golondrinas Inn & Spa website redesign (Sierra de la Ventana): a short looping video that brings motion and atmosphere to the hero, reinforcing the brand's sense of calm and nature from the first second.",
        process:
          "Higgsfield AI is an AI video generation platform specialized in animating still images (image-to-video), adding camera movement and motion to environmental elements — clouds, light, vegetation — without losing fidelity to the original design. The process started from the site's finished hero image, generated the clip with that model, then optimized the file and integrated it as a looping video background with silent autoplay in the redesigned site's hero.",
        ctaLive: "See redesigned site",
        ctaCase: "See case study",
      },
      videos: [
        {
          title: "Kyvrapets",
          duration: "0:30 · Vertical 9:16",
          desc: "Animated mascot for a dog dental care brand.",
          summary:
            "Branded content piece for a fictional dog dental care brand: a 3D AI-generated mascot, a script built around a hook, a problem, the product in action and vet validation, and a final edit with captions and music.",
          process:
            "Character and set design with AI image tools, generating each shot as video from those references, then editing, captions and pacing in CapCut.",
        },
        {
          title: "PlataClara",
          duration: "0:35 · Vertical 9:16",
          desc: "Personal finance explainer with an original mascot.",
          summary:
            "Original mascot and content for a fictional personal finance brand: a character of my own (Pipo the squirrel) explaining the 50/30/20 savings rule through a clear visual metaphor, built as a brand storytelling piece.",
          process:
            "Researched what finance content performs well on social media, designed the character and set, generated each shot as video, and did the final edit with on-screen text and voiceover.",
        },
      ],
    },
    contact: {
      eyebrow: "Available for freelance",
      titlePart1: "Let's work",
      titlePart2: "together",
      intro: "If you have an idea, brand or project to showcase, write to me here. I work in both web development and video editing.",
      labelName: "Name",
      placeholderName: "Your name",
      labelEmail: "Email",
      placeholderEmail: "yourname@email.com",
      labelMessage: "Message",
      placeholderMessage: "Tell me about your project...",
      btnSend: "Send message",
      cardEmailLabel: "Direct email",
      cardWorkLabel: "What I do",
      cardWorkItems: ["Web development", "Landing pages and portfolios", "Video editing and visual content"],
      cardSocialLabel: "Social",
      mailSubject: "Portfolio inquiry",
      mailName: "Name",
      mailMessage: "Message",
    },
    certificates: {
      summary: "Additional training",
      intro: "Some courses and certificates that are part of my journey.",
      btnDownload: "Download",
    },
    floatingCV: { label: "Download CV" },
    nav: [
      { label: "Projects", id: "projects" },
      { label: "About", id: "about" },
      { label: "Skills", id: "skills" },
      { label: "Video", id: "video-editing" },
      { label: "Contact", id: "contact" },
    ],
    footer: { built: "Designed & developed by Sofía · 2026" },
    controls: {
      dark: "Dark mode",
      light: "Light mode",
      es: "Cambiar a Español",
      en: "Switch to English",
    },
  },
};

const PROJECTS_DATA = [
  {
    title: "Cine Paseo Aldrey",
    type: "UI/UX Design",
    cover: BASE + "covers/cine-paseo-aldrey.png",
    demo: "https://presentacion-redise-o-cine.vercel.app/",
    repo: "https://github.com/sofiazapataa/presentacion-redise-o-cine.git",
    stack: ["Figma", "HTML", "Claude AI"],
    featured: true,
  },
  {
    title: "Las Golondrinas",
    type: "UX/UI Design, Case Study",
    cover: BASE + "covers/las-golondrinas.png",
    demo: "https://las-golondrinas-caso-estudio.vercel.app/",
    repo: "",
    stack: ["Figma", "HTML", "CSS", "JavaScript", "Claude AI", "Higgsfield AI"],
    featured: false,
  },
  {
    title: "Tienda Multiskin",
    type: "Full Stack, Mobile-first",
    cover: BASE + "covers/Catalogo-kosmosof.png",
    demo: "https://catalogo-cosmos-2-0.vercel.app/",
    repo: "https://github.com/sofiazapataa/catalogo-cosmos-2.0.git",
    stack: ["CSS", "React", "Figma", "Node", "Express", "MongoDB"],
    featured: true,
  },
  {
    title: "Tienda Skincare",
    type: "Frontend",
    cover: BASE + "covers/tiendaSkinCare.png",
    demo: "https://react-entrega02.vercel.app/",
    repo: "",
    stack: ["JavaScript", "CSS"],
    featured: false,
  },
  {
    title: "Tienda de Café",
    type: "Frontend",
    cover: BASE + "covers/cafe.png",
    demo: "",
    repo: "",
    stack: ["Figma", "CSS"],
    featured: false,
  },
  {
    title: "Tienda de Bebidas",
    type: "Frontend",
    cover: BASE + "covers/bebidas.png",
    demo: "",
    repo: "",
    stack: ["CSS", "Sass"],
    featured: false,
  },
  {
    title: "Tienda Safaris",
    type: "Frontend",
    cover: BASE + "covers/tienda-safaris.png",
    demo: "",
    repo: "",
    stack: ["Figma", "CSS"],
    featured: false,
  },
];

const TECH_ICONS = {
  JavaScript: BASE + "logos/logoJS.jpg",
  CSS: BASE + "logos/logoCSS.png",
  Figma: BASE + "logos/logoFigma.png",
  Sass: BASE + "logos/logoSass.png",
  React: BASE + "logos/logoReact.png",
  Node: BASE + "logos/logoNode.png",
  Express: BASE + "logos/logoExpress.png",
  MongoDB: BASE + "logos/logoMongoDB.png",
  HTML: null,
  "Claude AI": BASE + "logos/logoClaude.png",
  "Higgsfield AI": BASE + "logos/logoHiggsfield.svg",
};

const SKILLS = [
  { name: "Bootstrap", icon: BASE + "logos/logoBoostrap.png" },
  { name: "JavaScript", icon: BASE + "logos/logoJS.jpg" },
  { name: "Figma", icon: BASE + "logos/logoFigma.png" },
  { name: "React", icon: BASE + "logos/logoReact.png" },
  { name: "Sass", icon: BASE + "logos/logoSass.png" },
  { name: "Git", icon: BASE + "logos/git-logo.png" },
  { name: "CSS", icon: BASE + "logos/logoCSS.png" },
  { name: "Claude AI", icon: BASE + "logos/logoClaude.png" },
];

const VIDEO_SKILLS = [
  { name: "Higgsfield AI", icon: BASE + "logos/logoHiggsfield.svg" },
  { name: "Kling 3.0", icon: BASE + "logos/logoKling.svg" },
  { name: "Nano Banana Pro", icon: BASE + "logos/logoNanoBanana.svg" },
  { name: "CapCut", icon: BASE + "logos/logoCapCut.svg" },
];

const CERTIFICATES = [
  { title: "Javascript", org: "CoderHouse", year: "2025", img: BASE + "certificates/certificado-javascript.png" },
  { title: "Inglés Intermedio", org: "CoderHouse", year: "2024", img: BASE + "certificates/certificado-ingles.png" },
  { title: "Diseño UX-UI", org: "CoderHouse", year: "2023", img: BASE + "certificates/certificado-diseno-ux-ui.png" },
  { title: "Desarrollo Web", org: "CoderHouse", year: "2025", img: BASE + "certificates/certificado-desarrolloWeb.png" },
];

const REEL_COVERS = [
  "./uploads/hf_20260709_232147_60d5269c-7129-42e1-9870-a448ce3d5b8e.png",
  "./uploads/hf_20260711_155555_17f40d34-b102-4833-9e41-3adf4fe509e6.png",
];

const REEL_POSTERS = [
  { bg: "linear-gradient(135deg, #2a1a1a 0%, #3a1e18 100%)", accent: "rgba(255, 140, 90, 0.55)" },
  { bg: "linear-gradient(135deg, #1a2530 0%, #223247 100%)", accent: "rgba(120, 170, 255, 0.4)" },
];

const VIDEO_STACK = ["Higgsfield AI", "Kling 3.0", "Nano Banana Pro", "CapCut"];

const VIDEO_HERO_MEDIA = {
  video: BASE + "videos/las-golondrinas-hero.mp4",
  poster: BASE + "covers/las-golondrinas-poster.png",
  liveUrl: "https://re-diseno-golondrinas-posadas.vercel.app/",
  caseUrl: "https://las-golondrinas-caso-estudio.vercel.app/",
};
