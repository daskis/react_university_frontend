import React from 'react';
import case1 from "../../assets/case1.jpg"
import case2 from "../../assets/case2.png"
import case3 from "../../assets/case3.png"
import case4 from "../../assets/case4.png"
import case5 from "../../assets/case5.png"
import case6 from "../../assets/case6.jpg"
import case7 from "../../assets/case7.png"

const AppCase = () => {
	return (
		<div className="Case">
			<div className="container">
				<h2 className="text-center text-secondary font-bold text-4xl mt-36 mb-20">Последние кейсы</h2>
				

				<div className="grid grid-cols-3 gap-4">
					<div className=""><img src={case1} alt=""/>
						<p className="pl-6 mt-8 text-xl">Настройка выгрузки YML для Яндекс.Маркета</p>
						<p className="pl-6 text-xs">22.04.2019</p>
						<p className="mt-4 pl-6 text-xs">Эти слова совершенно справедливы, однако гипнотический рифф продолжает паузный пласт.</p>
					</div>
					
					
					<div className="flex flex-col items-start justify-end relative h-[474px] col-span-2"><img className="absolute" src={case2} alt=""/>
						<p className="pl-6 pb-6 font-semibold pl-6 mb-6 text-base text-white relative z-10" >Настройка выгрузки YML для Яндекс.Маркета</p>
					</div>

					
					<div className="flex flex-col items-start relative justify-end h-[474px]"><img className="absolute" src={case3} alt=""/>									
						<p className="pl-6 mt-16 font-semibold text-base text-white relative z-10" >Настройка выгрузки YML для Яндекс.Маркета</p>
						<p className="pl-6 pb-10 text-white text-xs z-10">22.04.2019</p>
					</div>

					<div className="flex flex-col items-start justify-end relative h-[474px]"><img className="absolute" src={case4} alt=""/>
						<p className="pl-6 mt-16 font-semibold text-white text-base items-end z-10">Настройка выгрузки YML для Яндекс.Маркета</p>
						<p className="pl-6 pb-10 text-white text-xs z-10">22.04.2019</p>
					
					</div>
					
					
					<div className=""><img src={case5} alt=""/>
						<p className="pl-6 mt-8 text-xl">Настройка выгрузки YML для Яндекс.Маркета</p>
						<p className="pl-6 text-xs">22.04.2019</p>
						<p className="mt-6 pl-6 text-xs">Эти слова совершенно справедливы, однако гипнотический рифф продолжает паузный пласт</p>
					</div>


					
					<div className="col-span-2 flex items-end relative h-[474px]"><img className="absolute" src={case6} alt=""/>
					
					<p className="pl-6 pb-10 font-semibold text-white text-base items-end z-10">Настройка выгрузки YML для Яндекс.Маркета</p>
					
					</div>
					
					
					
					<div className="flex flex-col items-start justify-end relative h-[474px]"><img className="absolute" src={case7} alt=""/>					
						<p className="pl-6 mt-16 font-semibold text-white text-base items-end z-10">Настройка выгрузки YML для Яндекс.Маркета</p>
						<p className="pl-6 pb-10 text-white text-xs items-end z-10">22.04.2019</p>
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




