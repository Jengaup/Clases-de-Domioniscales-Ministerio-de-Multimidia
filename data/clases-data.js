/* ═══════════════════════════════════════════════════════════════════
 *  ARCHIVO DE CONTENIDO DE CLASES — Ministerio de Multimedia
 * ═══════════════════════════════════════════════════════════════════
 *
 *  Cómo agregar una clase nueva cada domingo:
 *  1. Copia el bloque de plantilla al final del array.
 *  2. Cambia "n" por el número de clase (1-20).
 *  3. Llena el campo "contenido" con el texto de la clase.
 *  4. Si tienes el archivo Word, agrega: docPath: "documentos/clase-NN.docx"
 *  5. Actualiza CONFIG.claseActual en assets/app.js al mismo número.
 *  6. Guarda, haz commit y push.
 * ═══════════════════════════════════════════════════════════════════ */

const CLASES_CONTENT = [

  /* ── CLASE 1 ── No soy técnico, soy mayordomo ────────────────── */
  {
    n: 1,
    // docPath: "documentos/clase-01.docx",
    contenido: `
      <!-- Campos del participante -->
      <div class="cc-ficha">
        <div class="cc-ficha-row">
          <label class="cc-ficha-campo">
            <span>Nombre</span>
            <input type="text" class="cc-input" placeholder="Tu nombre" />
          </label>
          <label class="cc-ficha-campo cc-ficha-campo--short">
            <span>Fecha</span>
            <input type="text" class="cc-input" placeholder="dd/mm/aaaa" />
          </label>
        </div>
        <label class="cc-ficha-campo">
          <span>Mi rol en multimedia</span>
          <input type="text" class="cc-input" placeholder="Ej. sonido, cámaras, redes..." />
        </label>
      </div>

      <!-- Objetivo -->
      <div class="cc-seccion cc-seccion--objetivo">
        <h3>🎯 Lo que vamos a aprender hoy</h3>
        <p>Entender que el ministerio no es un rol técnico sino una mayordomía sagrada ante Dios.</p>
      </div>

      <!-- Texto central -->
      <div class="cc-seccion cc-seccion--texto">
        <h3>📖 Texto central — Lucas 16:10–12 (RVR1960)</h3>
        <blockquote>
          «El que es fiel en lo muy poco, también en lo más es fiel; y el que en lo muy poco es injusto,
          también en lo más es injusto. Pues si en las riquezas injustas no fuisteis fieles, ¿quién os
          confiará lo verdadero? Y si en lo ajeno no fuisteis fieles, ¿quién os dará lo que es vuestro?»
          <cite>— Lucas 16:10–12, Reina-Valera 1960</cite>
        </blockquote>
      </div>

      <!-- Ideas clave -->
      <div class="cc-seccion cc-seccion--ideas">
        <h3>📝 Ideas clave — Completa mientras escuchas</h3>

        <div class="cc-pregunta">
          <p class="cc-pregunta-titulo">1. La diferencia entre operar y servir</p>
          <label class="cc-fill-row">
            Un operador enfoca en
            <input type="text" class="cc-input cc-input--fill" placeholder="___________________" />
          </label>
          <label class="cc-fill-row">
            Un mayordomo enfoca en
            <input type="text" class="cc-input cc-input--fill" placeholder="___________________" />
          </label>
        </div>

        <div class="cc-pregunta">
          <p class="cc-pregunta-titulo">2. Fidelidad en lo poco</p>
          <label class="cc-fill-label">En mi rol específico, «lo poco» significa:</label>
          <textarea class="cc-textarea" rows="4" placeholder="Escribe aquí..."></textarea>
        </div>

        <div class="cc-pregunta">
          <p class="cc-pregunta-titulo">3. Recursos ajenos, responsabilidad sagrada</p>
          <label class="cc-fill-label">Según Lucas 16:12, ¿por qué importa cómo administro lo que Dios me dio?</label>
          <textarea class="cc-textarea" rows="4" placeholder="Escribe aquí..."></textarea>
        </div>
      </div>

      <!-- Dinámica -->
      <div class="cc-seccion cc-seccion--dinamica">
        <h3>✎ Dinámica — Tu tarjeta del mayordomo</h3>
        <p>¿Qué harías diferente si Cristo estuviera físicamente sentado en la primera fila este domingo?</p>
        <p class="cc-nota">Escribe tu respuesta con honestidad. Nadie te va a juzgar.</p>
        <textarea class="cc-textarea" rows="6" placeholder="Escribe aquí..."></textarea>
      </div>

      <!-- Compromiso -->
      <div class="cc-seccion cc-seccion--compromiso">
        <h3>🌱 Mi compromiso esta semana</h3>
        <p>Antes del próximo servicio, me comprometo a:</p>
        <ul class="cc-check-lista">
          <li>
            <label class="cc-check-item">
              <input type="checkbox" />
              <span>Llegar 10 minutos antes con actitud de oración, no solo de preparación técnica.</span>
            </label>
          </li>
          <li>
            <label class="cc-check-item">
              <input type="checkbox" />
              <span>Tratar la preparación del equipo como un acto de adoración.</span>
            </label>
          </li>
          <li>
            <label class="cc-check-item cc-check-item--fill">
              <input type="checkbox" />
              <span>Una cosa específica que yo haré diferente:</span>
              <input type="text" class="cc-input cc-input--fill" placeholder="___________________" />
            </label>
          </li>
        </ul>
      </div>

      <!-- Mis notas -->
      <div class="cc-seccion cc-seccion--notas">
        <h3>📄 Mis notas</h3>
        <textarea class="cc-textarea" rows="7" placeholder="Apuntes libres de la clase..."></textarea>
      </div>

      <!-- Oración -->
      <div class="cc-seccion cc-seccion--oracion">
        <h3>🙏 Oración de consagración</h3>
        <blockquote class="cc-oracion">
          «Señor, que cada vez que toque este equipo recuerde que no soy dueño de nada —
          solo un mayordomo fiel de lo que Tú pusiste en mis manos.
          Que mi trabajo sea adoración, no exhibición.»
        </blockquote>
      </div>
    `
  },

  /* ── PLANTILLA — copia este bloque para cada clase nueva ─────────
  {
    n: 2,
    // docPath: "documentos/clase-02.docx",
    contenido: \`
      <div class="cc-ficha">
        <div class="cc-ficha-row">
          <label class="cc-ficha-campo">
            <span>Nombre</span>
            <input type="text" class="cc-input" placeholder="Tu nombre" />
          </label>
          <label class="cc-ficha-campo cc-ficha-campo--short">
            <span>Fecha</span>
            <input type="text" class="cc-input" placeholder="dd/mm/aaaa" />
          </label>
        </div>
        <label class="cc-ficha-campo">
          <span>Mi rol en multimedia</span>
          <input type="text" class="cc-input" placeholder="Ej. sonido, cámaras, redes..." />
        </label>
      </div>

      <div class="cc-seccion cc-seccion--objetivo">
        <h3>🎯 Lo que vamos a aprender hoy</h3>
        <p>...</p>
      </div>

      <div class="cc-seccion cc-seccion--texto">
        <h3>📖 Texto central — ... (...)</h3>
        <blockquote>
          «...»
          <cite>— Referencia</cite>
        </blockquote>
      </div>

      <div class="cc-seccion cc-seccion--ideas">
        <h3>📝 Ideas clave — Completa mientras escuchas</h3>
        <div class="cc-pregunta">
          <p class="cc-pregunta-titulo">1. ...</p>
          <label class="cc-fill-label">...</label>
          <textarea class="cc-textarea" rows="4" placeholder="Escribe aquí..."></textarea>
        </div>
      </div>

      <div class="cc-seccion cc-seccion--dinamica">
        <h3>✎ Dinámica</h3>
        <p>...</p>
        <textarea class="cc-textarea" rows="6" placeholder="Escribe aquí..."></textarea>
      </div>

      <div class="cc-seccion cc-seccion--compromiso">
        <h3>🌱 Mi compromiso esta semana</h3>
        <ul class="cc-check-lista">
          <li><label class="cc-check-item"><input type="checkbox" /><span>...</span></label></li>
        </ul>
      </div>

      <div class="cc-seccion cc-seccion--notas">
        <h3>📄 Mis notas</h3>
        <textarea class="cc-textarea" rows="7" placeholder="Apuntes libres de la clase..."></textarea>
      </div>

      <div class="cc-seccion cc-seccion--oracion">
        <h3>🙏 Oración de consagración</h3>
        <blockquote class="cc-oracion">«...»</blockquote>
      </div>
    \`
  },
  ──────────────────────────────────────────────────────────────── */

];
