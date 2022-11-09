import HomeLeft from "./components/HomeLeft/HomeLeft";
import HomeRight from "./components/HomeRight/HomeRight";

import styles from "./ThreeColumn.module.css";
type ThreeColumnParams = {
  children?: any;
};

export default function ThreeColumn({ children }: ThreeColumnParams) {
  return (
    <div className={styles.root}>
      <div className={styles.page}>
        <HomeLeft />
        <div className={styles.middle}>{children}</div>
        <HomeRight />
      </div>
    </div>
  );
}
