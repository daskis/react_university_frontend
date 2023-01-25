import React, {useState} from 'react';
import "./AppRates.css"
import vector from "../../assets/vector.svg"
import {useSelector, useDispatch} from 'react-redux';
import {changeOpen} from "../../store/slices/modalSlice";
import AppModal from "../AppModal/AppModal";
import {Link, useLocation} from "react-router-dom";

// Импортируем нужные действия
const AppRates = () => {

	const location = useLocation();

	return (
		<div className="relative" id="rates">
			<div className="rates mb-28">
				<div className="container">
					<h2 className="text-center text-secondary font-bold text-4xl mt-36 mb-20">Тарифы</h2>
					<div className="flex flex-col lg-:flex-row flex-wrap lg:justify-between items-center">
						<div className="w-full lg:w-1/3 mx-auto flex-col p-10 border-2 bg-white border-gray-100 rounded-md">
							<div className="flex-col pb-6 border-b-2">
								<span className="text-primary text-xl font-bold">Стартовый</span>
								<div className="flex items-start">
									<h6 className="text-6xl mr-3 font-bold text-secondary">2000</h6>
									<span className="text-3xl font-medium">₽</span>
								</div>
								<span className="text-xl font-medium">в час</span>
							</div>
							<ul className="pt-14 flex-col">
								<li className="flex gap-4 mb-4">
									<img className="mt-1 w-4 h-4" src={vector}/>
									<p>Предоплата от 2 часов</p>
								</li>
								<li className="flex gap-4 mb-4">
									<img className="mt-1 w-4 h-4" src={vector}/>
									<p>Консультации и работы по SEO</p>
								</li>
								<li className="flex gap-4 mb-4">
									<img className="mt-1 w-4 h-4" src={vector}/>
									<p>Услуги дизайнера</p>
								</li>
								<li className="flex gap-4 mb-4">
									<img className="mt-1 w-4 h-4" src={vector}/>
									<p>Стандартное время реакции</p>
								</li>
								<li className="flex gap-4 mb-4 items-start">
									<img className="mt-1 w-4 h-4" src={vector}/>
									<p>Неиспользованные оплаченные часы переносятся на следующий месяц</p>
								</li>
							</ul>
							<Link className="border-2 text-center hover:bg-[#F14D34] transition hover:text-white border-primary
							 text-primary font-medium rounded-md block w-full py-4 mt-16" to="/modal" state={{background: location}}>
								Оставить заявку!
							</Link>
						</div>
						<div className="w-full lg:w-1/3 mx-auto flex-col p-10 border-2 bg-white border-gray-100 rounded-md">
							<div className="flex-col pb-6 border-b-2">
								<span className="text-primary text-xl font-bold">Бизнес</span>
								<div className="flex items-start">
									<h6 className="text-6xl mr-3 font-bold text-secondary">2000</h6>
									<span className="text-3xl font-medium">₽</span>
								</div>
								<span className="text-xl font-medium">в час</span>
							</div>
							<ul className="pt-14 flex-col">
								<li className="flex gap-4 mb-4">
									<img className="mt-1 w-4 h-4" src={vector}/>
									<p>Предоплата от 2 часовПредоплата от 10 часов</p>
								</li>
								<li className="flex gap-4 mb-4">
									<img className="mt-1 w-4 h-4" src={vector}/>
									<p>Консультации и работы по SEO</p>
								</li>
								<li className="flex gap-4 mb-4">
									<img className="mt-1 w-4 h-4" src={vector}/>
									<p>Услуги дизайнера</p>
								</li>
								<li className="flex gap-4 mb-4">
									<img className="mt-1 w-4 h-4" src={vector}/>
									<p>Высокое время реакции – до 2 рабочих дней</p>
								</li>
								<li className="flex gap-4 mb-4 items-start">
									<img className="mt-1 w-4 h-4" src={vector}/>
									<p>Неиспользованные часы не переносятся</p>
								</li>
							</ul>
							<Link className="border-2 text-center hover:bg-[#F14D34] transition hover:text-white border-primary
							 text-primary font-medium rounded-md block w-full py-4 mt-16" to="/modal" state={{background: location}}>
								Оставить заявку!
							</Link>
						</div>
						<div className="w-full lg:w-1/3 mx-auto flex-col p-10 border-2 bg-white border-gray-100 rounded-md">
							<div className="flex-col pb-6 border-b-2">
								<span className="text-primary text-xl font-bold">VIP</span>
								<div className="flex items-start">
									<h6 className="text-6xl mr-3 font-bold text-secondary">1800</h6>
									<span className="text-3xl font-medium">₽</span>
								</div>
								<span className="text-xl font-medium">в час</span>
							</div>
							<ul className="pt-14 flex-col">
								<li className="flex gap-4 mb-4">
									<img className="mt-1 w-4 h-4" src={vector}/>
									<p>Предоплата от 100 часов</p>
								</li>
								<li className="flex gap-4 mb-4">
									<img className="mt-1 w-4 h-4" src={vector}/>
									<p>Консультации и работы по SEO</p>
								</li>
								<li className="flex gap-4 mb-4">
									<img className="mt-1 w-4 h-4" src={vector}/>
									<p>Услуги дизайнера</p>
								</li>
								<li className="flex gap-4 mb-4">
									<img className="mt-1 w-4 h-4" src={vector}/>
									<p>Максимальное время реакции – в день обращения</p>
								</li>
								<li className="flex gap-4 mb-4 items-start">
									<img className="mt-1 w-4 h-4" src={vector}/>
									<p>Неиспользованные часы не переносятся</p>
								</li>
							</ul>
							<Link className="border-2 text-center hover:bg-[#F14D34] transition hover:text-white border-primary
							 text-primary font-medium rounded-md block w-full py-4 mt-16" to="/modal" state={{background: location}}>
								Оставить заявку!
							</Link>
						</div>
					</div>
				</div>
			</div>
		</div>

	);
};

export default AppRates;
