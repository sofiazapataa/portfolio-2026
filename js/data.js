// Contenido y traducciones del portfolio de Sofía Zapata.
const BASE = "./assets/";

const TRANSLATIONS = {
  es: {
    banner: {
      eyebrow: "Disponible · Necochea, Argentina",
      titlePart1: "Sofía",
      titlePart2: "Zapata",
      role1: "Product Designer UX/UI",
      role2: "IA aplicada al diseño",
      role3: "Edición de video",
      role4: "Generación de video con IA",
      subtitle:
        "Diseño experiencias UX/UI potenciadas con IA y edito y genero video con inteligencia artificial, de la idea al resultado final.",
      btnProjects: "Ver proyectos web",
      btnVideo: "Ver edición",
      btnContact: "Escribime",
      btnCopyLink: "Copiar link",
      btnCopied: "¡Link copiado!",
    },
    ticker: {
      i0: "Mobile First",
      i1: "Prototipado",
      i2: "Wireframing",
      i3: "User Testing",
      i4: "Figma",
      i5: "Handoff",
      i6: "UX Research",
      i7: "UI Design",
      i8: "Design Systems",
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
        "Aúna":
          "Aúna es una app para que una pareja organice un fondo común, gastos y objetivos compartidos, con perfil individual por persona. Cuentas e invitaciones reales con Supabase (autenticación, base de datos y reglas de acceso), y empaquetada con Capacitor para poder subirla a las tiendas.",
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
      reelsHint: "3 proyectos",
      playLabel: "Reproducir",
      campaignTag: "Campaña · 3 piezas",
      campaignPiecesLabel: "Piezas de la campaña",
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
          title: "Furlo",
          duration: "3 piezas · Vertical 9:16",
          desc: "Campaña de 3 piezas para un guante quita-pelos de mascotas.",
          summary:
            "Campaña completa para una marca ficticia de accesorios para mascotas: tres piezas pensadas como una sola secuencia de embudo. La primera abre con el problema (el sillón lleno de pelo), la segunda lo valida con una pieza tipo UGC en un living real, y la tercera cierra con el producto en primer plano. Comparten paleta, tipografía, ritmo de corte y personaje, así que funcionan sueltas en el feed pero se leen como una campaña.",
          process:
            "Definición del embudo y del guion de las tres piezas, diseño del producto y de los sets con IA de imagen para mantener el mismo guante y el mismo living en todos los planos, generación de cada plano en video a partir de esas referencias, y armado final en CapCut con una misma paleta de subtítulos, ritmo y música.",
          clips: [
            { step: "01", role: "Gancho", duration: "0:18", note: "Abre con el problema: el sillón cubierto de pelo y el antes y después en pocos segundos." },
            { step: "02", role: "UGC", duration: "0:18", note: "Pieza tipo testimonial en un living real, con el producto en uso sobre el perro." },
            { step: "03", role: "Producto", duration: "0:20", note: "Cierre en clave de producto: planos detalle del guante, textura y terminación." },
          ],
        },
        {
          title: "Kyvrapets",
          duration: "0:28 · Vertical 9:16",
          desc: "Mascota animada para una marca de cuidado dental canino.",
          summary:
            "Pieza de branded content para una marca ficticia de cuidado dental canino: diseño de una mascota 3D generada con IA, guion con gancho, problema, producto en acción y validación veterinaria, y montaje final con subtítulos y música.",
          process:
            "Diseño del personaje y del set con IA de imagen, generación de cada plano en video a partir de esas referencias, y edición, subtítulos y ritmo en CapCut.",
        },
        {
          title: "PlataClara",
          duration: "0:30 · Vertical 9:16",
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
      eyebrow: "Available · Necochea, Argentina",
      titlePart1: "Sofía",
      titlePart2: "Zapata",
      role1: "Product Designer UX/UI",
      role2: "AI-applied design",
      role3: "Video editing",
      role4: "AI video generation",
      subtitle:
        "I design AI-powered UX/UI experiences and edit and generate video with artificial intelligence, from idea to final result.",
      btnProjects: "See web projects",
      btnVideo: "See editing",
      btnContact: "Contact me",
      btnCopyLink: "Copy link",
      btnCopied: "Link copied!",
    },
    ticker: {
      i0: "Mobile First",
      i1: "Prototyping",
      i2: "Wireframing",
      i3: "User Testing",
      i4: "Figma",
      i5: "Handoff",
      i6: "UX Research",
      i7: "UI Design",
      i8: "Design Systems",
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
        "Aúna":
          "Aúna is an app for couples to organize a shared fund, expenses and goals, with an individual profile for each person. Real accounts and invitations powered by Supabase (auth, database and access rules), packaged with Capacitor for app store distribution.",
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
      reelsHint: "3 projects",
      playLabel: "Play",
      campaignTag: "Campaign · 3 pieces",
      campaignPiecesLabel: "Pieces in the campaign",
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
          title: "Furlo",
          duration: "3 pieces · Vertical 9:16",
          desc: "A three-piece campaign for a pet hair removal glove.",
          summary:
            "Full campaign for a fictional pet accessories brand: three pieces built as a single funnel. The first opens on the problem (a couch covered in hair), the second backs it up with a UGC-style piece shot in a real living room, and the third closes on the product itself. They share palette, typography, cutting rhythm and cast, so they work on their own in the feed but read as one campaign.",
          process:
            "Defined the funnel and the script for all three pieces, designed the product and the sets with AI image tools so the same glove and the same living room carry across every shot, generated each shot as video from those references, and assembled the final edits in CapCut with a shared caption style, pacing and music.",
          clips: [
            { step: "01", role: "Hook", duration: "0:18", note: "Opens on the problem: a couch covered in hair, with a before and after in a few seconds." },
            { step: "02", role: "UGC", duration: "0:18", note: "Testimonial-style piece in a real living room, with the product in use on the dog." },
            { step: "03", role: "Product", duration: "0:20", note: "A product-led close: detail shots of the glove, its texture and finish." },
          ],
        },
        {
          title: "Kyvrapets",
          duration: "0:28 · Vertical 9:16",
          desc: "Animated mascot for a dog dental care brand.",
          summary:
            "Branded content piece for a fictional dog dental care brand: a 3D AI-generated mascot, a script built around a hook, a problem, the product in action and vet validation, and a final edit with captions and music.",
          process:
            "Character and set design with AI image tools, generating each shot as video from those references, then editing, captions and pacing in CapCut.",
        },
        {
          title: "PlataClara",
          duration: "0:30 · Vertical 9:16",
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
    title: "Aúna",
    type: "Product Designer, AI-assisted",
    cover: BASE + "covers/finanzas-en-pareja.png",
    demo: "https://finanzas-en-pareja-green.vercel.app/",
    repo: "https://github.com/sofiazapataa/finanzas-en-pareja.git",
    stack: ["Figma", "JavaScript", "HTML", "CSS", "Supabase"],
    featured: true,
  },
  {
    title: "Cine Paseo Aldrey",
    type: "UI/UX Design",
    cover: BASE + "covers/cine-paseo-aldrey.png",
    demo: "https://presentacion-redise-o-cine.vercel.app/",
    repo: "https://github.com/sofiazapataa/presentacion-redise-o-cine.git",
    stack: ["Figma", "HTML", "Claude AI"],
    featured: false,
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
  Supabase: BASE + "logos/logoSupabase.svg",
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
  { name: "Figma Make", icon: BASE + "logos/logoFigma.png" },
  { name: "Notion", icon: BASE + "logos/logoNotion.svg" },
  { name: "Codex", icon: BASE + "logos/logoCodex.svg" },
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

// Medios de cada pieza. El índice se corresponde con videoEditing.videos:
// los textos viven en t.<idioma> (se traducen), los archivos viven acá (no).
// Una pieza con "clips" es una campaña de varias partes.
const REEL_MEDIA = [
  {
    cover: BASE + "covers/furlo-01-hook.webp",
    bg: "linear-gradient(135deg, #16212b 0%, #1e3140 100%)",
    accent: "rgba(120, 190, 255, 0.42)",
    clips: [
      { video: BASE + "videos/furlo-01-hook.mp4", poster: BASE + "covers/furlo-01-hook.webp" },
      { video: BASE + "videos/furlo-02-ugc.mp4", poster: BASE + "covers/furlo-02-ugc.webp" },
      { video: BASE + "videos/furlo-03-producto.mp4", poster: BASE + "covers/furlo-03-producto.webp" },
    ],
  },
  {
    cover: "./uploads/hf_20260709_232147_60d5269c-7129-42e1-9870-a448ce3d5b8e.png",
    bg: "linear-gradient(135deg, #2a1a1a 0%, #3a1e18 100%)",
    accent: "rgba(255, 140, 90, 0.55)",
    video: BASE + "videos/kyvrapets.mp4",
    poster: "./uploads/hf_20260709_232147_60d5269c-7129-42e1-9870-a448ce3d5b8e.png",
  },
  {
    cover: "./uploads/hf_20260711_155555_17f40d34-b102-4833-9e41-3adf4fe509e6.png",
    bg: "linear-gradient(135deg, #1a2530 0%, #223247 100%)",
    accent: "rgba(120, 170, 255, 0.4)",
    video: BASE + "videos/plataclara.mp4",
    poster: "./uploads/hf_20260711_155555_17f40d34-b102-4833-9e41-3adf4fe509e6.png",
  },
];

const VIDEO_STACK = ["Higgsfield AI", "Kling 3.0", "Nano Banana Pro", "CapCut"];

const VIDEO_HERO_MEDIA = {
  video: BASE + "videos/las-golondrinas-hero.mp4",
  poster: BASE + "covers/las-golondrinas-poster.png",
  liveUrl: "https://re-diseno-golondrinas-posadas.vercel.app/",
  caseUrl: "https://las-golondrinas-caso-estudio.vercel.app/",
};
