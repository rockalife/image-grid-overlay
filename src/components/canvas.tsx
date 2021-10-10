import { useEffect, useRef } from "react";
import { Config } from "../types";

interface CanvasProps {
  bgImageUrl: string;
  config: Config;
}

export function Canvas({ bgImageUrl, config }: CanvasProps) {
  const imgRef = useRef<HTMLImageElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    console.log(imgRef.current);

    canvasRef.current &&
      imgRef.current &&
      drawGrid(canvasRef.current, config, imgRef.current);
  }, [config]);

  return (
    <div className="canvas-wrapper">
      <canvas
        id="canvas"
        ref={canvasRef}
        width={config.imageWidth}
        height={config.imageHeight}
      />
      <img ref={imgRef} src={bgImageUrl} />
    </div>
  );
}

function drawGrid(
  canvas: HTMLCanvasElement,
  config: Config,
  bgImage: HTMLImageElement
): void {
  var ctx = canvas.getContext("2d");
  const w = canvas.width;
  const h = canvas.height;
  const sliceX = (w / config.patternWidth) * config.pageWidth;
  const sliceY = (h / config.patternHeight) * config.pageHeight;

  console.log(w, h);
  console.log(sliceX, sliceY);

  if (!ctx) {
    return;
  }

  ctx.clearRect(0, 0, w, h);

  // bg img
  ctx.drawImage(bgImage, 0, 0);

  // ctx.fillStyle = "blue";
  // ctx.fillRect(0, 0, w, h);

  // lines

  ctx.lineWidth = config.lineWidth;
  ctx.strokeStyle = config.textColor;

  for (let i = sliceX; i < w; i += sliceX) {
    ctx.beginPath();
    ctx.moveTo(i, 0);
    ctx.lineTo(i, h);
    // ctx.strokeStyle = config.textColor;
    ctx.stroke();
  }

  for (let j = sliceY; j < h; j += sliceY) {
    ctx.beginPath();
    ctx.moveTo(0, j);
    ctx.lineTo(w, j);
    ctx.stroke();
  }

  // text

  ctx.strokeStyle = config.textColor;
  ctx.fillStyle = config.textColor;
  ctx.font = `italic bold ${config.textSize}px Tahoma`;

  let count = 1;
  for (let j = 0; j < h; j += sliceY) {
    for (let i = 0; i < w; i += sliceX) {
      ctx.fillText(
        count.toString(),
        i + config.textOffsetX,
        j + config.textOffsetY
      );

      count++;
    }
  }
}
