import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
const AddIcon = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    width={28}
    height={28}
    {...props}
  >
    <Path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2.5}
      color={"black"}
      d="M12 5v14m-7-7h14"
    />
  </Svg>
);
export default AddIcon;
