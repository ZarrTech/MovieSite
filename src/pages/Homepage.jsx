import { useRef, useState, useEffect } from "react";
import axios from "axios";
import { HashLoader } from "react-spinners";
import Dashboard from "../components/homePageComponents/Dashboard";
import FeaturedMovies from "../components/homePageComponents/FeaturedMovies";
import Footer from "../components/homePageComponents/Footer";

const Homepage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [movies, setMovies] = useState(null);
  const [searchValue, setSearchValue] = useState("");
  const featuredMoviesRef = useRef(null);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const res = await axios.get(
          `https://api.themoviedb.org/3/movie/top_rated?api_key=6f687067231f0a6ceb9c0cae600a334c`
        );

        setMovies(res.data.results.slice(0, 10));
      } catch (err) {
        alert(
          `Could not get movie(s): ${err}. It could be a network error. Kindly check your network connection and try again`
        );
        console.log(err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchMovies();
  }, []);

  function searchMovies(event) {
    event.stopPropagation();
    if (!searchValue) return;
    featuredMoviesRef.current.scrollIntoView({ behavior: "smooth" });
    const fetchURL = `https://api.themoviedb.org/3/search/movie?query=${searchValue}&api_key=6f687067231f0a6ceb9c0cae600a334c`;

    setIsLoading(true);

    const fetchMoviesFromSearch = async () => {
      try {
        const res = await axios.get(fetchURL);

        setMovies(res.data.results);
      } catch (err) {
        alert(
          `Could not get movie(s): ${err}. It could be a network error. Kindly check your network connection and try again`
        );
        console.log(err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchMoviesFromSearch();
  }

  return (
    <>
      {isLoading && (
        <HashLoader color='rgb(190,18,60)' className='mx-auto mt-8' />
      )}
      {!isLoading && (
        <>
          <Dashboard
            query={searchValue}
            handleChange={(e) => setSearchValue(e.target.value)}
            handleSearch={searchMovies}
          />
          <FeaturedMovies movieList={movies} ref={featuredMoviesRef} />
          <Footer />
        </>
      )}
    </>
  );
};

export default Homepage;
