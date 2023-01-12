import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const SimpleCounter = (props) => {
	return (
		<div className="container d-flex bg-dark text-white justify-content-center px-4">
            <div>{props.digitFour&10}</div>
            <div>{props.digitThree%10}</div>
            <div>{props.digitTwo%10}</div>
            <div>{props.digitOne%10}</div>		
		</div>
	);
};

export default SimpleCounter;