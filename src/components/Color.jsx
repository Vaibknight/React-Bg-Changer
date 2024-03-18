import React from "react";
import { useState } from "react";
import "../App.css";

const Color = () => {
  //   const [first, setfirst] = useState(second);

  function redChange() {
    document.body.style.backgroundColor = "Red";
  }
  return (
    <div
      className="w-full h-screen duration-200"
      style={{ backgroundColor: "green" }}
    >
      <div>
        <button onClick={redChange} className="bg-red-400 border-2 p-2 mx-2">
          Red
        </button>
        <button className="bg-blue-400 border-2 p-2 mx-2">Blue</button>
        <button className="bg-black border-2 p-2 mx-2">Black</button>
        <button className="bg-green-400 border-2 p-2 mx-2">Green</button>
        <button className="bg-pink-400 border-2 p-2 mx-2">Pink</button>
        <button className="bg-purple-400 border-2 p-2 mx-2">Purple</button>
      </div>
    </div>
  );
};

export default Color;
