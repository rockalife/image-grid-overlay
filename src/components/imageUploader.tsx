import type { ReactElement } from "react";

interface ImageUploaderProps {
  onImageUpload: (url: string) => void;
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
          onChange={(e) => {
            const image = e.target.files?.[0];

            if (image) {
              onImageUpload(URL.createObjectURL(image));
            }
          }}
        />
      </div>
    </div>
  );
}
