import { useState } from "react";

import "./App.css";

function App() {
  let style = { border: "2px solid white", padding: "50px" };

  let [counter, setCounter] = useState(5);

  function increaseCount() {
    if (counter < 20) setCounter(counter + 1);
    else alert("Counter cannot be more than 20");
    // console.log("clicked", counter);
  }

  function deccreaseCount() {
    if (counter > 0) setCounter(counter - 1);
    else alert("Counter cannot be less than 0");
    // console.log("clicked", counter);
  }

  return (
    <>
      <div style={style}>
        <h2>Counter App</h2>
        <h3>Count : {counter} </h3>
        <button
          style={{ margin: "5px", cursor: "pointer" }}
          onClick={increaseCount}
        >
          Increase
        </button>
        <button onClick={deccreaseCount}>Decrease</button>
      </div>
    </>
  );
}

export default App;
