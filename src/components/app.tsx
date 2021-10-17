import type { ReactElement } from "react";
import { useState } from "react";
import { ImageUploader } from "./imageUploader";
import { Canvas } from "./canvas";
import type { Settings, ImageInfo } from "../types";
import { Controls, defaultControls } from "./controls";

export function App() {
  const [imageInfo, setImageInfo] = useState<ImageInfo | null>(null);
  const [controls, setControls] = useState<Settings>(defaultControls);

  console.log(imageInfo);
  console.log(controls);

  return (
    <div className="app-container">
      {!imageInfo && <ImageUploader onImageUpload={setImageInfo} />}
      {imageInfo && (
        <>
          <Controls onChange={setControls} />
          <Canvas settings={controls} bgImage={imageInfo} />
        </>
      )}
    </div>
  );
}
