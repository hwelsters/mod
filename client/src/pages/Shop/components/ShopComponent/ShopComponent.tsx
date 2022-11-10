import Button from "components/Button/Button";
import pageURLs from "data/pageURLs";
import styles from "./ShopComponent.module.css";
import DiamondRoundedIcon from "@mui/icons-material/DiamondRounded";
import { useStore } from "hooks/useStore";
import { useAuth } from "hooks/useAuth";

type ShopComponentParams = {
  title: string;
  description: string;
  cost: number;
  id: number;
};

export default function ShopComponent({
  title,
  description,
  cost,
  id,
}: ShopComponentParams) {
  const { buy } = useStore();
  const {user} = useAuth();
  return (
    <button className={styles.root} onClick={() => {user.gems >= cost && buy(id)}} disabled={user.gems < cost}>
      <img className={styles.img} src={pageURLs.testImgURL} />
      <span className={styles.right}>
        <span className={styles.title}>{title}</span>
        <span className={styles.description}>{description}</span>
      </span>
      <button className={styles.cost}>
        <DiamondRoundedIcon />
        {cost}
      </button>
    </button>
  );
}
