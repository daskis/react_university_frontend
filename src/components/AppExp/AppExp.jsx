import React from 'react';
import "./AppExp.css"
import laptop from "../../assets/laptop.png"
const AppExp = () => {
	return (
		<div className="w-[100vw] translate-y-[-200px] bg-exp pb-60 relative z-10 exp">
			<img src={laptop} alt="laptop" className="absolute left-0 w-[70%] md:w-[50%] -bottom-36"/>
			<div className="container flex justify-start md:justify-end items-center">
				<div className="w-full md:w-1/2">
					<h2 className="font-bold text-5xl text-white mb-16 mt-64 leading-[54px]">Экспертиза в Drupal,<br/> опыт 14 лет!</h2>
					<div className="flex justify-between flex-col sm-:flex-row items-center gap-4">
						<p className="pl-6 py-4 border-l-4 text-white opacity-70 text-md mg-:text-xl border-primary">Только системный подход – контроль версий, резервирование
							и тестирование!</p>
						<p className="pl-6 py-4 border-l-4 text-white opacity-70 text-md mg-:text-xl border-primary">Только Drupal сайты,
							не берем на поддержку сайты на других CMS!</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default AppExp;
