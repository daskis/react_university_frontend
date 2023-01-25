import React from 'react';
import case1 from "../../assets/case5.png"

const AppCase = () => {
	return (
		<div>
			<div className="container">
				<h2 className="text-center text-secondary font-bold text-4xl mt-36 mb-20">Последние кейсы</h2>


				<div className="flex w-full flex-col md:flex-row md:flex-wrap gap-8 md:justify-between text-black">
					<div className="bg-casee bg-cover bg-center md:bg-contain md:bg-top md:text-black text-white bg-no-repeat
					 h-[40vh] flex flex-col w-full md:w-2/5 p-4 justify-end relative">
						<p className=" text-xl">Настройка выгрузки YML для Яндекс.Маркета</p>
						<p className=" text-xs">22.04.2019</p>
						<p className=" text-xs">Эти слова совершенно справедливы, однако гипнотический рифф
							продолжает паузный пласт.</p>
					</div>


					<div className="bg-caseee bg-cover bg-center bg-no-repeat h-[40vh] flex flex-col w-full md:w-[55%] p-4 md:p-8 justify-end relative">
						<p className="md:w-2/3 font-semibold text-base text-white relative z-10">Настройка
							выгрузки YML для Яндекс.Маркета</p>
					</div>


					<div className="bg-caseeee bg-cover bg-center bg-no-repeat h-[40vh] flex flex-col w-full md:w-[30%] p-4 justify-end relative">
						<p className=" font-semibold text-base text-white relative z-10">Настройка выгрузки
							YML для Яндекс.Маркета</p>
						<p className=" text-white text-xs z-10">22.04.2019</p>
					</div>

					<div className="bg-caseeeee bg-cover bg-center bg-no-repeat h-[40vh] flex flex-col w-full  md:w-[30%] p-4 justify-end relative">
						<p className=" font-semibold text-white text-base items-end z-10">Настройка выгрузки
							YML для Яндекс.Маркета</p>
						<p className=" text-white text-xs z-10">22.04.2019</p>

					</div>


					<div className="bg-caseeeeeeee md:bg-none bg-cover bg-center bg-no-repeat h-[40vh] flex flex-col w-full  md:w-[30%] text-white md:text-black p-4 justify-end relative">
						<img className="hidden md:block absolute top-0 left-0 right-0" src={case1} alt=""/>
						<p className=" text-xl">Настройка выгрузки YML для Яндекс.Маркета</p>
						<p className=" text-xs">22.04.2019</p>
						<p className=" text-xs">Эти слова совершенно справедливы, однако гипнотический рифф
							продолжает паузный пласт</p>
					</div>


					<div className="bg-caseeeeeee bg-cover bg-center bg-no-repeat h-[40vh] p-10 flex flex-col w-full md:w-[55%] justify-end relative">

						<p className="font-semibold text-white text-base items-end z-10">Настройка выгрузки
							YML для Яндекс.Маркета</p>

					</div>

					<div className="bg-caseeeeeeee bg-cover bg-center bg-no-repeat h-[40vh] flex flex-col w-full md:w-2/5 p-4 md:p-8 justify-end relative">
						<p className="font-semibold text-white text-base items-end z-10">Настройка выгрузки
							YML для Яндекс.Маркета</p>
					</div>




				</div>


			</div>
			<div className="pt-4 flex justify-center">
				<button className="py-4 px-10 border-2 rounded-md">ПОКАЗАТЬ ЕЩЕ</button>
			</div>
		</div>

	);
};

export default AppCase;




