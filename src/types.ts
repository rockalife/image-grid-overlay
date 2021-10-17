export interface Settings {
  imageWidth: number;
  imageHeight: number;
  patternWidth: number;
  patternHeight: number;
  pageWidth: number;
  pageHeight: number;
  textSize: number;
  textColor: string;
  textBorderWidth: number;
  textBorderColor: string;
  textOffsetX: number;
  textOffsetY: number;
  lineWidth: number;
}

export interface ImageInfo {
  width: number;
  height: number;
  blob: Blob;
  bitmap: ImageBitmap;
}
