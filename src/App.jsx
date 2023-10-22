///////////////////////
// CONTROLLING STATE //
///////////////////////

// Step 1. Import useState hook. It comes with React by default.
import { useState } from "react"

function App() {
  const colors = ["pink", "green", "blue", "yellow", "purple"];

  // Step 2. Define state using this pattern:
  // const [stateValue, setStateValue] = useState(initialValue);
  const [backgroundColor, setBackgroundColor] = useState(colors[0]);

  return (
    // Step 3. stateValue can be used as a variable. Until changed, it will have the initial value set.
    <>
    <main style={{backgroundColor}}>
      Starting from a blank slate!
    </main>
    </>
  )
}

export default App
