const originalGUM = navigator.mediaDevices.getUserMedia;

navigator.mediaDevices.getUserMedia = async (constraints: MediaStreamConstraints) => {
  const stream = await originalGUM(constraints);
  return stream;
};
