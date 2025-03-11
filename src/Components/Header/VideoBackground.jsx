import React, { useRef, useState, useEffect } from 'react';
import BannerVideo from "../../Images/VirtualRealityVideo.mp4";

// Create a Context to manage the global mute state of all videos
const MuteContext = React.createContext();

const VideoBackground = ({ setGlobalMuteState }) => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true); // State to control volume (muted or unmuted)

  // Toggle Play/Pause
  const toggleVideo = () => {
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  // Toggle Mute/Unmute
  const toggleVolume = () => {
    if (videoRef.current) {
      const newMutedState = !videoRef.current.muted;
      videoRef.current.muted = newMutedState;
      setIsMuted(newMutedState); // Update the mute state locally
      setGlobalMuteState(newMutedState); // Propagate the mute state to the parent
    }
  };

  // Ensures video plays with sound when unmuted, and other videos are muted
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = isMuted; // Control mute based on state
    }
  }, [isMuted]);

  return (
    <div className="video-container">
      <video ref={videoRef} autoPlay muted={isMuted} loop id="video-bg" className="video-bg">
        <source src={BannerVideo} type="video/mp4" />
      </video>

      {/* Play/Pause Button */}
      <button className="video-toggle-btn" onClick={toggleVideo}>
        {isPlaying ? 'Pause' : 'Play'}
      </button>
      
      {/* Volume Toggle Button */}
      <button className="video-volume-btn" onClick={toggleVolume}>
        {isMuted ? 'Unmute' : 'Mute'}
      </button>
  
      {/* Overlay Banner */}
      <div className="video-banner">
        <h1>Feel The Power of Virtual Reality</h1>
      </div>
    </div>
  );
};

// Parent Component that manages global mute state
const VideoContainer = () => {
  const [globalMuteState, setGlobalMuteState] = useState(true); // Global mute state

  return (
    <MuteContext.Provider value={{ globalMuteState, setGlobalMuteState }}>
      <VideoBackground setGlobalMuteState={setGlobalMuteState} />

    </MuteContext.Provider>
  );
};

export default VideoContainer;
