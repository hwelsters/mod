import styles from "./UnitHeader.module.css";

type UnitHeaderParams = {
  title: string;
  description: string;
};

export default function UnitHeader({ title, description }: UnitHeaderParams) {
  return (
    <div className={styles.root}>
      <span className={styles.left}>
        <span className={styles.title}>{title}</span>
        <span className={styles.description}>{description}</span>
      </span>
      <span className={styles.right}>
        <span className={styles.info}>Info</span>
      </span>
    </div>
  );
}
