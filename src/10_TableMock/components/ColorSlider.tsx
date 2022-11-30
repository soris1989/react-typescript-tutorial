import { ChangeEvent } from "react";

interface Props {
  name: string;
  value: number;
  onValueUpdated: (name: string, newValue: number) => void;
}

function ColorSlider(props: Props) {
  const { name, value, onValueUpdated } = props;

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    onValueUpdated(name, Number(e.target.value));
  };

  return (
    <input
      type="range"
      name={name}
      min="0"
      max="255"
      value={value}
      onChange={onChange}
    />
  );
}

export default ColorSlider;
