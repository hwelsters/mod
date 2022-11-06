import LibraryMusicOutlinedIcon from "@mui/icons-material/LibraryMusicOutlined";

import { useAuth } from "hooks/useAuth";

import Logo from "layouts/Logo/Logo";

import styles from "./Navbar.module.css";
import NavbarNotSignedIn from "./components/NotSignedIn/NotSignedIn";
import NavbarSignedIn from "./components/NavbarSignedIn/NavbarSignedIn";

export default function Navbar() {
  const user = true;
  return (
    <div className={styles.root}>
      <span className={styles.logo}>
        <Logo />
      </span>
      <div className={styles.right}>
        <span className={styles.music}>
          <LibraryMusicOutlinedIcon />
        </span>
        
        {user ? <NavbarSignedIn /> : <NavbarNotSignedIn />}
      </div>
    </div>
  );
}
