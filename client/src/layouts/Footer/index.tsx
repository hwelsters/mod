import Logo from "layouts/Logo/Logo";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <div className={styles.root}>
      <div className={styles.top}>
        <div className={styles.logo_column}>
          <Logo />
        </div>

        <div className={styles.column}>
          <h3>Yoga</h3>
        </div>
        <div className={styles.column}>
          <h3>Wellbeing</h3>
        </div>
        <div className={styles.column}>
          <h3>Resources</h3>
          <span className={styles.list_item}>About Us</span>
          <span className={styles.list_item}>Copyright Policy</span>
          <span className={styles.list_item}>Terms of Service</span>
          <span className={styles.list_item}>Privacy Policy</span>
        </div>
      </div>
      <br/><br/><br/><br/><br/><br/><br/>
      <div className={styles.footer_text}>© Copyright by hwelsters (but not really)</div>
      <br/><br/><br/><br/><br/><br/><br/>
    </div>
  );
}
