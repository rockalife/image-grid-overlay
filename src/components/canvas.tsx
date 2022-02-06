import { useEffect, useRef } from "react";
import { Settings, ImageInfo } from "../types";
import { pageStitchesOverlay } from "./config";

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
  const pxPerStitchW = w / settings.patternWidth;
  const pxPerStitchH = h / settings.patternHeight;
  const pageStitchesW = settings.pageWidth;
  const pageStitchesH = settings.pageHeight;

  if (!ctx) {
    return;
  }

  ctx.clearRect(0, 0, w, h);

  // bg img

  ctx.drawImage(bgImageBitmap, 0, 0);

  // lines

  ctx.lineWidth = settings.lineWidth;
  ctx.strokeStyle = settings.textColor;
  for (
    let i = pageStitchesW * pxPerStitchW;
    i < w;
    i += (pageStitchesW - pageStitchesOverlay) * pxPerStitchW
  ) {
    ctx.beginPath();
    ctx.moveTo(i, 0);
    ctx.lineTo(i, h);
    ctx.stroke();
  }

  for (
    let j = pageStitchesH * pxPerStitchH;
    j < h;
    j += (pageStitchesH - pageStitchesOverlay) * pxPerStitchH
  ) {
    ctx.beginPath();
    ctx.moveTo(0, j);
    ctx.lineTo(w, j);
    ctx.stroke();
  }

  // text

  ctx.lineWidth = settings.textBorderWidth;
  ctx.strokeStyle = settings.textBorderColor;
  ctx.fillStyle = settings.textColor;
  ctx.font = `bold ${settings.textSize}px Tahoma`;

  let count = 1;
  for (
    let j = 0;
    j < h;
    j += (pageStitchesH - (j === 0 ? 0 : pageStitchesOverlay)) * pxPerStitchH
  ) {
    for (
      let i = 0;
      i < w;
      i += (pageStitchesW - (i === 0 ? 0 : pageStitchesOverlay)) * pxPerStitchW
    ) {
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
