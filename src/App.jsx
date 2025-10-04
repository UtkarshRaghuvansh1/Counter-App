import { useState } from "react";

import "./App.css";

function App() {
  let style = { border: "2px solid white", padding: "50px" };
  return (
    <>
      <div style={style}>
        <h2>Counter App</h2>
        <h3>Count : </h3>
        <button>Increase</button>
        <button>Decrease</button>
      </div>
    </>
  );
}

export default App;
