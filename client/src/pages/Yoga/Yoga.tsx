import Footer from 'layouts/Footer'
import Navbar from 'layouts/Navbar/Navbar'
import PageContainer from 'layouts/PageContainer/PageContainer'

import styles from "./Yoga.module.css";

export default function Yoga() {
  return (
    <PageContainer>
        <Navbar/>
        <div className={styles.container}>
          <div className={styles.yoga}></div>
        </div>
        <Footer/>
    </PageContainer>
  )
}
