import SelfImprovementIcon from "@mui/icons-material/SelfImprovement";

import config from "data/config";
import pageURLs from "data/pageURLs";
import { Link } from "react-router-dom";

import styles from "./Logo.module.css";

export default function Logo() {
  return (
    <Link className={styles.root} to={pageURLs.home}>
      <SelfImprovementIcon className={styles.graphic}/>
      <span>{config.name}</span>
    </Link>
  );
}
