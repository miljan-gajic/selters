import Link from "next/link";
import styles from "./Card.module.css";

type Props = {
  cardText?: string;
  cardTitle?: string;
  image?: string | React.ReactNode;
  linkUrl?: string;
};

const Card: React.FC<Props> = ({ cardText, cardTitle, image, linkUrl }) => {
  return linkUrl ? (
    <Link className={styles.card} href={linkUrl} target="_blank">
      {image}
      <h3 className={styles.cardTitle}>{cardTitle}</h3>
      <div className={styles.cardText}>{cardText}</div>
    </Link>
  ) : (
    <div className={styles.card}>
      <div className={styles.imageContainer}>{image}</div>
      <h3 className={styles.cardTitle}>{cardTitle}</h3>
      <div className={styles.cardText}>{cardText}</div>
    </div>
  );
};

export default Card;
