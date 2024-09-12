/* 
Nested Structurre in React 

<div id="parent">
    <div class="child1">
        <h1 id="h1">Heading 1</h1>
        <h1 id="h2">Heading 2</h1>
    </div>
    <div class="child2">
        <h1 id="h1">Heading 1</h1>
        <h1 id="h2">Heading 2</h1>
    </div>
</div>

*/

const parent = React.createElement(
    "div", 
    {id: "parent"}, [
        React.createElement( "div", {id:"child1"}, [
            React.createElement( "h1", {}, "Heading 1"),
            React.createElement( "h2", {}, "Heading 2")
        ]),
        React.createElement( "div", {id:"child2"}, [
            React.createElement( "h1", {}, "Heading 1"),
            React.createElement( "h2", {}, "Heading 2")
        ])
    ]
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(parent); 