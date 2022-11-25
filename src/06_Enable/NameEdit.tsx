import { ChangeEvent } from "react";

interface Props {
  editingName: string;
  onNameChange: (value: string) => void;
  onNameUpdated: () => void;
}

function NameEdit(props: Props) {
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    props.onNameChange(e.target.value);
  };

  const onSubmit = (e: any) => {
    props.onNameUpdated();
  };

  return (
    <>
      <label htmlFor="name">Updated Name:</label>
      <input
        type="text"
        name="name"
        id="name"
        value={props.editingName}
        onChange={onChange}
      />
      <button onClick={onSubmit}>Submit</button>
    </>
  );
}

export default NameEdit;
