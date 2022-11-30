import { CSSProperties } from "react";
import Color from "../model/color";

interface Props {
  color: Color;
}

function ColorBrowser(props: Props) {
  const { red, green, blue } = props.color;

  const divStyle: CSSProperties = {
    width: "11rem",
    height: "7rem",
    backgroundColor: `rgb(${red},${green},${blue})`,
  };

  return <div style={divStyle}></div>;
}

export default ColorBrowser;
