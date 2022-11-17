import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Counter = ({segundos}) => {
	let string =segundos.toString()
	let uno = string[string.length-1]
	let dos = string[string.length-2]
	let tres = string[string.length-3]
	let cuatro = string[string.length-4]
	let cinco = string[string.length-5]
	let seis = string[string.length-6]

	return (
		<div className="text-center">	
			<div className="bigCounter">
				<div className="oclock">
					<i className="far fa-clock"></i>
				</div>
				<div className="six">{seis==undefined? "0":seis}</div>
				<div className="five">{cinco==undefined? "0":cinco}</div>
				<div className="four">{cuatro==undefined? "0":cuatro}</div>
				<div className="three">{tres==undefined? "0":tres}</div>
				<div className="two">{dos==undefined? "0":dos}</div>
				<div className="one">{uno==undefined? "0":uno}</div>
				
        	</div>
		</div>
	);
};

export default Counter;
