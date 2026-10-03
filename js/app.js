// Portfolio de Sofía Zapata — lógica de interfaz (tema, idioma, coverflow, modales, reveal, marquee).
(function () {
  "use strict";

  const state = {
    theme: "light",
    lang: "es",
    activeProject: 0,
    certsOpen: false,
    veOpenCategory: null,
  };

  const svgArrowRight =
    '<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 17L17 7M8 7h9v9"></path></svg>';
  const svgPlay = '<svg width="22" height="22" viewBox="0 0 24 24" fill="#0a0a0a" style="margin-left:3px;"><path d="M8 5v14l11-7z"></path></svg>';

  const VE_CATEGORY_ICONS = {
    camera:
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 7h3l2-2h8l2 2h3v12H3z"></path><circle cx="12" cy="13" r="3.5"></circle></svg>',
    grid:
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="7" height="7" rx="1"></rect><rect x="14" y="3" width="7" height="7" rx="1"></rect><rect x="3" y="14" width="7" height="7" rx="1"></rect><rect x="14" y="14" width="7" height="7" rx="1"></rect></svg>',
    clapper:
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 9l1.5-4h15L21 9"></path><path d="M3 9h18v10a1 1 0 01-1 1H4a1 1 0 01-1-1z"></path><path d="M6 9l1-4M11 9l1-4M16 9l1-4"></path></svg>',
    play: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"></path></svg>',
  };

  const VE_SERVICE_ICONS = [
    '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="5" width="18" height="14" rx="2"></rect><path d="M7 5v14M17 5v14M3 10h4M17 10h4M3 15h4M17 15h4"></path></svg>',
    '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 11v2a1 1 0 001 1h2l4 4V6L6 10H4a1 1 0 00-1 1z"></path><path d="M15 8a3 3 0 010 8"></path><path d="M18 5a7 7 0 010 14"></path></svg>',
    '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 12v2M8 8v10M12 5v16M16 9v8M20 11v4"></path></svg>',
    '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="7" y="2" width="10" height="20" rx="2"></rect><path d="M11 18h2"></path></svg>',
  ];

  function T() {
    return TRANSLATIONS[state.lang];
  }

  function getPath(obj, path) {
    return path.split(".").reduce((acc, key) => (acc == null ? acc : acc[key]), obj);
  }

  // ---------------------------------------------------------------------
  // i18n
  // ---------------------------------------------------------------------
  function applyI18n() {
    const t = T();
    document.documentElement.lang = state.lang;
    document.title = t.meta.title;

    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const val = getPath(t, el.getAttribute("data-i18n"));
      if (val != null) el.textContent = val;
    });
    document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
      const val = getPath(t, el.getAttribute("data-i18n-placeholder"));
      if (val != null) el.setAttribute("placeholder", val);
    });

    document.getElementById("btnLang").textContent = state.lang === "es" ? "EN" : "ES";
    const langTitle = state.lang === "es" ? t.controls.en : t.controls.es;
    document.getElementById("btnLang").setAttribute("aria-label", langTitle);
    document.getElementById("btnLang").setAttribute("title", langTitle);

    const themeTitle = state.theme === "light" ? t.controls.dark : t.controls.light;
    document.getElementById("btnTheme").setAttribute("aria-label", themeTitle);
    document.getElementById("btnTheme").setAttribute("title", themeTitle);

    document.querySelector(".controls-group").setAttribute("aria-label", t.controls.group);
    document.getElementById("reelsPanelClose").setAttribute("aria-label", t.videoEditing.closeLabel);

    updateVEHeroPauseLabel();
  }

  // ---------------------------------------------------------------------
  // Theme
  // ---------------------------------------------------------------------
  function applyTheme() {
    document.documentElement.setAttribute("data-theme", state.theme);
  }

  function toggleTheme() {
    state.theme = state.theme === "light" ? "dark" : "light";
    try {
      localStorage.setItem("sz_theme", state.theme);
    } catch (e) {}
    applyTheme();
    applyI18n();
  }

  function toggleLang() {
    state.lang = state.lang === "es" ? "en" : "es";
    try {
      localStorage.setItem("sz_lang", state.lang);
    } catch (e) {}
    applyI18n();
    renderVEServices();
    renderVEHero();
    renderVECategories();
    updateReelsPanel();
    renderProjectCards();
    updateCoverflow();
  }

  // ---------------------------------------------------------------------
  // Skills marquees (language-independent content)
  // ---------------------------------------------------------------------
  function renderMarquee(container, items, dark) {
    container.innerHTML = "";
    const doubled = [...items, ...items, ...(dark ? [...items, ...items] : [])];
    doubled.forEach((s, i) => {
      const isDup = i >= items.length;
      const item = document.createElement("div");
      item.className = dark ? "marquee-item--dark" : "marquee-item";
      item.setAttribute("aria-hidden", isDup ? "true" : "false");
      item.innerHTML =
        '<div class="marquee-icon-wrap"><img class="marquee-icon" src="' +
        s.icon +
        '" alt="' +
        (isDup ? "" : s.name) +
        '"></div><span class="marquee-name">' +
        s.name +
        "</span>";
      container.appendChild(item);
    });
  }

  // ---------------------------------------------------------------------
  // Video-editing services
  // ---------------------------------------------------------------------
  function renderVEServices() {
    const container = document.getElementById("veServices");
    const items = T().videoEditing.items;
    container.innerHTML = "";
    items.forEach((text, i) => {
      const el = document.createElement("div");
      el.className = "ve-service";
      el.innerHTML =
        '<span class="ve-service__icon">' + (VE_SERVICE_ICONS[i] || "") + '</span><span class="ve-service__text">' + text + "</span>";
      container.appendChild(el);
    });
  }

  // ---------------------------------------------------------------------
  // Featured video hero (Las Golondrinas)
  // ---------------------------------------------------------------------
  function renderVEHero() {
    const h = T().videoEditing.hero;
    const video = document.getElementById("veHeroVideo");
    if (video.getAttribute("src") !== VIDEO_HERO_MEDIA.video) {
      video.src = VIDEO_HERO_MEDIA.video;
      video.poster = VIDEO_HERO_MEDIA.poster;
    }
    document.getElementById("veHeroTag").innerHTML = '<span class="ve-hero__tag-dot"></span>' + h.tag;
    document.getElementById("veHeroLabel").textContent = h.label;
    document.getElementById("veHeroTitle").textContent = h.title;
    document.getElementById("veHeroDuration").textContent = h.duration;
    document.getElementById("veHeroDesc").textContent = h.desc;
    document.getElementById("veHeroDetailBtn").textContent = T().videoEditing.btnDetail;
    const liveLink = document.getElementById("veHeroLiveLink");
    liveLink.href = VIDEO_HERO_MEDIA.liveUrl;
    liveLink.textContent = h.ctaLive;
  }

  // El video del hero autoplay/loop necesita un control accesible de
  // pausa (WCAG 2.2.2): no tiene atributo "controls" nativo a propósito
  // porque choca con el scrim/badge del diseño. El ícono/label siguen el
  // estado REAL del <video> (eventos play/pause), no una suposición
  // optimista: si el navegador bloquea el autoplay, el botón ya arranca
  // mostrando "reproducir" en vez de mentir sobre el estado.
  function updateVEHeroPauseLabel() {
    const btn = document.getElementById("veHeroPauseBtn");
    if (!btn) return;
    const t = T().videoEditing;
    const label = btn.classList.contains("is-paused") ? t.playVideo : t.pauseVideo;
    btn.setAttribute("aria-label", label);
    btn.setAttribute("title", label);
  }

  function syncVEHeroPauseUI() {
    const video = document.getElementById("veHeroVideo");
    const btn = document.getElementById("veHeroPauseBtn");
    if (!video || !btn) return;
    btn.classList.toggle("is-paused", video.paused);
    updateVEHeroPauseLabel();
  }

  function toggleVEHeroVideo() {
    const video = document.getElementById("veHeroVideo");
    if (video.paused) video.play().catch(() => {});
    else video.pause();
  }

  // ---------------------------------------------------------------------
  // Reels
  // ---------------------------------------------------------------------
  function escapeAttr(s) {
    return String(s).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;");
  }

  // Monta el <video> recién al hacer click: la página no descarga nada hasta
  // que se pide, y el click es el gesto que el navegador exige para reproducir.
  function playInline(media, src, poster) {
    if (!src || media.querySelector("video")) return;
    const video = document.createElement("video");
    video.className = "reel__video";
    video.src = src;
    if (poster) video.poster = poster;
    video.controls = true;
    video.preload = "auto";
    video.setAttribute("playsinline", "");
    // Si el archivo no carga, sacamos el <video> roto y volvemos a mostrar
    // la portada + botón de play que ya estaban debajo.
    video.addEventListener("error", () => {
      media.classList.remove("is-playing");
      video.remove();
    });
    media.appendChild(video);
    media.classList.add("is-playing");
    video.play().catch(() => {});
  }

  function reelFrame(i, clipIndex, cover, alt, overlay, extraClass) {
    return (
      '<div class="reel__media' +
      (extraClass ? " " + extraClass : "") +
      '" data-play-index="' +
      i +
      '"' +
      (clipIndex === null ? "" : ' data-clip-index="' + clipIndex + '"') +
      ">" +
      '<img class="reel__cover" src="' +
      cover +
      '" alt="' +
      escapeAttr(alt) +
      '" loading="lazy">' +
      '<div class="reel__scrim"></div>' +
      '<button class="reel__play" type="button" aria-label="' +
      escapeAttr(T().videoEditing.playLabel + " " + alt) +
      '">' +
      svgPlay +
      "</button>" +
      overlay +
      "</div>"
    );
  }

  function renderVECategories() {
    const container = document.getElementById("veCategories");
    const tx = T().videoEditing;
    const videoCovers = [REEL_MEDIA[0].cover, REEL_MEDIA[1].cover];

    container.innerHTML =
      '<button class="category-folder" type="button" data-category="images" aria-label="' +
      escapeAttr(tx.categoryImagesLabel) +
      '">' +
      '<span class="category-folder-stack">' +
      '<span class="category-folder-photo category-folder-photo--1"></span>' +
      '<span class="category-folder-photo category-folder-photo--2"></span>' +
      '<span class="category-folder-glass">' +
      '<span class="category-folder-sticker category-folder-sticker--a">' + VE_CATEGORY_ICONS.camera + "</span>" +
      '<span class="category-folder-sticker category-folder-sticker--b">' + VE_CATEGORY_ICONS.grid + "</span>" +
      "</span>" +
      "</span>" +
      "</button>" +
      '<button class="category-folder" type="button" data-category="videos" aria-label="' +
      escapeAttr(tx.categoryVideosLabel) +
      '">' +
      '<span class="category-folder-stack">' +
      '<span class="category-folder-photo category-folder-photo--1" style="background-image:url(&quot;' + videoCovers[0] + '&quot;)"></span>' +
      '<span class="category-folder-photo category-folder-photo--2" style="background-image:url(&quot;' + videoCovers[1] + '&quot;)"></span>' +
      '<span class="category-folder-glass">' +
      '<span class="category-folder-sticker category-folder-sticker--a">' + VE_CATEGORY_ICONS.clapper + "</span>" +
      '<span class="category-folder-sticker category-folder-sticker--b">' + VE_CATEGORY_ICONS.play + "</span>" +
      "</span>" +
      "</span>" +
      "</button>";

    container.classList.toggle("has-open", !!state.veOpenCategory);
    container.querySelectorAll(".category-folder").forEach((btn) => {
      btn.setAttribute("aria-pressed", String(btn.getAttribute("data-category") === state.veOpenCategory));
      btn.addEventListener("animationend", () => btn.classList.remove("is-bouncing"));
      btn.addEventListener("click", () => {
        btn.classList.remove("is-bouncing");
        void btn.offsetWidth;
        btn.classList.add("is-bouncing");
        const cat = btn.getAttribute("data-category");
        state.veOpenCategory = state.veOpenCategory === cat ? null : cat;
        updateReelsPanel();
      });
    });
  }

  function updateReelsPanel() {
    const panel = document.getElementById("reelsPanel");
    const container = document.getElementById("veCategories");
    const isOpen = !!state.veOpenCategory;

    panel.classList.toggle("is-open", isOpen);
    panel.setAttribute("aria-hidden", String(!isOpen));
    container.classList.toggle("has-open", isOpen);
    container.querySelectorAll(".category-folder").forEach((b) => {
      b.setAttribute("aria-pressed", String(b.getAttribute("data-category") === state.veOpenCategory));
    });

    const hero = document.getElementById("veHero");
    const heroVideo = document.getElementById("veHeroVideo");
    const showHero = state.veOpenCategory === "videos";
    hero.hidden = !showHero;
    if (showHero) heroVideo.play().catch(() => {});
    else heroVideo.pause();

    if (isOpen) renderReels();
  }

  function renderReels() {
    const container = document.getElementById("reelsGrid");
    const tx = T().videoEditing;
    const hintEl = document.getElementById("reelsHint");
    container.innerHTML = "";

    if (state.veOpenCategory === "images") {
      if (hintEl) hintEl.textContent = tx.imagesHint;
      container.innerHTML =
        '<div class="reels-empty">' +
        '<p class="reels-empty__title">' + tx.imagesEmptyTitle + "</p>" +
        '<p class="reels-empty__desc">' + tx.imagesEmptyDesc + "</p>" +
        "</div>";
      return;
    }

    if (hintEl) hintEl.textContent = tx.reelsHint;
    const videos = tx.videos;

    videos.forEach((v, i) => {
      const m = REEL_MEDIA[i];
      // Si faltara el medio, salteamos esa pieza en vez de romper toda la grilla.
      if (!m) return;
      const el = document.createElement("div");

      if (m.clips) {
        const strip = v.clips
          .map((c, k) =>
            '<li class="reel__clip">' +
            reelFrame(
              i,
              k,
              m.clips[k].poster,
              v.title + " — " + c.role,
              '<span class="reel__step">' + c.step + "</span>" +
                '<span class="reel__time">' + c.duration + "</span>",
              "reel__media--sm"
            ) +
            '<div class="reel__clip-role">' + c.role + "</div>" +
            '<p class="reel__clip-note">' + c.note + "</p>" +
            "</li>"
          )
          .join("");

        el.className = "reel reel--campaign";
        el.innerHTML =
          '<div class="reel__campaign-head">' +
          '<span class="reel__campaign-tag">' + tx.campaignTag + "</span>" +
          '<div class="reel__campaign-title">' + v.title + "</div>" +
          '<p class="reel__caption">' + v.desc + "</p>" +
          "</div>" +
          '<ol class="reel__strip">' + strip + "</ol>" +
          '<button class="reel__more" type="button" data-detail-index="' + i + '">' +
          tx.btnDetail + " " + svgArrowRight +
          "</button>";
      } else {
        el.className = "reel";
        el.innerHTML =
          reelFrame(
            i,
            null,
            m.cover,
            v.title,
            '<span class="reel__badge"><span class="reel__badge-dot"></span>' +
              tx.aiTag +
              "</span>" +
              '<div class="reel__info"><div class="reel__title">' +
              v.title +
              '</div><div class="reel__duration">' +
              v.duration +
              "</div></div>",
            ""
          ) +
          '<div><p class="reel__caption">' +
          v.desc +
          '</p><button class="reel__more" type="button" data-detail-index="' + i + '">' +
          tx.btnDetail +
          " " +
          svgArrowRight +
          "</button></div>";
      }

      container.appendChild(el);
    });

    container.querySelectorAll("[data-play-index]").forEach((el) => {
      el.addEventListener("click", () => {
        const i = parseInt(el.getAttribute("data-play-index"), 10);
        const m = REEL_MEDIA[i];
        if (!m) return;
        const raw = el.getAttribute("data-clip-index");
        const clip = raw === null ? null : m.clips[parseInt(raw, 10)];
        playInline(el, clip ? clip.video : m.video, clip ? clip.poster : m.poster);
      });
    });

    container.querySelectorAll("[data-detail-index]").forEach((el) => {
      el.addEventListener("click", (e) => {
        e.stopPropagation();
        openVideoModal(parseInt(el.getAttribute("data-detail-index"), 10), 0);
      });
    });
  }

  // ---------------------------------------------------------------------
  // Certificates
  // ---------------------------------------------------------------------
  function renderCerts() {
    const container = document.getElementById("certsGrid");
    container.innerHTML = "";
    CERTIFICATES.forEach((c) => {
      const el = document.createElement("article");
      el.className = "cert-card";
      el.innerHTML =
        '<div class="cert-card__media"><img src="' +
        c.img +
        '" alt="Certificado ' +
        escapeAttr(c.title) +
        '" loading="lazy"></div>' +
        '<div class="cert-card__body"><h3 class="cert-card__title">' +
        c.title +
        '</h3><p class="cert-card__meta">' +
        c.org +
        " · " +
        c.year +
        '</p><a class="cert-card__download" href="' +
        c.img +
        '" download>' +
        '<svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3"></path></svg>' +
        "<span>" +
        T().certificates.btnDownload +
        "</span></a></div>";
      container.appendChild(el);
    });
  }

  // ---------------------------------------------------------------------
  // Projects coverflow
  // ---------------------------------------------------------------------
  function techChipHtml(techName) {
    const icon = TECH_ICONS[techName];
    return (
      '<span class="tech-chip">' +
      (icon ? '<img src="' + icon + '" alt="">' : "") +
      techName +
      "</span>"
    );
  }

  function renderProjectCards() {
    const stage = document.getElementById("coverflowStage");
    const descriptions = T().projects.descriptions;
    stage.innerHTML = "";
    PROJECTS_DATA.forEach((p, i) => {
      const desc = descriptions[p.title] || "";
      const card = document.createElement("article");
      card.className = "project-card";
      card.dataset.index = i;
      card.innerHTML =
        '<div class="project-card__inner">' +
        '<div class="project-card__media">' +
        '<img class="project-card__cover" src="' +
        p.cover +
        '" alt="' +
        p.title +
        '">' +
        (p.featured
          ? '<span class="project-card__badge-featured">★ ' + T().projects.labelFeatured + "</span>"
          : "") +
        '<span class="project-card__badge-type">' +
        p.type +
        "</span>" +
        "</div>" +
        '<div class="project-card__body">' +
        '<h3 class="project-card__title">' +
        p.title +
        "</h3>" +
        '<p class="project-card__desc">' +
        desc +
        "</p>" +
        '<div class="project-card__stack">' +
        p.stack.map(techChipHtml).join("") +
        "</div>" +
        '<button class="project-card__btn" type="button">' +
        T().projects.btnDetail +
        " " +
        svgArrowRight +
        "</button>" +
        "</div>" +
        "</div>";

      card.querySelector(".project-card__inner").addEventListener("click", () => onProjectCardClick(i));
      card.querySelector(".project-card__btn").addEventListener("click", (e) => {
        e.stopPropagation();
        if (i === state.activeProject) openProjectModal(i);
      });
      stage.appendChild(card);
    });

    const dotsContainer = document.getElementById("coverflowDots");
    dotsContainer.innerHTML = "";
    PROJECTS_DATA.forEach((_, i) => {
      const dot = document.createElement("button");
      dot.type = "button";
      dot.className = "coverflow-dot";
      dot.setAttribute("aria-label", "Ir al proyecto " + (i + 1));
      dot.addEventListener("click", () => setActiveProject(i));
      dotsContainer.appendChild(dot);
    });
  }

  function onProjectCardClick(i) {
    const n = PROJECTS_DATA.length;
    let d = i - state.activeProject;
    if (d > n / 2) d -= n;
    if (d < -n / 2) d += n;
    const absD = Math.abs(d);
    if (absD === 0) {
      openProjectModal(i);
    } else if (absD <= 2) {
      setActiveProject(i);
    }
  }

  function updateCoverflow() {
    const n = PROJECTS_DATA.length;
    const cards = document.querySelectorAll("#coverflowStage .project-card");
    cards.forEach((card) => {
      const i = parseInt(card.dataset.index, 10);
      let d = i - state.activeProject;
      if (d > n / 2) d -= n;
      if (d < -n / 2) d += n;
      const absD = Math.abs(d);
      const isActive = d === 0;
      const scale = absD === 0 ? 1 : absD === 1 ? 0.78 : 0.62;
      const x = d * 56;
      const z = -absD * 130;
      const rotY = d * -8;
      card.style.transform =
        "translate(-50%, 0) translate3d(" + x + "%, 0, " + z + "px) rotateY(" + rotY + "deg) scale(" + scale + ")";
      card.style.zIndex = 100 - absD * 10;
      card.style.opacity = "1";
      card.style.pointerEvents = absD > 1 ? "none" : "auto";
      const inner = card.querySelector(".project-card__inner");
      inner.style.boxShadow = isActive
        ? "0 30px 80px rgba(10,10,10,0.18), 0 12px 24px rgba(10,10,10,0.08)"
        : "0 12px 30px rgba(10,10,10,0.1)";
      const btn = card.querySelector(".project-card__btn");
      btn.style.pointerEvents = isActive ? "auto" : "none";
      // Las tarjetas no activas quedan chicas/detrás y su botón no hace nada
      // al activarlo (ver click handler más abajo): afuera del tab order
      // para que un usuario de teclado no caiga en un botón "muerto".
      btn.tabIndex = isActive ? 0 : -1;
    });

    const dots = document.querySelectorAll("#coverflowDots .coverflow-dot");
    dots.forEach((dot, i) => {
      dot.classList.toggle("is-active", i === state.activeProject);
    });
  }

  function setActiveProject(i) {
    state.activeProject = i;
    updateCoverflow();
  }

  function nextProject() {
    setActiveProject((state.activeProject + 1) % PROJECTS_DATA.length);
  }

  function prevProject() {
    setActiveProject((state.activeProject - 1 + PROJECTS_DATA.length) % PROJECTS_DATA.length);
  }

  // ---------------------------------------------------------------------
  // Project modal
  // ---------------------------------------------------------------------
  function openProjectModal(i) {
    const p = PROJECTS_DATA[i];
    const desc = T().projects.descriptions[p.title] || "";
    document.getElementById("modalProjectCover").src = p.cover;
    document.getElementById("modalProjectCover").alt = p.title;
    document.getElementById("modalProjectType").textContent = p.type;
    document.getElementById("modalProjectFeatured").hidden = !p.featured;
    document.getElementById("modalProjectTitle").textContent = p.title;
    document.getElementById("modalProjectDesc").textContent = desc;
    document.getElementById("modalProjectStack").innerHTML = p.stack.map(techChipHtml).join("");

    const demoBtn = document.getElementById("modalProjectDemo");
    const soonBadge = document.getElementById("modalProjectSoon");
    const repoBtn = document.getElementById("modalProjectRepo");
    if (p.demo) {
      demoBtn.href = p.demo;
      demoBtn.hidden = false;
      soonBadge.hidden = true;
    } else {
      demoBtn.hidden = true;
      soonBadge.hidden = false;
    }
    if (p.repo) {
      repoBtn.href = p.repo;
      repoBtn.hidden = false;
    } else {
      repoBtn.hidden = true;
    }

    showOverlay("projectModalOverlay");
  }

  function closeProjectModal() {
    hideOverlay("projectModalOverlay");
  }

  // ---------------------------------------------------------------------
  // Video modal
  // ---------------------------------------------------------------------
  function setVideoModalPlayer(src, poster) {
    const media = document.getElementById("modalVideoMedia");
    const player = document.getElementById("modalVideoPlayer");
    const playBtn = media.querySelector(".modal__video-play");
    const glow = document.getElementById("modalVideoGlow");
    if (src) {
      player.src = src;
      player.poster = poster || "";
      player.hidden = false;
      player.currentTime = 0;
      player.play().catch(() => {});
      playBtn.style.display = "none";
      glow.style.background = "none";
      media.style.background = "#0a0a0a";
    } else {
      player.pause();
      player.removeAttribute("src");
      player.load();
      player.hidden = true;
      playBtn.style.display = "";
    }
  }

  // Renderiza el selector de piezas cuando el proyecto es una campaña.
  function renderModalClips(i, active) {
    const wrap = document.getElementById("modalVideoClips");
    const m = REEL_MEDIA[i];
    const v = T().videoEditing.videos[i];
    if (!m || !m.clips) {
      wrap.hidden = true;
      return;
    }
    wrap.hidden = false;
    document.getElementById("modalVideoClipsLabel").textContent = T().videoEditing.campaignPiecesLabel;
    document.getElementById("modalVideoClipNote").textContent = v.clips[active].note;

    const list = document.getElementById("modalVideoClipsList");
    list.innerHTML = v.clips
      .map(
        (c, k) =>
          '<button class="modal__clip' +
          (k === active ? " is-active" : "") +
          '" type="button" data-clip="' +
          k +
          '"><img src="' +
          m.clips[k].poster +
          '" alt=""><span><b>' +
          c.step +
          "</b> " +
          c.role +
          "</span></button>"
      )
      .join("");

    list.querySelectorAll("[data-clip]").forEach((btn) => {
      btn.addEventListener("click", () => {
        openVideoModal(i, parseInt(btn.getAttribute("data-clip"), 10));
      });
    });
  }

  function openVideoModal(i, clipIndex) {
    const v = T().videoEditing.videos[i];
    const m = REEL_MEDIA[i];
    const isCampaign = !!(m && m.clips);
    const k = isCampaign ? clipIndex || 0 : 0;

    document.getElementById("modalVideoMedia").style.background = m.bg;
    document.getElementById("modalVideoGlow").style.background =
      "radial-gradient(60% 60% at 50% 45%, " + m.accent + " 0%, transparent 70%)";

    // Antes acá iba setVideoModalPlayer(null): el modal abría sin ningún
    // archivo cargado y por eso el play nunca reproducía nada.
    setVideoModalPlayer(
      isCampaign ? m.clips[k].video : m.video,
      isCampaign ? m.clips[k].poster : m.poster
    );

    document.getElementById("modalVideoTitle").textContent = v.title;
    document.getElementById("modalVideoTitle2").textContent = v.title;
    document.getElementById("modalVideoDuration").textContent = isCampaign
      ? v.clips[k].duration + " · " + v.clips[k].role
      : v.duration;
    document.getElementById("modalVideoSummary").textContent = v.summary;
    document.getElementById("modalVideoProcess").textContent = v.process;
    document.getElementById("modalVideoStack").innerHTML = VIDEO_STACK.map((s) => "<span>" + s + "</span>").join("");
    document.getElementById("modalVideoAiTag").textContent = T().videoEditing.aiTag;
    document.getElementById("modalVideoActions").hidden = true;

    renderModalClips(i, k);
    showOverlay("videoModalOverlay");
  }

  function openVideoHeroModal() {
    const h = T().videoEditing.hero;
    setVideoModalPlayer(VIDEO_HERO_MEDIA.video, VIDEO_HERO_MEDIA.poster);
    document.getElementById("modalVideoClips").hidden = true;
    document.getElementById("modalVideoTitle").textContent = h.title;
    document.getElementById("modalVideoTitle2").textContent = h.title;
    document.getElementById("modalVideoDuration").textContent = h.duration;
    document.getElementById("modalVideoSummary").textContent = h.summary;
    document.getElementById("modalVideoProcess").textContent = h.process;
    document.getElementById("modalVideoStack").innerHTML = VIDEO_STACK.map((s) => "<span>" + s + "</span>").join("");
    document.getElementById("modalVideoAiTag").textContent = h.tag;

    const actions = document.getElementById("modalVideoActions");
    actions.hidden = false;
    const liveBtn = document.getElementById("modalVideoLive");
    liveBtn.href = VIDEO_HERO_MEDIA.liveUrl;
    liveBtn.querySelector("span").textContent = h.ctaLive;
    const caseBtn = document.getElementById("modalVideoCase");
    caseBtn.href = VIDEO_HERO_MEDIA.caseUrl;
    caseBtn.querySelector("span").textContent = h.ctaCase;

    showOverlay("videoModalOverlay");
  }

  function closeVideoModal() {
    hideOverlay("videoModalOverlay");
    document.getElementById("modalVideoPlayer").pause();
  }

  // Deja el resto de la página fuera del tab order y del árbol de
  // accesibilidad mientras hay un modal abierto (evita que el foco por
  // teclado "escape" del diálogo hacia el fondo).
  function setBackgroundInert(isInert) {
    document.querySelectorAll("body > *").forEach((el) => {
      if (el.id === "projectModalOverlay" || el.id === "videoModalOverlay") return;
      if (isInert) el.setAttribute("inert", "");
      else el.removeAttribute("inert");
    });
  }

  let lastFocusedEl = null;

  function showOverlay(id) {
    const overlay = document.getElementById(id);
    lastFocusedEl = document.activeElement;
    overlay.hidden = false;
    document.body.style.overflow = "hidden";
    setBackgroundInert(true);
    const dialog = overlay.querySelector(".modal");
    const focusTarget = dialog.querySelector('button, a[href]') || dialog;
    focusTarget.focus();
  }

  function hideOverlay(id) {
    document.getElementById(id).hidden = true;
    if (document.getElementById("projectModalOverlay").hidden && document.getElementById("videoModalOverlay").hidden) {
      document.body.style.overflow = "";
      setBackgroundInert(false);
    }
    if (lastFocusedEl && typeof lastFocusedEl.focus === "function") lastFocusedEl.focus();
    lastFocusedEl = null;
  }

  // ---------------------------------------------------------------------
  // Copy link + toast
  // ---------------------------------------------------------------------
  let copyTimeout = null;
  async function copyLink() {
    try {
      await navigator.clipboard.writeText(window.location.href);
    } catch (e) {
      return;
    }
    const toast = document.getElementById("copiedToast");
    const copyBtnText = document.getElementById("copyBtnText");
    copyBtnText.textContent = T().banner.btnCopied;
    toast.hidden = false;
    clearTimeout(copyTimeout);
    copyTimeout = setTimeout(() => {
      toast.hidden = true;
      copyBtnText.textContent = T().banner.btnCopyLink;
    }, 1800);
  }

  // ---------------------------------------------------------------------
  // Contact form (mailto)
  // ---------------------------------------------------------------------
  // Los mensajes de error nativos del navegador salen en su propio idioma
  // (no en el ES/EN del sitio); los reemplazamos por los de T().contact.
  function setupContactValidation() {
    const nameEl = document.getElementById("sz-name");
    const emailEl = document.getElementById("sz-email");
    const msgEl = document.getElementById("sz-msg");
    [nameEl, emailEl, msgEl].forEach((el) => {
      el.addEventListener("invalid", () => {
        const c = T().contact;
        el.setCustomValidity(el === emailEl && el.validity.typeMismatch ? c.errorEmail : c.errorRequired);
      });
      el.addEventListener("input", () => el.setCustomValidity(""));
    });
  }

  function submitForm(e) {
    e.preventDefault();
    const t = T();
    const name = document.getElementById("sz-name").value;
    const email = document.getElementById("sz-email").value;
    const message = document.getElementById("sz-msg").value;
    const subject = t.contact.mailSubject + " - " + (name || "Nuevo contacto");
    const body = [t.contact.mailName + ": " + name, "Email: " + email, "", t.contact.mailMessage + ":", message].join("\n");
    document.getElementById("contactStatus").textContent = t.contact.sending;
    window.location.href = "mailto:sofizapata2004@gmail.com?subject=" + encodeURIComponent(subject) + "&body=" + encodeURIComponent(body);
  }

  // ---------------------------------------------------------------------
  // Certificates toggle
  // ---------------------------------------------------------------------
  function toggleCerts() {
    state.certsOpen = !state.certsOpen;
    document.getElementById("certsPanel").hidden = !state.certsOpen;
    document.getElementById("certsToggle").setAttribute("aria-expanded", String(state.certsOpen));
  }

  // ---------------------------------------------------------------------
  // Scroll helpers
  // ---------------------------------------------------------------------
  function scrollToId(id) {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  // ---------------------------------------------------------------------
  // Navbar visibility + active section + reveal-on-scroll
  // ---------------------------------------------------------------------
  function initScrollBehaviors() {
    const navbar = document.getElementById("navbar");
    const onScroll = () => {
      const y = window.scrollY || window.pageYOffset;
      navbar.classList.toggle("is-visible", y > 320);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    const sectionIds = ["skills", "projects", "video-editing", "contact"];
    const navLinks = document.querySelectorAll(".navbar__link");
    const sectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            navLinks.forEach((link) => {
              link.classList.toggle("is-active", link.getAttribute("data-nav-target") === entry.target.id);
            });
          }
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) sectionObserver.observe(el);
    });

    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-in");
            revealObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -6% 0px" }
    );
    document.querySelectorAll("[data-reveal]").forEach((el) => revealObserver.observe(el));
  }

  function initKeyboard() {
    window.addEventListener("keydown", (e) => {
      const projectOpen = !document.getElementById("projectModalOverlay").hidden;
      const videoOpen = !document.getElementById("videoModalOverlay").hidden;
      if (e.key === "Escape") {
        if (projectOpen) closeProjectModal();
        if (videoOpen) closeVideoModal();
        return;
      }
      if (projectOpen || videoOpen) return;
      if (e.key === "ArrowRight") nextProject();
      if (e.key === "ArrowLeft") prevProject();
    });
  }

  // ---------------------------------------------------------------------
  // Init
  // ---------------------------------------------------------------------
  function init() {
    try {
      const savedTheme = localStorage.getItem("sz_theme");
      const savedLang = localStorage.getItem("sz_lang");
      if (savedTheme === "light" || savedTheme === "dark") state.theme = savedTheme;
      if (savedLang === "es" || savedLang === "en") state.lang = savedLang;
    } catch (e) {}

    applyTheme();
    applyI18n();

    renderMarquee(document.getElementById("skillsMarquee"), SKILLS, false);
    renderMarquee(document.getElementById("videoSkillsMarquee"), VIDEO_SKILLS, true);
    renderVEServices();
    renderVEHero();
    renderVECategories();
    updateReelsPanel();
    renderCerts();
    renderProjectCards();
    updateCoverflow();

    document.getElementById("reelsPanelClose").addEventListener("click", () => {
      state.veOpenCategory = null;
      updateReelsPanel();
    });

    document.getElementById("btnTheme").addEventListener("click", toggleTheme);
    document.getElementById("btnLang").addEventListener("click", toggleLang);
    document.getElementById("btnCopyLink").addEventListener("click", copyLink);
    document.getElementById("btnScrollProjects").addEventListener("click", () => scrollToId("projects"));
    document.getElementById("btnScrollVideo").addEventListener("click", () => scrollToId("video-editing"));

    document.querySelectorAll(".navbar__link").forEach((link) => {
      link.addEventListener("click", (e) => {
        e.preventDefault();
        scrollToId(link.getAttribute("data-nav-target"));
      });
    });

    document.getElementById("prevProject").addEventListener("click", prevProject);
    document.getElementById("nextProject").addEventListener("click", nextProject);

    document.getElementById("projectModalOverlay").addEventListener("click", (e) => {
      if (e.target.id === "projectModalOverlay") closeProjectModal();
    });
    document.getElementById("projectModal").addEventListener("click", (e) => e.stopPropagation());
    document.getElementById("projectModalClose").addEventListener("click", closeProjectModal);

    document.getElementById("videoModalOverlay").addEventListener("click", (e) => {
      if (e.target.id === "videoModalOverlay") closeVideoModal();
    });
    document.getElementById("videoModal").addEventListener("click", (e) => e.stopPropagation());
    document.getElementById("videoModalClose").addEventListener("click", closeVideoModal);
    document.getElementById("veHeroDetailBtn").addEventListener("click", openVideoHeroModal);
    document.getElementById("veHeroPauseBtn").addEventListener("click", toggleVEHeroVideo);
    document.getElementById("veHeroVideo").addEventListener("play", syncVEHeroPauseUI);
    document.getElementById("veHeroVideo").addEventListener("pause", syncVEHeroPauseUI);
    syncVEHeroPauseUI();

    document.getElementById("contactForm").addEventListener("submit", submitForm);
    document.getElementById("certsToggle").addEventListener("click", toggleCerts);

    // Si una imagen no carga, la sacamos para que se vea el fondo del
    // contenedor en vez del ícono roto del navegador ("error" no burbujea:
    // hace falta capture).
    document.addEventListener(
      "error",
      (e) => {
        if (e.target.tagName === "IMG") e.target.style.display = "none";
      },
      true
    );
    document.getElementById("veHeroVideo").addEventListener("error", () => {
      document.getElementById("veHeroVideo").style.display = "none";
    });
    document.getElementById("modalVideoPlayer").addEventListener("error", () => {
      setVideoModalPlayer(null);
    });

    setupContactValidation();
    initScrollBehaviors();
    initKeyboard();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
