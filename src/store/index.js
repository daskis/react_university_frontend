import {configureStore} from "@reduxjs/toolkit";
import modalSlice from "./slices/modalSlice";
import formSlice from "./slices/formSlice";
export default configureStore({
	reducer: {
		modal: modalSlice,
		form: formSlice
	},
})