import NavIcon from "../NavIcon/NavIcon";

import HomeIcon from "@mui/icons-material/Home";
import SelfImprovementIcon from "@mui/icons-material/SelfImprovement";
import StorefrontIcon from "@mui/icons-material/Storefront";
import MenuBookIcon from "@mui/icons-material/MenuBook";

import styles from "./HomeLeft.module.css"
import pageURLs from "data/pageURLs";

export default function HomeLeft() {
  return (
    <div className={styles.left}>
      <NavIcon Icon={HomeIcon} title="Learn" to={pageURLs.home}/>
      {/* <NavIcon Icon={SelfImprovementIcon} title="Poses" to={pageURLs.poses}/> */}
      {/* <NavIcon Icon={MenuBookIcon} title="Review" to={pageURLs.review}/> */}
      <NavIcon Icon={StorefrontIcon} title="Shop" to={pageURLs.shop}/>
    </div>
  );
}
