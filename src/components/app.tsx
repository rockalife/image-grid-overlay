import type { ReactElement } from "react";
import { useState } from "react";
import { ImageUploader } from "./imageUploader";
import { Canvas } from "./canvas";
import type { Config } from "../types";
import { Controls, defaultControls } from "./controls";

export function App() {
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [controls, setControls] = useState<Config>(defaultControls);

  console.log(imageUrl);
  console.log(controls);

  return (
    <div className="app-container">
      {!imageUrl && <ImageUploader onImageUpload={setImageUrl} />}
      {imageUrl && (
        <>
          <Controls onChange={setControls} />
          <Canvas config={controls} bgImageUrl={imageUrl} />
        </>
      )}
    </div>
  );
}
