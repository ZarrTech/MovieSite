// import { useState } from "react";
import { forwardRef } from "react";
import MovieCard from "./MovieCard";
import { ArrowForwardIosRounded } from "@mui/icons-material";
import { Link } from "react-router-dom";

const FeaturedMovies = forwardRef(function FeaturedMovies({ movieList }, ref) {
  const allFavMovieIds = localStorage.getItem("favMovies") || "";

  const moviesCards = movieList.map((movie) => (
    <MovieCard
      key={movie.id}
      id={movie.id}
      imgSrc={movie.poster_path}
      releaseDate={movie.release_date}
      title={movie.title}
      rating={movie.vote_average}
      favourited={allFavMovieIds.includes(`${movie.id}`)}
    />
  ));

  return (
    <main
      className='mt-6 p-4 grid grid-cols-5 items-center max-w-[120rem] mx-auto'
      ref={ref}
    >
      <h2 className='col-span-3 py-2 font-bold text-3xl'>Featured Movies</h2>
      <Link
        to=''
        className='col-span-2 col-start-4 justify-self-end font-bold text-base  text-rose sm:text-xl'
      >
        View Favourites <ArrowForwardIosRounded fontSize='medium' />
      </Link>

      <div className='movie-listing col-span-full grid sm:grid-cols-2 sm:gap-5 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5'>
        {!moviesCards.length && (
          <p className='mx-auto mt-8 text-3xl text-center col-span-full'>
            No movie card to show! Check your search query or your internet
            connection.
          </p>
        )}
        {moviesCards && moviesCards}
      </div>
    </main>
  );
});

export default FeaturedMovies;
