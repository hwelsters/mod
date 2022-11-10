import styles from "./UnitLesson.module.css";

import StarRoundedIcon from "@mui/icons-material/StarRounded";
import DoneOutlineRoundedIcon from "@mui/icons-material/DoneOutlineRounded";
import SelfImprovementRoundedIcon from "@mui/icons-material/SelfImprovementRounded";
import FitnessCenterRoundedIcon from "@mui/icons-material/FitnessCenterRounded";
import LockRoundedIcon from "@mui/icons-material/LockRounded";
import TagFacesRoundedIcon from "@mui/icons-material/TagFacesRounded";
import { Link } from "react-router-dom";
import pageURLs from "data/pageURLs";

type UnitLessonParams = {
  type: number;
  disabled?: boolean;
  completed?: boolean;
  lesson: number;
};

export default function UnitLesson({
  type,
  disabled,
  completed,
  lesson,
}: UnitLessonParams) {
  const STAR = 0;
  const SELF = 1;
  const FITNESS = 2;

  const pickIcon = () => {
    if (disabled) return <LockRoundedIcon className={styles.icon} />;
    if (completed) return <TagFacesRoundedIcon className={styles.icon} />;
    switch (type) {
      case STAR:
        return <StarRoundedIcon className={styles.icon} />;
      case SELF:
        return <SelfImprovementRoundedIcon className={styles.icon} />;
      case FITNESS:
        return <FitnessCenterRoundedIcon className={styles.icon} />;
    }
  };
  return (
    <Link to={disabled? pageURLs.home: pageURLs.yoga + "?" + lesson}>
      <button className={styles.root} disabled={disabled}>
        {pickIcon()}
      </button>
    </Link>
  );
}
