import { useEffect, useState } from "react";
import Color from "./model/color";
import Hello from "./components/Hello";
import "./App.scss";
import ColorBrowser from "./components/ColorBrowser";
import ColorPicker from "./components/ColorPicker";
import Sidebar from "./components/Sidebar";

function App() {
  const [color, setColor] = useState<Color>({ red: 20, green: 40, blue: 180 });
  const [isVisible, setVisible] = useState(false);

  return (
    <>
      <Sidebar isVisible={isVisible}>
        <h1>Cool Scfi movies</h1>
        <ul>
          <li>
            <a href="https://www.imdb.com/title/tt0816692/">Interstellar</a>
          </li>
          <li>
            <a href="https://www.imdb.com/title/tt0083658/">Blade Runner</a>
          </li>
          <li>
            <a href="https://www.imdb.com/title/tt0062622/">
              2001: a space odyssey
            </a>
          </li>
        </ul>
      </Sidebar>
      <ColorBrowser color={color} />
      <ColorPicker color={color} onColorUpdated={setColor} />
      <div style={{ float: "right" }}>
        <button onClick={() => setVisible(!isVisible)}>Toggle Sidebar</button>
      </div>
    </>
  );
}

export default App;
