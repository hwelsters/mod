import pageURLs from "data/pageURLs";
import Footer from "layouts/Footer";
import Navbar from "layouts/Navbar/Navbar";
import PageContainer from "layouts/PageContainer/PageContainer";
import { Link } from "react-router-dom";

import styles from "./NotFound.module.css";

export default function NotFound() {
  return (
    <PageContainer>
      <Navbar />
      <span className={styles.root}>
        Looks like you're a little lost
        <span className={styles.text}>Go back home</span>
        <Link className={styles.home} to={pageURLs.home}>🏠</Link>
      </span>
      <Footer />
    </PageContainer>
  );
}
