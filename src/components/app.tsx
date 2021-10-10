import type { ReactElement } from "react";
import { useState } from "react";
import { Canvas } from "./canvas";
import type { Config } from "../types";
import { Controls, defaultControls } from "./controls";

export function App() {
  const [clicked, setClicked] = useState(true);
  const [controls, setControls] = useState<Config>(defaultControls);

  console.log(controls);

  return (
    <div className="app-container">
      {clicked && (
        <>
          <Controls onChange={setControls} />
          <Canvas config={controls} />
        </>
      )}
      {!clicked && (
        <div className="initial-upload">
          <button onClick={() => setClicked(true)}>upload</button>
        </div>
      )}
    </div>
  );
}
