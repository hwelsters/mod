import { useRef, useState, useEffect } from "react";

import * as tf from "@tensorflow/tfjs";
import * as posenet from "@tensorflow-models/posenet";

import Webcam from "react-webcam";

import Footer from "layouts/Footer";
import Navbar from "layouts/Navbar/Navbar";
import PageContainer from "layouts/PageContainer/PageContainer";

import styles from "./Yoga.module.css";
import { drawKeypoints, drawSkeleton } from "utils/drawUtils";
import useWindowDimensions from "hooks/useWindowDimensions";

export default function Yoga() {
  const { width, height } = { width: 640, height: 480 };

  const webcamRef = useRef(null);
  const canvasRef = useRef(null);

  const imageScaleFactor = 0.5;
  const flipHorizontal = false;

  const runPosenet = async () => {
    const net = await posenet.load({
      architecture: "MobileNetV1",
      outputStride: 16,
      multiplier: 0.75,
      quantBytes: 2,
    });

    if (net != null) {
      setInterval(() => {
        detect(net);
      }, 100);
    }
  };

  const detect = async (net) => {
    if (
      typeof webcamRef.current !== "undefined" &&
      webcamRef.current != null &&
      webcamRef.current.video.readyState === 4
    ) {
      const video = webcamRef.current.video;
      video.width = width;
      video.height = height;

      const pose = await net.estimateSinglePose(
        video,
        imageScaleFactor,
        flipHorizontal
      );
      console.log(video);
      console.log(pose);

      drawCanvas(pose, video, width, height, canvasRef);
    }
  };

  const drawCanvas = (pose, video, videoWidth, videoHeight, canvas) => {
    const ctx = canvas.current.getContext("2d");
    canvas.current.width = videoWidth;
    canvas.current.height = videoHeight;

    drawKeypoints(pose["keypoints"], 0.5, ctx);
    drawSkeleton(pose["keypoints"], 0.5, ctx);
  };

  runPosenet();
  return (
    <PageContainer>
      <Navbar />
      <div className={styles.container}>
        <div className={styles.yoga}>
          <Webcam className={styles.webcam} ref={webcamRef} audio={false} />
          <canvas className={styles.overlay} ref={canvasRef} />
        </div>
      </div>
      <Footer />
    </PageContainer>
  );
}
