import { Link } from "react-router-dom";
import FaceIcon from "@mui/icons-material/Face";

import pageURLs from "data/pageURLs";
import { useAuth } from "hooks/useAuth";

import Logo from "layouts/Logo/Logo";

import styles from "./Navbar.module.css";

export default function Navbar() {
  const { signIn } = useAuth();
  return (
    <div className={styles.root}>
      <span className={styles.logo}>
        <Logo />
      </span>
      <span className={styles.right}>
        <span className={styles.profile}>
          <FaceIcon />
        </span>
        <Link className={styles.login} to={pageURLs.login}>
          Login
        </Link>
        <Link className={styles.register} to={pageURLs.register}>
          Register
        </Link>
      </span>
    </div>
  );
}
