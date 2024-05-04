import logo from "./logo.svg";
import "./App.css";
import MyFirstComponent from "./components/MyFirstComponent";
import TodoList from "./components/TodoList";

// Create a TodoListComponent
// Show list Items under Ul
/*

TODO
- Shopping for Grocery
- Watching Netflix
- Going on a Lunch
*/
// Add the component here!
function App() {
	return (
		<>
			<TodoList />
			<MyFirstComponent />
		</>
	);
}

export default App;
