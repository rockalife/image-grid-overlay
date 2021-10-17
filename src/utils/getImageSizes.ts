interface ImageSize {
  width: number;
  height: number;
}

function isImageSize(obj: unknown): obj is ImageSize {
  if (typeof obj !== "object" || obj === null) {
    return false;
  }

  return (
    typeof (obj as Record<string, unknown>)["width"] === "number" &&
    typeof (obj as Record<string, unknown>)["height"] === "number"
  );
}

export async function getImageSizes(src: string): Promise<ImageSize> {
  return new Promise((resolve, reject) => {
    const image = new Image();
    image.onload = function () {
      if (isImageSize(this)) {
        resolve({ width: this.width, height: this.height });
      } else {
        reject(new Error("image does not have width & height"));
      }
    };
    image.onerror = reject;
    image.src = src;
  });
}
