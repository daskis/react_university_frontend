import React from 'react';
import "./AppFooter.css"
import icon from "../../assets/footer-icon-first.png"
const AppFooter = () => {
	return (
		<div className="mt-30 footer h-[40vh] relative">
			<h1 className="text-3xl text-white">124235</h1>
			<img src={icon} className="absolute top-0 left-[40%] " alt=""/>
			<img src={icon} className="absolute -bottom-40 right-0 " alt=""/>
		</div>
	);
};

export default AppFooter;
