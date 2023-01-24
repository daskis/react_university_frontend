import React from 'react';
import "./AppFooter.css"
import phone from "../../assets/phone.png"
import mail from "../../assets/mail.png"
const AppFooter = () => {
	return (
		<div className="footer mt-20 overflow-hidden relative">
			<h1 className="text-3xl text-white"></h1>
	
			<div className="relative bg-footerSecond bg-no-repeat bg-right-bottom"><div className="relative bg-footerFirst bg-no-repeat bg-top">
				<div className="container flex justify-between">
					<div className="pt-20 pr-52 text-4xl text-white font-bold text-justify w-[50%]">
						<p className="text-left">Оставить заявку на поддержку сайта</p>
						<p className="mt-6 text-sm font-normal">Срочно нужна поддержка сайта? Ваша команда не успевает справиться 
						самостоятельно или предыдущий подрядчик не справился с работой? Тогда вам точно к нам! 
						Просто оставьте заявку и наш менеджер с вами свяжется!</p>

						<p className="flex items-center mt-48 text-4xl text-white font-bold"><img className="pr-4" src={phone} alt=""/>8 800 222-26-73</p>

						<p className="flex items-center mt-4 text-base font-semibold underline"><img className="pr-4" src={mail} alt=""/>info@drupal-coder.ru</p>	
					
					</div>
					<div className="pt-20 w-[40%] flex flex-col p-2 text-base gap-y-2">
						<input type="text" className="py-5 bg-inherit border rounded" placeholder="     Ваше имя"/>
						<input type="text" className="py-5 bg-inherit border rounded" placeholder="     Телефон"/>
						<input type="text" className="py-5 bg-inherit border rounded" placeholder="     E-mail"/>
						<input type="text" className="py-16 bg-inherit border rounded" placeholder="    Ваш комментарий"/>
						
						<p className="pt-2 text-white">Отправляя заявку, я даю согласие на обработку своих персональных данных</p>
						<button className="text-white bg-[#F14D34] py-4 px-10 rounded-md">Оставить заявку!</button>

						<div className="text-white text-left">
							<p className="text-xs font-light">Проект ООО «Инитлаб», Краснодар, Россия.</p>
							<p className="pt-2 text-xs font-light">Drupal является зарегистрированной торговой маркой Dries Buytaert.</p>

						</div>
					</div>


				</div>
			</div>
			</div>
			
		</div>
		


	
	);
};

export default AppFooter;
