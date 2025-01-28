import Image from "next/image";
import React from "react";

export default async function MoviePage({ params }) {
  const movieId = params.id;

  // Fetch movie data
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.API_KEY}`
  );

  // Handle fetch errors
  if (!res.ok) {
    console.error("Fetch failed with status:", res.status);
    throw new Error("Failed to fetch movie data");
  }

  const movie = await res.json();

  // Debugging: Log the movie data
  console.log("Movie Data:", movie);

  // Fallback for missing poster or backdrop
  const imageUrl = movie.backdrop_path || movie.poster_path
    ? `https://image.tmdb.org/t/p/original/${movie.backdrop_path || movie.poster_path}`
    : "/path/to/fallback-image.jpg"; // Add a fallback image path

  return (
    <div className="w-full ">
      <div className="text-gray-300  p-4 md:pt-8 flex flex-col md:flex-row content-center max-w-6xl mx-auto md:space-x-6">
        {/* Movie Poster */}
        <Image
          src={imageUrl}
          width={500}
          height={300}
          alt="movie poster"
          className="rounded-lg"
          priority // Add priority if this image is above the fold
        />
        {/* Movie Details */}
        <div className="p-2">
          <h2 className="text-lg  mb-3 font-bold">
            {movie.title || movie.name || "Unknown Title"}
          </h2>
          <p className="text-lg text-gray-300 mb-3">
            {movie.overview || "No overview available."}
          </p>
          <p>
            <span className="font-semibold mr-1 text-gray-300">Date released:</span>
            {movie.release_date || movie.first_air_date || "Unknown date"}
          </p>
          <p className="mb-3">
            <span className="font-semibold mr-1 text-gray-300">Rating:</span>
            {movie.vote_average || "N/A"} ({movie.vote_count || "0"} votes)
          </p>
        </div>
      </div>
    </div>
  );
}