import React, { useRef, useEffect, useState } from "react";

export default function ScratchToReveal({ width = 180, height = 180, minScratchPercentage = 60, children, revealContent }) {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);
  const [isScratching, setIsScratching] = useState(false);
  const [isComplete, setIsComplete] = useState(false);
  const [realWidth, setRealWidth] = useState(typeof width === 'number' ? width : 180);
  const [realHeight, setRealHeight] = useState(typeof height === 'number' ? height : 180);

  useEffect(() => {
    if (width === '100%' && containerRef.current) {
      setRealWidth(containerRef.current.offsetWidth);
    } else if (typeof width === 'number') {
      setRealWidth(width);
    }
    if (typeof height === 'number') {
      setRealHeight(height);
    }
  }, [width, height]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (canvas && ctx) {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
      gradient.addColorStop(0, "#A97CF8");
      gradient.addColorStop(0.5, "#F38CB8");
      gradient.addColorStop(1, "#FDCC92");
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
    }
  }, [realWidth, realHeight]);

  useEffect(() => {
    const move = (clientX, clientY) => {
      const canvas = canvasRef.current;
      const ctx = canvas?.getContext("2d");
      if (canvas && ctx && isScratching && !isComplete) {
        const rect = canvas.getBoundingClientRect();
        const x = clientX - rect.left;
        const y = clientY - rect.top;
        ctx.globalCompositeOperation = "destination-out";
        ctx.beginPath();
        ctx.arc(x, y, 24, 0, Math.PI * 2);
        ctx.fill();
        ctx.globalCompositeOperation = "source-over";
      }
    };
    const onMouseMove = (e) => move(e.clientX, e.clientY);
    const onTouchMove = (e) => {
      if (e.touches.length > 0) move(e.touches[0].clientX, e.touches[0].clientY);
    };
    const stop = () => {
      setIsScratching(false);
      checkCompletion();
    };
    if (isScratching) {
      window.addEventListener("mousemove", onMouseMove);
      window.addEventListener("touchmove", onTouchMove);
      window.addEventListener("mouseup", stop);
      window.addEventListener("touchend", stop);
    }
    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("touchmove", onTouchMove);
      window.removeEventListener("mouseup", stop);
      window.removeEventListener("touchend", stop);
    };
    // eslint-disable-next-line
  }, [isScratching, isComplete]);

  const checkCompletion = () => {
    if (isComplete) return;
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (canvas && ctx) {
      const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      const pixels = imageData.data;
      const totalPixels = pixels.length / 4;
      let clearPixels = 0;
      for (let i = 3; i < pixels.length; i += 4) {
        if (pixels[i] === 0) clearPixels++;
      }
      const percentage = (clearPixels / totalPixels) * 100;
      if (percentage >= minScratchPercentage) {
        setIsComplete(true);
        ctx.clearRect(0, 0, canvas.width, canvas.height);
      }
    }
  };

  return (
    <div ref={containerRef} style={{ position: "relative", width: typeof width === 'number' ? width : '100%', height: realHeight, borderRadius: 16, overflow: "hidden", background: "#fff", display: "flex", alignItems: "center", justifyContent: "center" }}>
      {!isComplete ? children : revealContent}
      {!isComplete && (
        <canvas
          ref={canvasRef}
          width={realWidth}
          height={realHeight}
          style={{ position: "absolute", left: 0, top: 0, width: "100%", height: "100%", cursor: "pointer", borderRadius: 16 }}
          onMouseDown={() => setIsScratching(true)}
          onTouchStart={() => setIsScratching(true)}
        />
      )}
    </div>
  );
} 