import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FiThumbsUp } from "react-icons/fi";

export default function Card({ result }) {
  return (
    <div className="group cursor-pointer sm:hover; shadow-slate-400 
    sm:shadow-md rounded-lg sm:border sm:border-slate-400 sm:m-2
    transition duration-200 ease-in-out transform sm:hover:scale-105 hover:z-50
    ">
      <Link href={`/movie/${result.id}`}>
        <Image
          src={`https://image.tmdb.org/t/p/original/${
            result.backdrop_path || result.poster_path
          }`}
          alt="images"
          width={500}
          height={300}
          className="sm:rounded-t-lg group-hover:opacity-70 transition-opacity duration-300"
        ></Image>
        <div className="p-2">
        <h2 className="text-lg font-bold truncate py-2">{result.title || result.name}</h2>
          <p className="line-clamp-2 text-md ">{result.overview}</p>
          
          <p className="flex  items-center py-2"> {result.release_date || result.first_air_date}
            <FiThumbsUp className="h-5 mr-1 ml-3" />{result.vote_count}
            
          </p>
        </div>
      </Link>
    </div>
  );
}
