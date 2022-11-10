import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LogoutIcon from "@mui/icons-material/Logout";
import pageURLs from "data/pageURLs";
import { useAuth } from "hooks/useAuth";
import NavbarModalIcons from "../NavbarModalIcons/NavbarModalIcons";

import styles from "./NavbarModal.module.css";

export default function NavbarModal() {
  const { logout } = useAuth();

  const profile = (e: any) => {
    window.location.href = pageURLs.profile;
  };

  const signout = (e: any) => {
    logout();
  };

  return (
    <div className={styles.navbarModal__root}>
      <div onClick={profile}>
        <NavbarModalIcons Icon={AccountCircleIcon} text="Profile" />
      </div>

      {/* Logout user on click */}
      <div onClick={signout}>
        <NavbarModalIcons Icon={LogoutIcon} text="Sign out" />
      </div>
    </div>
  );
}
