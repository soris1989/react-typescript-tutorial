import { ChangeEvent, CSSProperties } from "react";
import Color from "../model/color";

interface Props {
  color: Color;
  onColorUpdated: (color: Color) => void;
}

function ColorBrowser(props: Props) {
  const { onColorUpdated } = props;
  const { red, green, blue } = props.color;

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    let newColor: Color = {
      ...props.color,
      [name]: value,
    };

    onColorUpdated(newColor);
  };

  return (
    <div>
      <input
        type="range"
        name="red"
        min="0"
        max="255"
        value={red}
        onChange={onChange}
      />
      <br />
      <input
        type="range"
        name="green"
        min="0"
        max="255"
        value={green}
        onChange={onChange}
      />
      <br />
      <input
        type="range"
        name="blue"
        min="0"
        max="255"
        value={blue}
        onChange={onChange}
      />
    </div>
  );
}

export default ColorBrowser;
