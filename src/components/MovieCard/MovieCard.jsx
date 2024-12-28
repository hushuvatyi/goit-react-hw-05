import {
  DEFAULT_IMG_URL,
  IMG_URL,
  DEFAULT_TITLE,
  DEFAULT_DATE,
} from "api/refs";
import styles from "./MovieCard.module.css";

const MovieCard = ({ data: { poster_path, title, release_date } }) => {
  return (
    <>
      <img
        className={styles.cardImg}
        src={poster_path ? IMG_URL + poster_path : DEFAULT_IMG_URL}
        alt={"avatar " + title || DEFAULT_TITLE}
        loading="lazy"
      />
      <div className={styles.cardContent}>
        <p className={styles.cardTitle}>{title || DEFAULT_TITLE}</p>
        <p className={styles.cardDate}>{release_date || DEFAULT_DATE}</p>
      </div>
    </>
  );
};

export default MovieCard;
