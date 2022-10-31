import styles from "./CompletionRegister.module.css";
export default function CompletionRegister() {

  setInterval(()=>{
    window.location.href="/login";
  }, 500)
  return (
    <>
      <span className={styles.text}>Please verify your account!</span>
      <span className={styles.text}>🎉</span>
    </>
  );
}
