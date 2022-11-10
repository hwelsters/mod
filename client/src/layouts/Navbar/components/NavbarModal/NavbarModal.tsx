import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LogoutIcon from "@mui/icons-material/Logout";
import NavbarModalIcons from "../NavbarModalIcons/NavbarModalIcons";

import styles from "./NavbarModal.module.css";


export default function NavbarModal() {
  return (
    <div className={styles.navbarModal__root}>
      <div>
        <NavbarModalIcons Icon={AccountCircleIcon} text="Profile" />
      </div>

      {/* Logout user on click */}
      <div>
        <NavbarModalIcons Icon={LogoutIcon} text="Sign out" />
      </div>
    </div>
  );
}