import {createSlice} from "@reduxjs/toolkit";
const initialState = {
	isOpen: false
}
const modalSlice = createSlice({
	name: "modal",
	initialState,
	// Редьюсеры в слайсах мутируют состояние и ничего не возвращают наружу
	reducers: {
		changeOpen: (state, action) => {
			state.isOpen = action.payload
		}
	},

})
export const {changeOpen } = modalSlice.actions;

// По умолчанию экспортируется редьюсер, сгенерированный слайсом
export default modalSlice.reducer;