import LibraryMusicOutlinedIcon from "@mui/icons-material/LibraryMusicOutlined";
import BoltOutlinedIcon from "@mui/icons-material/BoltOutlined";

import pageURLs from "data/pageURLs";
import { useAuth } from "hooks/useAuth";

import styles from "./NavbarSignedIn.module.css";

export default function NavbarSignedIn() {
  const { user } = useAuth();
  return (
    <>
      <LibraryMusicOutlinedIcon className={styles.icon} />
      <BoltOutlinedIcon className={styles.icon} />
      <span className={styles.number}>{user.gems}</span>
      <img className={styles.profile_pic} src={pageURLs.testImgURL} />
    </>
  );
}
