import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {changeOpen} from "../../store/slices/modalSlice";
import closeIcon from "../../assets/closeIcon.svg"
import AppForm from "../AppForm/AppForm";
import {useNavigate} from "react-router-dom";

const AppModal = () => {
	const navigate = useNavigate();
	return (
		<div
			className="fixed z-50 w-[100vw] top-0 bottom-0 left-0 right-0 h-[100vh] bg-gray-700 bg-opacity-40 z-20">
			<div className="bg-[#040613] max-w-[95%] md:max-w-[60%] lg:max-w-[50%] sm-:h-[75vh] md:h-[80vh] mx-auto mt-[30px] p-8 rounded-xl text-white">
				<div className="flex justify-between items-center border-b-2 pb-6">
					<p className="text-2xl font-bold">Форма</p>
					<img onClick={() => navigate(-1)} className="w-8 cursor-pointer" src={closeIcon} alt=""/>
				</div>
				<AppForm/>
			</div>
		</div>
	);
};

export default AppModal;
