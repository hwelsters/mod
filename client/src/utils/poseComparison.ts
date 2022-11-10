// I'm using ANY a whole lot here
const findAngle = (
  position1: any,
  position2: any,
  pivot: any
) => {
  const vector1 = { x: position1.x - pivot.x, y: position1.y - pivot.y };
  const vector2 = { x: position2.x - pivot.x, y: position2.y - pivot.y };

  const dotProduct = vector1.x * vector2.x + vector1.y * vector2.y;
  const magnitude1 = Math.sqrt(Math.pow(vector1.x, 2) + Math.pow(vector1.y, 2));
  const magnitude2 = Math.sqrt(Math.pow(vector2.x, 2) + Math.pow(vector2.y, 2));

  const cosTheta = dotProduct / (magnitude1 * magnitude2);
  const theta = Math.acos(cosTheta);

  return theta;
};

const findSimilarity = (keypoints1 : any, keypoints2: any, maxAngleDifference : number) => {
  const angles1 = getAllJointAngles(keypoints1);
  const angles2 = getAllJointAngles(keypoints2);

  for (let i = 0; i < angles1.length; i++) {
    if (Math.abs(angles1[i] - angles2[i]) > maxAngleDifference) return false;
  }
  return true;
}

const getAllJointAngles = (keypoints : any) => {
  const angles = [];
  console.log(keypoints);
  angles.push(findAngle(keypoints[10], keypoints[6], keypoints[8]))
  angles.push(findAngle(keypoints[8], keypoints[5], keypoints[6]))
  angles.push(findAngle(keypoints[5], keypoints[9], keypoints[7]))
  angles.push(findAngle(keypoints[7], keypoints[6], keypoints[5]))
  angles.push(findAngle(keypoints[14], keypoints[6], keypoints[12]))
  angles.push(findAngle(keypoints[5], keypoints[13], keypoints[11]))
  angles.push(findAngle(keypoints[12], keypoints[16], keypoints[14]))
  angles.push(findAngle(keypoints[11], keypoints[15], keypoints[13]))
  return angles;
}

export default findSimilarity;