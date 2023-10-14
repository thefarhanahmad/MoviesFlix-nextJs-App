"use client";

// importing dependencies
import axios from "axios";
import React, { useEffect, useState } from "react";

// dynamic route page
const MovieDetails = ({ params }) => {
  // importing id from params
  const id = params.id;

  // state handling
  const [movie, setMovie] = useState([]);
  const [loading, setLoading] = useState(false);

  // API KEY and URL
  const api_key = process.env.NEXT_PUBLIC_API_KEY;
  const url = `https://www.omdbapi.com/?i=${id}&apikey=${api_key}`;

  // function to fetch movies by id
  const getMovie = async () => {
    setLoading(true);
    try {
      const response = await axios.get(url);
      console.log(response.data);
      setMovie(response.data);
    } catch (error) {
      console.log("Error occured while fetching data : ");
      console.error(error);
    }
    setLoading(false);
  };

  // calling function
  useEffect(() => {
    getMovie();
  }, []);

  // console.log("movie : ", movie);

  return (
    <div className="w-full h-[80vh] relative bg-gray-200 text-black flex items-center justify-center">
      <div className="w-[80%] flex flex-col justify-center items-center">
        {/* <button className="absolute bg-white py-1 px-4 rounded-lg top-[8%] md:top-4 left-[10%]">
       <Link href="/movies">Go back</Link>
        </button> */}
        {loading ? (
          <div className="font-bold">Loading...</div>
        ) : (
          // movie card
          <div>
            {/* movie type on top */}
            <h2 className="mb-8 font-semibold text-red-700">
              <span className="text-black">Watch / </span>
              {movie.Type}
            </h2>

            {/* flex display */}
            <div className="flex justify-center gap-8">
              {/* image : left side */}
              <div className="">
                <img src={movie.Poster} alt="poster" className="" />
              </div>

              {/* movies details */}
              <div className="flex flex-col gap-2">
                <p>
                  <span className="font-semibold">Title : </span>
                  {movie.Title}
                </p>
                <p>
                  <span className="font-semibold">Rating : </span>
                  {movie.imdbRating} / 10
                </p>
                <p>
                  <span className="font-semibold">Genre : </span>
                  {movie.Genre}
                </p>
                <p>
                  <span className="font-semibold">Actors : </span>
                  {movie.Actors}
                </p>
                <p className="text-sm">
                  <span className="font-semibold">About : </span>
                  {movie.Plot}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MovieDetails;
