import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
function MyApp() {
  return (
    <div>
      <h1>Hello This is custom React!!!</h1>
    </div>
  );
}
// const reactElement = {
//   type: "a",
//   props: {
//     href: "https://google.com",
//     target: "_blank",
//   },
//   children: "click me to visit google",
// };// ^ we cannot give react element directly beacause react.reander() expect us something and we should follow that convention like in custom react we create a custom render in which we expect something in that manner
// const anotherElement = (
//   <a href="https://google.com" target="_blank">
//     Go to Google
//   </a>
// );// ^ In this way we actually give react a return like we are doing in function
const username = 'hello hamza'
const reactElement = React.createElement(
  "a",
  {
    href: "https://google.com",
    target: "_blank",
  },
  "go to react google",
  username

);// ^ This is actually a way to give react a react element
ReactDOM.createRoot(document.getElementById("root")).render(reactElement );
