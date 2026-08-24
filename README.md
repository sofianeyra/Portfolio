# Portafolio de Sofía Neyra

Portafolio bilingüe creado con Next.js, TypeScript, Tailwind CSS y Framer Motion.

## Desarrollo

```bash
npm install
npm run dev
```

Abre `http://localhost:3000`.

## Contenido

- Los proyectos viven en `src/lib/projects.ts`.
- La foto está en `public/images/sofia-neyra.jpg`.
- El CV descargable está en `public/sofia-neyra-cv.pdf`.
- Cuando estén disponibles las URLs reales de LinkedIn y GitHub, añádelas en el footer de `src/components/portfolio-home.tsx`.

## Despliegue en Vercel

1. Sube esta carpeta a un repositorio de GitHub.
2. Importa el repositorio desde Vercel.
3. Vercel detectará Next.js y ejecutará `npm run build` automáticamente.
4. Conecta un dominio propio cuando lo tengas; mientras tanto, usa el subdominio gratuito `vercel.app`.
