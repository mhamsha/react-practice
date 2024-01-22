import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [color, setColor] = useState("#212121");

  return (
    <div
      className="w-full h-screen duration-100"
      style={{ backgroundColor: color }}
    >
      <div className="fixed  top-12  left-0 px-2  ">
        <div className="flex flex-wrap flex-col justify-center gap-3 shadow-lg bg-blue-300  px-3 py-2 rounded-3xl">
          <button
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "red" }}
            onClick={() => setColor("red")}
            >
            Red
          </button>
          <button
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "green" }}
            onClick={() => setColor("green")}
          >
            green
          </button>
          <button
            className="outline-none px-4 py-1 rounded-full text-black shadow-lg"
            style={{ backgroundColor: "yellow" }}
            onClick={() => setColor("yellow")}
          >
            yellow
          </button>
          <button
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "blue" }}
            onClick={() => setColor("blue")}

          >
            blue  
          </button>
          <button
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "violet" }}
            onClick={() => setColor("violet")}

          >
            violet  
          </button>
          <button
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "black" }}
            onClick={() => setColor("black")}

          >
            black  
          </button>
          <button
            className="outline-none px-4 py-1 rounded-full text-black shadow-lg"
            style={{ backgroundColor: "skyblue" }}
            onClick={() => setColor("skyblue")}

          >
            skyblue  
          </button>

        </div>
      </div>
    </div>
  );
}

export default App;
