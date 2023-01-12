import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import SimpleCounter from "./simpleCounter.jsx";

//create your first component
const Home = (props) => {
		return (
		<div className="text-center">
			<SimpleCounter digitOne={props.digitOne%10} digitTwo={props.digitTwo%10} digitThree={props.digitThree%10} digitFour={props.digitFour%10}/>
		</div>
	);
};

export default Home;
