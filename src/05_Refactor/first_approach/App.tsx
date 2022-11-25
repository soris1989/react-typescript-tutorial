import { useEffect, useState } from "react";
import Hello from "./Hello";
import NameEdit from "./NameEdit";
import "./App.scss";

function App() {
  const [name, setName] = useState("defaultUserName");

  const loadName = () => {
    setTimeout(() => {
      setName("name from async call");
    }, 500);
  };

  useEffect(() => {
    loadName();
  }, []);

  return (
    <div className="App">
      <NameEdit initialName={name} onNameUpdated={setName} />
      <Hello name={name} />
    </div>
  );
}

export default App;
