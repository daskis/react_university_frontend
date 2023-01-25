import React, {useState} from 'react';
import {useSelector, useDispatch} from "react-redux";
import {
	changeAgree,
	changeEmail, changeIsLoading,
	changeMessage,
	changeName,
	changeSuccess,
	changeTel
} from "../../store/slices/formSlice";

const AppForm = () => {
	const name = useSelector(state => state.form.name)
	const tel = useSelector(state => state.form.tel)
	const email = useSelector(state => state.form.email)
	const message = useSelector(state => state.form.message)
	const agree = useSelector(state => state.form.agree)
	const isLoading = useSelector(state => state.form.isLoading)
	const success = useSelector(state => state.form.success)
	const dispatch = useDispatch()

	const [isValid, setIsValid] = useState(false)
	const checkBoxHandler = () => {
		if (agree) {
			dispatch(changeAgree(false))
			setIsValid(false)
		} else {
			dispatch(changeAgree(true))
			setIsValid(true)

		}
	}


	const submitForm = (e) => {
		if (name && tel && agree && tel) {
			const data = {
				name,
				tel,
				email,
				message,
				agree
			}


			dispatch(changeIsLoading(true))
			fetch("https://formcarry.com/s/ieyYjAmah", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
					Accept: "application/json"
				},
				body: JSON.stringify(data)
			})
				.then((res) => res.json())
				.then(data => {
					dispatch(changeIsLoading(true))
					setTimeout(() => {
						dispatch(changeSuccess(true))
						dispatch(changeIsLoading(false))

					}, 700)
					setTimeout(() => {
						dispatch(changeSuccess(undefined))
					}, 3000)

				})
				.catch((e) => {
					setTimeout(() => {
						dispatch(changeIsLoading(false))

						dispatch(changeSuccess(false))
					}, 700)
					setTimeout(() => {
						dispatch(changeSuccess(undefined))
					}, 3700)
				})
		}
	}


	return (
		<div className="relative">
			<div className="w-full z-10 h-full absolute flex items-center justify-center">

				<div className={isLoading ? "spinner-container loading-spinner-start" : "spinner-container hidden" +
					" loading-spinner-done"}>
					<div className="loading-spinner">
					</div>
				</div>
				<div className={success === true ? "success-start" : "success-done hidden"}>
					<svg className="w-[100px]" viewBox="0 0 48 48" fill="none"
					     stroke="white" strokeWidth="3" strokeDasharray="100">
						<path id="check" d="M 12,22 L 22,31 L 36,13"
						      strokeDashoffset="0">
							<animate attributeName="stroke-dashoffset"
							         from="100" to="0" repeatCount="indefinite" dur="3s"></animate>
						</path>
					</svg>
				</div>

				<div className={success === false ? "success-start" : "success-done hidden"}>
					<svg className="w-[100px]" viewBox="0 0 48 48" fill="none"
					     stroke="white" strokeWidth="3" strokeDasharray="100">
						<path id="fail" d="M 15,15 L 32,33 M 32,15 L 15,33"
						      strokeDashoffset="0">
							<animate attributeName="stroke-dashoffset"
							         from="100" to="0" repeatCount="indefinite" dur="3s">
							</animate>
						</path>
					</svg>
				</div>
			</div>
			<form className="relative z-20">
				<input type="text"
				       value={name}
				       onChange={(e) => dispatch(changeName(e.target.value))}
				       className="p-5 text-white rounded-md focus:outline-red-500 focus:outline-4 my-4 bg-inherit block w-full  border rounded-lg border-opacity-30 border-white"
				       placeholder="Ваше имя"/>
				<input type="tel"
				       value={tel}
				       onChange={(e) => dispatch(changeTel(e.target.value))}
				       className="p-5 text-white rounded-md focus:outline-red-500 focus:outline-4 my-4 bg-inherit block w-full  border rounded-lg border-opacity-30 border-white"
				       placeholder="Телефон"/>
				<input type="email"
				       value={email}
				       onChange={(e) => dispatch(changeEmail(e.target.value))}
				       className="p-5 text-white rounded-md focus:outline-red-500 focus:outline-4 my-4 bg-inherit block w-full  border rounded-lg border-opacity-30 border-white"
				       placeholder="E-mail"/>
				<textarea
					value={message}
					onChange={(e) => dispatch(changeMessage(e.target.value))}
					className="p-5 text-white resize-none rounded-md focus:outline-red-500 focus:outline-4 my-4 bg-inherit block w-full border rounded-lg border-opacity-30 border-white"
					placeholder="Ваш комментарий"/>

				<div className="flex flex-col gap-4">

					<div className="flex items-start gap-4">
						<input className="w-6 h-6" onChange={checkBoxHandler} type="checkbox"/>
						<p className="text-white font-light opacity-70 text-sm">Отправляя заявку, я даю согласие на
							обработку своих персональных
							данных</p>
					</div>
					<button onClick={submitForm} type="button" className="disabled:bg-gray-500 text-white bg-[#F14D34] py-4 px-10 rounded-md">Оставить заявку!</button>
				</div>
			</form>
		</div>

	);
};

export default AppForm;
