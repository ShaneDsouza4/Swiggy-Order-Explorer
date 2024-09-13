import React from "react";
import ReactDOM from "react-dom/client"

// React.createElement => ReactElement (JS Object) => Render on DOM => HTML Element
// JSX => React.createElement => ReactElement (JS Object) => Render on DOM => HTML Element
const jsxHeading = <h1 id="heading">Hello World from JSX</h1> 

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(jsxHeading)