import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {changeOpen} from "../../store/slices/modalSlice";
import closeIcon from "../../assets/closeIcon.svg"
import AppForm from "../AppForm/AppForm";
const AppModal = () => {
	const isOpen = useSelector(state => state.modal.isOpen)
	const dispatch = useDispatch();
	const closeModal = () => {
		dispatch(changeOpen(false))
	}
	return (
		<>
			{isOpen
				?
				<div className="fixed z-50 w-[100vw] top-0 bottom-0 left-0 right-0 h-[100vh] bg-gray-700 bg-opacity-40 z-20">
					<div className="bg-[#040613] max-w-[50%] h-[80vh] mx-auto mt-[100px] p-10 rounded-xl text-white">
						<div className="flex justify-between items-center border-b-2 pb-6">
							<p className="text-2xl font-bold">Форма</p>
							<img onClick={closeModal} className="w-8 cursor-pointer" src={closeIcon} alt=""/>
						</div>
						<AppForm/>
					</div>
				</div>
				:
				<></>
			}
		</>
	);
};

export default AppModal;
