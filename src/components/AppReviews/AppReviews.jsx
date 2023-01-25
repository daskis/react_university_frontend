import React, {useCallback, useEffect, useRef, useState} from 'react';
import review_1 from "../../assets/reviews/review_1.png"
import review_2 from "../../assets/reviews/review_2.png"
import review_3 from "../../assets/reviews/review_3.png"
import review_4 from "../../assets/reviews/review_4.png"
import review_5 from "../../assets/reviews/review_5.jpg"
import review_6 from "../../assets/reviews/review_6.png"
import review_7 from "../../assets/reviews/review_7.png"
import review_8 from "../../assets/reviews/review_8.png"
import review_9 from "../../assets/reviews/review_9.jpg"
import arrow_left from "../../assets/reviews/arrow-left.svg"
import arrow_right from "../../assets/reviews/arrow-right.svg"
import {CSSTransition, Transition, TransitionGroup} from "react-transition-group";
import "./AppReviews.css"

const AppReviews = () => {


	const imgNumbers = [0, 1, 2, 3, 4, 5, 6, 7];
	const [count, setCount] = useState(0)
	const [data, setData] = useState([
		{
			text: "Команда Drupal Coder вызвала только положительные впечатления!1",
			name: "Нуреев Александр, менеджер проекта Winamp Russian Community1",
			img: review_1
		},
		{
			text: "Команда Drupal Coder вызвала только положительные впечатления!2",
			name: "Нуреев Александр, менеджер проекта Winamp Russian Community2",
			img: review_2
		},
		{
			text: "Команда Drupal Coder вызвала только положительные впечатления!3",
			name: "Нуреев Александр, менеджер проекта Winamp Russian Community3",
			img: review_3
		},
		{
			text: "Команда Drupal Coder вызвала только положительные впечатления!4",
			name: "Нуреев Александр, менеджер проекта Winamp Russian Community4",
			img: review_4
		},
		{
			text: "Команда Drupal Coder вызвала только положительные впечатления!5",
			name: "Нуреев Александр, менеджер проекта Winamp Russian Community5",
			img: review_5
		},
		{
			text: "Команда Drupal Coder вызвала только положительные впечатления!6",
			name: "Нуреев Александр, менеджер проекта Winamp Russian Community6",
			img: review_6
		},
		{
			text: "Команда Drupal Coder вызвала только положительные впечатления!7",
			name: "Нуреев Александр, менеджер проекта Winamp Russian Community7",
			img: review_7
		},
		{
			text: "Команда Drupal Coder вызвала только положительные впечатления!8",
			name: "Нуреев Александр, менеджер проекта Winamp Russian Community8",
			img: review_8
		},

		{
			text: "Команда Drupal Coder вызвала только положительные впечатления!9",
			name: "Нуреев Александр, менеджер проекта Winamp Russian Community9",
			img: review_9
		},
	])
	const goRight = () => {
		if (count < data.length - 1) {
			setCount(count => count + 1)
		}
	}
	const goLeft = () => {
		if (count > 0) {
			setCount(count => count - 1)
		}
	}
	return (
		<div className="bg-reviewsbg bg-no-repeat bg-left-top mb-40">
			<div className="container">
				<div className="max-w-full md:max-w-[80%] bg-no-repeat bg-cover mx-auto bg-reviews ">
					<h2 className="text-center text-secondary font-bold text-4xl mt-36 mb-20">Отзывы</h2>
					<div className=" justify-between w-full px-0 md:px-12">
						{data.map((item, i) => (
							<div
								key={item.text}
								className={count === i ? "flex flex-col gap-8 md:gap-0 md:flex-row border-2 review" +
									" max-w-[900px]" +
									" bg-white p-10 flex" +
									" justify-between" : "hidden" }>
								<div
									className="flex flex-col md:border-r-2 pr0 md:pr-8 w-full md:w-2/3 ">
									<img className="h-[40px] md:h-[60px] w-fit" src={data[i].img} alt=""/>
									<p className="font-bold pt-8 pb-4  text-xl lg:text-2xl">{data[i].text}</p>
									<p>{data[i].name}</p>
								</div>
								<div data-aos="fade-right"
								     className="flex w-full md:w-1/3 px-6 pl-6 lg-:pl-12 items-center justify-between ">
									<img onClick={goLeft} className=" cursor-pointer" src={arrow_left} alt=""/>
									<p className="px-6">{count + 1}/{data.length}</p>
									<img onClick={goRight} className=" cursor-pointer" src={arrow_right} alt=""/>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	)
		;
};


export default AppReviews;
