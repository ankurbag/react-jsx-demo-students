import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

// Add a new para
// Inject
// const p = <p>Sum {1+1}</p>;
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(p);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
);
