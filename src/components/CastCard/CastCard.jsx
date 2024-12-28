import { DEFAULT_IMG_URL, IMG_URL } from "api/refs";

import styles from "./CastCard.module.css";

const CastCard = ({ data: { profile_path, name, character } }) => {
  return (
    <>
      <img
        className={styles.avatarImg}
        src={profile_path ? IMG_URL + profile_path : DEFAULT_IMG_URL}
        alt={name}
        loading="lazy"
      />

      <div className={styles.cardContent}>
        <p className={styles.cardTitle}>{name}</p>
        <p className={styles.cardDescription}>{character}</p>
      </div>
    </>
  );
};

export default CastCard;
