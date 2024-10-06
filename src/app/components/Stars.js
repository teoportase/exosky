"use client"; // You need to ensure that this component runs on the client side.

import { useEffect, useRef, useState } from "react";
import { useSearchParams } from "next/navigation"; // Import useSearchParams

export default function Stars() {
  const [isInteractive, setIsInteractive] = useState(true);
  const [canvasSize, setCanvasSize] = useState({ width: 0, height: 0 });
  const canvasRef = useRef(null);
  const offscreenCanvasRef = useRef(null);
  const ctxRef = useRef(null);
  const offscreenCtxRef = useRef(null);
  const isDrawingRef = useRef(false);
  const startXRef = useRef(0);
  const startYRef = useRef(0);

  const searchParams = useSearchParams(); // Initialize useSearchParams
  const hostname = searchParams.get("hostname"); // Access hostname from the query

  useEffect(() => {
    if (hostname) {
      // Do something with the hostname, e.g., log it
      console.log("Hostname:", hostname);
    }

    const script = document.createElement("script");
    script.src =
      "https://aladin.cds.unistra.fr/AladinLite/api/v3/latest/aladin.js";
    script.onload = () => {
      const A = window.A;
      A.init.then(() => {
        const aladin = A.aladin("#aladin-lite-div", {
          survey: "P/DSS2/color",
          fov: 1,
          projection: "STG",
          showProjectionControl: false,
          showFullscreenControl: false,
          showLayersControl: false,
          showFrame: false,
          target: hostname || "12 20 42.91 +17 47 35.71", // Use hostname or a default target
        });
      });
    };
    document.body.appendChild(script);

    if (typeof window !== "undefined") {
      setCanvasSize({
        width: window.innerWidth,
        height: window.innerHeight * 0.8,
      });
    }

    const canvas = canvasRef.current;
    if (canvas) {
      ctxRef.current = canvas.getContext("2d");
    }

    const offscreenCanvas = document.createElement("canvas");
    offscreenCanvas.width = canvasSize.width;
    offscreenCanvas.height = canvasSize.height;
    offscreenCanvasRef.current = offscreenCanvas;
    offscreenCtxRef.current = offscreenCanvas.getContext("2d");
  }, [canvasSize.width, canvasSize.height, hostname]); // Include hostname in the dependency array

  const toggleInteractive = () => {
    setIsInteractive(!isInteractive);
  };

  const startDrawing = (e) => {
    if (!isInteractive) {
      isDrawingRef.current = true;
      const rect = canvasRef.current.getBoundingClientRect();
      startXRef.current = e.clientX - rect.left;
      startYRef.current = e.clientY - rect.top;
    }
  };

  const drawLine = (e) => {
    if (isDrawingRef.current) {
      const ctx = ctxRef.current;
      const offscreenCtx = offscreenCtxRef.current;
      const rect = canvasRef.current.getBoundingClientRect();
      const endX = e.clientX - rect.left;
      const endY = e.clientY - rect.top;

      ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
      ctx.drawImage(offscreenCanvasRef.current, 0, 0);

      ctx.beginPath();
      ctx.moveTo(startXRef.current, startYRef.current);
      ctx.lineTo(endX, endY);
      ctx.strokeStyle = "white";
      ctx.lineWidth = 0.5;
      ctx.stroke();
    }
  };

  const stopDrawing = () => {
    if (isDrawingRef.current) {
      const ctx = ctxRef.current;
      const offscreenCtx = offscreenCtxRef.current;

      offscreenCtx.drawImage(canvasRef.current, 0, 0);

      isDrawingRef.current = false;
    }
  };

  return (
    <div>
      <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
      >
        <p> View from Planet</p>
        <div
          id="aladin-lite-div"
          style={{
            width: "100%",
            height: "80%",
            pointerEvents: isInteractive ? "auto" : "none",
          }}
        ></div>

        <canvas
          ref={canvasRef}
          width={canvasSize.width}
          height={canvasSize.height}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            pointerEvents: isInteractive ? "none" : "auto",
            border: isInteractive ? "none" : "1px solid black",
          }}
          onMouseDown={startDrawing}
          onMouseMove={drawLine}
          onMouseUp={stopDrawing}
          onMouseLeave={stopDrawing}
        />

        <div className="flex">
          <p>
            Planet X orbits around the X star, which is the star you started centered on. <br></br>
            It is more than X lightyears away from Earth!
          </p>

          <button
            onClick={toggleInteractive}
            style={{
              marginTop: "20px",
              padding: "10px 20px",
              cursor: "pointer",
            }}
          >
            {isInteractive ? "Start Drawing" : "Stop Drawing"}
          </button>

          <p>
            Size: X times smaller/larger than Earth <br></br>
            Year length: X Earth days
          </p>
          
        </div>
      </div>
    </div>
  );
}
