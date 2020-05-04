/* eslint-disable @typescript-eslint/no-unused-vars */

const originalGUM = navigator.mediaDevices.getUserMedia.bind(
  navigator.mediaDevices
);

navigator.mediaDevices.getUserMedia = async (
  constraints: MediaStreamConstraints
) => {
  const canvas = document.createElement("canvas");
  canvas.width = 100;
  canvas.height = 100;

  const context = canvas.getContext("2d");
  context?.fillText("aaaa", 10, 10);

  return canvas.captureStream(10);
};

navigator.mediaDevices
  .getUserMedia({
    audio: true,
    video: true,
  })
  .then((stream) => {
    const video = document.createElement("video");
    video.srcObject = stream;
    video.play();
    document.body.appendChild(video);
  });
