import React from 'react';
import "./AppFooter.css"
import icon from "../../assets/footer-icon-first.png"
const AppFooter = () => {
	return (
		<div className="footer  h-[40vh] relative">
			<div className="container flex justify-between">
				<div className="text-3xl text-white">123</div>
				<div className="text-3xl ">
					<input type="text" className="p-4" placeholder="Ваше имя"/>
				</div>
			</div>
		</div>
	);
};

export default AppFooter;
