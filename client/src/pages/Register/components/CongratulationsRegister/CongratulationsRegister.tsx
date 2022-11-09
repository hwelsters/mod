import pageURLs from "data/pageURLs";
import {useState} from "react";

import styles from "./CongratulationsRegister.module.css";

export default function CongratulationsRegister() {
  const DELAY = 1000;
  const [error, setError] = useState<string>("");

  setTimeout(() => {
    setError("Redirecting to login page...")

    setTimeout(()=> {
      window.location.href = pageURLs.login;
    }, DELAY)
  }, DELAY);
  return (
    <span className={styles.text}>
      You've made an account! 🎉
      <span className={styles.error}>{error}</span>
    </span>
  )
}
