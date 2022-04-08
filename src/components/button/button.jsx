import styles from "./styles.module.scss";

export function Button(props) {
  return (
    <button
      className={`
      ${styles.button}
      ${styles[props.variant]}
      ${styles[props.states]}
      ${props.disableShadow ? styles.disableShadow : undefined}
      ${styles[props.size]}
      ${styles[props.color]}`}
      disabled={props.disabled ? "disabled" : ""}
    >
      {props.startIcon ? (
        <span className={`material-icons ${styles.materialIcons}`}>
          {props.startIcon}
        </span>
      ) : undefined}
      {props.children ? props.children : "Default"}
      {props.endIcon ? (
        <span className={`material-icons ${styles.materialIcons}`}>
          {props.endIcon}
        </span>
      ) : undefined}
    </button>
  );
}
