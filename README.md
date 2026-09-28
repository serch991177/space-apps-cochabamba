# Space Apps Cochabamba 2026 — Angular

Landing page en Angular 22 con una dirección visual futurista basada en los manuales de NASA Space Apps y Cocha/GAMC. Incluye portada con cuenta regresiva, información del evento, desafíos, agenda, paquetes opcionales, preguntas frecuentes y contacto. El registro y el panel de participantes requieren un backend posterior.

## Ejecutar en Windows

Instala Node.js y npm, descomprime este proyecto, abre una terminal en la carpeta y ejecuta:

```powershell
npm ci
npm start
```

Abre `http://localhost:4200`. Para generar la versión de producción:

```powershell
npm run build
```

La salida está en `dist/`. El contenido editable está en `src/app/app.ts` y `src/app/app.html`; el diseño está en `src/styles.css`. Los activos visuales están en `public/assets/`. La portada usa capas CSS, animación suave, telemetría visual y un globo transparente; se reduce el movimiento automáticamente si el sistema lo solicita.

Los colores y tipografías proceden de los manuales suministrados. Los logos y las imágenes del evento se mantienen como activos separados para respetar sus proporciones originales.
