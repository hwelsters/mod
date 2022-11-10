import { apiGet } from "services/api";

export const usePoses = () => {
  const getPose = (poseId: number) => {
    apiGet(`api/poses/${poseId}`);
  };

  return getPose;
};
