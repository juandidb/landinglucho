# Optimización de imágenes 🧰

Recomendaciones para optimizar las fotos antes de subirlas a `public/assets`:

- Herramientas recomendadas:
  - `imagemin-cli` (npx imagemin) — buen equilibrio entre calidad y compresión.
  - `sharp` — más flexible para redimensionar y generar múltiples resoluciones.
  - `squoosh` o `squoosh-cli` — excelente para pruebas interactivas.

Ejemplo con `imagemin-cli`:

1. Instalar (global o dev):

   npm i -D imagemin-cli imagemin-mozjpeg imagemin-pngquant

2. Ejecutar:

   npx imagemin "public/assets/*.{jpg,png}" --out-dir=public/assets/optimized

Sugerencia: generar versiones responsivas (`-600.jpg`, `-1200.jpg`) y usar `srcset`/`sizes` en componentes para servir imágenes adaptadas a cada viewport.  

---

Si querés, puedo crear un script de Node que use `sharp` para generar automáticamente versiones 600/1200 y cambiar `Gallery.tsx` para usar `srcSet`.