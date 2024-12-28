import { useEffect, useState } from "react";

import { fetchTrendMovies } from "api/movies";

import Heading from "components/Heading/Heading";
import Loader from "components/Loader/Loader";
import MovieList from "components/MovieList/MovieList";
import Text from "components/Text/Text";

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const handleTrendMovies = async () => {
      setIsLoading(true);
      setIsError(false);

      try {
        const { results } = await fetchTrendMovies();
        setMovies(results);
      } catch (error) {
        setError(error.message);
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };
    handleTrendMovies();
  }, []);

  return (
    <section className="container">
      <Heading title={"Trending today"} />
      {!isError && movies?.length > 0 && !isLoading && (
        <MovieList data={movies} />
      )}
      {isLoading && <Loader />}
      {isError && <Text>{error}</Text>}
    </section>
  );
};

export default HomePage;
