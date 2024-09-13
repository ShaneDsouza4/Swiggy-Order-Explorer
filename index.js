import React from "react";
import ReactDOM from "react-dom/client"

// React Functional Component
const HeadingComponent = () => (
    <div id="container">
        <h1 className="heading" >React Functional Component</h1>
    </div>    
)

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<HeadingComponent/>)