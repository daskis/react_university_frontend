import React from 'react';
import secondSupport1 from "../../assets/secondsuppport1.svg"
import secondSupport2 from "../../assets/secondsuppport2.svg"
import secondSupport3 from "../../assets/secondsuppport3.svg"
import secondSupport4 from "../../assets/secondsuppport4.svg"
import secondSupport5 from "../../assets/secondsuppport5.svg"
import secondSupport6 from "../../assets/secondsuppport6.svg"
import secondSupport7 from "../../assets/secondsuppport7.svg"
import secondSupport8 from "../../assets/secondsuppport8.svg"

const AppSecondSupport = () => {
	return (
		<div className="container z-40">
			<h2 className="text-secondary font-bold text-4xl text-center mb-16">Поддержка <br/>от Drupal-coder</h2>
			<ul className="gap-4 sm-:gap-0 flex justify-between flex-wrap">
				<li className="p-6 rounded-lg w-full sm-:w-1/2 md:w-1/4 bg-white shadow-md flex-col relative z-40">
					<span className="opacity-70 font-bold  text-secondary">01.</span>
					<h4 className="font-bold text-md text-secondary my-4 w-2/3">Постановка задачи по Email</h4>
					<p className="opacity-70 text-secondary text-md w-3/4 font-medium mb-2">
						Удобная и привычная модель постановки задач, при которой задачи фиксируются и никогда
						не теряются.
					</p>
					<img src={secondSupport1} className="absolute bottom-0 right-0" alt=""/>
				</li>
				<li className="p-6 rounded-lg w-full sm-:w-1/2 md:w-1/4 bg-white shadow-md flex-col relative z-40">
					<span className="opacity-70 font-bold  text-secondary">02.</span>
					<h4 className="font-bold text-md text-secondary my-4 w-2/3">Система Helpdesk – отчетность,
						прозрачность</h4>
					<p className="opacity-70 text-secondary text-md w-3/4 font-medium mb-2">
						Возможность посмотреть все заявки в работе
						и отработанные часы
						в личном кабинете через браузер.
					</p>
					<img src={secondSupport2} className="absolute bottom-0 right-0" alt=""/>
				</li>
				<li className="p-6 rounded-lg w-full sm-:w-1/2 md:w-1/4 bg-white shadow-md flex-col relative z-40">
					<span className="opacity-70 font-bold  text-secondary">03.</span>
					<h4 className="font-bold text-md text-secondary my-4 w-2/3">Расширенная техническая поддержка</h4>
					<p className="opacity-70 text-secondary text-md w-3/4 font-medium mb-2">
						Возможность организации расширенной техподдержки с 6:00
						до 22:00 без выходных.
					</p>
					<img src={secondSupport3} className="absolute bottom-0 right-0" alt=""/>
				</li>
				<li className="p-6 rounded-lg w-full sm-:w-1/2 md:w-1/4 bg-white shadow-md flex-col relative z-40">
					<span className="opacity-70 font-bold  text-secondary">04.</span>
					<h4 className="font-bold text-md text-secondary my-4 w-2/3">Персональный менеджер проекта</h4>
					<p className="opacity-70 text-secondary text-md w-3/4 font-medium mb-2">
						Ваш менеджер проекта всегда в курсе текущего состояния проекта
						и в любой момент готов ответить на любые вопросы.
					</p>
					<img src={secondSupport4} className="absolute bottom-0 right-0" alt=""/>
				</li>
				<li className="p-6 rounded-lg w-full sm-:w-1/2 md:w-1/4 bg-white shadow-md flex-col relative z-40">
					<span className="opacity-70 font-bold  text-secondary">05.</span>
					<h4 className="font-bold text-md text-secondary my-4 w-2/3">Удобные способы оплаты</h4>
					<p className="opacity-70 text-secondary text-md w-3/4 font-medium mb-2">
						Безналичный расчет по договору или электронные деньги: WebMoney, Яндекс.Деньги, Paypal.
					</p>
					<img src={secondSupport5} className="absolute bottom-0 right-0" alt=""/>
				</li>
				<li className="p-6 rounded-lg w-full sm-:w-1/2 md:w-1/4 bg-white shadow-md flex-col relative z-40">
					<span className="opacity-70 font-bold  text-secondary">06.</span>
					<h4 className="font-bold text-md text-secondary my-4 w-2/3">Работаем с SLA и NDA</h4>
					<p className="opacity-70 text-secondary text-md w-3/4 font-medium mb-2">
						Работа в рамках соглашений
						о конфиденциальности
						и об уровне качетсва работ.
					</p>
					<img src={secondSupport6} className="absolute bottom-0 right-0" alt=""/>
				</li>
				<li className="p-6 rounded-lg w-full sm-:w-1/2 md:w-1/4 bg-white shadow-md flex-col relative z-40">
					<span className="opacity-70 font-bold  text-secondary">07.</span>
					<h4 className="font-bold text-md text-secondary my-4 w-2/3">Штатные специалисты</h4>
					<p className="opacity-70 text-secondary text-md w-3/4 font-medium mb-2">
						Надежные штатные специалисты, никаких фрилансеров.
					</p>
					<img src={secondSupport7} className="absolute bottom-0 right-0" alt=""/>
				</li>
				<li className="p-6 rounded-lg w-full sm-:w-1/2 md:w-1/4 bg-white shadow-md flex-col relative z-40">
					<span className="opacity-70 font-bold  text-secondary">08.</span>
					<h4 className="font-bold text-md text-secondary my-4 w-2/3">Удобные каналы связи</h4>
					<p className="opacity-70 text-secondary text-md w-3/4 font-medium mb-2">
						Консультации по телефону, скайпу,
						в месенджерах.
					</p>
					<img src={secondSupport8} className="absolute bottom-0 right-0" alt=""/>
				</li>
			</ul>
		</div>);
};

export default AppSecondSupport;
