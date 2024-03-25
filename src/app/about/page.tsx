import Header from "../components/Header";
import Link from "next/link";

import { VT323 } from "next/font/google";
const vt = VT323({weight: '400', subsets: ['latin']});

//grid grid-flow-col

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex min-h-screen items-center flex-col justify-between p-24 animate-fade">
        <div className={`${vt.className} w-3/4 ml-16 mb-20 mt-16 mr-16 leading-8`}>
          <h1 className={`${vt.className} text-3xl`}>
            <span className="text-linkgreen"> About </span> this page.
          </h1>
          <br />
          <div className="text-2xl">
            <p>
            Denne nettsiden presenterer en dynamisk og interaktiv nettside designet for å 
            fremheve trendene innen videospill, med spesielt fokus på de mest populære spillene, 
            som bestemmes av Steam's "Top Sellers" liste. Ved å integrere både direkte data fra 
            Steam's API og raffinert informasjon gjennom web-scraping, tilbyr denne plattformen 
            en omfattende oversikt over de <span className="text-linkgreen">100</span> mest solgte spillene, inkludert oppdatert statistikk 
            om antall aktive spillere.
            </p>
            <br />
            <p>
            Et skreddersydd Python-script står for den innledende databehandlingen 
            før dataen blir effektivt lagret i en Firebase database, klar for videre bruk.
            </p>
            <p>
            Frontend-delen av prosjektet er utviklet med Next.js. Ved å hente data 
            dynamisk fra vår Firebase database, vises den nyeste informasjonen om toppspillene 
            gjennom et responsivt UI. Komponentene er implementert med TypeScript, mens designet er
            håndtert ved hjelp av Tailwind CSS.
            </p>
          </div>
        </div>
      </main>
      <footer className={`${vt.className} flex flex-col items-center my-20 max-w-5xl mx-auto text-lg text-linkgreen`}>
        <Link href={"mailto:elias.goldmann.b@gmail.com"}> elias.goldmann.b@gmail.com</Link>
        <Link href={"tel:+4740720276"}>+47 407 20 276</Link>
     </footer>
    </>
  );
}
