import { Games } from "./components/games";
import Header from "./components/Header";
import { SearchBar } from "./components/searchbar";
import { Sorting } from "./components/sorting";
import { Filter } from "./components/filter";
import Link from "next/link";

import { VT323 } from "next/font/google";
const vt = VT323({weight: '400', subsets: ['latin']});

//grid grid-flow-col

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex min-h-screen items-center flex-col justify-between p-24 animate-fade">
        <div className="ml-16 mb-20 mt-16">
          <h1 className={`${vt.className} text-6xl text-left max-w-6xl 2xl:text-8xl xl:text-8xl lg:text-7xl md:text-7xl sm:text-7xl`}>
            Discover the most <span className="text-linkgreen"> Trending Games </span> at the moment.
          </h1>
        </div>
        <br />
        <br />
        <br /> 
        <div className="flex justify-between items-center mb-10 mt-20 w-3/4">
          <SearchBar />
          <div className="flex gap-10 mt-5">
            <Filter />
            <Sorting />
          </div>
        </div>
        <div className="mt-10">
          <Games></Games>
        </div> 
      </main>
      <footer className={`${vt.className} flex flex-col items-center my-20 max-w-5xl mx-auto text-lg text-linkgreen`}>
        <Link href={"mailto:elias.goldmann.b@gmail.com"}> elias.goldmann.b@gmail.com</Link>
        <Link href={"tel:+4740720276"}>+47 407 20 276</Link>
     </footer>
    </>
  );
}
