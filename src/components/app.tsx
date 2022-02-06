import type { Settings, ImageInfo } from "../types";
import { useEffect, useState } from "react";
import { ImageUploader } from "./imageUploader";
import { Canvas } from "./canvas";
import { Controls } from "./controls";
import { defaultSettings } from "./config";

export function App() {
  const [imageInfo, setImageInfo] = useState<ImageInfo>();
  const [controls, setControls] = useState<Settings>();

  console.log(imageInfo);
  console.log(controls);

  useEffect(() => {
    if (imageInfo) {
      setControls({
        ...defaultSettings,
        imageWidth: imageInfo.width,
        imageHeight: imageInfo.height,
      });
    }
  }, [imageInfo]);

  return (
    <div className="app-container">
      {!imageInfo && <ImageUploader onImageUpload={setImageInfo} />}
      {imageInfo && controls && (
        <>
          <Controls initialValue={controls} onChange={setControls} />
          <Canvas settings={controls} bgImage={imageInfo} />
        </>
      )}
    </div>
  );
}
