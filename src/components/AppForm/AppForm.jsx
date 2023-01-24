import React from 'react';

const AppForm = () => {
	return (
		<form id="Form" action="https://formcarry.com/s/NHJ3ElLaq" method="POST" encType="multipart/form-data"
		      acceptCharset="UTF-8" >
			<input type="text"
			       className="p-5 rounded-md focus:outline-red-500 focus:outline-4 my-4 bg-inherit block w-full  border rounded-lg border-opacity-30 border-white"
			       placeholder="Ваше имя"/>
			<input type="tel"
			       className="p-5 rounded-md focus:outline-red-500 focus:outline-4 my-4 bg-inherit block w-full  border rounded-lg border-opacity-30 border-white"
			       placeholder="Телефон"/>
			<input type="email"
			       className="p-5 rounded-md focus:outline-red-500 focus:outline-4 my-4 bg-inherit block w-full  border rounded-lg border-opacity-30 border-white"
			       placeholder="E-mail"/>
			<textarea

				className="p-5 resize-none rounded-md focus:outline-red-500 focus:outline-4 my-4 bg-inherit block w-full border rounded-lg border-opacity-30 border-white"
				placeholder="Ваш комментарий"/>

			<div className="flex flex-col gap-4">
				
				<div className="flex items-start gap-2">
					<input className="w-6 h-6" type="checkbox"/>
					<p className="text-white font-light opacity-70 text-sm">Отправляя заявку, я даю согласие на обработку своих персональных
						данных</p>
				</div>
				<button className="text-white bg-[#F14D34] py-4 px-10 rounded-md">Оставить заявку!</button>
			</div>
		</form>
	);
};

export default AppForm;
