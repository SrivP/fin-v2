import { Dimensions, PixelRatio, Platform } from "react-native";

// Get current device dimensions
const { width: SCREEN_WIDTH } = Dimensions.get("window");

// The width of the design canvas (e.g., standard iPhone width used in Figma)
// 375 is standard for iPhone 8/SE/11 Pro. 390 is iPhone 13/14.
const SCALE_BASE_WIDTH = 375;

export function normalize(size: number) {
  const scale = SCREEN_WIDTH / SCALE_BASE_WIDTH;
  const newSize = size * scale;

  if (Platform.OS === "ios") {
    return Math.round(PixelRatio.roundToNearestPixel(newSize));
  } else {
    // Android sometimes needs slightly less scaling to look right
    return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 1;
  }
}
