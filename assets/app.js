/* Configuración del sitio */
const CONFIG = {
  claseActual: 2,
};

const CLASES = [
  { n: 1, mes: 1, tema: "IDENTIDAD", titulo: "No soy técnico, soy mayordomo", pasaje: "Lucas 16:10-12" },
  { n: 2, mes: 1, tema: "IDENTIDAD", titulo: "El problema del orgullo técnico", pasaje: "1 Corintios 8:1 / Filipenses 2:3-4" },
  { n: 3, mes: 1, tema: "IDENTIDAD", titulo: "El llamado que antecede al talento", pasaje: "Éxodo 31:1-5" },
  { n: 4, mes: 1, tema: "IDENTIDAD", titulo: "Servicio anónimo: la gloria que no se ve", pasaje: "Mateo 6:3-4 / Colosenses 3:23" },
  { n: 5, mes: 2, tema: "EXCELENCIA", titulo: "El sonido importa porque la Palabra importa", pasaje: "Romanos 10:17 / Nehemías 8:2-3" },
  { n: 6, mes: 2, tema: "EXCELENCIA", titulo: "Las redes sociales: misión o distracción", pasaje: "Marcos 16:15 / Hechos 17:16-34" },
  { n: 7, mes: 2, tema: "EXCELENCIA", titulo: "El YouTube que nadie ve... y el que sí ve", pasaje: "Lucas 15:4-7 / Mateo 18:12-14" },
  { n: 8, mes: 2, tema: "EXCELENCIA", titulo: "El mantenimiento como discipulado", pasaje: "Génesis 2:15 / Lucas 16:10" },
  { n: 9, mes: 3, tema: "COMUNIDAD", titulo: "Cuando el monitor falla y la actitud también", pasaje: "Santiago 1:2-4 / Gálatas 5:22-23" },
  { n: 10, mes: 3, tema: "COMUNIDAD", titulo: "El líder que sirve y el técnico que manda", pasaje: "Marcos 10:42-45 / Juan 13:3-5" },
  { n: 11, mes: 3, tema: "COMUNIDAD", titulo: "Talentos distintos, misma misión", pasaje: "1 Corintios 12:14-20 / Romanos 12:4-6" },
  { n: 12, mes: 3, tema: "COMUNIDAD", titulo: "¿Qué hacemos cuando no nos llevamos bien?", pasaje: "Mateo 18:15-17 / Efesios 4:26-27" },
  { n: 13, mes: 4, tema: "CULTURA", titulo: "¿La iglesia puede ser creativa?", pasaje: "Génesis 1:1 / Juan 1:1-3 / Éxodo 35:30-35" },
  { n: 14, mes: 4, tema: "CULTURA", titulo: "Línea entre influencia y comprometer el mensaje", pasaje: "1 Corintios 9:19-23 / Romanos 12:2" },
  { n: 15, mes: 4, tema: "CULTURA", titulo: "La música que ponemos importa", pasaje: "Colosenses 3:16 / Efesios 5:19" },
  { n: 16, mes: 4, tema: "CULTURA", titulo: "Cuando el contenido nos consume", pasaje: "Mateo 11:28-30 / Marcos 6:31" },
  { n: 17, mes: 5, tema: "MISIÓN", titulo: "Un servicio de 90 minutos llega a todo el mundo", pasaje: "Hechos 1:8 / Romanos 10:14-15" },
  { n: 18, mes: 5, tema: "MISIÓN", titulo: "El testimonio que no se improvisa", pasaje: "Nehemías 4:6,17 / 1 Corintios 14:40" },
  { n: 19, mes: 5, tema: "MISIÓN", titulo: "¿Qué legado está dejando este ministerio?", pasaje: "2 Timoteo 2:2 / Salmo 145:4" },
  { n: 20, mes: 5, tema: "MISIÓN", titulo: "Cierre: El día que todo esto no importe", pasaje: "Apocalipsis 21:22-23 / 2 Corintios 4:17-18" },
];

const MES_COLOR = { 1: "identidad", 2: "excelencia", 3: "comunidad", 4: "cultura", 5: "mision" };

const CLASE_HTML = {
  2: `
    <div class="cc-seccion cc-seccion--objetivo">
      <h3>🎯 Lo que vamos a aprender hoy</h3>
      <p>Reconocer cómo el dominio técnico puede generar soberbia y alejamiento de Cristo y del equipo, y comprometernos con la humildad activa.</p>
    </div>

    <div class="cc-seccion cc-seccion--texto">
      <h3>📖 Textos centrales — RVR1960</h3>
      <blockquote>
        <strong>1 Corintios 8:1</strong><br>
        «El conocimiento envanece, pero el amor edifica.»
        <br><br>
        <strong>Filipenses 2:3-4</strong><br>
        «Nada hagáis por contención o por vanagloria; antes bien con humildad, estimando cada uno a los demás como superiores a él mismo; no mirando cada uno por lo suyo propio, sino cada cual también por lo de los otros.»
        <cite>— Filipenses 2:3-4, RVR1960</cite>
      </blockquote>
    </div>

    <div class="cc-seccion cc-seccion--ideas">
      <h3>📝 Ideas clave — Completa mientras escuchas</h3>

      <div class="cc-pregunta">
        <p class="cc-pregunta-titulo">1. El conocimiento que envanece</p>
        <label class="cc-fill-row">
          Según 1 Corintios 8:1, el conocimiento sin
          <input type="text" class="cc-input cc-input--fill" placeholder="_____________" />
          destruye al equipo.
        </label>
        <label class="cc-fill-label">Escribe 2 síntomas de orgullo técnico que reconoces en ti mismo:</label>
        <textarea class="cc-textarea" rows="4" placeholder="Escribe aquí..."></textarea>
      </div>

      <div class="cc-pregunta">
        <p class="cc-pregunta-titulo">2. Jesús lavó pies siendo el más capaz</p>
        <label class="cc-fill-row">
          Juan 13:3 dice que Jesús sabía que
          <input type="text" class="cc-input cc-input--fill" placeholder="____________________________" />
        </label>
        <label class="cc-fill-row">
          Y aun así decidió
          <input type="text" class="cc-input cc-input--fill" placeholder="____________________________" />
        </label>
        <label class="cc-fill-label">En tu ministerio, ¿qué equivale a «lavar pies» para alguien con menos experiencia que tú?</label>
        <textarea class="cc-textarea" rows="4" placeholder="Escribe aquí..."></textarea>
      </div>

      <div class="cc-pregunta">
        <p class="cc-pregunta-titulo">3. La humildad activa como antídoto</p>
        <label class="cc-fill-row">
          Filipenses 2:3-4 no pide que te sientas menos capaz. Pide que
          <input type="text" class="cc-input cc-input--fill" placeholder="________________" />
        </label>
        <label class="cc-fill-label">¿Cuál es la diferencia entre ignorancia y humildad activa?</label>
        <textarea class="cc-textarea" rows="4" placeholder="Escribe aquí..."></textarea>
      </div>
    </div>

    <div class="cc-seccion cc-seccion--dinamica">
      <h3>✎ Dinámica — Tarjeta anónima</h3>
      <p><strong>Escribe sin poner tu nombre:</strong></p>
      <p>Una situación en que tu conocimiento técnico te llevó a tratar mal a alguien: tono condescendiente, impaciencia, ignorar a un compañero o no querer enseñar.</p>
      <p class="cc-nota">El facilitador recogerá las tarjetas y las leerá en voz alta sin revelar quién escribió qué.</p>
      <textarea class="cc-textarea" rows="6" placeholder="Escribe aquí..."></textarea>
    </div>

    <div class="cc-seccion cc-seccion--compromiso">
      <h3>🌱 Mi compromiso esta semana</h3>
      <label class="cc-fill-label">Identifico a esta persona en el ministerio a quien puedo enseñarle algo:</label>
      <input type="text" class="cc-input" placeholder="Escribe aquí..." />
      <label class="cc-fill-label">Lo que le voy a enseñar:</label>
      <input type="text" class="cc-input" placeholder="Escribe aquí..." />
      <label class="cc-fill-label">La actitud específica de orgullo que quiero cambiar:</label>
      <textarea class="cc-textarea" rows="4" placeholder="Escribe aquí..."></textarea>
    </div>

    <div class="cc-seccion cc-seccion--notas">
      <h3>📄 Mis notas</h3>
      <textarea class="cc-textarea" rows="7" placeholder="Apuntes libres de la clase..."></textarea>
    </div>

    <div class="cc-seccion cc-seccion--oracion">
      <h3>🙏 Oración de cierre</h3>
      <blockquote class="cc-oracion">
        «Señor, tú lavaste pies siendo el más capaz de todos. Québranos del orgullo que nace de saber, y reconstruye en nosotros el corazón que usa lo que sabe para servir a los demás.»
      </blockquote>
    </div>
  `
};

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

  if (num) num.textContent = `Clase ${clase.n}`;
  if (titulo) titulo.textContent = clase.titulo;
  if (pasaje) pasaje.textContent = clase.pasaje;

  const fecha = document.getElementById("clase-fecha");
  if (fecha) {
    fecha.textContent = new Date()
      .toLocaleDateString("es-ES", { weekday: "long", year: "numeric", month: "long", day: "numeric" })
      .replace(/^\w/, c => c.toUpperCase());
  }
}

function renderCurrentClass() {
  const contenido = document.getElementById("clase-contenido");
  if (!contenido) return;

  if (CLASE_HTML[CONFIG.claseActual]) {
    contenido.innerHTML = CLASE_HTML[CONFIG.claseActual];
  }

  document.querySelectorAll(".cc-ficha").forEach(el => el.remove());
}

function removeOldDocumentPlaceholder() {
  const contenido = document.getElementById("clase-contenido");
  if (!contenido) return;

  const oldText = "El documento de esta clase aún no está disponible";
  if (contenido.textContent.includes(oldText)) {
    contenido.remove();
  }
}

function renderArchivo() {
  const lista = document.getElementById("archivo-lista");
  const vacio = document.getElementById("archivo-vacio");
  if (!lista) return;

  if (vacio) vacio.style.display = "none";
  lista.style.display = "grid";

  lista.innerHTML = `
    <div class="archivo-card" data-n="1">
      <div class="archivo-card-header" style="cursor: default;">
        <div class="archivo-card-meta">
          <span class="archivo-badge archivo-badge--identidad">Clase 1</span>
          <span class="archivo-mes">Mes 1 · IDENTIDAD</span>
        </div>
        <div class="archivo-card-info">
          <strong class="archivo-titulo">No soy técnico, soy mayordomo</strong>
          <span class="archivo-pasaje">Lucas 16:10-12</span>
        </div>
        <a class="archivo-download" href="documentos/clase1-abril-26.pdf" download="clase1-abril-26.pdf" onclick="event.stopPropagation()" style="display:inline-flex;align-items:center;justify-content:center;padding:10px 16px;border-radius:999px;background:#2563eb;color:#fff;font-weight:700;text-decoration:none;white-space:nowrap;">Bajar PDF</a>
      </div>
    </div>

    <div class="archivo-card" data-n="2">
      <div class="archivo-card-header" style="cursor: default;">
        <div class="archivo-card-meta">
          <span class="archivo-badge archivo-badge--identidad">Clase 2</span>
          <span class="archivo-mes">Mes 1 · IDENTIDAD</span>
        </div>
        <div class="archivo-card-info">
          <strong class="archivo-titulo">El problema del orgullo técnico</strong>
          <span class="archivo-pasaje">1 Corintios 8:1 / Filipenses 2:3-4</span>
        </div>
        <a class="archivo-download" href="documentos/clase2-mayo-3.pdf" download="clase2-mayo-3.pdf" onclick="event.stopPropagation()" style="display:inline-flex;align-items:center;justify-content:center;padding:10px 16px;border-radius:999px;background:#2563eb;color:#fff;font-weight:700;text-decoration:none;white-space:nowrap;">Bajar PDF</a>
      </div>
    </div>`;
}

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
  renderCurrentClass();
  renderArchivo();
  highlightActiveMes();
});
