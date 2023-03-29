import styles from "./Container.module.css";

type Props = {
  children: React.ReactNode;
};

const Container: React.FC<Props> = ({ children }) => {
  return <main className={styles.container}>{children}</main>;
};

export default Container;
