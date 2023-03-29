import styles from "./CardRow.module.css";

type Props = {
  children: React.ReactNode;
};

const CardRow: React.FC<Props> = ({ children }) => {
  return <div className={styles.cardRow}>{children}</div>;
};

export default CardRow;
