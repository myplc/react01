import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import Library from "./ch01/jsx02";
// import Comment from "./ch05/cpnt";
import Commentlist from "./ch05/cpntList";

const tick = () => new Date().toLocaleTimeString();
// const tt = () => {

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    <Library />
    {/* <Comment user="홍길동" content="ㅋㅋㅋ뭐라니?" /> */}
    <Commentlist />
    <h2>{tick()}</h2>
  </React.StrictMode>
);
// };
// setInterval(tt, 1000);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
