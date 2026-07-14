// Portfolio de Sofía Zapata — lógica de interfaz (tema, idioma, coverflow, modales, reveal, marquee).
(function () {
  "use strict";

  const state = {
    theme: "light",
    lang: "es",
    activeProject: 0,
    certsOpen: false,
  };

  const svgArrowRight =
    '<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 17L17 7M8 7h9v9"></path></svg>';
  const svgPlay = '<svg width="22" height="22" viewBox="0 0 24 24" fill="#0a0a0a" style="margin-left:3px;"><path d="M8 5v14l11-7z"></path></svg>';

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
    renderReels();
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
      const num = String(i + 1).padStart(2, "0");
      const el = document.createElement("div");
      el.className = "ve-service";
      el.innerHTML =
        '<div class="ve-service__num">' + num + '</div><p class="ve-service__text">' + text + "</p>";
      container.appendChild(el);
    });
  }

  // ---------------------------------------------------------------------
  // Reels
  // ---------------------------------------------------------------------
  function renderReels() {
    const container = document.getElementById("reelsGrid");
    const videos = T().videoEditing.videos;
    container.innerHTML = "";
    videos.forEach((v, i) => {
      const el = document.createElement("div");
      el.className = "reel";
      el.innerHTML =
        '<div class="reel__media" data-video-index="' +
        i +
        '">' +
        '<img class="reel__cover" src="' +
        REEL_COVERS[i] +
        '" alt="' +
        v.title +
        '">' +
        '<div class="reel__scrim"></div>' +
        '<button class="reel__play" aria-label="Ver ' +
        v.title +
        '" type="button" data-video-index="' +
        i +
        '">' +
        svgPlay +
        "</button>" +
        '<span class="reel__badge"><span class="reel__badge-dot"></span>' +
        T().videoEditing.aiTag +
        "</span>" +
        '<div class="reel__info"><div class="reel__title">' +
        v.title +
        '</div><div class="reel__duration">' +
        v.duration +
        "</div></div>" +
        "</div>" +
        '<div><p class="reel__caption">' +
        v.desc +
        '</p><button class="reel__more" type="button" data-video-index="' +
        i +
        '">' +
        T().videoEditing.btnDetail +
        " " +
        svgArrowRight +
        "</button></div>";
      container.appendChild(el);
    });

    container.querySelectorAll("[data-video-index]").forEach((el) => {
      el.addEventListener("click", (e) => {
        e.stopPropagation();
        openVideoModal(parseInt(el.getAttribute("data-video-index"), 10));
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
        c.title +
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
  function openVideoModal(i) {
    const v = T().videoEditing.videos[i];
    const poster = REEL_POSTERS[i];
    document.getElementById("modalVideoMedia").style.background = poster.bg;
    document.getElementById("modalVideoGlow").style.background =
      "radial-gradient(60% 60% at 50% 45%, " + poster.accent + " 0%, transparent 70%)";
    document.getElementById("modalVideoTitle").textContent = v.title;
    document.getElementById("modalVideoTitle2").textContent = v.title;
    document.getElementById("modalVideoDuration").textContent = v.duration;
    document.getElementById("modalVideoSummary").textContent = v.summary;
    document.getElementById("modalVideoProcess").textContent = v.process;
    document.getElementById("modalVideoStack").innerHTML = VIDEO_STACK.map((s) => "<span>" + s + "</span>").join("");

    showOverlay("videoModalOverlay");
  }

  function closeVideoModal() {
    hideOverlay("videoModalOverlay");
  }

  function showOverlay(id) {
    document.getElementById(id).hidden = false;
    document.body.style.overflow = "hidden";
  }

  function hideOverlay(id) {
    document.getElementById(id).hidden = true;
    if (document.getElementById("projectModalOverlay").hidden && document.getElementById("videoModalOverlay").hidden) {
      document.body.style.overflow = "";
    }
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
  function submitForm(e) {
    e.preventDefault();
    const t = T();
    const name = document.getElementById("sz-name").value;
    const email = document.getElementById("sz-email").value;
    const message = document.getElementById("sz-msg").value;
    const subject = t.contact.mailSubject + " - " + (name || "Nuevo contacto");
    const body = [t.contact.mailName + ": " + name, "Email: " + email, "", t.contact.mailMessage + ":", message].join("\n");
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

    const sectionIds = ["focus-areas", "about", "skills", "projects", "video-skills", "video-editing", "contact"];
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
    renderReels();
    renderCerts();
    renderProjectCards();
    updateCoverflow();

    document.getElementById("btnTheme").addEventListener("click", toggleTheme);
    document.getElementById("btnLang").addEventListener("click", toggleLang);
    document.getElementById("btnCopyLink").addEventListener("click", copyLink);
    document.getElementById("btnScrollProjects").addEventListener("click", () => scrollToId("projects"));
    document.getElementById("btnScrollVideo").addEventListener("click", () => scrollToId("video-editing"));
    document.querySelectorAll(".btn-scroll-projects").forEach((el) => el.addEventListener("click", () => scrollToId("projects")));
    document.querySelectorAll(".btn-scroll-video").forEach((el) => el.addEventListener("click", () => scrollToId("video-editing")));

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

    document.getElementById("contactForm").addEventListener("submit", submitForm);
    document.getElementById("certsToggle").addEventListener("click", toggleCerts);

    initScrollBehaviors();
    initKeyboard();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
