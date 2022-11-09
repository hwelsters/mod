import { useAuth } from "hooks/useAuth";

import Logo from "layouts/Logo/Logo";

import styles from "./Navbar.module.css";
import NavbarNotSignedIn from "./components/NotSignedIn/NotSignedIn";
import NavbarSignedIn from "./components/NavbarSignedIn/NavbarSignedIn";

export default function Navbar() {
  const { user } = useAuth();
  console.log(user);
  return (
    <div className={styles.root}>
      <span className={styles.logo}>
        <Logo />
      </span>
      <div className={styles.right}>
        {user !== null? <NavbarSignedIn /> : <NavbarNotSignedIn />}
      </div>
    </div>
  );
}
