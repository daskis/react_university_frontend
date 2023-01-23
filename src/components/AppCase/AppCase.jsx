import React from 'react';
import "./AppCase.css"

const AppExp = () => {
	return (
		<div className="w-[100vw] bg-exp h-[840px] relative -z-10 exp">
			<div className="container flex justify-end items-center">
				<div className="w-1/2">
					<h2 className="font-bold text-5xl text-white mb-16 mt-64 leading-[54px]">Экспертиза в Drupal,<br/> опыт 14 лет!</h2>
					<div className="flex justify-between items-center gap-4">
						<p className="pl-6 py-4 border-l-4 text-white opacity-70 text-xl border-primary">Только системный подход – контроль версий, резервирование
							и тестирование!</p>
						<p className="pl-6 py-4 border-l-4 text-white opacity-70 text-xl border-primary">Только Drupal сайты,
							не берем на поддержку сайты на других CMS!</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default AppExp;