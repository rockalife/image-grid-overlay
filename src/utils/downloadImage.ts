export function downloadImage(): void {
  const canvas = document.querySelector<HTMLCanvasElement>("#canvas");

  if (!canvas) {
    return;
  }

  const downloadLink = document.createElement("a");
  downloadLink.href = canvas.toDataURL("image/png");
  downloadLink.download = "generated_image.png";

  downloadLink.click();
}
