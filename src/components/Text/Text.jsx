import styles from "./Text.module.css";

const Text = ({ children, textAlign = "", marginBottom = "0" }) => {
  return (
    <div className={styles.textWrapper}>
      <p
        className={[
          styles["text"],
          styles[textAlign],
          styles[`marginBottom${marginBottom}`],
        ].join(" ")}
      >
        {children}
      </p>
    </div>
  );
};

export default Text;
