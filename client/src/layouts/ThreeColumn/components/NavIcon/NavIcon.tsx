import { Link } from "react-router-dom";
import styles from "./NavIcon.module.css";
type NavIconParams = {
  Icon: any;
  title: string;
  to: string;
};
export default function NavIcon({ Icon, title, to }: NavIconParams) {
  console.log(window.location.pathname);
  return (
    <Link className={`${styles.root} ${to===window.location.pathname && styles.selected}`} to={to}>
      <Icon className={`${styles.icon} ${to==window.location.href}`} />
      {title}
    </Link>
  );
}
