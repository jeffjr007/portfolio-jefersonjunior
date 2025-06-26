import React from "react";

export default function Safari({ videoSrc, ...props }) {
  return (
    <video
      src={videoSrc}
      controls
      muted
      style={{ width: "100%", borderRadius: 8, background: "#000" }}
      {...props}
    />
  );
} 