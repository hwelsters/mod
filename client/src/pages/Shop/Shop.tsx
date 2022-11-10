import { useState, useEffect } from "react";

import { useStore } from "hooks/useStore";
import Footer from "layouts/Footer";
import Navbar from "layouts/Navbar/Navbar";
import PageContainer from "layouts/PageContainer/PageContainer";
import ThreeColumn from "layouts/ThreeColumn/ThreeColumn";
import ShopComponent from "./components/ShopComponent/ShopComponent";

import styles from "./Shop.module.css";

export default function Shop() {
  const { getitems } = useStore();

  const [items, setItems] = useState<any>([]);

  useEffect(() => {
    async function getShopItem() {
      setItems(await getitems());
    }
    getShopItem();
  }, []);

  return (
    <PageContainer>
      <Navbar />
      <ThreeColumn>
        <span className={styles.title}>🛒 Shop</span>
        {items.map((e: any, index: number) => (
          <ShopComponent
            id={index}
            title={e.title}
            description={e.description}
            img={e.img}
            cost={e.cost}
          />
        ))}
      </ThreeColumn>
      <Footer />
    </PageContainer>
  );
}
