import pageURLs from "data/pageURLs";
import FaceIcon from "@mui/icons-material/Face";
import { Link } from "react-router-dom";

import styles from "./NavbarNotSignedIn.module.css";

export default function NavbarNotSignedIn() {
  return (
    <>
      <span className={styles.profile}>
        <FaceIcon />
      </span>
      <Link className={styles.login} to={pageURLs.login}>
        Login
      </Link>
      <Link className={styles.register} to={pageURLs.register}>
        Register
      </Link>
    </>
  );
}
