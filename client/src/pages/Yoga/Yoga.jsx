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
import useWindowDimensions from "hooks/useWindowDimensions";

export default function Yoga() {
  const [style, setStyle] = useState(styles.overlay_loading);
  const { width, height } = { width: 640, height: 480 };

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

      drawCanvas(pose[0], video, width, height, canvasRef);
    }
  };

  const drawCanvas = (pose, video, videoWidth, videoHeight, canvas) => {
    const ctx = canvas.current.getContext("2d");
    canvas.current.width = videoWidth;
    canvas.current.height = videoHeight;

    drawKeypoints(pose.keypoints, 0.3, ctx);
    drawSkeleton(pose.keypoints, 0.3, ctx);
  };

  runPosenet();
  return (
    <PageContainer>
      <Navbar />
      <div className={styles.container}>
        <div className={styles.yoga}>
          <Webcam
            className={styles.webcam}
            ref={webcamRef}
            audio={false}
          />
          <canvas className={`${styles.overlay} ${style}`} ref={canvasRef} />
        </div>
      </div>
      <Footer />
    </PageContainer>
  );
}
