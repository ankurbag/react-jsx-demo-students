import React from "react";
const temp = (
	<p>
		Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi culpa
		impedit optio fuga totam id recusandae quia earum. Deserunt quod molestias
		debitis error eveniet veniam qui culpa commodi in obcaecati?
	</p>
);

// Create a variable sum
// add 2 nums
// Print out on the HTml
const sum = 1 + 2;

// Create a function
// printMyName(fname, lname)
// Print outon the HTML
const printMyName = (fname, lname) => {
	return fname + " " + lname;
};

const h1Element = <h1 class="big">Hello World</h1>;
// Babel --> Preprocessor

const h1V2Element = React.createElement("h1", null, "Hello Saroosh!");

function MyFirstComponent() {
	// return jsx
	return (
		<div className="App">
			<div>
				{/* Here is a comment */}
				{h1Element}
				{h1V2Element}
			</div>
			<h1>Hello Class</h1>
			<h2>Sub title</h2>
			<div id="mytext">{temp}</div>
			<div>My sum is {sum}</div>
			<div>My multiplication is {console.log("Hello")}</div>
			<div>My Name:{printMyName("Ankur", "Bag")}</div>
		</div>
	);
}

export default MyFirstComponent;
