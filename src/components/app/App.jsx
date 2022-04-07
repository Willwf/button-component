import { Main } from "../main/main";
import { Nav } from "../nav/nav";
import styles from "./styles.module.css";

function App() {
  return (
    <div className={styles.app}>
      <Nav />
      <Main />
    </div>
  );
}

export default App;
