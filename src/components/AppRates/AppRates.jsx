import React from 'react';
import "./AppRates.css"
import vector from "../../assets/vector.svg"

const AppRates = () => {
	return (
		<div className="rates mb-28">
			<div className="container">
				<h2 className="text-center text-secondary font-bold text-4xl mt-36 mb-20">Тарифы</h2>
				<div className="flex justify-between items-center">
					<div className="w-1/3 flex-col p-10 border-2 bg-white border-gray-100 rounded-md">
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
						<button className="border-2 border-primary text-primary font-medium rounded-md block w-full py-4 mt-16">ОСТАВИТЬ ЗАЯВКУ</button>
					</div>
					<div className="w-1/3 flex-col p-10 border-2 bg-white border-gray-100 rounded-md">
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
						<button className="border-2 border-primary text-primary font-medium rounded-md block w-full py-4 mt-16">ОСТАВИТЬ ЗАЯВКУ</button>

					</div>
					<div className="w-1/3 flex-col p-10 border-2 bg-white border-gray-100 rounded-md">
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
						<button className="border-2 border-primary text-primary font-medium rounded-md block w-full py-4 mt-16">ОСТАВИТЬ ЗАЯВКУ</button>

					</div>
				</div>
			</div>
		</div>
	);
};

export default AppRates;
