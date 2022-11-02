import styles from "./PasswordInput.module.css";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import useToggle from "hooks/useToggle";

export default function PasswordInput({label,onChange}: {label?: string; onChange?: any;}) {
  const [shown, setShown] = useToggle();

  return (
    <span className={styles.root}>
      <label className={styles.label} htmlFor={label}>{label}</label>
      <span className={styles.input_div}>
        <input className={styles.input} name={label} id={label} type={shown? "text" : "password"} onChange={onChange}/>
        <span onClick={setShown}>
          {shown? <RemoveRedEyeIcon className={styles.icon}/> : <VisibilityOffIcon className={styles.icon}/>}
        </span>
      </span>
    </span>
  );
}
