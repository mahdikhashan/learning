import React, { useEffect, useRef } from "react";
import { createRoot } from "react-dom/client";

function CircleCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvasElem = canvasRef.current;
    const ctx = canvasElem.getContext("2d");

    let initialLeft = window.screenLeft + canvasElem.offsetLeft;
    let initialTop = window.screenTop + canvasElem.offsetTop;
    let width = (canvasElem.width = window.screen.width);
    let height = (canvasElem.height = window.screen.height);

    function degToRad(degrees) {
      return (degrees * Math.PI) / 180;
    }

    function positionElem() {
      let newLeft = window.screenLeft + canvasElem.offsetLeft;
      let newTop = window.screenTop + canvasElem.offsetTop;

      let leftUpdate = initialLeft - newLeft;
      let topUpdate = initialTop - newTop;

      ctx.fillStyle = "rgb(0, 0, 0)";
      ctx.fillRect(0, 0, window.screen.width, window.screen.height);
      ctx.fillStyle = "rgb(0, 0, 255)";
      ctx.beginPath();
      ctx.arc(
        leftUpdate + width / 2,
        topUpdate + height / 2 + 35,
        200,
        degToRad(0),
        degToRad(360),
        false,
      );
      ctx.fill();

      window.requestAnimationFrame(positionElem);
    }

    window.requestAnimationFrame(positionElem);
  }, []);

  return <canvas ref={canvasRef} />;
}

const container = document.getElementById("app");
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<CircleCanvas />);
