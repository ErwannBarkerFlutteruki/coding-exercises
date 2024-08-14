import React, {useEffect, useState} from "react";

/**
Create a component that displays two mertrics
- "Count: {count}"
- "Double Count: {doubleCount}"

These will be stored in two individual states (make sure of useState twice)

There will also be two buttons with onClick triggers,
- one button will be "Increment"
- the second button will be "Decrement"

Use Useeffect when the count changes to then update the double count state.

export the component as default.
*/

const ReactHooks: React.FC = () => {

	const [count, setCount] = useState(0);
	const [doubleCount, setDoubleCount] = useState(0);

	useEffect(() => {
		setDoubleCount(count * 2)
	}, [count])

	return (
		<>
			<p>Count: {count}</p>
			<p>Double Count: {doubleCount}</p>
			<button onClick={() => setCount(count + 1)}>Increment</button>
			<button onClick={() => setCount(count - 1)}>Decrement</button>
		</>
	)
}

export default ReactHooks;
