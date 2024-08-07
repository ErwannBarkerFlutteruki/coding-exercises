//Declare your imports below here
import React from 'react';



// Create a FC component called "Greeting" and export it
// this will take {name: string} as a pop
// the component should return a H1 with "Hello, John!" if "John is the name passed into the prop"
// Define an interface for the props

interface GreetingProps {
	name: string;
}

export const Greeting: React.FC<GreetingProps> = (props) => {
	
	return (
		<h1>Hello, {props.name}!</h1>
	)
}




// Render a component that renders the components it's passed
// component name is "RenderChildren"
// props: {children: }

interface RenderChildrenProps {
	children: JSX.Element;
};

export const RenderChildren: React.FC<RenderChildrenProps> = (props) => {
	return <>
	{props.children}
	</>
}


// Render a component that renders a list of items in LIs <ul><li>item1</li></ul>
// component name is "RenderList"
// props is an array of objects that look like {name: "item1", active: true}
// if active is true then the text in the element should look like 'item1 isActive!'
// if not it should look like : 'item1'

interface RenderListProps {
	items: Item[]
}

type Item = {
	name: string
	isActive: boolean
}

export const RenderList: React.FC<RenderListProps> = (props) => {
	const items = props.items;
	return (
		<ul>
			{items.map(item => <li>{(item.isActive) ? `${item.name} isActive!` : item.name}</li>)}
		</ul>

	)
}
