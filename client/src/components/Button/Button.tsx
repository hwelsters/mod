import styles from "./Button.module.css";

type ButtomParams = {
  text?: string;
  onClick?: any;
  disabled?:boolean;
};
export default function Button({ text, onClick, disabled }: ButtomParams) {
  return <button className={styles.root} onClick={onClick} disabled={disabled}>{text}</button>;
}
