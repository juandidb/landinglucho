# Accesibilidad — comprobaciones rápidas ✅

Recomendaciones para testear accesibilidad localmente y en CI:

- Lighthouse (Chrome):
  - `npx lighthouse http://localhost:5173 --only-categories=accessibility --output html --output-path=reports/lighthouse-a11y.html`
- pa11y (CLI):
  - `npx pa11y http://localhost:5173`
- axe-core (unit tests): integrar `jest-axe` o usar `axe-core` en pruebas de integración.

Consejos concretos añadidos al proyecto:
- El lightbox implementado usa `role="dialog"` y `aria-modal="true"`, soporta `Escape` y navegación con flechas.  
- Revisar `alt` en todas las imágenes y texto de los botones.

Puedo automatizar estas comprobaciones (ej. `npm run a11y`) si querés que agregue el script y dependencias.