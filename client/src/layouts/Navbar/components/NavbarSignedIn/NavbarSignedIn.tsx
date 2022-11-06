import pageURLs from "data/pageURLs";
import { useAuth } from "hooks/useAuth";

import styles from "./NavbarSignedIn.module.css";

export default function NavbarSignedIn() {
  const user = { name: "hwelster" }
  return (
    <>
      <img className={styles.profile_pic} src={pageURLs.testImgURL} />
    </>
  );
}
