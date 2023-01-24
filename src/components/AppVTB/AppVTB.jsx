import React, {useState} from 'react';
import "./AppVTB.css"
import logo1 from "../../assets/image_1.png"
import logo2 from "../../assets/image_2.png"
import logo3 from "../../assets/image_3.png"
import logo4 from "../../assets/image_4.png"
import {Swiper, SwiperSlide} from "swiper/react";
import 'swiper/css';


const AppVTB = () => {
	const [names, setNames] = useState([
		{
			img: logo1
		},
		{
			img: logo2
		},
		{
			img: logo3
		},
		{
			img: logo4
		},
		{
			img: logo1
		},
		{
			img: logo2
		},
		{
			img: logo3
		},
		{
			img: logo4
		},
		{
			img: logo1
		},
		{
			img: logo2
		},
		{
			img: logo3
		},
		{
			img: logo4
		},
		{
			img: logo1
		},
		{
			img: logo2
		},
		{
			img: logo3
		},
		{
			img: logo4
		},
	])
	return (

		<div className="VTB mb-40">
			<div className="">
				<h2 className="text-center container text-secondary font-bold text-4xl mt-36 mb-10">С нами работают</h2>
				<p className="text-center  container text-secondary text-lg">
					Десятки компаний доверяют нам самое ценное, что у них есть в интернете – свои
					сайты. Мы делаем всё, чтобы наше сотрудничество было долгим.</p>

				<div className="relative z-20 mt-6">
					<Swiper
						spaceBetween={50}
						loop={true}
						loopFillGroupWithBlank={true}
						slidesPerView={5}

					>
						<SwiperSlide>
							<div className="flex border-2 w-[290px] h-[160px] justify-center items-center">
								<img src={names[1].img} alt=""/>
							</div>
						</SwiperSlide>
						<SwiperSlide>
							<div className="flex border-2 w-[290px] h-[160px] justify-center items-center">
								<img src={names[2].img} alt=""/>
							</div>
						</SwiperSlide>
						<SwiperSlide>
							<div className="flex border-2 w-[290px] h-[160px] justify-center items-center">
								<img src={names[3].img} alt=""/>
							</div>
						</SwiperSlide>
						<SwiperSlide>
							<div className="flex border-2 w-[290px] h-[160px] justify-center items-center">
								<img src={names[4].img} alt=""/>
							</div>
						</SwiperSlide>
						<SwiperSlide>
							<div className="flex border-2 w-[290px] h-[160px] justify-center items-center">
								<img src={names[1].img} alt=""/>
							</div>
						</SwiperSlide>
						<SwiperSlide>
							<div className="flex border-2 w-[290px] h-[160px] justify-center items-center">
								<img src={names[2].img} alt=""/>
							</div>
						</SwiperSlide>
						<SwiperSlide>
							<div className="flex border-2 w-[290px] h-[160px] justify-center items-center">
								<img src={names[3].img} alt=""/>
							</div>
						</SwiperSlide>
						<SwiperSlide>
							<div className="flex border-2 w-[290px] h-[160px] justify-center items-center">
								<img src={names[4].img} alt=""/>
							</div>
						</SwiperSlide>
						<SwiperSlide>
							<div className="flex border-2 w-[290px] h-[160px] justify-center items-center">
								<img src={names[1].img} alt=""/>
							</div>
						</SwiperSlide>
						<SwiperSlide>
							<div className="flex border-2 w-[290px] h-[160px] justify-center items-center">
								<img src={names[2].img} alt=""/>
							</div>
						</SwiperSlide>
						<SwiperSlide>
							<div className="flex border-2 w-[290px] h-[160px] justify-center items-center">
								<img src={names[3].img} alt=""/>
							</div>
						</SwiperSlide>
						<SwiperSlide>
							<div className="flex border-2 w-[290px] h-[160px] justify-center items-center">
								<img src={names[4].img} alt=""/>
							</div>
						</SwiperSlide>
						<SwiperSlide>
							<div className="flex border-2 w-[290px] h-[160px] justify-center items-center">
								<img src={names[1].img} alt=""/>
							</div>
						</SwiperSlide>
						<SwiperSlide>
							<div className="flex border-2 w-[290px] h-[160px] justify-center items-center">
								<img src={names[2].img} alt=""/>
							</div>
						</SwiperSlide>
						<SwiperSlide>
							<div className="flex border-2 w-[290px] h-[160px] justify-center items-center">
								<img src={names[3].img} alt=""/>
							</div>
						</SwiperSlide>
						<SwiperSlide>
							<div className="flex border-2 w-[290px] h-[160px] justify-center items-center">
								<img src={names[4].img} alt=""/>
							</div>
						</SwiperSlide>
						<SwiperSlide>
							<div className="flex border-2 w-[290px] h-[160px] justify-center items-center">
								<img src={names[1].img} alt=""/>
							</div>
						</SwiperSlide>
						<SwiperSlide>
							<div className="flex border-2 w-[290px] h-[160px] justify-center justify-center items-center">
								<img src={names[2].img} alt=""/>
							</div>
						</SwiperSlide>
						<SwiperSlide>
							<div className="flex border-2 w-[290px] h-[160px] justify-center items-center">
								<img src={names[3].img} alt=""/>
							</div>
						</SwiperSlide>
						<SwiperSlide>
							<div className="flex border-2 w-[290px] h-[160px] justify-center items-center">
								<img src={names[4].img} alt=""/>
							</div>
						</SwiperSlide>

					</Swiper>

					<Swiper
						spaceBetween={50}
						loop={true}
						loopFillGroupWithBlank={true}
						slidesPerView={5}

					>
						<SwiperSlide>
							<div className="flex border-2 w-[290px] h-[160px] justify-center items-center">
								<img src={names[1].img} alt=""/>
							</div>
						</SwiperSlide>
						<SwiperSlide>
							<div className="flex border-2 w-[290px] h-[160px] justify-center items-center">
								<img src={names[2].img} alt=""/>
							</div>
						</SwiperSlide>
						<SwiperSlide>
							<div className="flex border-2 w-[290px] h-[160px] justify-center items-center">
								<img src={names[3].img} alt=""/>
							</div>
						</SwiperSlide>
						<SwiperSlide>
							<div className="flex border-2 w-[290px] h-[160px] justify-center items-center">
								<img src={names[4].img} alt=""/>
							</div>
						</SwiperSlide>
						<SwiperSlide>
							<div className="flex border-2 w-[290px] h-[160px] justify-center items-center">
								<img src={names[1].img} alt=""/>
							</div>
						</SwiperSlide>
						<SwiperSlide>
							<div className="flex border-2 w-[290px] h-[160px] justify-center items-center">
								<img src={names[2].img} alt=""/>
							</div>
						</SwiperSlide>
						<SwiperSlide>
							<div className="flex border-2 w-[290px] h-[160px] justify-center items-center">
								<img src={names[3].img} alt=""/>
							</div>
						</SwiperSlide>
						<SwiperSlide>
							<div className="flex border-2 w-[290px] h-[160px] justify-center items-center">
								<img src={names[4].img} alt=""/>
							</div>
						</SwiperSlide>
						<SwiperSlide>
							<div className="flex border-2 w-[290px] h-[160px] justify-center items-center">
								<img src={names[1].img} alt=""/>
							</div>
						</SwiperSlide>
						<SwiperSlide>
							<div className="flex border-2 w-[290px] h-[160px] justify-center items-center">
								<img src={names[2].img} alt=""/>
							</div>
						</SwiperSlide>
						<SwiperSlide>
							<div className="flex border-2 w-[290px] h-[160px] justify-center items-center">
								<img src={names[3].img} alt=""/>
							</div>
						</SwiperSlide>
						<SwiperSlide>
							<div className="flex border-2 w-[290px] h-[160px] justify-center items-center">
								<img src={names[4].img} alt=""/>
							</div>
						</SwiperSlide>
						<SwiperSlide>
							<div className="flex border-2 w-[290px] h-[160px] justify-center items-center">
								<img src={names[1].img} alt=""/>
							</div>
						</SwiperSlide>
						<SwiperSlide>
							<div className="flex border-2 w-[290px] h-[160px] justify-center items-center">
								<img src={names[2].img} alt=""/>
							</div>
						</SwiperSlide>
						<SwiperSlide>
							<div className="flex border-2 w-[290px] h-[160px] justify-center items-center">
								<img src={names[3].img} alt=""/>
							</div>
						</SwiperSlide>
						<SwiperSlide>
							<div className="flex border-2 w-[290px] h-[160px] justify-center items-center">
								<img src={names[4].img} alt=""/>
							</div>
						</SwiperSlide>
						<SwiperSlide>
							<div className="flex border-2 w-[290px] h-[160px] justify-center items-center">
								<img src={names[1].img} alt=""/>
							</div>
						</SwiperSlide>
						<SwiperSlide>
							<div className="flex border-2 w-[290px] h-[160px] justify-center justify-center items-center">
								<img src={names[2].img} alt=""/>
							</div>
						</SwiperSlide>
						<SwiperSlide>
							<div className="flex border-2 w-[290px] h-[160px] justify-center items-center">
								<img src={names[3].img} alt=""/>
							</div>
						</SwiperSlide>
						<SwiperSlide>
							<div className="flex border-2 w-[290px] h-[160px] justify-center items-center">
								<img src={names[4].img} alt=""/>
							</div>
						</SwiperSlide>

					</Swiper>
				</div>
			</div>
		</div>

	)
}

export default AppVTB;
