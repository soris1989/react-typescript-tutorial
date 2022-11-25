import { useEffect, useState } from "react";
import Hello from "./Hello";
import NameEdit from "./NameEdit";
import "./App.scss";

function App() {
  const [name, setName] = useState("defaultUserName");
  const [editingName, setEditingName] = useState("defaultUserName");

  const loadName = () => {
    setTimeout(() => {
      setName("name from async call");
      setEditingName("name from async call");
    }, 500);
  };

  useEffect(() => {
    loadName();
  }, []);

  const onNameUpdated = () => {
    setName(editingName);
  };

  return (
    <div className="App">
      <NameEdit
        editingName={editingName}
        onNameChange={setEditingName}
        onNameUpdated={onNameUpdated}
      />
      <Hello name={name} />
    </div>
  );
}

export default App;
