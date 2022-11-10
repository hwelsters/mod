import { useRef, useState, useEffect } from "react";

import * as tf from "@tensorflow/tfjs";
import * as posenet from "@tensorflow-models/posenet";
import * as poseDetection from "@tensorflow-models/pose-detection";

import Webcam from "react-webcam";

import Footer from "layouts/Footer";
import Navbar from "layouts/Navbar/Navbar";
import PageContainer from "layouts/PageContainer/PageContainer";

import styles from "./Yoga.module.css";
import { drawKeypoints, drawSkeleton } from "utils/drawUtils";
import findSimilarity from "utils/poseComparison";
import useWindowDimensions from "hooks/useWindowDimensions";

const treePose = [
  {
    y: 178.65957016687418,
    x: 428.6457013459634,
    score: 0.6652052402496338,
    name: "nose",
  },
  {
    y: 175.1170360797454,
    x: 433.5183331232764,
    score: 0.8173929452896118,
    name: "left_eye",
  },
  {
    y: 174.83386553492164,
    x: 425.3249113046538,
    score: 0.6243674755096436,
    name: "right_eye",
  },
  {
    y: 178.7111489282296,
    x: 438.86147964351414,
    score: 0.6889460682868958,
    name: "left_ear",
  },
  {
    y: 178.08067265037553,
    x: 419.95614889352896,
    score: 0.5583335161209106,
    name: "right_ear",
  },
  {
    y: 204.8199171535789,
    x: 446.1385599692136,
    score: 0.6802425980567932,
    name: "left_shoulder",
  },
  {
    y: 202.66342341249342,
    x: 411.5254126540512,
    score: 0.848866879940033,
    name: "right_shoulder",
  },
  {
    y: 232.4939877165803,
    x: 463.4481323710542,
    score: 0.35687196254730225,
    name: "left_elbow",
  },
  {
    y: 226.74390339092318,
    x: 395.57430101718666,
    score: 0.4290899634361267,
    name: "right_elbow",
  },
  {
    y: 219.53835394681641,
    x: 442.76498465799114,
    score: 0.38173896074295044,
    name: "left_wrist",
  },
  {
    y: 223.29812898728824,
    x: 409.06767060939114,
    score: 0.3781452476978302,
    name: "right_wrist",
  },
  {
    y: 271.52788273830265,
    x: 433.7622117120982,
    score: 0.7857885360717773,
    name: "left_hip",
  },
  {
    y: 268.77940600595906,
    x: 410.9544690818154,
    score: 0.9023330807685852,
    name: "right_hip",
  },
  {
    y: 327.04805361014996,
    x: 424.1226638350072,
    score: 0.7399826049804688,
    name: "left_knee",
  },
  {
    y: 307.36619606052307,
    x: 371.3890323558353,
    score: 0.8608506321907043,
    name: "right_knee",
  },
  {
    y: 381.62645758649654,
    x: 414.23236363508755,
    score: 0.8983475565910339,
    name: "left_ankle",
  },
  {
    y: 290.3501627931979,
    x: 407.4306725112271,
    score: 0.3023425340652466,
    name: "right_ankle",
  },
];

export default function Yoga() {
  const [style, setStyle] = useState(styles.overlay_loading);
  const { width, height } = { width: 640, height: 480 };

  const [refPose, setRefPose] = useState(null);

  const webcamRef = useRef(null);
  const canvasRef = useRef(null);

  const imageScaleFactor = 1;
  const flipHorizontal = false;

  const runPosenet = async () => {
    const detector = await poseDetection.createDetector(
      poseDetection.SupportedModels.MoveNet
    );

    setStyle("");

    setInterval(() => {
      detect(null, detector);
    }, 100);
  };

  const detect = async (net, detector) => {
    if (
      typeof webcamRef.current !== "undefined" &&
      webcamRef.current != null &&
      webcamRef.current.video.readyState === 4
    ) {
      const video = webcamRef.current.video;

      const pose = await detector.estimatePoses(video, {});
      setRefPose(pose[0]);

      drawCanvas(pose[0], video, width, height, canvasRef);
    }
  };

  const drawCanvas = (pose, video, videoWidth, videoHeight, canvas) => {
    const ctx = canvas.current.getContext("2d");
    canvas.current.width = videoWidth;
    canvas.current.height = videoHeight;

    if (pose && pose.keypoints) {
      drawKeypoints(pose.keypoints, 0.3, ctx);
      drawSkeleton(pose.keypoints, 0.3, ctx, imageScaleFactor, findSimilarity(treePose, pose.keypoints, 0.5));
    }

  };

  runPosenet();
  return (
    <PageContainer>
      <Navbar />
      <div className={styles.container}>
        <div className={styles.yoga}>
          <Webcam className={styles.webcam} ref={webcamRef} audio={false} />
          <canvas className={`${styles.overlay} ${style}`} ref={canvasRef} />
        </div>
      </div>
      <button onClick={() => console.log(refPose)}>SNIP</button>
      <Footer />
    </PageContainer>
  );
}
