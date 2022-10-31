import styles from "./PasswordRegisterIcons.module.css";

export default function PasswordRegisterIcons({
  text,
  icon,
  disabled
}: {
  text: string;
  icon: string;
  disabled: boolean
}) {
  return (
    <span className={`${styles.root} ${disabled && styles.active}`}>
      <span className={styles.icon}>{icon}</span>
      <span>{text}</span>
    </span>
  );
}
