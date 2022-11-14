import React from "react";
import UnitHeader from "../UnitHeader/UnitHeader";
import UnitLesson from "../UnitLesson/UnitLesson";

import styles from "./UnitSection.module.css";

type UnitSectionParams = {
  title: string;
  description: string;
  progress: number;
  level: number;
};

export default function UnitSection({ title, description, progress, level }: UnitSectionParams) {
  return (
    <div className={progress < 0? styles.disabled : styles.root}>
      <UnitHeader title={title} description={description} />
      <span className={styles.level}>
        <UnitLesson type={0} disabled={progress < 0} completed={false} lesson={level + 1}/>
      </span>

      <span className={styles.level}>
        <UnitLesson type={1} disabled={progress < 1} lesson={level + 2}/>
        <UnitLesson type={1} disabled={progress < 2} lesson={level + 3} />
      </span>

      <span className={styles.level}>
        <UnitLesson type={2} disabled={progress < 3}  lesson={level + 4}/>
        <UnitLesson type={2} disabled={progress < 4}  lesson={level + 5}/>
        <UnitLesson type={2} disabled={progress < 5}  lesson={level + 6}/>
      </span>
    </div>
  );
}
