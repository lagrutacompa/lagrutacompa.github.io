# La Gruta — sitio web

Código fuente de la web de La Gruta. Sitio estático en HTML, CSS y JavaScript, con fuentes e imágenes locales.

## Uso local

Sirve esta carpeta con un servidor HTTP estático y abre `index.html`. Por ejemplo, si tienes Python instalado: `python -m http.server 8000`.

## Generar la versión para publicar

Con Node.js instalado, ejecuta `node build-static.cjs`. Esto crea de nuevo `dist/` con las páginas y recursos necesarios. No necesita instalar paquetes npm.

`dist/` es generado y está excluido de Git; no hace falta subirlo al repositorio. Para un alojamiento estático, publica su contenido después de generarlo.

## Qué conservar

- Archivos HTML de la raíz: páginas y redirecciones que mantienen enlaces anteriores.
- CSS y JavaScript: estilos y comportamiento activos.
- `assets/`: imágenes, logos, fuentes, vídeos y dossiers.
- `propuestas/`: pese al nombre histórico, contiene recursos activos de La Cocina y fuentes usadas en otras páginas. No eliminar esta carpeta.
- `build-static.cjs`: genera la distribución.
- `.openai/hosting.json`: configuración del alojamiento Sites actual.
- `PRODUCT.md`, `DESIGN.md` y `.impeccable/`: documentación del proyecto y del diseño.
- `.git/`: historial del repositorio; no borrar para una limpieza de recursos.

## Limpieza del 1 de octubre de 2026

Los recursos anteriores no referenciados se trasladaron a `../respaldo-limpieza-sitio-2026-10-01/`, fuera del sitio. El respaldo incluye un inventario y la distribución anterior. No lo subas como parte de esta web.

No hay cambios de contenido o diseño como parte de esta limpieza. Las redirecciones existentes se conservan.
