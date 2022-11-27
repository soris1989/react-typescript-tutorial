interface Props {
  errors: string[];
}

function Errors(props: Props) {
  return (
    <ul>
      {props.errors.map((error) => (
        <li key={error}>{error}</li>
      ))}
    </ul>
  );
}

export default Errors;
