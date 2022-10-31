import React, { useEffect } from "react";

import { useAuth } from "hooks/useAuth";
import PageContainer from "layouts/PageContainer/PageContainer";
import Navbar from "layouts/Navbar/Navbar";
import Footer from "layouts/Footer";

export default function Home() {
  return (
    <PageContainer>
      <Navbar />
      <Footer/>
    </PageContainer>
  );
}
