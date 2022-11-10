import LibraryMusicOutlinedIcon from "@mui/icons-material/LibraryMusicOutlined";
import DiamondRoundedIcon from "@mui/icons-material/DiamondRounded";

import pageURLs from "data/pageURLs";
import { useAuth } from "hooks/useAuth";

import styles from "./NavbarSignedIn.module.css";
import NavbarModal from "../NavbarModal/NavbarModal";

export default function NavbarSignedIn() {
  const { user } = useAuth();
  return (
    <>
      <LibraryMusicOutlinedIcon className={styles.icon} />
      <DiamondRoundedIcon className={styles.icon} />
      <span className={styles.number}>{user.gems}</span>
      <span className={styles.profile} tabIndex={0}>
        <img className={styles.profile_pic} src={pageURLs.testImgURL} />
        <NavbarModal />
      </span>
    </>
  );
}
