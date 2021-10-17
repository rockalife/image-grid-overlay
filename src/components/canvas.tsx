import { useEffect, useRef } from "react";
import { Settings, ImageInfo } from "../types";

interface CanvasProps {
  bgImage: ImageInfo;
  settings: Settings;
}

export function Canvas({ bgImage, settings }: CanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    canvasRef.current && drawGrid(canvasRef.current, settings, bgImage.bitmap);
  }, [settings]);

  return (
    <div className="canvas-wrapper">
      <canvas
        id="canvas"
        ref={canvasRef}
        width={settings.imageWidth}
        height={settings.imageHeight}
      />
    </div>
  );
}

async function drawGrid(
  canvas: HTMLCanvasElement,
  settings: Settings,
  bgImageBitmap: ImageBitmap
): Promise<void> {
  var ctx = canvas.getContext("2d");
  const w = canvas.width;
  const h = canvas.height;
  const sliceX = (w / settings.patternWidth) * settings.pageWidth;
  const sliceY = (h / settings.patternHeight) * settings.pageHeight;

  console.log(w, h);
  console.log(sliceX, sliceY);

  if (!ctx) {
    return;
  }

  ctx.clearRect(0, 0, w, h);

  // bg img

  ctx.drawImage(bgImageBitmap, 0, 0);

  // lines

  ctx.lineWidth = settings.lineWidth;
  ctx.strokeStyle = settings.textColor;
  for (let i = sliceX; i < w; i += sliceX) {
    ctx.beginPath();
    ctx.moveTo(i, 0);
    ctx.lineTo(i, h);
    ctx.stroke();
  }

  for (let j = sliceY; j < h; j += sliceY) {
    ctx.beginPath();
    ctx.moveTo(0, j);
    ctx.lineTo(w, j);
    ctx.stroke();
  }

  // text

  ctx.lineWidth = settings.textBorderWidth;
  ctx.strokeStyle = settings.textBorderColor;
  ctx.fillStyle = settings.textColor;
  ctx.font = `italic bold ${settings.textSize}px Tahoma`;

  let count = 1;
  for (let j = 0; j < h; j += sliceY) {
    for (let i = 0; i < w; i += sliceX) {
      settings.textBorderWidth &&
        ctx.strokeText(
          count.toString(),
          i + settings.textOffsetX,
          j + settings.textOffsetY
        );
      ctx.fillText(
        count.toString(),
        i + settings.textOffsetX,
        j + settings.textOffsetY
      );

      count++;
    }
  }
}
