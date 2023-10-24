///////////////////////////
// CONTROLLED COMPONENTS //
///////////////////////////

// Step 1. Import useState hook
import { useState } from "react"

function ControlledInput () {
    // Step 2. Define state
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");

    let greeting;
    if (!firstName && !lastName) {
        greeting = ""
    } else if (firstName && !lastName) {
        greeting = `Nice to meet you, ${firstName}.`
    } else {
        greeting = `Nice to meet you, ${firstName} ${lastName}.`
    }

    // Step 3. Set value of component as the state
    // Step 4. When the value of the component is changed, it calls setState() and rerenders the component
    return (
        <>
        <main>
            <h2>What's your name?</h2>
            <div>
                <fieldset>
                    <label for="first-name">First Name: </label>
                    <input type="text" id="first-name" value={firstName} onChange={(event) => setFirstName(event.target.value)}/>
                </fieldset>
                <fieldset>
                    <label for="last-name">Last Name: </label>
                    <input type="text" id="last-name" value={lastName} onChange={(event) => setLastName(event.target.value)}/>
                </fieldset>
            </div>
            {greeting}
        </main>
        </>
    )
}

export default ControlledInput