import { useState } from "react";
import "./App.css";
import Markdown from "./components/Markdown";
import data from "./components/Data";

function App() {
const [input, setInput] = useState(data);

  return (
    <div className="App">
      <Markdown input={input} setInput={setInput}/>
    </div>
  );
}

export default App;
