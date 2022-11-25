import { ChangeEvent, useState } from "react";

interface Props {
  initialName: string;
  onNameUpdated: (name: string) => void;
}

function NameEdit(props: Props) {
  const [name, setName] = useState(props.initialName);
  const [initialName, setInitialName] = useState(props.initialName);

  // componentDidUpdate
  if (props.initialName !== initialName) {
    setInitialName(props.initialName);
    setName(props.initialName);
  }

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const onSubmit = (e: any) => {
    props.onNameUpdated(name);
  };

  return (
    <>
      <label htmlFor="name">Updated Name:</label>
      <input
        type="text"
        name="name"
        id="name"
        value={name}
        onChange={onChange}
      />
      <button onClick={onSubmit}>Submit</button>
    </>
  );
}

export default NameEdit;
