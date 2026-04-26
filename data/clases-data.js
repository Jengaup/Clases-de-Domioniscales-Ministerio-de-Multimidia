/* ═══════════════════════════════════════════════════════════════════
 *  ARCHIVO DE CONTENIDO DE CLASES — Ministerio de Multimedia
 * ═══════════════════════════════════════════════════════════════════
 *
 *  Cómo agregar una clase nueva cada domingo:
 *  1. Copia el bloque de ejemplo de abajo.
 *  2. Cambia "n" por el número de clase (1-20).
 *  3. Pega el texto completo de la clase en el campo "contenido".
 *  4. Si tienes el archivo Word, agrega: docPath: "documentos/clase-NN.docx"
 *  5. Actualiza CONFIG.claseActual en assets/app.js al mismo número.
 *  6. Guarda, haz commit y push.
 *
 *  Estructura de cada entrada:
 *  {
 *    n:        número de clase (1-20),
 *    docPath:  "documentos/clase-NN.docx"  ← OPCIONAL; omitir si no hay archivo
 *    contenido: `...HTML de la clase...`
 *  }
 * ═══════════════════════════════════════════════════════════════════ */

const CLASES_CONTENT = [

  /* ── CLASE 1 ── No soy técnico, soy mayordomo ────────────────── */
  {
    n: 1,
    // docPath: "documentos/clase-01.docx",  // ← descomenta cuando tengas el archivo
    contenido: `
      <p class="contenido-pendiente">
        El contenido de esta clase se publicará este domingo.<br/>
        <span>Vuelve pronto.</span>
      </p>
    `
  },

  /* ── PLANTILLA — copia este bloque para cada clase nueva ──────
  {
    n: 2,
    // docPath: "documentos/clase-02.docx",
    contenido: \`
      <div class="cc-seccion">
        <h3>Pasaje bíblico central</h3>
        <blockquote>«...» — Referencia</blockquote>
      </div>

      <div class="cc-seccion">
        <h3>Objetivo de aprendizaje</h3>
        <p>...</p>
      </div>

      <div class="cc-seccion">
        <h3>Contenido central</h3>
        <p>...</p>
      </div>

      <div class="cc-seccion">
        <h3>Estructura de tiempo (30 min)</h3>
        <table class="cc-tabla">
          <thead><tr><th>Tiempo</th><th>Actividad</th></tr></thead>
          <tbody>
            <tr><td>0-5 min</td><td>...</td></tr>
            <tr><td>5-20 min</td><td>...</td></tr>
            <tr><td>20-25 min</td><td>...</td></tr>
            <tr><td>25-30 min</td><td>...</td></tr>
          </tbody>
        </table>
      </div>

      <div class="cc-seccion">
        <h3>Dinámica</h3>
        <p>...</p>
      </div>

      <div class="cc-seccion">
        <h3>Aplicación para llevar</h3>
        <p>...</p>
      </div>

      <div class="cc-seccion">
        <h3>Recursos necesarios</h3>
        <ul>
          <li>...</li>
        </ul>
      </div>

      <div class="cc-seccion">
        <h3>Evaluación</h3>
        <ul>
          <li>...</li>
        </ul>
      </div>
    \`
  },
  ─────────────────────────────────────────────────────────────── */

];
