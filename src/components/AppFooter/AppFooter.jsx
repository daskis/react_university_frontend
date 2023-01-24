import React from 'react';
import "./AppFooter.css"
import phone from "../../assets/phone.png"
import mail from "../../assets/mail.png"
import logo from "../../assets/D.png"
import AppForm from "../AppForm/AppForm";

const AppFooter = () => {
	return (
		<div className="footer mt-20 overflow-hidden relative">

			<div className="relative">
				<div className="relative bg-footerFirst bg-no-repeat bg-top">
					<div className="container flex justify-between items-center">
						<div className="py-20 text-4xl text-white font-bold text-justify w-[50%]">
							<p className="text-left">Оставить заявку на поддержку сайта</p>
							<p className="mt-6 text-sm font-normal">Срочно нужна поддержка сайта? Ваша команда не
								успевает справиться
								самостоятельно или предыдущий подрядчик не справился с работой? Тогда вам точно к нам!
								Просто оставьте заявку и наш менеджер с вами свяжется!</p>

							<a className="flex items-center mt-48 text-4xl text-white font-bold" href="tel:88002222673">
								<img className="pr-4" src={phone} alt=""/>
								8 800 222-26-73
							</a>

							<a href="mailto:info@drupal-coder.ru" className="flex items-center mt-4 text-base font-semibold underline"><img
								className="pr-4" src={mail} alt=""/>info@drupal-coder.ru</a>

						</div>
						<div className="w-[50%]">
							<div className="w-[70%] ml-auto">
								<AppForm/>
							</div>

						</div>


					</div>
				</div>
				<div className="py-10 border-t-2 border-white border-opacity-20 relative">
					<div className="container mx-auto ">
						<p className="text-xs text-white font-light">Проект ООО «Инитлаб», Краснодар, Россия.</p>
						<p className="pt-2 text-white text-xs font-light">Drupal является зарегистрированной торговой маркой Dries Buytaert.</p>

					</div>
					<img src={logo} className="absolute right-0 -top-12" alt=""/>
				</div>
			</div>

		</div>


	);
};

export default AppFooter;
