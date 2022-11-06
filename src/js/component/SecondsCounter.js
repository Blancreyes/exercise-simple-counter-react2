import React from "react";
import reactDom from "react-dom";

function SecondsCounter (props){
    const customStyle ={
        fontSize: "3em",
    }
   
	return (
        <div className="row row-cols-1 row-cols-md-5 d-inline-flex p-10 bg-dark text-white" style={customStyle}>
            <div className="fourth">{props.fourthDigit % 10}</div>
            <div className="third">{props.thirdDigit % 10}</div>
            <div className="second">{props.secondDigit % 10}</div>
            <div className="first">{props.firstDigit % 10}</div>
        </div>
        
           );
};
       
let counter=0;
setInterval(
    function(){
        const fourth = Math.floor(counter/1000);
        const third = Math.floor(counter/100);
        const second = Math.floor(counter/10);
        const first = Math.floor(counter);
        console.log(fourth, third, second, first)

        counter ++;
        reactDom.render(
            <SecondsCounter firstDigit={first} secondDigit={second} thirdDigit={third} fourthDigit={fourth}/>,
            document.querySelector(`#app`)
        )
    },
1000);

export default SecondsCounter;