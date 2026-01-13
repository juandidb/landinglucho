## Estudio de Agrimensura - Landing

Landing page premium orientada a particulares en Argentina para presentar servicios de un Ingeniero Agrimensor. El foco esta puesto en transmitir precision tecnica, respaldo documental y CTA claros para generar contactos.

### Stack principal

- React 19 + TypeScript
- Vite (rolldown) para build rapido
- Tailwind CSS 3 configurado con tipografia custom y tokens de color

### Secciones incluidas

- Hero con propuesta de valor, CTA y highlights
- Servicios clave (mensuras, subdivisiones, relevamientos, catastro, loteos)
- Sobre el profesional con pilares y metricas
- Experiencia y confianza con mensajes de respaldo
- Proceso de trabajo paso a paso
- Formulario de contacto preparado para conversion

### Scripts utiles

```bash
npm install      # instala dependencias
npm run dev      # levanta el entorno de desarrollo
npm run build    # genera la version de produccion
npm run preview  # sirve el build para validacion
```

### Estilos y componentes

- Los estilos globales estan en `src/index.css` e incluyen fuentes IBM Plex Sans y Space Grotesk.
- Cada seccion vive en `src/sections/*` para mantener el layout desacoplado.
- Las clases Tailwind priorizan jerarquia visual clara, contrastes sobrios y microinteracciones sutiles.

### Imagenes de referencia

- Hero: [https://unsplash.com/photos/PDjpA1yeonw](https://unsplash.com/photos/PDjpA1yeonw)
- Sobre el profesional: [https://unsplash.com/photos/8sJQHTLtnK4](https://unsplash.com/photos/8sJQHTLtnK4)
- Confianza: [https://unsplash.com/photos/K6JzHiV4aq8](https://unsplash.com/photos/K6JzHiV4aq8)
- Proceso: [https://unsplash.com/photos/Y_Nykd_fDFM](https://unsplash.com/photos/Y_Nykd_fDFM)

### Recursos vectoriales

- Logo minimalista del navbar: icono de teodolito diseñado a medida para este proyecto y almacenado en [public/assets/logo-navbar.svg](public/assets/logo-navbar.svg). Se distribuye bajo la misma licencia de este repositorio.

### Proximos pasos sugeridos

- Integrar el formulario con un backend o servicio de email.
- Ajustar los textos mock con informacion real del profesional.
- Agregar metricas reales y casos destacados cuando esten disponibles.
