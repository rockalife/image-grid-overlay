import { useRef } from "react";
import type { Settings } from "../types";
import { Wrapper } from "./layout/wrapper";
import { Stack } from "./layout/stack";
import { downloadImage } from "../utils/downloadImage";

interface ControlsProps {
  initialValue: Settings;
  onChange: (controls: Settings) => void;
}

export function Controls({ initialValue, onChange }: ControlsProps) {
  const imageWidthRef = useRef<HTMLInputElement>(null);
  const imageHeightRef = useRef<HTMLInputElement>(null);
  const patternWidthRef = useRef<HTMLInputElement>(null);
  const patternHeightRef = useRef<HTMLInputElement>(null);
  const pageWidthRef = useRef<HTMLInputElement>(null);
  const pageHeightRef = useRef<HTMLInputElement>(null);
  const lineWidthRef = useRef<HTMLInputElement>(null);
  const textSizeRef = useRef<HTMLInputElement>(null);
  const textColorRef = useRef<HTMLInputElement>(null);
  const textBorderWidthRef = useRef<HTMLInputElement>(null);
  const textBorderColorRef = useRef<HTMLInputElement>(null);
  const textOffsetXRef = useRef<HTMLInputElement>(null);
  const textOffsetYRef = useRef<HTMLInputElement>(null);

  const handleChange = () => {
    const data: Settings = {
      imageWidth: Number(imageWidthRef.current?.value),
      imageHeight: Number(imageHeightRef.current?.value),
      patternWidth: Number(patternWidthRef.current?.value),
      patternHeight: Number(patternHeightRef.current?.value),
      pageWidth: Number(pageWidthRef.current?.value),
      pageHeight: Number(pageHeightRef.current?.value),
      textSize: Number(textSizeRef.current?.value),
      textColor: textColorRef.current?.value ?? initialValue.textColor,
      textBorderWidth: Number(textBorderWidthRef.current?.value),
      textBorderColor:
        textBorderColorRef.current?.value ?? initialValue.textBorderColor,
      textOffsetX: Number(textOffsetXRef.current?.value),
      textOffsetY: Number(textOffsetYRef.current?.value),
      lineWidth: Number(lineWidthRef.current?.value),
    };

    onChange?.(data);
  };

  return (
    <div className="controls">
      <Wrapper>
        <Stack type="vertical" gap={25}>
          <Stack type="horizontal" gap={100}>
            <Stack type="horizontal" gap={30}>
              <label className="control">
                <span>Image width</span>
                <input
                  ref={imageWidthRef}
                  type="number"
                  min="0"
                  defaultValue={initialValue.imageWidth}
                  onChange={handleChange}
                />
              </label>
              <label className="control">
                <span>Image height</span>
                <input
                  ref={imageHeightRef}
                  type="number"
                  max="0"
                  defaultValue={initialValue.imageHeight}
                  onChange={handleChange}
                />
              </label>
            </Stack>
            <Stack type="horizontal" gap={30}>
              <label className="control">
                <span>Pattern width</span>
                <input
                  ref={patternWidthRef}
                  type="number"
                  min="0"
                  defaultValue={initialValue.patternWidth}
                  onChange={handleChange}
                />
              </label>
              <label className="control">
                <span>Pattern height</span>
                <input
                  ref={patternHeightRef}
                  type="number"
                  max="0"
                  defaultValue={initialValue.patternHeight}
                  onChange={handleChange}
                />
              </label>
            </Stack>
            <Stack type="horizontal" gap={30}>
              <label className="control">
                <span>Page width</span>
                <input
                  ref={pageWidthRef}
                  type="number"
                  min="0"
                  defaultValue={initialValue.pageWidth}
                  onChange={handleChange}
                />
              </label>
              <label className="control">
                <span>Page height</span>
                <input
                  ref={pageHeightRef}
                  type="number"
                  max="0"
                  defaultValue={initialValue.pageHeight}
                  onChange={handleChange}
                />
              </label>
            </Stack>
          </Stack>
          <Stack type="horizontal" gap={100}>
            <Stack type="horizontal" gap={30}>
              <label className="control">
                <span>Text size</span>
                <input
                  ref={textSizeRef}
                  type="number"
                  min="0"
                  defaultValue={initialValue.textSize}
                  onChange={handleChange}
                />
              </label>
              <label className="control">
                <span>Text color</span>
                <input
                  ref={textColorRef}
                  type="color"
                  defaultValue={initialValue.textColor}
                  onChange={handleChange}
                />
              </label>
            </Stack>
            <Stack type="horizontal" gap={30}>
              <label className="control">
                <span>Text border width</span>
                <input
                  ref={textBorderWidthRef}
                  type="number"
                  min="0"
                  defaultValue={initialValue.textBorderWidth}
                  onChange={handleChange}
                />
              </label>
              <label className="control">
                <span>Text border color</span>
                <input
                  ref={textBorderColorRef}
                  type="color"
                  defaultValue={initialValue.textBorderColor}
                  onChange={handleChange}
                />
              </label>
            </Stack>
            <Stack type="horizontal" gap={30}>
              <label className="control">
                <span>Text offset X</span>
                <input
                  ref={textOffsetXRef}
                  type="number"
                  min="0"
                  defaultValue={initialValue.textOffsetX}
                  onChange={handleChange}
                />
              </label>
              <label className="control">
                <span>Text offset Y</span>
                <input
                  ref={textOffsetYRef}
                  type="number"
                  min="0"
                  defaultValue={initialValue.textOffsetY}
                  onChange={handleChange}
                />
              </label>
            </Stack>
            <Stack type="horizontal" gap={30}>
              <label className="control">
                <span>Line width</span>
                <input
                  ref={lineWidthRef}
                  type="number"
                  min="1"
                  max="50"
                  defaultValue={initialValue.lineWidth}
                  onChange={handleChange}
                />
              </label>
            </Stack>
          </Stack>
          <div>
            <button onClick={() => downloadImage()}>Download ↓</button>
          </div>
        </Stack>
      </Wrapper>
    </div>
  );
}
