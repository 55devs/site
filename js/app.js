(function () {
  "use strict";

  var translations = {
    pt: {
      "a11y.skip": "Ir para o conteúdo",
      "a11y.langGroup": "Idioma",
      "a11y.menuOpen": "Abrir menu",
      "a11y.menuClose": "Fechar menu",
      "nav.home": "Início",
      "nav.projects": "Projetos",
      "nav.team": "Equipe",
      "nav.contact": "Contato",
      "hero.titleLine1": "Construímos o amanhã",
      "hero.titleLine2": "de maneira inteligente.",
      "hero.subtitle": "Somos uma Software House focada em soluções sob medida para o seu projeto.",
      "hero.ctaContact": "Fale conosco",
      "hero.ctaProjects": "Ver projetos",
      "projects.label": "Projetos",
      "projects.title": "Foco no que importa.",
      "projects.subtitle": "Desenhamos soluções digitais sob medida para o seu projeto.",
      "projects.gardenDesc": "Solução de gerenciamento para jardins de alto padrão.",
      "projects.assocTag2": "Infra / Administração",
      "projects.assocDesc": "Software para gerenciamento de associações com módulos personalizados para cada setor.",
      "team.label": "Equipe",
      "team.title": "Experiência que escala.",
      "team.body": "Time com especialistas atuando há mais de 6 anos em microsserviços de alta performance, sistemas orientados a eventos e integração de IA. Com experiências em diversos times, em plataformas de grande escala para projetos alocados na Warner Bros., DHL Express, Banco Mercedes-Benz, Nestlé, ABInBev, Suzano, entre outros.",
      "contact.label": "Contato",
      "contact.title": "Vamos conversar sobre o seu projeto.",
      "contact.body": "Envie um e-mail para:",
      "footer.copyright": "© 2026 55Devs | Soluções digitais inteligentes sob medida."
    },
    en: {
      "a11y.skip": "Skip to content",
      "a11y.langGroup": "Language",
      "a11y.menuOpen": "Open menu",
      "a11y.menuClose": "Close menu",
      "nav.home": "Home",
      "nav.projects": "Projects",
      "nav.team": "Team",
      "nav.contact": "Contact",
      "hero.titleLine1": "Building tomorrow's",
      "hero.titleLine2": "solutions intelligently.",
      "hero.subtitle": "We are a software house focused on tailor-made solutions for your project.",
      "hero.ctaContact": "Contact us",
      "hero.ctaProjects": "View projects",
      "projects.label": "Projects",
      "projects.title": "Focused on what matters.",
      "projects.subtitle": "We design tailor-made digital solutions for your project.",
      "projects.gardenDesc": "Management solution for high-end gardens.",
      "projects.assocTag2": "Infra / Administration",
      "projects.assocDesc": "Association management software with custom modules for every sector.",
      "team.label": "Team",
      "team.title": "Experience that scales.",
      "team.body": "A team of specialists with over 6 years working on high-performance microservices, event-driven systems and AI integration. With experience across multiple teams, on large-scale platforms for projects at Warner Bros., DHL Express, Mercedes-Benz Bank, Nestlé, ABInBev, Suzano, among others.",
      "contact.label": "Contact",
      "contact.title": "Let's talk about your project.",
      "contact.body": "Send an email to:",
      "footer.copyright": "© 2026 55Devs | Smart tailor-made digital solutions."
    },
    es: {
      "a11y.skip": "Ir al contenido",
      "a11y.langGroup": "Idioma",
      "a11y.menuOpen": "Abrir menú",
      "a11y.menuClose": "Cerrar menú",
      "nav.home": "Inicio",
      "nav.projects": "Proyectos",
      "nav.team": "Equipo",
      "nav.contact": "Contacto",
      "hero.titleLine1": "Construimos el mañana",
      "hero.titleLine2": "de manera inteligente.",
      "hero.subtitle": "Somos una software house enfocada en soluciones a medida para tu proyecto.",
      "hero.ctaContact": "Hablemos",
      "hero.ctaProjects": "Ver proyectos",
      "projects.label": "Proyectos",
      "projects.title": "Enfocados en lo que importa.",
      "projects.subtitle": "Diseñamos soluciones digitales a medida para tu proyecto.",
      "projects.gardenDesc": "Solución de gestión para jardines de alto nivel.",
      "projects.assocTag2": "Infra / Administración",
      "projects.assocDesc": "Software de gestión de asociaciones con módulos personalizados para cada sector.",
      "team.label": "Equipo",
      "team.title": "Experiencia que escala.",
      "team.body": "Equipo de especialistas con más de 6 años trabajando en microservicios de alto rendimiento, sistemas orientados a eventos e integración de IA. Con experiencia en distintos equipos, en plataformas de gran escala para proyectos en Warner Bros., DHL Express, Banco Mercedes-Benz, Nestlé, ABInBev, Suzano, entre otros.",
      "contact.label": "Contacto",
      "contact.title": "Hablemos sobre tu proyecto.",
      "contact.body": "Envía un correo a:",
      "footer.copyright": "© 2026 55Devs | Soluciones digitales inteligentes a medida."
    }
  };

  var STORAGE_KEY = "55devs.lang";

  function detectLang() {
    var saved = localStorage.getItem(STORAGE_KEY);
    if (saved && translations[saved]) return saved;
    var nav = (navigator.language || "pt").slice(0, 2).toLowerCase();
    return translations[nav] ? nav : "pt";
  }

  function applyLang(lang) {
    var dict = translations[lang] || translations.pt;

    document.documentElement.setAttribute("lang", lang === "pt" ? "pt-BR" : lang);

    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      var key = el.getAttribute("data-i18n");
      if (dict[key]) el.textContent = dict[key];
    });

    document.querySelectorAll("[data-i18n-attr]").forEach(function (el) {
      el.getAttribute("data-i18n-attr").split(";").forEach(function (pair) {
        var parts = pair.split(":");
        var attr = parts[0] && parts[0].trim();
        var key = parts[1] && parts[1].trim();
        if (attr && key && dict[key]) el.setAttribute(attr, dict[key]);
      });
    });

    document.querySelectorAll(".lang-btn").forEach(function (btn) {
      var pressed = btn.getAttribute("data-lang") === lang;
      btn.setAttribute("aria-pressed", String(pressed));
    });

    var menuBtn = document.getElementById("mobileMenuBtn");
    if (menuBtn) {
      var expanded = menuBtn.getAttribute("aria-expanded") === "true";
      menuBtn.setAttribute("aria-label", expanded ? dict["a11y.menuClose"] : dict["a11y.menuOpen"]);
    }

    localStorage.setItem(STORAGE_KEY, lang);
  }

  function initLangSwitcher() {
    document.querySelectorAll(".lang-btn").forEach(function (btn) {
      btn.addEventListener("click", function () {
        applyLang(btn.getAttribute("data-lang"));
      });
    });
    applyLang(detectLang());
  }

  function initMobileMenu() {
    var btn = document.getElementById("mobileMenuBtn");
    var menu = document.getElementById("mobileMenu");
    if (!btn || !menu) return;

    var iconMenu = btn.querySelector(".icon-menu");
    var iconClose = btn.querySelector(".icon-close");

    function setOpen(open) {
      menu.classList.toggle("hidden", !open);
      btn.setAttribute("aria-expanded", String(open));
      if (iconMenu) iconMenu.classList.toggle("hidden", open);
      if (iconClose) iconClose.classList.toggle("hidden", !open);

      var lang = localStorage.getItem(STORAGE_KEY) || detectLang();
      var dict = translations[lang] || translations.pt;
      btn.setAttribute("aria-label", open ? dict["a11y.menuClose"] : dict["a11y.menuOpen"]);
    }

    btn.addEventListener("click", function () {
      setOpen(menu.classList.contains("hidden"));
    });

    menu.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        setOpen(false);
      });
    });
  }

  function initReveal() {
    var items = document.querySelectorAll(".reveal");
    if (!items.length) return;

    if (!("IntersectionObserver" in window)) {
      items.forEach(function (el) { el.classList.add("is-visible"); });
      return;
    }

    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    items.forEach(function (el) { observer.observe(el); });
  }

  document.addEventListener("DOMContentLoaded", function () {
    initLangSwitcher();
    initMobileMenu();
    initReveal();
  });
})();
