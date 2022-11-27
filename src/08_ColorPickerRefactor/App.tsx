import { useEffect, useState } from "react";
import Color from "./model/color";
import Hello from "./components/Hello";
import "./App.scss";
import ColorBrowser from "./components/ColorBrowser";
import ColorPicker from "./components/ColorPicker";

function App() {
  const [name, setName] = useState<string>("defaultUserName");
  const [editingName, setEditingName] = useState<string>("defaultUserName");
  const [color, setColor] = useState<Color>({ red: 20, green: 40, blue: 180 });

  return (
    <div className="App">
      <ColorBrowser color={color} />
      <ColorPicker color={color} onColorUpdated={setColor} />
    </div>
  );
}

export default App;
