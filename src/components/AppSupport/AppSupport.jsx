import React from 'react';
import support1 from "../../assets/support1.svg"
import support2 from "../../assets/support2.svg"
import support3 from "../../assets/support3.svg"
import support4 from "../../assets/support4.svg"
import support5 from "../../assets/support5.svg"
import support6 from "../../assets/support6.svg"
import support7 from "../../assets/support7.svg"
import support8 from "../../assets/support8.svg"
import supportBG from "../../assets/supportBG.svg"
const AppSupport = () => {
	return (
		<div className="bg-white relative mt-20 z-40 ">
			<div className="container bg-white flex-col items-center">
				<h2 className="text-secondary font-bold text-2xl sm-:text-4xl text-center md:text-left w-full md:w-1/2 mt-12 mb-4">13  лет совершенствуем компетенции в Drupal поддержке!</h2>
				<p className="font-medium text-secondary text-center md:text-left w-full md:w-1/2 opacity-70 mb-8">Разрабатываем и оптимизируем модули, расширяем функциональность сайтов, обновляем дизайн</p>
				<ul className="flex flex-row flex-wrap mb-16">
					<li className="flex-col relative justify-start items-center w-full flex md:block text-center md:text-left  sm-:w-1/2 md:w-1/4 md:pr-20 p-6">
						<img src={support1} alt=""/>
						<p className="opacity-70 text-secondary font-medium text-md mt-6" >
							Добавление информации на сайт, создание новых разделов
						</p>
						<img src={supportBG} className="absolute top-10 left-20 sm-:left-16 md:-left-10 " alt=""/>
					</li>
					<li className="flex-col relative justify-start items-center w-full flex md:block text-center md:text-left  sm-:w-1/2 md:w-1/4 md:pr-20 p-6">
						<img src={support2} alt=""/>
						<p className="opacity-70 text-secondary font-medium text-md mt-6" >
							Разработка и оптимизация модулей сайта
						</p>
						<img src={supportBG} className="absolute top-10 left-20 sm-:left-16 md:-left-10 " alt=""/>
					</li>
					<li className="flex-col relative justify-start items-center w-full flex md:block text-center md:text-left  sm-:w-1/2 md:w-1/4 md:pr-20 p-6">
						<img src={support3} alt=""/>
						<p className="opacity-70 text-secondary font-medium text-md mt-6" >
							Интеграция с CRM, <br/> 1C, платежными системами, любыми веб-сервисами
						</p>
						<img src={supportBG} className="absolute top-10 left-20 sm-:left-16 md:-left-10 " alt=""/>
					</li>
					<li className="flex-col relative justify-start items-center w-full flex md:block text-center md:text-left  sm-:w-1/2 md:w-1/4 md:pr-20 p-6">
						<img src={support4} alt=""/>
						<p className="opacity-70 text-secondary font-medium text-md mt-6" >
							Любые доработки функционала и дизайна
						</p>
						<img src={supportBG} className="absolute top-10 left-20 sm-:left-16 md:-left-10 " alt=""/>
					</li>
					<li className="flex-col relative justify-start items-center w-full flex md:block text-center md:text-left  sm-:w-1/2 md:w-1/4 md:pr-20 p-6">
						<img src={support5} alt=""/>
						<p className="opacity-70 text-secondary font-medium text-md mt-6" >
							Любые доработки функционала и дизайна
						</p>
						<img src={supportBG} className="absolute top-10 left-20 sm-:left-16 md:-left-10 " alt=""/>
					</li>
					<li className="flex-col relative justify-start items-center w-full flex md:block text-center md:text-left  sm-:w-1/2 md:w-1/4 md:pr-20 p-6">
						<img src={support6} alt=""/>
						<p className="opacity-70 text-secondary font-medium text-md mt-6" >
							Миграция, импорт контента и апгрейд Drupal
						</p>
						<img src={supportBG} className="absolute top-10 left-20 sm-:left-16 md:-left-10 " alt=""/>
					</li>
					<li className="flex-col relative justify-start items-center w-full flex md:block text-center md:text-left  sm-:w-1/2 md:w-1/4 md:pr-20 p-6">
						<img src={support7} alt=""/>
						<p className="opacity-70 text-secondary font-medium text-md mt-6" >
							Миграция, импорт контента и апгрейд Drupal
						</p>
						<img src={supportBG} className="absolute top-10 left-20 sm-:left-16 md:-left-10 " alt=""/>
					</li>
					<li className="flex-col relative justify-start items-center w-full flex md:block text-center md:text-left  sm-:w-1/2 md:w-1/4 md:pr-20 p-6">
						<img src={support8} alt=""/>
						<p className="opacity-70 text-secondary font-medium text-md mt-6" >
							Веб-маркетинг, консультации и работы по SEO
						</p>
						<img src={supportBG} className="absolute top-10 left-20 sm-:left-16 md:-left-10 " alt=""/>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default AppSupport;
