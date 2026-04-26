/* ─── Config — edit this each Sunday ─────────────────────────────
 *
 * claseActual:  number  — which class # is this Sunday (1-20)
 * docPath:      string  — path to the Word/PDF file, or "" if none yet
 *
 * Examples:
 *   claseActual: 1,  docPath: "documentos/clase-01.docx"
 *   claseActual: 5,  docPath: "documentos/clase-05.pdf"
 *   claseActual: 12, docPath: ""   ← shows "no document yet" message
 * ────────────────────────────────────────────────────────────── */
const CONFIG = {
  claseActual: 1,
  docPath: "",   // leave empty until you upload the file
};

/* ─── Curriculum data ─────────────────────────────────────────── */
const CLASES = [
  // MES 1 — IDENTIDAD
  { n:  1, mes: 1, tema: "IDENTIDAD",  titulo: "No soy técnico, soy mayordomo",              pasaje: "Lucas 16:10-12"                        },
  { n:  2, mes: 1, tema: "IDENTIDAD",  titulo: "El problema del orgullo técnico",             pasaje: "1 Corintios 8:1 / Filipenses 2:3-4"    },
  { n:  3, mes: 1, tema: "IDENTIDAD",  titulo: "El llamado que antecede al talento",          pasaje: "Éxodo 31:1-5"                          },
  { n:  4, mes: 1, tema: "IDENTIDAD",  titulo: "Servicio anónimo: la gloria que no se ve",   pasaje: "Mateo 6:3-4 / Colosenses 3:23"         },
  // MES 2 — EXCELENCIA
  { n:  5, mes: 2, tema: "EXCELENCIA", titulo: "El sonido importa porque la Palabra importa", pasaje: "Romanos 10:17 / Nehemías 8:2-3"        },
  { n:  6, mes: 2, tema: "EXCELENCIA", titulo: "Las redes sociales: misión o distracción",    pasaje: "Marcos 16:15 / Hechos 17:16-34"        },
  { n:  7, mes: 2, tema: "EXCELENCIA", titulo: "El YouTube que nadie ve... y el que sí ve",   pasaje: "Lucas 15:4-7 / Mateo 18:12-14"         },
  { n:  8, mes: 2, tema: "EXCELENCIA", titulo: "El mantenimiento como discipulado",            pasaje: "Génesis 2:15 / Lucas 16:10"            },
  // MES 3 — COMUNIDAD
  { n:  9, mes: 3, tema: "COMUNIDAD",  titulo: "Cuando el monitor falla y la actitud también",pasaje: "Santiago 1:2-4 / Gálatas 5:22-23"      },
  { n: 10, mes: 3, tema: "COMUNIDAD",  titulo: "El líder que sirve y el técnico que manda",   pasaje: "Marcos 10:42-45 / Juan 13:3-5"         },
  { n: 11, mes: 3, tema: "COMUNIDAD",  titulo: "Talentos distintos, misma misión",             pasaje: "1 Corintios 12:14-20 / Romanos 12:4-6" },
  { n: 12, mes: 3, tema: "COMUNIDAD",  titulo: "¿Qué hacemos cuando no nos llevamos bien?",   pasaje: "Mateo 18:15-17 / Efesios 4:26-27"      },
  // MES 4 — CULTURA
  { n: 13, mes: 4, tema: "CULTURA",    titulo: "¿La iglesia puede ser creativa?",              pasaje: "Génesis 1:1 / Juan 1:1-3 / Éxodo 35:30-35" },
  { n: 14, mes: 4, tema: "CULTURA",    titulo: "Línea entre influencia y comprometer el mensaje", pasaje: "1 Corintios 9:19-23 / Romanos 12:2" },
  { n: 15, mes: 4, tema: "CULTURA",    titulo: "La música que ponemos importa",                pasaje: "Colosenses 3:16 / Efesios 5:19"        },
  { n: 16, mes: 4, tema: "CULTURA",    titulo: "Cuando el contenido nos consume",              pasaje: "Mateo 11:28-30 / Marcos 6:31"          },
  // MES 5 — MISIÓN
  { n: 17, mes: 5, tema: "MISIÓN",     titulo: "Un servicio de 90 minutos llega a todo el mundo", pasaje: "Hechos 1:8 / Romanos 10:14-15"    },
  { n: 18, mes: 5, tema: "MISIÓN",     titulo: "El testimonio que no se improvisa",            pasaje: "Nehemías 4:6,17 / 1 Corintios 14:40"  },
  { n: 19, mes: 5, tema: "MISIÓN",     titulo: "¿Qué legado está dejando este ministerio?",    pasaje: "2 Timoteo 2:2 / Salmo 145:4"           },
  { n: 20, mes: 5, tema: "MISIÓN",     titulo: "Cierre: El día que todo esto no importe",      pasaje: "Apocalipsis 21:22-23 / 2 Corintios 4:17-18" },
];

const MES_COLOR = { 1:"identidad", 2:"excelencia", 3:"comunidad", 4:"cultura", 5:"mision" };

/* ─── Populate current class card ────────────────────────────────── */
function initClaseCard() {
  const clase = CLASES.find(c => c.n === CONFIG.claseActual);
  if (!clase) return;

  const colorKey = MES_COLOR[clase.mes];

  // Badge color
  const badge = document.getElementById("clase-mes-badge");
  if (badge) {
    badge.textContent = `Mes ${clase.mes} · ${clase.tema}`;
    badge.style.background = getComputedStyle(document.documentElement)
      .getPropertyValue(`--${colorKey}`).trim() || "#2563eb";
  }

  document.getElementById("clase-num").textContent   = `Clase ${clase.n}`;
  document.getElementById("clase-titulo").textContent = clase.titulo;
  document.getElementById("clase-pasaje").textContent = clase.pasaje;

  // Date — show today in Spanish
  const today = new Date();
  const opts = { weekday:"long", year:"numeric", month:"long", day:"numeric" };
  document.getElementById("clase-fecha").textContent =
    today.toLocaleDateString("es-ES", opts)
         .replace(/^\w/, c => c.toUpperCase());

  // Download button
  const btnDescargar = document.getElementById("btn-descargar");
  if (CONFIG.docPath) {
    btnDescargar.href = CONFIG.docPath;
    btnDescargar.download = CONFIG.docPath.split("/").pop();
    // Google Docs viewer link
    const absUrl = window.location.origin + "/" + CONFIG.docPath;
    document.getElementById("visor-link-google").href =
      `https://docs.google.com/viewer?url=${encodeURIComponent(absUrl)}&embedded=false`;
  } else {
    btnDescargar.style.display = "none";
    document.getElementById("btn-ver").style.display = "none";
    document.getElementById("sin-documento").style.display = "block";
  }
}

/* ─── Toggle document viewer ─────────────────────────────────────── */
function toggleVisor() {
  const container = document.getElementById("visor-container");
  const iframe    = document.getElementById("doc-iframe");

  if (container.style.display === "none") {
    container.style.display = "block";

    // Use Google Docs viewer to render .docx / .pdf inside the iframe
    if (!iframe.src && CONFIG.docPath) {
      const absUrl = window.location.origin +
        (window.location.pathname.endsWith("/")
          ? window.location.pathname
          : window.location.pathname.replace(/\/[^/]*$/, "/"))
        + CONFIG.docPath;

      iframe.src =
        `https://docs.google.com/viewer?url=${encodeURIComponent(absUrl)}&embedded=true`;
    }

    container.scrollIntoView({ behavior: "smooth", block: "nearest" });
  } else {
    container.style.display = "none";
  }
}

/* ─── Highlight the active month card ───────────────────────────── */
function highlightActiveMes() {
  const clase = CLASES.find(c => c.n === CONFIG.claseActual);
  if (!clase) return;
  const cards = document.querySelectorAll(".mes-card");
  cards.forEach(card => {
    if (Number(card.dataset.mes) === clase.mes) {
      card.style.outline = "3px solid var(--identidad)";
      card.style.outlineOffset = "3px";
    }
  });
}

/* ─── Boot ───────────────────────────────────────────────────────── */
document.addEventListener("DOMContentLoaded", () => {
  initClaseCard();
  highlightActiveMes();
});
