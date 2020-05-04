const originalGUM = navigator.mediaDevices.getUserMedia.bind(navigator.mediaDevices);

navigator.mediaDevices.getUserMedia = async (constraints: MediaStreamConstraints) => {
  const stream = await originalGUM(constraints);
  return stream;
};

navigator.mediaDevices.getUserMedia({ audio: true, video: true });