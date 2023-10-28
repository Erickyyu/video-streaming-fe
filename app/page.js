"use client";

import React from "react";
import ReactPlayer from "react-player";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24">
      <ReactPlayer
        url="http://localhost:8080/blob/30s.mp4"
        controls={true}
        preload="auto"
        
      />
      <ReactPlayer
        url="http://localhost:8080/videos/30s.mp4"
        controls={true}
        preload="auto"
        
      />
    </div>
  );
}
