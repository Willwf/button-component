import { Button } from "../button/button";
import styles from "./styles.module.scss";

export function Main() {
  return (
    <main className={styles.main}>
      <h1 className={styles.h1}>Buttons</h1>

      <div className={styles.buttonBox}>
        <div>
          <p>&lt;Button /&gt;</p>
          <Button />
        </div>
        <div>
          <p className={styles.states}>&amp;:hover, &amp;:focus</p>
          <Button states="active" />
        </div>
      </div>

      <div className={styles.buttonBox}>
        <div>
          <p>&lt;Button variant="outline" /&gt;</p>
          <Button variant="outline" />
        </div>
        <div>
          <p className={styles.states}>&amp;:hover, &amp;:focus</p>
          <Button variant="outline" states="active" />
        </div>
      </div>

      <div className={styles.buttonBox}>
        <div>
          <p>&lt;Button variant="text" /&gt;</p>
          <Button variant="text" />
        </div>
        <div>
          <p className={styles.states}>&amp;:hover, &amp;:focus</p>
          <Button variant="text" states="active" />
        </div>
      </div>

      <div className={styles.buttonBox}>
        <div>
          <p>&lt;Button disableShadow /&gt;</p>
          <Button disableShadow color="primary" />
        </div>
      </div>

      <div className={styles.buttonBox}>
        <div>
          <p>&lt;Button disabled /&gt;</p>
          <Button disabled>Disabled</Button>
        </div>
        <div>
          <p>&lt;Button variant="text" disabled /&gt;</p>
          <Button variant="text" disabled>
            Disabled
          </Button>
        </div>
      </div>

      <div className={styles.buttonBox}>
        <div>
          <p>&lt;Button startIcon="add_shopping_cart" /&gt;</p>
          <Button startIcon="add_shopping_cart" color="primary" />
        </div>
        <div>
          <p>&lt;Button endIcon="add_shopping_cart" /&gt;</p>
          <Button endIcon="add_shopping_cart" color="primary" />
        </div>
      </div>

      <div className={styles.buttonBox}>
        <div>
          <p>&lt;Button size="sm" /&gt;</p>
          <Button size="sm" color="primary" />
        </div>

        <div>
          <p>&lt;Button size="md" /&gt;</p>
          <Button size="md" color="primary" />
        </div>

        <div>
          <p>&lt;Button size="lg" /&gt;</p>
          <Button size="lg" color="primary" />
        </div>
      </div>

      <div className={styles.buttonBox}>
        <div>
          <p>&lt;Button color="default" /&gt;</p>
          <Button color="default" />
        </div>
        <div>
          <p>&lt;Button color="primary" /&gt;</p>
          <Button color="primary" />
        </div>
        <div>
          <p>&lt;Button color="secondary" /&gt;</p>
          <Button color="secondary">Secondary</Button>
        </div>
        <div>
          <p>&lt;Button color="danger" /&gt;</p>
          <Button color="danger">Danger</Button>
        </div>
      </div>

      <div>
        <p className={styles.states}>&amp;:hover, &amp;:focus</p>
        <div className={styles.buttonBox}>
          <div>
            <Button color="default" states="active" />
          </div>
          <div>
            <Button color="primary" states="active" />
          </div>
          <div>
            <Button color="secondary" states="active">
              Secondary
            </Button>
          </div>
          <div>
            <Button color="danger" states="active">
              Danger
            </Button>
          </div>
        </div>
      </div>

      <p className={styles.states}>
        Icons: https://material.io/resources/icons/?style=round
      </p>
      <p className={styles.copyright}>
        Created by{" "}
        <a href="https://devchallenges.io/portfolio/Willwf">willwf</a> -
        devChallenges.io
      </p>
    </main>
  );
}
