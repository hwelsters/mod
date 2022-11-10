import Button from "components/Button/Button";
import pageURLs from "data/pageURLs";
import styles from "./ShopComponent.module.css";
import DiamondRoundedIcon from "@mui/icons-material/DiamondRounded";

export default function ShopComponent({
  title,
  description,
  cost,
}: {
  title: string;
  description: string;
  cost: number;
}) {
  return (
    <div className={styles.root}>
      <img className={styles.img} src={pageURLs.testImgURL} />
      <span className={styles.right}>
        <span className={styles.title}>{title}</span>
        <span className={styles.description}>{description}</span>
      </span>
      <button className={styles.cost}>
        <DiamondRoundedIcon />
        {cost}
      </button>
    </div>
  );
}
