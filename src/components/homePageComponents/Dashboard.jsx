import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { RingLoader } from "react-spinners";
import logo from "../../assets/img/logo.png";
import menu from "../../assets/img/menu.png";
import imdb from "../../assets/img/imdb.png";
import tomato from "../../assets/img/tomato.png";
import {
  ArrowForwardIos,
  PlayCircle,
  SearchOutlined,
} from "@mui/icons-material";

const Dashboard = ({ query, handleChange, handleSearch }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [movies, setMovies] = useState(null);
  const [position, setPosition] = useState(0);
  const searchInputRef = useRef(null);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const res = await axios.get(
          `https://api.themoviedb.org/3/trending/movie/day?api_key=6f687067231f0a6ceb9c0cae600a334c`
        );

        setMovies(res.data.results.slice(4, 5));
      } catch (err) {
        alert(
          `Could not get movies: ${err}. It could be a network error. Kindly check your network connection and try again`
        );
        console.log(err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchMovies();
  }, []);

  const movie = !isLoading && movies[position];

  

  return (
    <>
      {isLoading && <RingLoader className="mx-auto mt-10" />}
      {!isLoading && (
        <section
          style={{
            backgroundImage: `url('https://image.tmdb.org/t/p/original/${movie.backdrop_path}')`,
          }}
          className="relative bg-center bg-cover bg-no-repeat text-white before:absolute before:h-full before:w-full before:bg-[rgba(17,24,39,0.4)]"
        >
          <header className="py-5 px-3 z-[2] xl:w-[120rem] xl:mx-auto">
            <nav className="grid grid-cols-2 justify-between items-center gap-2 text-xl sm:flex">
              <Link
                to="/"
                className="col-span-1 flex items-center gap-2  z-[2]"
              >
                <img src={logo} alt="MovieBox logo" />
                MovieBox
              </Link>

              <div className="form-control col-span-full relative md:min-w-[40rem] lg:min-w-[52.5rem]">
                <input
                  className="w-full p-2 pr-7 bg-[transparent] border border-white rounded-xl text-white placeholder:text-white"
                  type="text"
                  value={query}
                  onChange={handleChange}
                  ref={searchInputRef}
                  placeholder="Search for your movie"
                  required
                />

                <button
                  className="absolute right-1 top-1/4"
                  onClick={handleSearch}
                >
                  <SearchOutlined fontSize="large" />
                </button>
              </div>

              <div className="login col-start-2 row-start-1 justify-self-end flex items-center gap-1  z-[2]">
                <span>Sign in</span>

                <button className="bg-rose p-1 rounded-full">
                  <img src={menu} alt="menu button" />
                </button>
              </div>
            </nav>
          </header>

          <section className="hero px-3 mt-5 pt-[7rem] pb-5 text-xl xl:w-[120rem] xl:mx-auto xl:pt-[12rem] xl:pb-[14rem]">
            <div className="grid grid-cols-4 gap-3  sm:max-w-[40rem] sm:px-4">
              <h1 className="col-span-full font-bold text-4xl z-[2] xl:text-5xl">
                {movie.title}
              </h1>

              <span className="col-span-2 w-[fit-content] flex items-center gap-1 z-[2]">
                <img src={imdb} alt="imdb icon" />
                {movie.vote_average.toPrecision(2)}/10
              </span>
              <span className="col-span-2 flex items-center gap-1 z-[2]">
                <img src={tomato} alt="imdb icon" />
                {(movie.vote_average * 10).toPrecision(2)}%
              </span>

              <p className="col-span-full z-[2]">{movie.overview}</p>

              <Link
                to={`/movies/${movie.id}`}
                className="flex gap-1 justify-center items-center col-span-2 p-2 bg-rose rounded-xl z-[2]"
              >
                <PlayCircle fontSize="large" />
                Watch Trailer
              </Link>

              {/* <button
                className="flex gap-1 justify-center items-center col-span-2 p-2 bg-rose rounded-xl z-[2]"
                type="button"
                onClick={changeMovie}
              >
                Show next Movie
                <ArrowForwardIos />
              </button> */}
            </div>
          </section>
        </section>
      )}
    </>
  );
};

export default Dashboard;
