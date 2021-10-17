import type { ReactElement } from "react";
import type { ImageInfo } from "../types";
import { getImageSizes } from "../utils/getImageSizes";

interface ImageUploaderProps {
  onImageUpload: (image: ImageInfo) => void;
}

export function ImageUploader({
  onImageUpload,
}: ImageUploaderProps): ReactElement {
  return (
    <div className="image-uploader-wrapper">
      <div className="image-uploader-inner">
        <input
          type="file"
          accept="image/*"
          onChange={async (e) => {
            const blob: Blob = e.target.files?.[0];
            const bitmap = await createImageBitmap(blob);
            const { width, height } = await getImageSizes(
              URL.createObjectURL(blob)
            );

            if (blob) {
              onImageUpload({
                width,
                height,
                blob,
                bitmap,
              });
            }
          }}
        />
      </div>
    </div>
  );
}
