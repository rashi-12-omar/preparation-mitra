import { useEffect, useRef, useState } from 'react';
import io from 'socket.io-client';

const socket = io('http://localhost:5000');

export const useWebRTC = () => {
  const [stream, setStream] = useState(null);
  const myVideo = useRef();
  const userVideo = useRef();
  const peerConnection = useRef();

  useEffect(() => {
    const initMedia = async () => {
      const currentStream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
      setStream(currentStream);
      if (myVideo.current) myVideo.current.srcObject = currentStream;
    };

    initMedia();

    return () => {
      stream?.getTracks().forEach(track => track.stop());
    };
  }, []);

  // Function to initiate the call logic would go here
  return { myVideo, userVideo, stream };
};
