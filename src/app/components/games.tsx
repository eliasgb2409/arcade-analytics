"use client"

import {firestore} from "../database/firebase-config";
import { collection, getDocs, orderBy, query } from "firebase/firestore";
import { useState, useEffect } from "react";
import { Card } from "./cards";

interface Game{
    title: string;
    date: string;
    n_players: string;
    percent_positive_review: string;
    total_reviews: string;
    img_src: string,
    devs: string[],
    category: string,
    genres: string[],
    url: string,
}

export function Games() {

    const [games, setGames] = useState<Game[]>([])

    const getGames = async () => {
        await getDocs(collection(firestore, "games"))
        .then((querySnapshot)=>{               
            let newData : Game[] = querySnapshot.docs
                .map((doc) => ({...doc.data() as Game, title:doc.id}));
            
            newData.sort((a, b) => {
                // Convert "N/A" to a value for comparison, assuming "N/A" means 0 players
                let playersA = a.n_players === "N/A" ? 0 : parseInt(a.n_players);
                let playersB = b.n_players === "N/A" ? 0 : parseInt(b.n_players);
        
                // Descending order
                return playersB - playersA;
            });
            setGames(newData);                
            console.log(games, newData);
        })
    }

    useEffect(() => {
        getGames();
    }, [setGames])


    /*
        title, date, players, rating, total_reviews, img, devs, category, genres, url
    */

    return(
        <div>
            <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-3">
                {
                    games?.map((game, i)=>(
                        <div key={i}>
                            <Card
                                title={game.title}
                                date={game.date}
                                players={game.n_players}
                                rating={game.percent_positive_review}
                                total_reviews={game.total_reviews}
                                img={game.img_src} //img_src ? game.img_src : game.src
                                devs={game.devs}
                                category={game.category}
                                genres={game.genres}
                                url={game.url}
                            />
                        </div>
                    ))
                }
            </div>
        </div>
    )

}