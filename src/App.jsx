///////////////////////
// CONTROLLING STATE //
///////////////////////

// Step 1. Import useState hook. It comes with React by default.
import { useState } from "react"

function App() {
  const colors = ["pink", "green", "blue", "yellow", "purple"];

  const handleClick = (color) => () => {
    setBackgroundColor(color);
    if (color != backgroundColor) {
      setChangeCount((changeCount) => changeCount + 1);
    }
  };

  const buttons = colors.map(color => 
    <button type="button" key={color} onClick={handleClick(color)}>{color}</button>
  )

  // Step 2. Define state using this pattern:
  // const [stateValue, setStateValue] = useState(initialValue);
  const [backgroundColor, setBackgroundColor] = useState(colors[0]);

  const [changeCount, setChangeCount] = useState(0);

  return (
    // Step 3. stateValue can be used as a variable. Until changed by calling setStateValue(x), it will have the initial value set.
    <>
    <main style={{backgroundColor}}>
      <div>{buttons}</div>
      State backgroundColor has been changed {changeCount} time(s).
    </main>
    </>
  )
}

export default App
