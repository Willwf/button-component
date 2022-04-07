import styles from "./styles.module.css";

export function Nav() {
  return (
    <nav className={styles.navbar}>
      <p className={styles.title}>
        <span className={styles.span}>Dev</span>challenges.io
      </p>
      <ul className={styles.ul}>
        <li>Colors</li>
        <li>Typography</li>
        <li>Spaces</li>
        <li>Buttons</li>
        <li className={styles.active}>Inputs</li>
        <li>Grid</li>
      </ul>
    </nav>
  );
}
