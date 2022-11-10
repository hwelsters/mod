import Footer from "layouts/Footer";
import Navbar from "layouts/Navbar/Navbar";
import PageContainer from "layouts/PageContainer/PageContainer";
import ThreeColumn from "layouts/ThreeColumn/ThreeColumn";
import React from "react";
import ShopComponent from "./components/ShopComponent/ShopComponent";

export default function Shop() {
  return (
    <PageContainer>
      <Navbar />
      <ThreeColumn>
        <ShopComponent
          title="Cool thing"
          description="Epic memes"
          cost={100}
        />
        <ShopComponent
          title="Extra Cool thing"
          description="This doesn't do anything"
          cost={20}
        />
      </ThreeColumn>
      <Footer />
    </PageContainer>
  );
}
