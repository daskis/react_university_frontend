import {createSlice} from "@reduxjs/toolkit";


const name = localStorage.getItem("name") !== null ? JSON.parse(localStorage.getItem("name")) : ""
const tel = localStorage.getItem("tel") !== null ? JSON.parse(localStorage.getItem("tel")) : ""
const email = localStorage.getItem("email") !== null ? JSON.parse(localStorage.getItem("email")) : ""
const message = localStorage.getItem("message") !== null ? JSON.parse(localStorage.getItem("message")) : ""
const agree = localStorage.getItem("agree") !== null ? JSON.parse(localStorage.getItem("agree")) : false
const initialState = {
	name: name,
	tel: tel,
	email: email,
	message: message,
	agree: agree,
	success: undefined,
	isLoading: false
}

const formSlice = createSlice({
	name: "form",
	initialState,
	// Редьюсеры в слайсах мутируют состояние и ничего не возвращают наружу
	reducers: {
		changeName: (state, action) => {
			localStorage.setItem("name", JSON.stringify(action.payload))
			state.name = action.payload
		},
		changeTel: (state, action) => {
			localStorage.setItem("tel", JSON.stringify(action.payload))
			state.tel = action.payload
		},
		changeEmail: (state, action) => {
			localStorage.setItem("email", JSON.stringify(action.payload))
			state.email = action.payload
		},
		changeMessage: (state, action) => {
			localStorage.setItem("message", JSON.stringify(action.payload))
			state.message = action.payload
		},
		changeAgree: (state, action) => {
			localStorage.setItem("agree", JSON.stringify(action.payload))
			state.agree = action.payload
		},
		changeSuccess: (state, action) => {
			state.success = action.payload
		},
		changeIsLoading: (state, action) => {
			state.isLoading = action.payload
		}
	},

})
export const {changeName, changeTel, changeEmail, changeMessage, changeAgree, changeSuccess, changeIsLoading} = formSlice.actions;

// По умолчанию экспортируется редьюсер, сгенерированный слайсом
export default formSlice.reducer;