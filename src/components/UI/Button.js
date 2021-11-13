import styles from "./Button.module.css";

const Button = ({
  title,
  size = "md",
  variant = "primary",
  type = "button",
  onClick,
}) => {
  return (
    <button
      className={`${styles.button} ${styles[`button-${size}`]} ${
        styles[variant]
      }`}
      onClick={onClick}
      type={type}
    >
      {title}
    </button>
  );
};

export default Button;
