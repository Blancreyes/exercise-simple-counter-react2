//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Home from "./component/home.jsx";

let counter = 0
setInterval(function () {

    const four = Math.floor(counter/100);
    const three = Math.floor(counter/100);
    const two = Math.floor(counter/10);
    const one = Math.floor(counter);

    console.log(four, three, two, one)

    counter++;
    ReactDOM.render(<Home digitOne={one} digitTwo={two} digitThree={three} digitFour={four}/>, 
    document.querySelector("#app")); 


}, 1000);

//render your react application

