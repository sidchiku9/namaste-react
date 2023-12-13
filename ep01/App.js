const parent = React.createElement("div", {id : "parent"},[
    React.createElement(
        "div",
        {id : "div1"},
        [React.createElement(
            "h1",
            {id : "h1"},
            "I am an H1 tag"
        ), React.createElement(
            "h2",
            {id : "heading2"},
            "I am h22"
        )]
    ),
    React.createElement(
        "div",
        {id : "div2"},
        [React.createElement(
            "h1",
            {id : "h11"},
            "I am an H1 tag"
        ), React.createElement(
            "h2",
            {id : "heading22"},
            "I am h22"
        )]
    ),
    React.createElement(
        "div",
        {id : "div3"},
        [React.createElement(
            "h1",
            {id : "h111"},
            "I am an H1 tag"
        ), React.createElement(
            "h2",
            {id : "heading222"},
            "I am h22"
        )]
    )
]
)










const heading = React.createElement("h1", {id : "heading1"}, "Hello World from React !");
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
console.log(parent);