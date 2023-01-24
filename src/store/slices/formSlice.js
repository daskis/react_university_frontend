import {createSlice} from "@reduxjs/toolkit";

const initialState = {
	name: "",
	tel: "",
	email: "",
	message: "",
	agree: false,
	success: false
}
const formSlice = createSlice({
	name: "form",
	initialState,
	// Редьюсеры в слайсах мутируют состояние и ничего не возвращают наружу
	reducers: {
		changeName: (state, action) => {
			state.name = action.payload
		},
		changeTel: (state, action) => {
			state.tel = action.payload
		},
		changeEmail: (state, action) => {
			state.email = action.payload
		},
		changeMessage: (state, action) => {
			state.message = action.payload
		},
		changeAgree: (state, action) => {
			state.agree = action.payload
		},
		changeSuccess: (state, action) => {
			state.success = action.payload
		}
	},

})
export const {changeName, changeTel, changeEmail, changeMessage, changeAgree, changeSuccess} = formSlice.actions;

// По умолчанию экспортируется редьюсер, сгенерированный слайсом
export default formSlice.reducer;