# Instrucciones de uso — Clases Dominicales

## Cómo actualizar la clase de cada domingo

### 1. Sube el documento de la clase

Copia el archivo Word (`.docx`) o PDF a la carpeta `documentos/`.
Usa un nombre claro, por ejemplo: `clase-05.docx`

```
documentos/
  clase-01.docx
  clase-02.docx
  clase-05.docx   ← nuevo
  ...
```

### 2. Edita el archivo `assets/app.js`

Abre el archivo y cambia las dos líneas de configuración al inicio:

```js
const CONFIG = {
  claseActual: 5,                         // ← número de la clase de hoy
  docPath: "documentos/clase-05.docx",    // ← ruta del archivo subido
};
```

Si el documento todavía no está listo, deja `docPath` vacío (`""`):
```js
  docPath: "",  // mostrará "documento no disponible" en la página
```

### 3. Guarda y sube los cambios

```bash
git add documentos/clase-05.docx assets/app.js
git commit -m "Clase 5 — El sonido importa porque la Palabra importa"
git push
```

---

## Estructura del proyecto

```
index.html          ← página principal
assets/
  styles.css        ← estilos
  app.js            ← lógica + configuración semanal
documentos/         ← carpeta donde van los archivos de cada clase
INSTRUCCIONES.md    ← este archivo
```

## Visualización de documentos

- Los miembros pueden **descargar** el documento directamente.
- El botón "Ver documento en pantalla" usa el visor de Google Docs para mostrar el archivo sin necesidad de descargarlo.
- Para que el visor funcione, la página debe estar publicada en un servidor web accesible públicamente (p.ej. GitHub Pages, Netlify, Vercel).
