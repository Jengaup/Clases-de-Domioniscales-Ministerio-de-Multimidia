/* ─── Config — cambia claseActual cada domingo ─────────────────── */
const CONFIG = {
  claseActual: 1,
};

/* ─── Curriculum metadata ───────────────────────────────────────── */
const CLASES = [
  { n:  1, mes: 1, tema: "IDENTIDAD",  titulo: "No soy técnico, soy mayordomo",               pasaje: "Lucas 16:10-12"                          },
  { n:  2, mes: 1, tema: "IDENTIDAD",  titulo: "El problema del orgullo técnico",              pasaje: "1 Corintios 8:1 / Filipenses 2:3-4"      },
  { n:  3, mes: 1, tema: "IDENTIDAD",  titulo: "El llamado que antecede al talento",           pasaje: "Éxodo 31:1-5"                            },
  { n:  4, mes: 1, tema: "IDENTIDAD",  titulo: "Servicio anónimo: la gloria que no se ve",    pasaje: "Mateo 6:3-4 / Colosenses 3:23"           },
  { n:  5, mes: 2, tema: "EXCELENCIA", titulo: "El sonido importa porque la Palabra importa",  pasaje: "Romanos 10:17 / Nehemías 8:2-3"          },
  { n:  6, mes: 2, tema: "EXCELENCIA", titulo: "Las redes sociales: misión o distracción",     pasaje: "Marcos 16:15 / Hechos 17:16-34"          },
  { n:  7, mes: 2, tema: "EXCELENCIA", titulo: "El YouTube que nadie ve... y el que sí ve",    pasaje: "Lucas 15:4-7 / Mateo 18:12-14"           },
  { n:  8, mes: 2, tema: "EXCELENCIA", titulo: "El mantenimiento como discipulado",             pasaje: "Génesis 2:15 / Lucas 16:10"              },
  { n:  9, mes: 3, tema: "COMUNIDAD",  titulo: "Cuando el monitor falla y la actitud también", pasaje: "Santiago 1:2-4 / Gálatas 5:22-23"        },
  { n: 10, mes: 3, tema: "COMUNIDAD",  titulo: "El líder que sirve y el técnico que manda",    pasaje: "Marcos 10:42-45 / Juan 13:3-5"           },
  { n: 11, mes: 3, tema: "COMUNIDAD",  titulo: "Talentos distintos, misma misión",              pasaje: "1 Corintios 12:14-20 / Romanos 12:4-6"  },
  { n: 12, mes: 3, tema: "COMUNIDAD",  titulo: "¿Qué hacemos cuando no nos llevamos bien?",    pasaje: "Mateo 18:15-17 / Efesios 4:26-27"        },
  { n: 13, mes: 4, tema: "CULTURA",    titulo: "¿La iglesia puede ser creativa?",               pasaje: "Génesis 1:1 / Juan 1:1-3 / Éxodo 35:30-35" },
  { n: 14, mes: 4, tema: "CULTURA",    titulo: "Línea entre influencia y comprometer el mensaje", pasaje: "1 Corintios 9:19-23 / Romanos 12:2"  },
  { n: 15, mes: 4, tema: "CULTURA",    titulo: "La música que ponemos importa",                 pasaje: "Colosenses 3:16 / Efesios 5:19"          },
  { n: 16, mes: 4, tema: "CULTURA",    titulo: "Cuando el contenido nos consume",               pasaje: "Mateo 11:28-30 / Marcos 6:31"            },
  { n: 17, mes: 5, tema: "MISIÓN",     titulo: "Un servicio de 90 minutos llega a todo el mundo", pasaje: "Hechos 1:8 / Romanos 10:14-15"       },
  { n: 18, mes: 5, tema: "MISIÓN",     titulo: "El testimonio que no se improvisa",             pasaje: "Nehemías 4:6,17 / 1 Corintios 14:40"    },
  { n: 19, mes: 5, tema: "MISIÓN",     titulo: "¿Qué legado está dejando este ministerio?",     pasaje: "2 Timoteo 2:2 / Salmo 145:4"             },
  { n: 20, mes: 5, tema: "MISIÓN",     titulo: "Cierre: El día que todo esto no importe",       pasaje: "Apocalipsis 21:22-23 / 2 Corintios 4:17-18" },
];

const MES_COLOR = { 1:"identidad", 2:"excelencia", 3:"comunidad", 4:"cultura", 5:"mision" };

/* ─── Update header strip with current class info ────────────────── */
function initClaseStrip() {
  const clase = CLASES.find(c => c.n === CONFIG.claseActual);
  if (!clase) return;

  const colorVal = getComputedStyle(document.documentElement)
    .getPropertyValue(`--${MES_COLOR[clase.mes]}`).trim() || "#2563eb";

  const badge = document.getElementById("clase-mes-badge");
  if (badge) { badge.textContent = `Mes ${clase.mes} · ${clase.tema}`; badge.style.background = colorVal; }

  const num = document.getElementById("clase-num");
  const titulo = document.getElementById("clase-titulo");
  const pasaje = document.getElementById("clase-pasaje");
  if (num) num.textContent = `Clase ${clase.n}`;
  if (titulo) titulo.textContent = clase.titulo;
  if (pasaje) pasaje.textContent = clase.pasaje;

  const today = new Date();
  const el = document.getElementById("clase-fecha");
  if (el) el.textContent = today.toLocaleDateString("es-ES",
    { weekday:"long", year:"numeric", month:"long", day:"numeric" })
    .replace(/^\w/, c => c.toUpperCase());
}

/* ─── Remove old document/upload placeholder if an old page version renders it ─── */
function removeOldDocumentPlaceholder() {
  const contenido = document.getElementById("clase-contenido");
  if (!contenido) return;

  const oldText = "El documento de esta clase aún no está disponible";
  if (contenido.textContent.includes(oldText)) {
    contenido.remove();
  }
}

/* ─── Archive: past classes (JS-rendered accordion) ─────────────── */
const ARCHIVO = [
  // Each Sunday, move the previous class here as a plain HTML string:
  // { n: 1, contenido: `...paste HTML from index.html...` },
];

function renderArchivo() {
  const lista = document.getElementById("archivo-lista");
  const vacio = document.getElementById("archivo-vacio");
  if (!lista) return;

  const pasadas = ARCHIVO.filter(c => c.n < CONFIG.claseActual).reverse();

  if (pasadas.length === 0) {
    lista.style.display = "none";
    if (vacio) vacio.style.display = "block";
    return;
  }

  lista.innerHTML = pasadas.map(entry => {
    const meta = CLASES.find(c => c.n === entry.n);
    if (!meta) return "";
    const col  = MES_COLOR[meta.mes];
    return `
      <div class="archivo-card" data-n="${entry.n}">
        <button class="archivo-card-header" onclick="toggleArchivo(${entry.n})" aria-expanded="false">
          <div class="archivo-card-meta">
            <span class="archivo-badge archivo-badge--${col}">Clase ${meta.n}</span>
            <span class="archivo-mes">Mes ${meta.mes} · ${meta.tema}</span>
          </div>
          <div class="archivo-card-info">
            <strong class="archivo-titulo">${meta.titulo}</strong>
            <span class="archivo-pasaje">${meta.pasaje}</span>
          </div>
          <span class="archivo-chevron">▼</span>
        </button>
        <div class="archivo-body" id="archivo-body-${entry.n}" hidden>
          <div class="clase-contenido archivo-contenido">${entry.contenido}</div>
        </div>
      </div>`;
  }).join("");
}

function toggleArchivo(n) {
  const body = document.getElementById(`archivo-body-${n}`);
  if (!body) return;
  const hdr  = body.previousElementSibling;
  const chev = hdr.querySelector(".archivo-chevron");
  const open = !body.hidden;
  body.hidden = open;
  chev.textContent = open ? "▼" : "▲";
  hdr.setAttribute("aria-expanded", String(!open));
}

/* ─── Highlight the active month card ───────────────────────────── */
function highlightActiveMes() {
  const clase = CLASES.find(c => c.n === CONFIG.claseActual);
  if (!clase) return;
  document.querySelectorAll(".mes-card").forEach(card => {
    if (Number(card.dataset.mes) === clase.mes) {
      card.style.outline = "3px solid var(--identidad)";
      card.style.outlineOffset = "3px";
    }
  });
}

document.addEventListener("DOMContentLoaded", () => {
  initClaseStrip();
  removeOldDocumentPlaceholder();
  renderArchivo();
  highlightActiveMes();
});
