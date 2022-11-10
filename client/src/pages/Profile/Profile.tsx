import pageURLs from "data/pageURLs";
import { useAuth } from "hooks/useAuth";
import Footer from "layouts/Footer";
import Navbar from "layouts/Navbar/Navbar";
import PageContainer from "layouts/PageContainer/PageContainer";
import ThreeColumn from "layouts/ThreeColumn/ThreeColumn";

import styles from "./Profile.module.css";

export default function Profile() {
  const { user } = useAuth();
  return (
    <PageContainer>
      <Navbar />
      <ThreeColumn>
        <div className={styles.profile}>
          <span className={styles.block}>
            <img className={styles.profile_pic} src={pageURLs.testImgURL} />
            <span className={styles.right}>
              <span className={styles.name}>Noel Ngu</span>
              <span className={styles.date}>📅 Date created: 01/10/10</span>
            </span>
          </span>
          <span className={styles.header}>📝 Description</span>
          <span className={styles.block}>
            <span className={styles.description}>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis
              velit recusandae voluptatum laborum harum repudiandae veniam
              illum? Et modi dolores doloribus dolorum perspiciatis eos hic
              ratione ipsam, magnam sequi? Nisi?
            </span>
          </span>
          <span className={styles.header}>🏆 Awards</span>
          <span className={styles.block}>
            <span className={styles.grid}>
              <img className={styles.award} src={pageURLs.testImgURL} />
              <img className={styles.award} src={pageURLs.testImgURL} />
              <img className={styles.award} src={pageURLs.testImgURL} />
              <img className={styles.award} src={pageURLs.testImgURL} />
              <img className={styles.award} src={pageURLs.testImgURL} />
              <img className={styles.award} src={pageURLs.testImgURL} />
              <img className={styles.award} src={pageURLs.testImgURL} />
              <img className={styles.award} src={pageURLs.testImgURL} />
              <img className={styles.award} src={pageURLs.testImgURL} />
              <img className={styles.award} src={pageURLs.testImgURL} />
              <img className={styles.award} src={pageURLs.testImgURL} />
              <img className={styles.award} src={pageURLs.testImgURL} />
              <img className={styles.award} src={pageURLs.testImgURL} />
              <img className={styles.award} src={pageURLs.testImgURL} />
              <img className={styles.award} src={pageURLs.testImgURL} />
              <img className={styles.award} src={pageURLs.testImgURL} />
              <img className={styles.award} src={pageURLs.testImgURL} />
              <img className={styles.award} src={pageURLs.testImgURL} />
              <img className={styles.award} src={pageURLs.testImgURL} />
              <img className={styles.award} src={pageURLs.testImgURL} />
              <img className={styles.award} src={pageURLs.testImgURL} />
              <img className={styles.award} src={pageURLs.testImgURL} />
              <img className={styles.award} src={pageURLs.testImgURL} />
              <img className={styles.award} src={pageURLs.testImgURL} />
              <img className={styles.award} src={pageURLs.testImgURL} />
              <img className={styles.award} src={pageURLs.testImgURL} />
              <img className={styles.award} src={pageURLs.testImgURL} />
              <img className={styles.award} src={pageURLs.testImgURL} />
            </span>
          </span>
        </div>
      </ThreeColumn>
      <Footer />
    </PageContainer>
  );
}
