import React, {useState} from 'react';
import {useSelector, useDispatch} from "react-redux";
import {
	changeAgree,
	changeEmail,
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
	const dispatch = useDispatch()


	const checkBoxHandler = () => {
		if (agree) {
			dispatch(changeAgree(false))
		} else {
			dispatch(changeAgree(true))
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
					dispatch(changeSuccess(true))
					setTimeout(() => {
						dispatch(changeSuccess(false))
					}, 2000)
				})
		}
	}


	return (
		<form>
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
					<input className="w-6 h-6" onChange={checkBoxHandler}  type="checkbox"/>
					<p className="text-white font-light opacity-70 text-sm">Отправляя заявку, я даю согласие на
						обработку своих персональных
						данных</p>
				</div>
				<button onClick={submitForm} type="button" className="text-white bg-[#F14D34] py-4 px-10 rounded-md">Оставить заявку!</button>
			</div>
		</form>
	);
};

export default AppForm;
