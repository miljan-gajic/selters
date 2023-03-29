import styles from "./MenuLine.module.css";

const MenuLine = () => {
  return (
    <div className={styles.menu}>
      <div>
        <span>VIDEO</span>
        <span>TRENINZI</span>
      </div>
      <div className={styles.menuSpacer}></div>
      <div>
        <span>VESTI</span>
        <span>KONTAKT</span>
      </div>
    </div>
  );
};

export default MenuLine;
