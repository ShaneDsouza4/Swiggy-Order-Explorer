import React from "react";
import ReactDOM from "react-dom/client"

const TitleComponent = () => (
        <h1 className="head" >Title Component</h1> 
)

const HeadingComponent = () => (
    <div id="container">
        <TitleComponent/>
        <h1 className="heading" >React Functional Component</h1>
    </div>    
)

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<HeadingComponent/>)