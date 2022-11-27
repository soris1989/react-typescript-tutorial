interface Props {
  name: string;
}

function Hello(props: Props) {
  return <h2>Hello user: {props.name}</h2>;
}

export default Hello;
