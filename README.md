# Anish Chand Gupta — Portfolio

A dark, editorial portfolio for freelance web development and AI/automation work. The site uses a compact information architecture, custom graphical project previews, expandable project notes, a categorized skills section, education/recognition panels, and a project inquiry starter.

The selected-work section includes six projects: Eraya Ratna, AI Lead Generation System, Nekomi, FloodGuard AI, A.E.G.I.S. AI, and A.L.I.A. Project descriptions are based on the supplied resume and project repositories. The FloodGuard AI, A.E.G.I.S. AI, and A.L.I.A. preview graphics are illustrative UI concepts, not screenshots of a production deployment. Disaster-response projects are described as prototypes/hackathon work, not operational emergency services. A.L.I.A.'s voice controls are currently UI elements; speech capture and text-to-speech are not connected.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Production build

```bash
npm run build
npm start
```

## Deploy

Import this folder into Vercel or connect its Git repository. The app uses Next.js, TypeScript, Tailwind CSS, Framer Motion and Lucide icons.

## Personalization

- Main page content and interactions: `app/page.tsx`
- Design system and responsive styles: `app/globals.css`
- Resume download: `public/Anish-Chand-Gupta-Resume.pdf`

## Contact inquiry

The project starter lets visitors choose a project type and add a short brief. Submitting opens the visitor's default email app with a prefilled draft to `anishchandra225@gmail.com`; it does not send anything automatically and does not require a backend.

Project previews are stylized interface concepts, not screenshots of live deployments. The portfolio avoids invented client metrics. Project previews are illustrative interface concepts; use actual screenshots when available.
