"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { VT323 } from "next/font/google";
const vt = VT323({weight: '400', subsets: ['latin']});


interface GameProps{
    title: string,
    date: string,
    players: string,
    rating: string,
    total_reviews: string,
    img: string,
    devs: string[],
    category: string,
    genres: string[],
    url: string,
}

// Rating system based on Steam
const check_rating = (rating: string, total_reviews: string) =>{
    const intRating = Number(rating)
    const intReviews = Number(total_reviews)

    if(intRating >= 80 && intRating <= 100){
        if(intReviews >= 10 && intReviews <=49){
            return "Positive"
        }
        if(intReviews >= 50 && intReviews <=499){
            return "Very positive"
        }
        if(intReviews >= 500){
            return "Overwhelmingly Positive"
        }  
    }

    if(intRating >= 75 && intRating <= 79){
        return "Mostly Positive"
    }

    if(intRating >= 40 && intRating <= 69){
        return "Mixed"
    }

    if(intRating >= 20 && intRating <= 39){
        return "Mostly Negative"
    }

    if(intRating >= 0 && intRating <= 19){
        if(intReviews >= 10 && intReviews <=49){
            return "Negative"
        }
        if(intReviews >= 50 && intReviews <=499){
            return "Very Negative"
        }
        if(intReviews >= 500){
            return "Overwhelmingly Negative"
        }  
    }
   
}

export function Card({title, date, players, rating, total_reviews, img, devs, category, genres, url}: GameProps){


    return(
        <Link href={url? url: ""} target="_blank">
            <div className="container bg-cardBackground h-[520px] rounded overflow-hidden transition duration-500 ease-in-out hover:drop-shadow-glow lg:w-72 sm:w-64">
                <Image
                    className="w-full"
                    src={img}
                    alt="card image"
                    width={200}
                    height={200}
                />
                <div className="px-6 py-4">
                    <h2 className={`${vt.className} font-bold text-2xl tracking-wider mb-2 text-linkgreen`}>
                        {title} 
                    </h2>
                </div>
                <div className="px-6">
                    <p className="text-xs text-slate-400">
                        {date}
                    </p>
                    {
                    <p className="text-xs text-slate-400 py-1">
                        {devs ? `${devs[0]} ` : "N/A"}
                    </p>
                        /*
                        devs.map((devs, i) =>(
                            <p key={i} className="text-xs text-slate-400 py-1">
                                {devs} {" "}
                            </p>
                        ))
                        */}
                </div>
                <div className="px-6 py-3">
                    <p className="text-sm">
                        <span className="font-bold">Current players:</span> <span className={`${vt.className} font-bold text-xl tracking-wider mb-2 text-linkgreen`}>{players.toLocaleString()}</span>
                    </p>
                </div>
                <div className="px-6 py-2">
                    <p className="text-sm">
                        <span className="font-bold">Rating:</span> {check_rating(rating, total_reviews)} <span className={`${vt.className} font-bold text-xl tracking-wider mb-2 text-linkgreen`}>({rating}%)</span>  
                    </p>
                    <p className="text-xs text-slate-400 py-1">
                        Total Reviews: {Number(total_reviews).toLocaleString()}
                    </p>
                </div>
                <div className="px-6 pt-4 pb-2">
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{category}</span>
                    {
                        genres ?
                        genres.slice(0,3).map((genre, i) => (
                                <span key={i} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                                    {genre}
                                </span>
                        )) : "N/A"
                    }
                </div>
            </div>
        </Link>
    )
}
