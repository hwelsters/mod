import ThreeColumn from "layouts/ThreeColumn/ThreeColumn";
import UnitSection from "pages/Home/components/UnitSection/UnitSection";
import React from "react";

export default function Learn({progress} : {progress: number}) {
  return (
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
  );
}
