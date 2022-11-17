//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";


import Counter from "./component/counter.jsx";


let tiempo =  0;

setInterval(()=>{
    console.log(tiempo);
    //render your react application
    ReactDOM.render(<Counter segundos={tiempo}/>, document.querySelector("#app"));
    tiempo++
},100)


