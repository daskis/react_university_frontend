import React from 'react';
import "./AppVTB.css"
import log1 from "../../assets/log1.png"
import log2 from "../../assets/log2.png"
import log3 from "../../assets/log3.png"

const AppVTB = () => {
	return (
		<div className="grid grid-flow-row auto-rows-max md:auto-rows-min grid-cols-5 gap-8">
			<div className="transform scale-75 p-12 max-w-sm md-auto bg-white flex items-center border">
				<img src={log1} alt="log1"/></div>
			<div className="transform scale-75 p-12 max-w-sm md-auto bg-white flex items-center border">
				<img src={log2} alt="log2"/></div>
			<div className="transform scale-75 p-12 max-w-sm md-auto bg-white flex items-center border">
				<img src={log3} alt="log3"/></div>
			<div className="transform scale-75 p-12 max-w-sm md-auto bg-white flex items-center border">
				<img src={log1} alt="log1"/></div>
			<div className="transform scale-75 p-12 max-w-sm md-auto bg-white flex items-center border">
				<img src={log2} alt="log2"/></div>

			<div className="transform scale-75 p-12 max-w-sm md-auto bg-white flex items-center border">
				<img src={log1} alt="log1"/></div>
			<div className="transform scale-75 p-12 max-w-sm md-auto bg-white flex items-center border">
				<img src={log2} alt="log2"/></div>
			<div className="transform scale-75 p-12 max-w-sm md-auto bg-white flex items-center border">
				<img src={log3} alt="log3"/></div>
			<div className="transform scale-75 p-12 max-w-sm md-auto bg-white flex items-center border">
				<img src={log1} alt="log1"/></div>
			<div className="transform scale-75 p-12 max-w-sm md-auto bg-white flex items-center border">
				<img src={log2} alt="log2"/></div>
		</div>


	)
}

export default AppVTB;