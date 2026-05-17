/* Configuración mínima del sitio */
const CONFIG = {
  claseActual: 4,
};

const CLASES = [
  { n: 1, mes: 1, tema: "IDENTIDAD", titulo: "No soy técnico, soy mayordomo", pasaje: "Lucas 16:10-12", fecha: "Domingo, 26 de abril de 2026" },
  { n: 2, mes: 1, tema: "IDENTIDAD", titulo: "El problema del orgullo técnico", pasaje: "1 Corintios 8:1 / Filipenses 2:3-4", fecha: "Domingo, 3 de mayo de 2026" },
  { n: 3, mes: 1, tema: "IDENTIDAD", titulo: "El llamado que antecede al talento", pasaje: "Éxodo 31:1-5", fecha: "Domingo, 10 de mayo de 2026" },
  { n: 4, mes: 1, tema: "IDENTIDAD", titulo: "Servicio anónimo: la gloria que no se ve", pasaje: "Mateo 6:3-4 / Colosenses 3:23", fecha: "Domingo, 24 de mayo de 2026" },
];

const MES_COLOR = { 1: "identidad" };

function initClaseStrip() {
  const clase = CLASES.find(c => c.n === CONFIG.claseActual);
  if (!clase) return;

  const colorVal = getComputedStyle(document.documentElement)
    .getPropertyValue(`--${MES_COLOR[clase.mes]}`).trim() || "#2563eb";

  const badge = document.getElementById("clase-mes-badge");
  if (badge) {
    badge.textContent = `Mes ${clase.mes} · ${clase.tema}`;
    badge.style.background = colorVal;
  }

  const num = document.getElementById("clase-num");
  const titulo = document.getElementById("clase-titulo");
  const pasaje = document.getElementById("clase-pasaje");
  const fecha = document.getElementById("clase-fecha");

  if (num) num.textContent = `Clase ${clase.n}`;
  if (titulo) titulo.textContent = clase.titulo;
  if (pasaje) pasaje.textContent = clase.pasaje;
  if (fecha) fecha.textContent = clase.fecha;
}

function removeParticipantFields() {
  document.querySelectorAll(".cc-ficha").forEach(el => el.remove());
}

function removeOldDocumentPlaceholder() {
  const contenido = document.getElementById("clase-contenido");
  if (!contenido) return;
  if (contenido.textContent.includes("El documento de esta clase aún no está disponible")) {
    contenido.remove();
  }
}

function fixPdfButtons() {
  const links = document.querySelectorAll("a.archivo-download");
  links.forEach(link => {
    const text = link.closest(".archivo-card")?.textContent || "";
    link.removeAttribute("download");
    link.setAttribute("target", "_blank");
    link.setAttribute("rel", "noopener");

    if (text.includes("Clase 4")) {
      link.href = "https://multimedia.ccadoram.com/clase4-mayo-24.pdf?v=1";
    }
    if (text.includes("Clase 3")) {
      link.href = "https://multimedia.ccadoram.com/clase3-mayo-10.pdf?v=1";
    }
    if (text.includes("Clase 2")) {
      link.href = "https://multimedia.ccadoram.com/clase2-mayo-3.pdf?v=1";
    }
    if (text.includes("Clase 1")) {
      link.href = "https://multimedia.ccadoram.com/clase1-abril-26.pdf?v=1";
    }
  });
}

function highlightActiveMes() {
  document.querySelectorAll(".mes-card").forEach(card => {
    if (Number(card.dataset.mes) === 1) {
      card.style.outline = "3px solid var(--identidad)";
      card.style.outlineOffset = "3px";
    }
  });
}

document.addEventListener("DOMContentLoaded", () => {
  initClaseStrip();
  removeOldDocumentPlaceholder();
  removeParticipantFields();
  fixPdfButtons();
  highlightActiveMes();
});
