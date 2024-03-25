This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

# Arcade Analytics

### Om nettsiden

Dette prosjektet presenterer en dynamisk og interaktiv nettside designet for å fremheve trendene innen videospill, med spesielt fokus på de mest populære spillene, som bestemmes av Steam's "Top Sellers" liste. Ved å integrere både direkte data fra Steam's API og raffinert informasjon gjennom web-scraping, tilbyr denne plattformen en omfattende oversikt over de 100 mest solgte spillene, inkludert oppdatert statistikk om antall aktive spillere.

### Datainnsamling og -behandling

Et skreddersydd Python-script står for den innledende databehandlingen før dataen blir effektivt lagret i en Firebase database, klar for videre bruk.

### Frontend Implementasjon

Frontend-delen av prosjektet er utviklet med Next.js. Ved å hente data dynamisk fra vår Firebase database, vises den nyeste informasjonen om toppspillene gjennom et responsivt UI. Komponentene er implementert med TypeScript, mens designet er håndtert ved hjelp av Tailwind CSS.

# Next.js instrukser:

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
