// TODO




var App2 = () => (
  <div>Some cliche salutation2</div>
);
ReactDOM.render(<App2 />,
  document.getElementById("text2")
);

var App3 = () => {
  return <div>Some cliche salutation3</div>
};
ReactDOM.render(<App3 />,
  document.getElementById("text3")
);



function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

const element = <Welcome name="Sara" />;
ReactDOM.render(
  element,
  document.getElementById('text')
);







// var GroceryList = () => {
//   return <div>
//     <li>
//       FreshCream
//     </li>
//     <li>
//       almond
//     </li>
//   </div>
// };
// ReactDOM.render(<GroceryList />,
//   document.getElementById("app")
// );


var GroceryList = () => {
  return <div id="app_list">hiiii</div>
};
ReactDOM.render(<GroceryList />,
  document.getElementById("app")
);

var Cucumbers = () => {
  return <li>this is cucumber</li>
};
ReactDOM.render(<Cucumbers />,
  document.getElementById("app_list")
);



var Kale = () => {
  return <li>this is kale</li>
};

document.getElementById("app_list").append(Kale())


