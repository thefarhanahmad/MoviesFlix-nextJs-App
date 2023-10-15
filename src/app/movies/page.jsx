"use client";

// importing dependencies
import axios from "axios";
import React, { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";

const Movies = () => {
  // state management
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [inputValue, setInputValue] = useState("");

  // api_key and url
  const api_key = process.env.NEXT_PUBLIC_API_KEY;
  const api_url = process.env.NEXT_PUBLIC_API_URL
  console.log("api key : ", api_key);
  const url = `${api_url}/?s=avengers&apikey=${api_key}`;

  // function to get movies
  const getMovies = async () => {
    setLoading(true);

    try {
      const response = await axios.get(url);
      // console.log(response.data.Search);
      setMovies(response.data.Search);
    } catch (error) {
      console.log("Error occured while fetching data : ");
      console.error(error);
    }
    setLoading(false);
  };

  // calling function after page relaod first
  useEffect(() => {
    getMovies();
  },[]);

  // console.log("movies : ", movies);

  // function to search movie
  const searchMovie = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await axios.get(
        `${api_url}?s=${inputValue}&apikey=${api_key}`
      );
      // console.log(response.data.Search);
      setMovies(response.data.Search);
    } catch (error) {
      console.log("Error occured while getting searched data : ");
      console.error(error);
    }
    setLoading(false);
    // console.log("Searched movie : ", inputValue);
  };

  return (
    <div className="bg-gray-200 w-full pt-6">

      {/* input : search movies here */}
      <form onSubmit={searchMovie} className="w-[93%] sm:w-1/2 m-auto mb-6 ">
        <div className="flex justify-between bg-white items-center sm:p-2 p-1 rounded">
          <input
            onChange={(e) => setInputValue(e.target.value)}
            type="text"
            placeholder="search movies here..."
            required
            className="w-[70%] p-2 outline-none"
          />
          <button className="sm:py-2 sm:px-5 py-1 px-4 bg-slate-200 rounded-full">
            search
          </button>
        </div>
        <span className="text-xs text-gray-400 ml-1">
          Enter more than 3 letters & should be valid input otherwise you &apos; ll get
          errors
        </span>
      </form>
      {/* displaying movie or loader depends on loading var */}
      {loading ? (
        <div className="w-full h-[80vh] text-black font-bold flex justify-center items-center">
          Loading...
        </div>
      ) : (
        <div className="w-[80%] h-full m-auto flex flex-wrap justify-between p-4 flex-col sm:flex-row gap-8">
          {movies.map((movie, i) => {
            return (
              <MovieCard
                key={i}
                Poster={movie.Poster}
                Title={movie.Title}
                year={movie.Year}
                id={movie.imdbID}
              />
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Movies;
