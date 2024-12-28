import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import styles from "./Reviews.module.css";
import { fetchMovieReview } from "api/movies";

import Loader from "components/Loader/Loader";
import ReviewCard from "components/ReviewCard/ReviewCard";

import Text from "components/Text/Text";

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const handleMovieReview = async () => {
      if (!movieId) return;

      setIsLoading(true);
      setIsError(false);

      try {
        const { results } = await fetchMovieReview(movieId);
        setReviews(results);
      } catch (error) {
        setError(error.message);
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };
    handleMovieReview();
  }, [movieId]);

  return (
    <div className={styles.content}>
      {reviews && reviews.length > 0 && <ReviewCard reviews={reviews} />}
      {reviews && reviews.length === 0 && (
        <Text>There are no reviews for this movie yet</Text>
      )}
      {isLoading && reviews === null && <Loader />}
      {isError && <Text>{error}</Text>}
    </div>
  );
};

export default Reviews;
