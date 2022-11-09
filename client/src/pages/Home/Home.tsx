import { useState } from "react";

import PageContainer from "layouts/PageContainer/PageContainer";
import Navbar from "layouts/Navbar/Navbar";
import Footer from "layouts/Footer";
import UnitSection from "./components/UnitSection/UnitSection";

import styles from "./Home.module.css";
import ThreeColumn from "layouts/ThreeColumn/ThreeColumn";
import { BrowserRouter, Route, Routes } from "react-router-dom";

export default function Home() {
  const [progress, setProgress] = useState<number>(0);
  return (
    <PageContainer>
      <Navbar />
      <ThreeColumn>
        <UnitSection
          title="Unit 1"
          description="Learning the basics"
          progress={progress}
          level={0}
        />
        <UnitSection
          title="Unit 2"
          description="Ramping up the intensity"
          progress={progress - 6}
          level={6}
        />
        <UnitSection
          title="Unit 3"
          description="Showing the world who's boss"
          progress={progress - 12}
          level={12}
        />
      </ThreeColumn>

      <Footer />
    </PageContainer>
  );
}
