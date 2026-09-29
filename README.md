# Space Apps Cochabamba 2026 — Angular

Landing page en Angular 22 con una dirección visual futurista basada en los manuales de NASA Space Apps y Cocha/GAMC. Incluye portada con cuenta regresiva, coorganización del GAMC, una sección de desafíos municipales genéricos separada de los desafíos globales, agenda, paquetes opcionales, preguntas frecuentes y contacto. El registro y el panel de participantes requieren un backend posterior.

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

Los colores y tipografías proceden de los manuales suministrados. La marca institucional de Cocha/GAMC y el símbolo situado detrás del planeta se mantienen como archivos PNG separados en `public/assets/`, sin alterar sus proporciones.

Los seis temas municipales son ejemplos orientativos para maquetar la sección. Los enunciados, bases y criterios oficiales deberán sustituirlos cuando los facilite la organización.
