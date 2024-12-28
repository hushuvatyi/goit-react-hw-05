import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import styles from "./Cast.module.css";
import { fetchMovieCredits } from "api/movies";

import Loader from "components/Loader/Loader";
import CastCard from "components/CastCard/CastCard";

import Text from "components/Text/Text";

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const handleMovieCredits = async () => {
      if (!movieId) return;

      setIsLoading(true);
      setIsError(false);

      try {
        const { cast } = await fetchMovieCredits(movieId);
        setCast(cast);
      } catch (error) {
        setError(error.message);
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };
    handleMovieCredits();
  }, [movieId]);
  return (
    <ul className={styles.cardList}>
      {cast &&
        !isLoading &&
        cast.map(({ id, ...rest }) => {
          return (
            <li className={styles.cardItem} key={id}>
              <CastCard data={rest} />
            </li>
          );
        })}
      {cast && cast.length === 0 && (
        <Text>There are no cast for this movie yet</Text>
      )}

      {isLoading && <Loader />}

      {isError && <Text>{error}</Text>}
    </ul>
  );
};

export default Cast;
