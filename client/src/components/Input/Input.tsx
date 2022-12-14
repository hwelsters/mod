import styles from "./Input.module.css";

type InputParams = {
  label?: string;
  onChange?: any;
  type?: string;
  value?: string;
};

export default function Input({ label, onChange, type, value }: InputParams) {
  return (
    <span className={styles.root}>
      <label className={styles.label} htmlFor={label}>{label}</label>
      <input className={styles.input} name={label} type={type} onChange={onChange} value={value}/>
    </span>
  );
}
