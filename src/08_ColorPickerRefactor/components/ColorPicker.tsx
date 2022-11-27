import Color from "../model/color";
import ColorSlider from "./ColorSlider";

interface Props {
  color: Color;
  onColorUpdated: (color: Color) => void;
}

function ColorBrowser(props: Props) {
  const { onColorUpdated } = props;
  const { red, green, blue } = props.color;

  const onChange = (name: string, newValue: number) => {
    onColorUpdated({
      ...props.color,
      [name]: newValue,
    });
  };

  return (
    <div>
      <ColorSlider name="red" value={red} onValueUpdated={onChange} />
      <br />
      <ColorSlider name="green" value={green} onValueUpdated={onChange} />
      <br />
      <ColorSlider name="blue" value={blue} onValueUpdated={onChange} />
    </div>
  );
}

export default ColorBrowser;
