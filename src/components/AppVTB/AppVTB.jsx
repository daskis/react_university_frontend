import React from 'react';
import "./AppVTB.css"
import logo1 from "../../assets/image_1.png"
import logo2 from "../../assets/image_2.png"
import logo3 from "../../assets/image_3.png"
import logo4 from "../../assets/image_4.png"


const AppVTB = () => {
	return (

		<div className="VTB mb-96">
            <div className="container">        
				<h2 className="text-center text-secondary font-bold text-4xl mt-36 mb-10">С нами работают</h2>
				<p className="text-center text-secondary text-lg mb-10">
				Десятки компаний доверяют нам самое ценное, что у них есть в интернете – свои 
				сайты. Мы делаем всё, чтобы наше сотрудничество было долгим.</p>
					
				<div className="container relative z-20">
					<ul className="-left-24 top-0 absolute flex justify-between overflow-hidden w-[120%] gap-4">
						<li className="w-[260px] px-6 flex justify-center items-center border flex-col relative">
						
							<img src={logo1} alt=""/>
						</li>
						<li className="w-[260px] px-6 flex justify-center items-center border flex-col relative">
			

							<img className="h-[50%]"src={logo2} alt=""/>
						</li>
						<li className="w-[260px] px-6 flex border justify-center items-center flex-col relative">
			
							<img src={logo3} alt=""/>
						</li>
						<li className="w-[260px] px-6 flex border justify-center items-center flex-col relative">

							<img src={logo1} alt=""/>
						</li>
						<li className="w-[260px] px-6 flex border justify-center items-center flex-col relative">

							<img className="h-[50%]"src={logo2} alt=""/>
						</li>	
					</ul>

					<ul className="-right-24 top-44 absolute flex justify-between overflow-hidden w-[120vw] gap-4">
						
						<li className="w-[260px] px-6 flex justify-center items-center border flex-col relative ">
							
							<img src={logo1} alt=""/>
						</li>
						<li className="w-[260px] px-6 flex justify-center items-center border flex-col relative ">


							<img className="h-[50%]"src={logo2} alt=""/>
						</li>
						<li className="w-[260x] px-6 flex border justify-center items-center flex-col relative ">

							<img src={logo3} alt=""/>
						</li>
						<li className="w-[260px] px-6 flex border justify-center items-center flex-col relative ">

							<img src={logo1} alt=""/>
						</li>
						<li className="w-[260px] px-6 flex border justify-center items-center flex-col relative ">

							<img className="h-[50%]"src={logo2} alt=""/>
						</li>	

						<li className="w-[260px] px-6 flex justify-center items-center border flex-col relative ">


							<img className="h-[50%]"src={logo2} alt=""/>
						</li>

					</ul>
			</div>				 
	</div>
</div>        

	)
}

export default AppVTB;
