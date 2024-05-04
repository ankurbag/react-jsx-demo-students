# JSX and V DOM

## Concepts

- What is JSX?
  - JSX is a syntax extension for JavaScript that lets you write HTML-like markup inside a JavaScript file. Although there are other ways to write components, most React developers prefer the conciseness of JSX, and most codebases use it.
- What is VDOM?
  - It is the representational DOM / shadow DOM
  - Performance
- The Rules of JSX
  - JavaScript in JSX : Curly Braces
  ```
      <div>{1+1}</div>
  ```
  - JSX: Putting markup into JavaScript
  ```
      const h1Element = <h1>Hello World</h1>;
  ```
  - Return a single root element. Use Fragments!
  ```
        <>
  		<TodoList />
  		<MyFirstComponent />
  	</>
  ```
  - Close all the tags
  - camelCase all most of the things! eg: className, htmlFor
  - PascalCase for Components! eg. `MyFirstComponent`

## Installation Steps

- Clone this project `git clone https://github.com/ankurbag/react-jsx-demo-students.git`
- Go to folder `cd react-jsx-demo-students`
- Run `npm install` or `npm i`
- Run `npm start`
- Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
