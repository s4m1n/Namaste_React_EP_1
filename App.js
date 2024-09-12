{
  /* <div id="parent">
  <div id="child">
    <h1>I'm an h1 Tag</h1>
    <h2>I'm an h2 Tag</h2>
  </div>

   <div id="child2">
    <h1>I'm an h1 Tag</h1>
    <h2>I'm an h2 Tag</h2>
  </div>
</div>; */
}

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "I'm an h1 tag"), // nested structure
    React.createElement("h2", {}, "I'm an h2 tag"), // siblings
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "I'm an h1 tag"), // nested structure
    React.createElement("h2", {}, "I'm an h2 tag"), // siblings
  ]),
]);

const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Hello World From React"
);

console.log(parent); // object

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);
