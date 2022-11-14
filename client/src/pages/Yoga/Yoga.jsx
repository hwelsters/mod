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

const lotusPose = [
  {
    y: 295.96602396473804,
    x: 329.5348956268984,
    score: 0.55340176820755,
    name: "nose",
  },
  {
    y: 295.53968795341956,
    x: 324.9288076064781,
    score: 0.5057269334793091,
    name: "left_eye",
  },
  {
    y: 295.21344655176875,
    x: 326.1650026564495,
    score: 0.489814817905426,
    name: "right_eye",
  },
  {
    y: 284.5584087224606,
    x: 319.24691548289593,
    score: 0.5887364149093628,
    name: "left_ear",
  },
  {
    y: 285.37937725609265,
    x: 321.18142945012636,
    score: 0.44604647159576416,
    name: "right_ear",
  },
  {
    y: 273.4782213374182,
    x: 329.48317890747194,
    score: 0.4610101878643036,
    name: "left_shoulder",
  },
  {
    y: 273.25056599633473,
    x: 335.0406240200696,
    score: 0.40133538842201233,
    name: "right_shoulder",
  },
  {
    y: 311.5751683651602,
    x: 350.23332202462666,
    score: 0.23678258061408997,
    name: "left_elbow",
  },
  {
    y: 309.88765184723957,
    x: 354.45802943123675,
    score: 0.36467280983924866,
    name: "right_elbow",
  },
  {
    y: 348.9826779393559,
    x: 359.68228520206355,
    score: 0.20651011168956757,
    name: "left_wrist",
  },
  {
    y: 344.6382755175741,
    x: 364.6475158279152,
    score: 0.2162746787071228,
    name: "right_wrist",
  },
  {
    y: 218.18034464381142,
    x: 376.2128761295527,
    score: 0.7703621983528137,
    name: "left_hip",
  },
  {
    y: 217.32892990694688,
    x: 378.55752026937967,
    score: 0.7643240690231323,
    name: "right_hip",
  },
  {
    y: 288.378251840506,
    x: 365.4677975300942,
    score: 0.5902076363563538,
    name: "left_knee",
  },
  {
    y: 288.39122060629325,
    x: 367.5549432318297,
    score: 0.721503734588623,
    name: "right_knee",
  },
  {
    y: 353.52498176090006,
    x: 369.87398856548225,
    score: 0.6841822862625122,
    name: "left_ankle",
  },
  {
    y: 348.4844045185038,
    x: 371.72301556413447,
    score: 0.6417542099952698,
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
      drawKeypoints(pose.keypoints, 0.15, ctx);
      drawSkeleton(pose.keypoints, 0.15, ctx, imageScaleFactor, findSimilarity(lotusPose, pose.keypoints, 0.4));
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
