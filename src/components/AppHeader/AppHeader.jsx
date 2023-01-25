import React, {useState} from 'react';
import "./AppHeader.css"
import {Dropdown} from "flowbite-react";
import video from "../../assets/video.mp4"

const AppHeader = () => {
	const [firstDrop, setFirstDrop] = useState(false)
	const [secondDrop, setSecondDrop] = useState(false)
	const [isOpen, setIsOpen] = useState(false)
	const smooth = () => {
		document.getElementById("rates").scrollIntoView({
			behavior: 'smooth',
			block: 'start'
		})
	}
	return (
		<header className="w-[100vw] relative bg-black bg-opacity-90 z-40">
			<video className="absolute z-10 object-cover top-0 left-0 right-0 min-w-full min-h-full w-auto h-auto"
			       autoPlay="autoplay" muted preload="auto" loop
			       playsInline>
				<source className="" src={video} type="video/mp4"/>
			</video>
			<nav className="sticky z-50 sm:px-4 py-2.5 rounded ">
				<div className="container flex flex-wrap items-center justify-between mx-auto">
					<svg className="relative z-50" width="145" height="25" viewBox="0 0 138 20" fill="none"
					     xmlns="http://www.w3.org/2000/svg">
						<path
							d="M29.618 6.20038C30.1621 5.69982 30.6799 5.31462 31.1712 5.04476C31.6646 4.7749 32.1701 4.63997 32.6879 4.63997C33.0127 4.63997 33.3041 4.67383 33.5619 4.74156C33.8218 4.79448 34.0746 4.88972 34.3203 5.0273L33.9518 7.21315C33.7315 7.07769 33.4919 6.96921 33.233 6.88773C32.9731 6.80518 32.6879 6.76391 32.3772 6.76391C32.1701 6.76391 31.9696 6.79037 31.7757 6.84328C31.593 6.89831 31.3986 6.9798 31.1925 7.08774C30.9976 7.18298 30.7905 7.31104 30.5712 7.47189C30.3631 7.62005 30.123 7.78831 29.851 7.97668V13.1437H32.729V14.947H25.1106V13.1468H27.5196V6.74645H25.2278V4.92412H29.4611L29.618 6.20038ZM38.3587 4.92412V11.3436C38.3587 12.0463 38.4683 12.5331 38.6876 12.804C38.9211 13.058 39.2322 13.1849 39.621 13.1849C39.9682 13.1849 40.3296 13.1045 40.7052 12.9437C41.0808 12.768 41.4697 12.5182 41.8717 12.1944V4.92412H44.2015V14.9501H42.298L42.1412 13.9183C41.8823 14.1056 41.6235 14.2739 41.3646 14.4231C41.1057 14.5713 40.8403 14.6993 40.5682 14.8073C40.2961 14.9152 40.0169 14.9962 39.7307 15.0501C39.4596 15.12 39.1688 15.1549 38.8581 15.1549C37.9242 15.1549 37.2186 14.8983 36.7415 14.385C36.2613 13.8601 36.0212 13.0167 36.0212 11.8547V4.92412H38.3587ZM46.7856 4.92412H48.6891L48.8444 5.95593C49.3368 5.6067 49.8291 5.31673 50.3215 5.08603C50.827 4.85639 51.3712 4.74156 51.9539 4.74156C52.4584 4.74156 52.9183 4.82252 53.3335 4.98444C53.7477 5.14635 54.0979 5.42309 54.3842 5.81465C54.6807 6.2062 54.9065 6.72634 55.0619 7.37506C55.2283 8.02272 55.3116 8.83229 55.3116 9.80378C55.3116 10.7774 55.2014 11.6081 54.9811 12.296C54.7609 12.9712 54.4629 13.5246 54.0873 13.9564C53.7259 14.3755 53.2995 14.6792 52.8082 14.8676C52.3148 15.0581 51.7833 15.1533 51.2138 15.1533C50.7996 15.1533 50.4108 15.0988 50.0474 14.9898C49.6982 14.8946 49.3616 14.7528 49.0378 14.5644L49.018 14.585C49.0464 14.9766 49.0667 15.3417 49.0789 15.6803C49.1053 16.0169 49.1185 16.3672 49.1185 16.7312V19.2441H46.7887L46.7856 4.92412ZM49.1155 12.7024C49.4139 12.877 49.6992 13.0114 49.9713 13.1056C50.2433 13.2008 50.5352 13.2484 50.8468 13.2484C51.1311 13.2484 51.3976 13.2008 51.6463 13.1056C51.9052 13.0103 52.1315 12.8357 52.3254 12.5817C52.5336 12.3235 52.696 11.9785 52.8127 11.5467C52.9295 11.115 52.9879 10.5615 52.9879 9.88633C52.9879 9.22491 52.9493 8.68519 52.8721 8.26718C52.7929 7.84705 52.6762 7.52269 52.5219 7.2941C52.3798 7.06446 52.198 6.90889 51.9767 6.82741C51.7696 6.73534 51.5311 6.6893 51.261 6.6893C50.9362 6.6893 50.6052 6.77714 50.2682 6.95281C49.9312 7.11367 49.5489 7.34913 49.1216 7.6592L49.1155 12.7024ZM63.201 8.04336C63.201 7.55655 63.0513 7.19145 62.7518 6.94805C62.4523 6.70465 61.96 6.58295 61.2747 6.58295C60.8078 6.58295 60.3215 6.61734 59.8159 6.68613C59.3104 6.75386 58.8114 6.84169 58.319 6.94964L58.1059 5.16699C58.649 5.03153 59.2246 4.92359 59.8327 4.84316C60.4418 4.76379 61.0509 4.7241 61.66 4.7241C62.3706 4.7241 62.9726 4.79183 63.466 4.92729C63.9594 5.04899 64.3553 5.23789 64.6538 5.49399C64.9644 5.74798 65.1842 6.07816 65.3131 6.48453C65.4552 6.88985 65.5263 7.36924 65.5263 7.92271V14.9501H63.5909L63.4538 14.0199C62.9625 14.3321 62.4381 14.602 61.8808 14.8295C61.3367 15.0475 60.7539 15.1565 60.1327 15.1565C59.2495 15.1565 58.5236 14.9131 57.9551 14.4263C57.3968 13.9395 57.1176 13.1971 57.1176 12.1992C57.1176 11.6732 57.2018 11.2007 57.3704 10.7816C57.5389 10.3625 57.8181 10.0112 58.2079 9.72759C58.6079 9.44397 59.1317 9.22703 59.7794 9.07675C60.4271 8.9286 61.224 8.85452 62.1701 8.85452H63.1995L63.201 8.04336ZM62.2265 10.4324C61.6438 10.4324 61.1585 10.4663 60.7707 10.534C60.3819 10.5869 60.0707 10.6821 59.8372 10.8197C59.6038 10.9531 59.4413 11.1213 59.35 11.3245C59.2606 11.5129 59.216 11.742 59.216 12.0119C59.216 12.4849 59.3388 12.8288 59.5845 13.0437C59.8423 13.2479 60.1976 13.35 60.6504 13.35C61.0768 13.35 61.4778 13.276 61.8534 13.1278C62.2432 12.9648 62.6899 12.7283 63.1934 12.4182V10.434L62.2265 10.4324ZM74.8959 13.1468V14.9501H69.3576V1.80646H66.3273V0H71.6874V13.1468H74.8959ZM77.1161 8.52751H83.4888V10.6149H77.1161V8.52751ZM94.1147 14.7469C93.6609 14.8549 93.1751 14.9501 92.6574 15.0327C92.1518 15.112 91.6463 15.1517 91.1407 15.1517C90.2981 15.1517 89.5672 15.0777 88.9479 14.9295C88.3388 14.7676 87.8328 14.4908 87.4297 14.0993C87.042 13.7077 86.744 13.1807 86.5359 12.5182C86.343 11.8568 86.2466 11.0197 86.2466 10.007C86.2466 8.98045 86.3694 8.13013 86.6151 7.45602C86.8607 6.78084 87.1973 6.24113 87.6247 5.83687C88.0652 5.41674 88.5962 5.12571 89.2175 4.9638C89.8367 4.80189 90.5286 4.72093 91.293 4.72093C91.8107 4.72093 92.3097 4.75479 92.7899 4.82252C93.269 4.89025 93.736 4.98549 94.1908 5.10825L93.9746 6.88614C93.5604 6.78031 93.1594 6.70624 92.7716 6.66391C92.3818 6.61099 91.9473 6.58454 91.4681 6.58454C91.0143 6.58454 90.6057 6.63216 90.2423 6.7274C89.8931 6.80783 89.5885 6.97609 89.3286 7.23219C89.083 7.4756 88.8952 7.81318 88.7652 8.24496C88.6363 8.67885 88.5718 9.23973 88.5718 9.9276C88.5718 10.6292 88.6236 11.1954 88.7271 11.6261C88.8439 12.0463 89.019 12.3849 89.2525 12.6421C89.486 12.896 89.7839 13.0707 90.1464 13.1659C90.5088 13.2611 90.9489 13.3088 91.4666 13.3088C91.8544 13.3088 92.2554 13.2823 92.6696 13.2294C93.0959 13.1606 93.5173 13.0722 93.9335 12.9643L94.1147 14.7469ZM105.341 9.86569C105.341 10.9049 105.236 11.769 105.028 12.4579C104.821 13.1458 104.524 13.6993 104.136 14.1183C103.747 14.5237 103.274 14.8073 102.717 14.9692C102.173 15.1449 101.557 15.2327 100.871 15.2327C100.159 15.2327 99.5301 15.1517 98.986 14.9898C98.4419 14.8417 97.982 14.5718 97.6064 14.1802C97.244 13.7887 96.9658 13.2553 96.7719 12.5801C96.577 11.905 96.4795 11.0478 96.4795 10.0086C96.4795 8.96828 96.5836 8.10368 96.7917 7.41475C96.9988 6.72687 97.2902 6.18187 97.6658 5.77972C98.0536 5.35959 98.5195 5.06857 99.0637 4.90665C99.6078 4.73098 100.23 4.64315 100.929 4.64315C101.642 4.64315 102.27 4.7241 102.814 4.88602C103.358 5.03417 103.818 5.30403 104.194 5.69559C104.569 6.08715 104.854 6.62157 105.047 7.29886C105.243 7.97298 105.341 8.83018 105.341 9.87045V9.86569ZM102.989 9.94506C102.989 9.24449 102.944 8.67091 102.852 8.22432C102.775 7.77985 102.646 7.43062 102.464 7.17664C102.295 6.91948 102.075 6.74328 101.803 6.64803C101.544 6.55279 101.24 6.50516 100.889 6.50516C100.54 6.50516 100.236 6.55279 99.9758 6.64803C99.7322 6.74328 99.519 6.91895 99.3363 7.17505C99.1535 7.41845 99.0241 7.76239 98.9479 8.20686C98.8667 8.65133 98.8261 9.22491 98.8261 9.9276C98.8261 10.6303 98.8657 11.2113 98.9449 11.6706C99.021 12.1172 99.15 12.4685 99.3317 12.7246C99.5144 12.9807 99.7276 13.1564 99.9712 13.2516C100.231 13.3469 100.542 13.3945 100.905 13.3945C101.255 13.3945 101.559 13.3469 101.818 13.2516C102.077 13.1564 102.29 12.987 102.458 12.7436C102.641 12.4875 102.771 12.1367 102.848 11.6912C102.939 11.2319 102.985 10.6515 102.985 9.94982L102.989 9.94506ZM113.614 13.9167C113.12 14.2681 112.621 14.5644 112.117 14.8057C111.624 15.0364 111.086 15.1517 110.503 15.1517C109.998 15.1517 109.539 15.0708 109.125 14.9089C108.71 14.7469 108.354 14.4702 108.056 14.0787C107.771 13.6871 107.544 13.1659 107.375 12.5151C107.22 11.8674 107.142 11.0578 107.142 10.0863C107.142 9.10003 107.252 8.2693 107.472 7.59412C107.693 6.91895 107.984 6.37182 108.345 5.95275C108.721 5.52204 109.156 5.21249 109.65 5.02412C110.142 4.83363 110.674 4.73839 111.244 4.73839C111.658 4.73839 112.04 4.78601 112.389 4.88126C112.753 4.9765 113.096 5.11831 113.42 5.30668L113.439 5.28604C113.413 4.9093 113.388 4.55213 113.362 4.21455C113.349 3.8632 113.343 3.50551 113.343 3.14146V0H115.676V14.9485H113.772L113.614 13.9167ZM113.34 7.17029C113.042 6.99567 112.758 6.86127 112.487 6.76709C112.213 6.67184 111.921 6.62422 111.611 6.62422C111.327 6.62422 111.055 6.67184 110.795 6.76709C110.547 6.86233 110.32 7.038 110.113 7.2941C109.918 7.5502 109.762 7.89414 109.645 8.32591C109.529 8.7598 109.47 9.32068 109.47 10.0086C109.47 10.6689 109.51 11.2086 109.589 11.6277C109.667 12.033 109.777 12.3569 109.919 12.5992C110.075 12.8288 110.256 12.9844 110.463 13.0659C110.67 13.1484 110.91 13.1897 111.182 13.1897C111.519 13.1897 111.856 13.1088 112.193 12.9468C112.53 12.7849 112.912 12.5489 113.34 12.2389V7.17029ZM126.18 14.6866C125.662 14.8348 125.111 14.9496 124.527 15.0311C123.959 15.1094 123.33 15.1486 122.642 15.1486C121.915 15.1486 121.267 15.0814 120.696 14.947C120.128 14.8115 119.648 14.5612 119.259 14.1961C118.87 13.8183 118.571 13.2987 118.363 12.6373C118.156 11.9621 118.053 11.0838 118.053 10.0022C118.053 8.96511 118.163 8.10156 118.383 7.41157C118.603 6.7237 118.914 6.17763 119.316 5.77337C119.717 5.3543 120.197 5.06328 120.754 4.9003C121.322 4.72569 121.938 4.63838 122.6 4.63838C123.273 4.63838 123.855 4.71246 124.348 4.86062C124.84 4.99608 125.248 5.23948 125.572 5.59082C125.909 5.92947 126.155 6.39511 126.311 6.98774C126.479 7.58248 126.563 8.33173 126.563 9.23549C126.563 9.46302 126.557 9.69161 126.543 9.92125C126.543 10.1371 126.53 10.3668 126.504 10.6102H120.382C120.397 11.1922 120.455 11.6579 120.559 12.0071C120.676 12.3584 120.838 12.6283 121.046 12.8167C121.266 13.0072 121.544 13.1357 121.881 13.2024C122.219 13.2691 122.615 13.3024 123.069 13.3024C123.612 13.3024 124.11 13.2685 124.564 13.2008C125.031 13.1193 125.503 13.0188 125.98 12.8992L126.18 14.6866ZM124.489 9.03548C124.489 8.52222 124.444 8.0968 124.352 7.75921C124.275 7.42057 124.152 7.16394 123.984 6.98932C123.815 6.80095 123.608 6.6729 123.362 6.60517C123.129 6.5258 122.857 6.48612 122.546 6.48612C122.221 6.48612 121.93 6.52686 121.671 6.60835C121.414 6.68983 121.188 6.82529 120.995 7.01472C120.812 7.20521 120.67 7.46872 120.568 7.80525C120.464 8.12908 120.405 8.54074 120.392 9.04024L124.489 9.03548ZM133.189 6.20038C133.733 5.69982 134.251 5.31462 134.742 5.04476C135.234 4.7749 135.74 4.63997 136.259 4.63997C136.584 4.63997 136.876 4.67383 137.136 4.74156C137.395 4.79448 137.647 4.88972 137.894 5.0273L137.524 7.21315C137.305 7.07769 137.066 6.96921 136.808 6.88773C136.549 6.80518 136.264 6.76391 135.956 6.76391C135.747 6.76391 135.545 6.79037 135.35 6.84328C135.169 6.89831 134.975 6.9798 134.768 7.08774C134.575 7.18298 134.368 7.31104 134.147 7.47189C133.94 7.62005 133.7 7.78831 133.428 7.97668V13.1437H136.303V14.947H128.689V13.1468H131.095V6.74645H128.803V4.92412H133.041L133.189 6.20038Z"
							fill="white"/>
						<path d="M9.91797 11.0959H12.9787V7.90524H9.91797V11.0959Z" fill="#F9E050"/>
						<path d="M5.41064 3.20656H8.4714V0.873077H5.41064V3.20656Z" fill="#F4F464"/>
						<path
							d="M7.66434 5.55588H10.7251V2.3652H7.66434V5.55588ZM0.904785 5.55588H3.15848V3.20653H0.904785V5.55588ZM5.41065 7.90206H7.66434V5.5527H5.41065V7.90206Z"
							fill="#F4F464"/>
						<path d="M9.91797 13.4389H12.9787V10.2483H9.91797V13.4389Z" fill="#F9B038"/>
						<path d="M9.11243 14.9501H12.9772V12.6008H9.11243V14.9501Z" fill="#F6842D"/>
						<path d="M3.15845 14.9501H5.41214V12.6008H3.15845V14.9501Z" fill="#F9E050"/>
						<path d="M9.91797 4.04788H12.9787V0.873077H9.91797V4.04788Z" fill="#F6842D"/>
						<path d="M5.41064 12.5992H7.66434V10.2498H5.41064V12.5992Z" fill="#F4F464"/>
						<path d="M12.158 6.39722H15.2187V3.20654H12.158V6.39722Z" fill="#F4AC2B"/>
						<path d="M12.158 8.74179H15.2187V5.55112H12.158V8.74179Z" fill="#F6842D"/>
						<path d="M12.158 11.0959H15.2187V7.90524H12.158V11.0959Z" fill="#F4AC2B"/>
						<path d="M12.158 13.4389H15.2187V10.2483H12.158V13.4389Z" fill="#F6842D"/>
						<path
							d="M12.1732 0.873078V3.20656H14.4116V12.6008H12.158V14.9501H18.1988C19.1063 14.9501 19.8921 14.8422 20.553 14.6247C21.2138 14.4104 21.7559 14.0326 22.1823 13.4929C22.6087 12.9532 22.9285 12.223 23.1356 11.3023C23.3427 10.3848 23.4447 9.21804 23.4447 7.7989C23.4447 6.36707 23.3488 5.20509 23.1554 4.31615C22.9605 3.41133 22.6559 2.70811 22.2417 2.20808C21.8312 1.68973 21.2726 1.32156 20.6474 1.15722C20.0002 0.966735 19.216 0.87149 18.2977 0.87149H14.4101L12.1732 0.873078ZM16.7613 2.79859H18.2186C18.7211 2.79859 19.1566 2.85892 19.519 2.97956C19.8976 3.09065 20.2189 3.35307 20.4129 3.70976C20.6474 4.07486 20.8149 4.58759 20.9184 5.24954C21.0357 5.91149 21.0935 6.78932 21.0935 7.88462C21.0935 8.97676 21.0326 9.86094 20.9169 10.5356C20.8149 11.1975 20.6474 11.7166 20.4144 12.0944C20.1991 12.4433 19.8772 12.7062 19.5007 12.8405C19.1353 12.9627 18.7089 13.023 18.217 13.023H16.7613V2.79859Z"
							fill="#F14D34"/>
						<path d="M9.91797 5.5559H12.1717V3.20654H9.91797V5.5559Z" fill="#F9E050"/>
						<path d="M7.66431 14.9501H9.918V12.6008H7.66431V14.9501Z" fill="#F9B038"/>
						<path d="M7.66431 3.20656H9.918V0.873077H7.66431V3.20656Z" fill="#F9E050"/>
					</svg>

					{isOpen ?
						<button onClick={() => setIsOpen(false)}
							data-collapse-toggle="navbar-default" type="button"
							className="inline-flex relative z-50 items-center p-2 ml-3 text-sm text-gray-500 md:hidden"
							aria-controls="navbar-default" aria-expanded="false">
							<svg className="w-[24px]" viewBox="0 0 48 48" fill="none"
							     stroke="white" strokeWidth="3" strokeDasharray="100">
								<path id="fail" d="M 15,15 L 32,33 M 32,15 L 15,33"
								      strokeDashoffset="0">

								</path>
							</svg>
						</button>
						: <button
							onClick={() => setIsOpen(true)}
							data-collapse-toggle="navbar-default" type="button"
							className="inline-flex relative z-50 items-center p-2 ml-3 text-sm text-gray-500 md:hidden"
							aria-controls="navbar-default" aria-expanded="false">
							<span className="sr-only">Open main menu</span>
							<svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20"
							     xmlns="http://www.w3.org/2000/svg">
								<path fillRule="evenodd"
								      d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
								      clipRule="evenodd"></path>
							</svg>
						</button>
					}
					{isOpen &&
						<div className="absolute w-[100vw] left-0 z-40 top-0 py-20  bg-black bg-opacity-80">
							<ul className="flex flex-col gap-8 mx-auto max-w-[70%]">
								<li>
									<a href="#"
									   className="pb-4 text-sm text-white opacity-70 hover:opacity-100 transition-all uppercase hover:border-b-4 hover:border-primary hover:pb-3">
										Поддержка drupal
									</a>
								</li>
								<li>
									<a href="#"
									   className="pb-4 text-sm text-white opacity-70 hover:opacity-100 transition-all uppercase  hover:pb-3">
										<div onMouseEnter={() => setFirstDrop(true)}
										     onMouseLeave={() => setFirstDrop(false)}
										     className="flex gap-2 relative">
											Администрирование
											<svg className="w-3" viewBox="0 0 9 6" fill="none"
											     xmlns="http://www.w3.org/2000/svg">
												<path opacity="1" d="M1 1L4.5 4.5L8 1" stroke="white" strokeWidth="2"/>
											</svg>
											{firstDrop
												?
												<ul className="absolute flex flex-col p-1 py-2 top-5  bg-primary w-[300px]">
													<li className="px-4 hover:bg-[#9c2a19] py-1">Миграции</li>
													<li className="px-4 hover:bg-[#9c2a19] py-1">бэкапы</li>
													<li className="px-4 hover:bg-[#9c2a19] py-1">аудит безопастности
													</li>
													<li className="px-4 hover:bg-[#9c2a19] py-1">оптимизация скорости
													</li>
													<li className="px-4 hover:bg-[#9c2a19] py-1">переезд на https</li>
												</ul>
												:
												<></>
											}
										</div>

									</a>
								</li>
								<li>
									<a href="#"
									   className="pb-4 text-sm text-white opacity-70 hover:opacity-100 transition-all uppercase hover:pb-3">
										<div className="flex gap-2 relative"
										     onMouseEnter={() => setSecondDrop(true)}
										     onMouseLeave={() => setSecondDrop(false)}
										>
											О нас
											<svg className="w-3" viewBox="0 0 9 6" fill="none"
											     xmlns="http://www.w3.org/2000/svg">
												<path opacity="1" d="M1 1L4.5 4.5L8 1" stroke="white" strokeWidth="2"/>
											</svg>
											{secondDrop
												?
												<ul className="absolute flex flex-col p-1 py-2 top-5  bg-primary w-[300px]">
													<li className="px-4 hover:bg-[#9c2a19] py-1">Миграции</li>
													<li className="px-4 hover:bg-[#9c2a19] py-1">бэкапы</li>
													<li className="px-4 hover:bg-[#9c2a19] py-1">аудит безопастности
													</li>
													<li className="px-4 hover:bg-[#9c2a19] py-1">оптимизация скорости
													</li>
													<li className="px-4 hover:bg-[#9c2a19] py-1">переезд на https</li>
												</ul>
												:
												<></>
											}

										</div>
									</a></li>
								<li>
									<a href="#"
									   className="pb-4 text-sm text-white opacity-70 hover:opacity-100 transition-all uppercase hover:border-b-4 hover:border-primary hover:pb-3">
										Проекты
									</a></li>
								<li>
									<a href="#"
									   className="pb-4 text-sm text-white opacity-70 hover:opacity-100 transition-all uppercase hover:border-b-4 hover:border-primary hover:pb-3">
										Контакты
									</a></li>
							</ul>
						</div>
					}
					<div className="hidden w-full md:block md:w-auto" id="navbar-default">
						<ul className="flex flex-col p-4 mt-4 border md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0">
							<li>
								<a href="#"
								   className="pb-4 text-sm text-white opacity-70 hover:opacity-100 transition-all uppercase hover:border-b-4 hover:border-primary hover:pb-3">
									Поддержка drupal
								</a>
							</li>
							<li>
								<a href="#"
								   className="pb-4 text-sm text-white opacity-70 hover:opacity-100 transition-all uppercase  hover:pb-3">
									<div onMouseEnter={() => setFirstDrop(true)}
									     onMouseLeave={() => setFirstDrop(false)}
									     className="flex gap-2 relative">
										Администрирование
										<svg className="w-3" viewBox="0 0 9 6" fill="none"
										     xmlns="http://www.w3.org/2000/svg">
											<path opacity="1" d="M1 1L4.5 4.5L8 1" stroke="white" strokeWidth="2"/>
										</svg>
										{firstDrop
											?
											<ul className="absolute flex flex-col p-1 py-2 top-5  bg-primary w-[300px]">
												<li className="px-4 hover:bg-[#9c2a19] py-1">Миграции</li>
												<li className="px-4 hover:bg-[#9c2a19] py-1">бэкапы</li>
												<li className="px-4 hover:bg-[#9c2a19] py-1">аудит безопастности</li>
												<li className="px-4 hover:bg-[#9c2a19] py-1">оптимизация скорости</li>
												<li className="px-4 hover:bg-[#9c2a19] py-1">переезд на https</li>
											</ul>
											:
											<></>
										}
									</div>

								</a>
							</li>
							<li>
								<a href="#"
								   className="pb-4 text-sm text-white opacity-70 hover:opacity-100 transition-all uppercase hover:pb-3">
									<div className="flex gap-2 relative"
									     onMouseEnter={() => setSecondDrop(true)}
									     onMouseLeave={() => setSecondDrop(false)}
									>
										О нас
										<svg className="w-3" viewBox="0 0 9 6" fill="none"
										     xmlns="http://www.w3.org/2000/svg">
											<path opacity="1" d="M1 1L4.5 4.5L8 1" stroke="white" strokeWidth="2"/>
										</svg>
										{secondDrop
											?
											<ul className="absolute flex flex-col p-1 py-2 top-5  bg-primary w-[300px]">
												<li className="px-4 hover:bg-[#9c2a19] py-1">Миграции</li>
												<li className="px-4 hover:bg-[#9c2a19] py-1">бэкапы</li>
												<li className="px-4 hover:bg-[#9c2a19] py-1">аудит безопастности</li>
												<li className="px-4 hover:bg-[#9c2a19] py-1">оптимизация скорости</li>
												<li className="px-4 hover:bg-[#9c2a19] py-1">переезд на https</li>
											</ul>
											:
											<></>
										}

									</div>
								</a></li>
							<li>
								<a href="#"
								   className="pb-4 text-sm text-white opacity-70 hover:opacity-100 transition-all uppercase hover:border-b-4 hover:border-primary hover:pb-3">
									Проекты
								</a></li>
							<li>
								<a href="#"
								   className="pb-4 text-sm text-white opacity-70 hover:opacity-100 transition-all uppercase hover:border-b-4 hover:border-primary hover:pb-3">
									Контакты
								</a></li>
						</ul>
					</div>
				</div>
			</nav>
			<div className="py-10 relative z-20 lg-:py-20">
				<div className="flex flex-col md:flex-row gap-8 md:gap-0 md:justify-between container items-center">
					<div className="flex-col text-white">
						<h1 className="text-5xl text-center md:text-left font-bold mb-5">Поддержка сайтов на Drupal</h1>
						<p className="text-xl md:text-md text-center md:text-left opacity-70 mb-16">Сопровождение и
							поддержка сайтов на CMS Drupal любых
							версий и
							запущенности</p>
						<button onClick={smooth}
						        className="uppercase py-5 px-20 w-full  text-sm border-2 border-primary rounded-md">Тарифы
						</button>
					</div>
					<div
						className="flex flex-row gap-0 md:gap-5 flex-wrap items-center justify-center sm-:justify-end text-white">
						<div className="w-1/2 sm-:w-1/3 pl-4 border-l-2 border-primary">
							<div className="flex items-end">
								<h3 className="text-4xl lg-:text-5xl font-bold">#1</h3>
								<svg className="w-16" viewBox="0 0 59 58" fill="none"
								     xmlns="http://www.w3.org/2000/svg"
								     xmlnsXlink="http://www.w3.org/1999/xlink">
									<rect className="w-[50px] h-[50px] lg-:h-[50px] lg-:w-[60px]"
									      fill="url(#pattern0)"/>
									<defs>
										<pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1"
										         height="1">
											<use xlinkHref="#image0_96_1365"
											     transform="translate(-0.00973007) scale(0.00520133 0.00529101)"/>
										</pattern>
										<image id="image0_96_1365" width="196" height="189"
										       xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMQAAAC9CAYAAADsi9JiAAAgAElEQVR4Ae19CbxlRXnnv+osd3v3bb1vQgMNSreKCoiICsYVWRQFl3GPg8aJmnGJiTGxmYkmGTUmGjNBk2hMYgZ7EjGo4w4ajCAgoCyyddP03q/fetezVc3vX3XOffet/brppt9yb/d5Z6uzffX961vqq68EOr8pFPjB327WgAQEcNEV74Dd1mk5ma6FOZ/+McecnneLKTfrHFhQFHAX1Ns+QS+riQRoCK3Bf3EEQBAIKb8LrrkQNCwt4bos1PktdAp0ADFdDWpljmqCwGwLQKcgIBiMsNAGDDxO0EBnEmS6G3aOLRQKdAAxTU1pMjc1Iq3AbbNPiWHAMBMwOoCYhpQL7hBrd8n/vvM3Z5j2n+rPC1/9m+OqEQSUBlTiAEZNIqmEBYZRmYgaCxBHKkhpJUumSjm97+3Qd4FxV0dCsMIoCci6WhppEEeqxegEgOPEkHKyEU1gWIAo5SAxS0pOIeA5HZtigWHBvG4HEMZ8pg1ABleATlIbwbb85HqCwVv+uxNa++//7RZjPVAavOBVbwXUeHnaEzq1QxYiUyzld+4AgoDQyniKrBWQqj2ZEQ0xvb1MqULOEfxLW0NNtDHs2aXMWwvy2zuAYLWxrRfK8jZbduMxoopEL1PmVZpYvzS0rZGdlScorJTg8Y6EmEivhbLXAYRRmSwYtPEiUX1KUsOarT8BkXXGTazWzBtlXLOZiiRoh/AaK28mXtHZm+8U6ACCNWQ64Ni6W93ftu52Xxhv0tRqzMAgjCWRQBM0QhhXrS2deZymXts5Mn8p0AGEwQO9SjJVmWhUp14mw+xs7QmOyT+qSnK8U85ICHbSWVesNlJm8jWd/flOgQ4gshrKjGSkniYjGWyrP532M95ZRxWL0oDXWRvCqlkdlSkj7UJadwBhJIRl3sxIZuvO+CTrf53JqKaGREM6De8wEsECyAKjozItJCBk79oBRAoIIWg/0CC2rb2VALQgyPDTGdUsT1lA9yulA0nKa9MgQHOfjMyd9UKhQAcQpqbSlj4N0mtJCOM+JadPBYTpd4CEZj8EmZ/FMi+V8Ux1JMRCAUH7e3YAkRrVxmw23lJrVJsIVsYtkemna+3pmTI927xB1u/A8plRbdWwdmJ3tuc/BTqAYB2lHXNWNZpoVNvQ7mkkhLnOjoUAxsM97FgKIqsjIeY/+099ww4giIfUBqDT1Ko/yQT1R2tnKuVS15OVEpQGBFJqPxgPVQcQU4k2/490ANFSmWgP0JZI+yEMU6f2wzStvVGjTN8Fjeusd9v2ZxhgTHPN/GeHzht2AEEeSO0BE6dHRs5cqMYesL3Xk1mFqpQZQGROEEiUCLQgrLSYru9i8j06+/OPAh1AGJWJQavWjKbKpI1NYCNgTScb9yf/KBTI/CbCw4LGwiHtnOsgYjLFFsR+BxCspqyXOhtDnbb2FiLTG8hUk9h3QfXIqkwx7BhsaeVEx8m0IAAw+SU7gMhsCNPSs9WnDUGJ0NbrPJ09kIHIqEipMZ6pS+0ZOiZTvLM/rynQAYSpnqxjjvZDuhjmJkooAaaqTNYzJdPwDStlrP5kkWVCOuZ11XdebjoKdABhJARJwxFv3KGEiFO3K92tbP2n6j9WZSKQshvwOgsgA4xprpmuAjrH5hcFOoBgfVAqmF5qxi3RcuCAIdvS23CMafoUUqPaBgGmQEq9UqajL5Go7/gt209nLG8+KB0zYXhAoHDSZ/mQzm8eUaADCCMDqCZlfXHW7aoz5jXAmF5lMja1YWnbf9EeIasS5q9JJYYpw5COTNIwk8c0IJtHjLFUX6UDCKPxJBDCsX0Jxlgms7Kfgb0KaXj3ZA4xfRepB4rqkbmODE/nKyUBjxEJvBd7sNt6sY1u1gHEZJLOh/0OINJasBGu3Em9TIx0NUw8U8ccJQldrNkN2kfZtQPD6GJTgTGd5yq7V2d9wijQAYSREOyEY4OeDfZh622OpHrUVJXJOKE4FsJcQ2kQp9ekWf6MdJkZGMRDffvVac5M1n8KLSM9Mph1bI4nGhkdQJDiVHeMikObmmCY7DGaqt7YWKY2zchcQ7XIgkBKB0KmQYEME88Y3gR3aKjEholnhrY53wKDPWdVL6tqSRE80byxJJ/XAYRhYXqVyHjZ6DcyNRvvzA7g/sSf9UQxyYA1yI2nyoDBMjBtktKmr2RNPb7xmTU0SsxNXnTJy1LbJJVCBiwED/dToLQkTBpCwsDD26/2Jr5F296z1iZCbJ2K3LYinc3DU6ADCNLI8H3GS1SPuFD358npO+asEW01Khu+YW0IG0LOAUMTQ8Yz4JhWnxKJoR/G+OZz2oHB7RQclBgpMJQSaCxzQlOlRpIQePyl0mTnoXTHHu38PToKdABh8JA13mRA63YdV2VSqTGJvnQs2SQD9gRDPlpeKcPIGcDS8yZdZsr7Bmy8LxGXeaUyYLSDIwWGdE3ys0S7BoFGmqWgGE/RX5v0hp3do6FABxCkGiUE10ZFSr1KnBnItNy2s24qcdNeauOJIohoh1hmttdNMsTb3LRZMKB1xdrcTia5OC83LX66Ng8VgOyDipv2XGqDWCARUryIoJoIwKnv2zkyFwp0AEE8pJ1yFhhkZOtSNS240fsnMbe5hqlq6FHKGHHcELcpMbPjthqMLMjCOQxuqGIRiSxH961GadNXDSR4xb//5Xptomkh8aJXvhVKV1OP17itMUHCmPvMpco7ZWajQAcQKXXGQUEm5RBSy6h29NtUQFiJYKWLaelbEbLGIJkaEGg67tiYU+KkqlnauhMYNlFye1VRAtHtyhgrPwWOQdK0wKD7t779v1o3Lm8jBIobr20BrP3One2ZKdABBGljVfk0UI/Mn+lQFhhGxZlEQ9vi2xgocz1baNPikwfTFJdt17S7aY3QmeLanci7LJ8dSRq/hjTqGG+YAsqcJLCIrzwU7Qt41saAhNQdm6KN/HPe7AAia+RbbStZPVN3yHyk5UwSgtyYeZPGVSYDjCnXZGqYvbcFiB1jZ71MGfvburv8d/aPH3jfP0+p0Bs+t4FTvJjjL7zkciQJOwaty5eqlBnXMeWqzoHDUSDz3R2u3OI+b5g+5X0T/k1Gz4BBRk8LtFHBulEz1Yeoyq5heS4ZqOxFBIABgendpsXAjOFcsr6PieXbHjX9pnlc+l6yOx3UFI8/e9Lzp79J5+hkCnQkRKYxZTxvmD9tbc0xSonpJARbYasysZhxu7LFNh18GTjGyc3btnLB0hg3KhaBwbLstxgXCONXzbxlx2PQ9uAgJXeSjUHwOag9/JaW3KMnqnTal47sITM/ftGe6QCCVWt50lSyYXKjJ7W32BlaxvnAMnh6oTGSE9v7bCZytxJgvDS3rJvWciQFc7uKxfJHKqxTo5tQbDxgHK+ZCqW1By1y0GD1WjVKomNTTKyP6fc6gJhOQhh1gx6ejJGnAoJnjDChhWys5BRAxAjdqObkONFtNK1jp+4ykoRSpz1MfPpnjN9h4tZl79vb1tr/n9RNaw9d9NILrIFtPsCIpuml3MRbdvYA04R0CJE29JadMvWIRjBJk7bmk6hkJUSKJiMhWDjN+Meyk9Us03GXoS9Vcdq8UvZZkx5yRLtWYti+i9SOSaWDQXbHppgTNTsSIiOTadmzZj9TlwgG2wudFWtfTxQCaYtvDhIcE1t87jGxGfshrL3QrjKliGy/+RFuW4CmapQBnzXsTbzUTAmbj/AZS6H4ggfEl/5gnPNe9erzoFW7rtymlxu1pm1Aj6nd8fM3/Psv0vrOwMDdbHsic/NMS0KYq8jQLJP2S7BlnlZCZKijUT1RZTpSozp92fGVGQuevmf2Luz/NlKI0bxTv2H84s5WRoEFD4jsQ8yakx4KeojGf4YN+CfjlfFTrS1BA5TnqTNNxzjTHctAwbsYD1FmQ2RSJX1g+hQa61mIOXuR6V0y8UemGK+ZWL71cnPcsG7gNC2OMdhTwJmP4odlquAcb7hEiy0uQOipwwWMXWA7dGfkuRYrmo1MKrRzxDTHWDa7r2HmiWWst6rtHkY4ZBKEF2ZeqTQwb7JEabt0TptGHUvxbOwFvk/6ksaWmPh+c7rnEiy04AHBxrsV1WAy5k2vj88KjDYJ0AJHOzO0nc8Om3Kplz+u/ieEzKenzJOmSBorEVJpYt4zZVADFBvcl937aNZW5UqHwhoJwdxSVM34Pnx6R0LMha4LHhD8yBa/mg4qY73abzfMMJEM0wMjxqWXPdV6lKZtqae2rm/8mNFF7M0/9vOJD5luLzMfqNMrZvnw7A1S22aKzTHdPWY5ZlUy8j+lDwGQ2Q0cQOTYDsBZru+cshRYFIDIKpM9thNaeEaRMjeS6T3OSqXrtCG3e2T4qUyfXTFF/clOHMH69R9tA9Af/OURXDnHoqlb19gpRmVqU8mMGO1IiLlQclEBAoLRnulnZ8jQAn3n3JsdNSe//NFx3Fx++WYbkc0zvEbkAD1pQP80kmYuxH0iyzAmii5Wgjdb+EHZKL7OAKK51caiAwQ532BhAgQmEiNTsVq2R+pgIpg0h65NaUxnlh4T73wi92xoiGkQUglhvVnWg9Vxu86tbsYd8XMrP79L0Yagypwx+GHe1gIjEyW2MEfBGaBMANT8B4T9lqx3ne1c2qFobCIbWXsYcnROL7rQDapMdDGmwzpNn9QcqtnYGWm5LJeSwQMlBo/PfzyYl8wkXwsMpmlgm8evmQj8OZBlSRZZVCqTyc9qUJAKvtZ454l1+7aPGw4xB9/28fswsbebgXHjv4XCSnashe2YM40CJYPxYGVu6Cl64PhHdrZaFFhkgPDSEGx+H1WGrHVsfe/hN+i7Z2s6wZBeAK2rAYB1QVvJ2BYrZaTDAviGw9fOcS+xuGwIBu+aTi/SjaoTDYoj/ESjdlHLyMK6j3sdHJMHkN3NTEcGy9T1bHCf9RBQ5+tIiLkQesFLiHaVRkjfZi3KQGC8LYcHBHXvzOM0XV/GuC93LiQ9MWWs2zUTbGlq//bcUh0bYk4Vs+ABwa80BjA3jNqQRrSajippoheGb396m75gLeS+s3/VusxcmpXI+jKy/TmRcR4Uyr6XjUAWGsIZUgkEY0ssCM/ACSfkggcEW/bMuxLXbweQs0Q10oFRCw6E35hwTEWzfHZLZUrrZoEAw4ZqUELwhdPw8vbcUh2VaU5gm4Uz5nT9CS/01naP0SdsTNGXPtLCCF79updDiD1mEL6Zy4FvnOlH0729zNnTrdgjc8F0JefXMWM72BBzYSRE9gFZ0rUFguwTTNXDK9gn+AWP9vHUh7hIb4W9haBL0uZBMikoZ7ixyWBhDPLUJp+h3Hw7bFQjBvUZycj+mMyQJjDSZb699Dx8nwUvIaajabsaBVmynG3cqFa/Fo7GyC/OYdhp2l+l8W//mo6Yy1QmM4aAqMp08umeNI+OpQLBjKk2Yd+pRJihL2Yevfm8epVFCQhSONOKksavAJRajC9kBOGEEE46sk4rqLjQqhQBN83iTbAYGWNduK0S83vDeszYl5Llllq0SsBxqYhFCQgDhrTFvH7bzeMGBYBXXXU+hIhSZs9a/zaHk7TxUKZTzxxmmbbzx6UaHv9NM8eClY5p56JRm6g6dUAxVwovSkC85Y/HPbEkxJfTRASm9TQj2xqpr5YuKjuAJiOYAAfucHA+QWB7u2ezObLrTviaGlLqcTNGddYHk4L6yBOhnfAvOiEvsCSajqx9J48LUbAtvjmY9WZnCYvJVPTb2yGdJhMePTZZR98JqaK5PZR4yKSEnZKL1xHQXDpG9dyouFQSlaUh4aaz1im1sl/YcCUN66a0JIvrNK67WjaHYaoMUXOl6oko1yYhTG+kUZf4ImzzOp1yc62SRakyTf54o/2wkTShTV0Ah5WadJMsyamwHLz9E1bNevsnbp58+YLYN3hIQTFxfHYGhiWhDDzuuloSVLKqktWUpFtKiWb0J6sOcWDRQv+lTgRqR3F1GlCnPfcL/TOP9/svAk44PImMxsM/bEFlV5vXha0ngdFmQxz+dvOixD9+bDxa75LLngkoTsrY9rP6YHpgIeh8be9+AjeXBiDa+SHtsSbNzRxuhIQMMXbvxezmTdO1KPRs+V77VSewiqZ/tPGYpW9IL5iNYWora5Ir3Devv6HtbefN5pIDhG4+AI1VqUuGHqU6hJnhs2YnODRAScM95k01Tf8ixqtEljeTMk5fpnP0yCiwJADxhq3j/RL6rV35b17/5YZhJgAXvfxyCGETJGcSY0GpUMaQTiN8j6zuO6WnocCSMKrbv1ts/HKzMgpki5AlE/RnvE4mWTJ7H+a/TUFAZ6AGB0YZSdH+pZ3to6HAkgMEidTudYJkHBMjYdkfQa7i9sIRnARFllfWYKIFDG50fkdKgYVT80f6ZbOUN3yfnpeyMCHdJc/pBSAhJnyenKgyEQoTnEwTCnd2ZqPAkpUQTNBngOEUrRuWOxlSFoAbtl1l4vwWU39LsmqnkuEIjyxJCUEw0BblTzhdaSBfFuinIBjxukB+RmUS+XTcdPrSRjx0AHE0Vbhwav5ovm6Ga4wgMHoFAZG3goED8o3avfA66sQklckmFejYEDNU/6yHlyYgGMCahjrY+EaCgP95kJkqaqg98g7m0rfd21qjtOnL84rDMg8TwW3S9acAz2p7IXjKsnedT+slCYh2lUlFjwIeJ0tJ/Zh6DCJ5DFAHUrVKAc4Z86nOJrwLgZGYCF3qf+kp0zfRUZkmEGqOOxkJ51h8cRb7109AGyMVwCVv+hB0cFv6oakYcZ+M4inXnlBa/f1HLD4pEa646sLxkG4TbtKwve0W1um796D3Gbee0HdeiNzSaUayfgkJWM8TDVTyEUmTep7mUb+EUZXMgKVBAAMABiFQB2QPIFYAYnm6zP/OxeMNmMcue+7aHW96w+uO5DlLUmWaTCDJaaVTYSDcIhDQyGCp1PMk5xlzyWKaqjV7T477LqLn6Td2JEJb5coNZ5wU/Py7/7Lv05/oW/OBj/zvtlMzbnYkRCYhUmEAMhslhGEtMhznvp5fgBCSU4fx3bLq4/b8escZOe4JPNGo1spy5UkIbvnxX+/73Q98ai6Pzig6l7KLtgz5n+oSJYUwoRz81ExdIibmlyBlR1yWdK0FjHn2jvOBWdTg8IWB9BACqG6/7wM7P/yh6/WVV87acsyvmj5BVMxUJmO2ThgvYdw18671Zb+D6Vg0yRBoSWfpdE4QAefpYxNPvSSs1IF8CU7OQ+PR+y9/uFS4b+fb/ssHnFwR3mkbXfT3Nfx8rgntyHBwyOkAIlWZWKfUknS8JzWoKRnseGSthhHs+Yjx59gQU7KjRn79/zohOrsJ5qNYMz2JKRg6EmICLDUgfz4ycpKbyyGOYjCvr+P7rOTTE0/dkISjaNz6E4h6BSoO4NZGkIg8Zxjp/LJ+CfIX7QWneEE6cs72Tej4AFRwG3TGgIRM/pwTR7g0QtfaORYYnJK38xunwB2vf31/9Z7vLy+uPAVKNOBqzZyMSLQPoQQcKSCLZehCF4RKoBwP3prTPtMBBICX/3fLWoac7/+oWX3z02nfhAZe+qb/AR1tTyWGMMA4oXYFk60Z1zABS8Nn/tk546x5YrYq1ZHTEhUiaNQRJwk8rZBoBZnEkI4L15E2BRcbtyiGChpQq9de3wHEDPVl+C1Vo4yXycR62FbYqFIn0KtDG8JKBKbQ4QdwUESnKtursrFn56WIY4iwhkRzWmKFJIohXBfSdeG5dvo1mSggbEI6JeTKfXd3qNhOxbbtdjXKujRtS2yz4Ulk0/e2XXJcNzNjhdaLdHwkBrG2lTPvNN/6So4rNQ5/87iy9zLhCIigCqFiqCiE9PKQng9HOogdCUmnhNJAVKd38aGn/97vjXYAMQNtjYufDa/lQKuimG7iFBgnqEU2wGiNfxjvLzmhKtwMNDxRh7/z0uetGfvlf2zJd7mIWYdKIXFiuDqGiD0kjgvJEZIgKASCQzvQe/bLvsD37QBihlprSQjjhUpd15keRWC0OsVmuMExPjzh0al0sI9YuLmlMhLt+s3f7K8+cvfTRCNcHjd2vD7y8qdp5N16ZU8cJ+qby7e85Jaob+2ukZNPvueirVvTeQyyq6eu6w/9/AcUmCqJbVSzsR0iCBVAC8+Md5EynYsQGmGjgd6nbP4W8PUOIKaS0x7JGNAarLQd2pSW9OS3/9Ia3rzChH5Yp1QrDISqvREq6fls3zht+aftumyb6yg0VoENwDWlrJnAS/joJNiRjv/m/VPv0gmSWNnrHc268pWvPGXsuzd8LNl522tLzUOmkQkL3ZBhFc36APISUC6edujO7yHRgNst8LOXPOcfVp7/0j865WNn7hHiqilzDd986Yv/Zvft3z8z52d5nmMiA0qGiBIH7OXnopjjnbQMhyELy7Dp5a98GH/4xx1AzFSRJjIiY2jhWKeOYeAUGPFevPi/fNJwvJnOKuN2k1iYF/LObWs6cg06spuywPh4C3tBVobPGC9nr0v7RNgJFx8ygKAbOOsreaJtmpnoNpfjWmsx8NtX/0ntq3/9YSeqQro+kvJKqCiAy9aALmSRQxyPIYqa8DmHJKeAaWpU7v/ZW2r3/+wt1cH/9t0Hf++Dnxp+4Cd3nvv0i4d/7ft9u278zpf23f79S3PUezg/lKkDNiKkZQKFBEKEkOmISDpLGjVg7fPPv1acfXbEd++oTDPUYKYy8bSNZWrzMHEa9OAhgIupqvQmmTgwu9kMRNyxzGx4vFU+A0v7eQIhK2thNr4/8ZzNDsKy1g28ULxM+sYb3aE3ve4bYvCRi/1yL7QoI4kiIIzgCAktbSuukpAIQOKtRM9Tz/2/UuT/RQj3ltKaNcN7fv2f3sCN33r5st942duDg43Xf+OLW40EoRQxqlIKBK4oBYz05tyTaV9molOtK4lB8Kx+y2+9D9fdYGqtAwhDhql/SDz+zHqCvTARGLazjiVpV6QXGWBM9ErZmxlBbYqaOkuLm74E8zDL4MaXKliWt+UIPr7IxHPmfqm6dKLdwOZd5vDHSIZ3vPlOpz64xT35TOgggIhDSCcEZAB6hRTVxWYV2i2g8Py3bi2ffcHnNrzjHUOTbs95lq/DPX9z3SN/85cfy91885f3/Gjb+Y4AuFAy0JtqAMAL26uGpOQ+j8dArn/j0zddfHGQ3b8DiIwSk9ZGQqStiw2gy3aygscKGO21ldkDE5l/LsBYCF6mgXe++wteUtuiTz0VOmI0pQMdeYB0QSOXnKtGB+H2rUf3q9+4ufz2d90HfDkj+LTrU9/1Porp59736c+e9/Bn3/uhJMIV5Ha6QVJB0VqrlKy8EduXpOC99eX37Phl+43TGmg/1Nk2BGMDnwa82sFCqbjIpECLTCQhk5tlAoLsa1i4/QapXsxCrCZ7DYvZqNXJ5bPzGVjsy5iyRlpxf9K5ed4PMfjFL75YJsPvwLoNELkuiGIRYNhEoQRZyEP4BaDRgDj9nEPeW97ba8HQIvJhN878wHtvuWwnXu33rXuGlrjDqEkEABeCg2QnySg5NFAD3vqaR6J/mHzjjoSYTJF035VYFiucI4DXQuBtXt8rLUVNs9PW9hhKG5KPU91UQFoD5hS3WTOZ0TyxfDbHdKtNy2ovS3LQum7c0DZlTbl0yqz0vefjSl97rTf4i1u+561aDeUX0lShTPdj1UpqfvHoKOTK9ftWveFtp4iLLpqU23/uX/WKe/fcpYFzvn/Wk84Pa/t/v9kIX0EyZga242KX1rjkjXswQTJkT0ibpmy3s54LBX701y0pjMZRV91cnjSxzCven4meicfn+97o//jDz6j9O38HazbYHn5KM62N/aCCJpLRUYhKBf2vfWuPuPjisWP5PV87pa9HNoefX1q5MV+pDN553yNj27e25MbUJ3UkxFSadI4cQwpUfvLtFY2v/NPv5NauMQOtNEccCHrGNLTrwVEJkpFRuJdd+uxjDQZ+xlXbh0cB3IC9O+b0VR1AzIlMMxd63oufNvPJY35mWil/zJ9yLG8Y/OTnW9nTmHUgpsG5RoehxhcPDcA5bcuNPVe95efH8rlHe6+OUX20lOtcd1gK6Ntv9/Dru97td5eRBDFU3IAw/QsREAcQzQqSRAAveMEVh73ZE1SgIyGeIEIvxceM3vD1pyMMECsJJ2xAC4IiNh2dDK3Thw4h/5Rn/kX5ootG5gt9OoCYLzWxCN8jOrD3eboZwwlqgM5B0G6IYhOzxME6IkoQnnvex+bTp3cAMZ9qY5G9S3Ngzwtyrjaj0RKGToQhHM+DchxgeBTOupO/2HveecfUq/R4SdixIY6OgvWju2zpXKW3bnX9sYOXx0EVqtaAro1C18aQcFB/vQpdGYLz5C1/Md8o0pEQM9TIgz964fDJT3t573Sno2YVAzvvwv4d35ru9HE7Fh76ZNYjaJ7BeH/l5NYXl7+fqULm1W/f3r2+4ICcKIAQFTMwB54HHUXmmMz5YdfGjQ/Oq5cejzGYb6914t/nB38FveKkLXjKc95y4l/mMG8Qx2pHcfWHTzlMsSf09Panlc9we1b/2jHDNhnB6kMzowkH5jSHITZs+fvlX/rabz6hLzWHh3UkxCxEGth5D9aevttk9WuFVUwoz2AkHuDMpUf3s01+Fgo+QQDM7YZCQDp5E8s/twuemFKxqm92lYaOI9hw68gkfBOuAzWyD4UXvvorT8ybHNlTOoCYhl5f2wo/OxyM/BqOoMkwHbMSEByKeLRwsE+xsUw21il77pzXbHXzq9bPufwTVjBBHDMfkgfJvga+p+NBJQESLRDv3cMo1aP6MUaPFzL++KhuMMtFHUBMQ5yeVehFOjgxDMaQz9FtOBPtORXXTOemufl0h9oSoE13etZjTIejeor69qs9cfYX5o2kUE0kcS6AVgk86UKIBLFOAI6Q615dX36gcmDW75rm5MCnP3362O03f/iRg3suEzLGr2P9w9hzbpUnbdnnOF4QRbU9fXq+e74AACAASURBVFddum9k1Dmw+aqrOPTuiH8dQExDMjfGFpvvCAiaDZS7VzDH5TQl58ch6RUwvGLtGgCPzY83AvLnvmFs9OdfRb57JXQSwXU8aB1BRkMQSe8esW3blPHQs7377qvf/d+rX/v8n7uuhiz0IYpiuCp5LYLgtckvvoO6iqF712D7B390Xz0KzvzPN73yq36+cEvpmefe8OR3/c5OYcaRzvYEe27JA0Lr75YwWl8NFycDeKqCOOe2b1x9RXX4oKFQbXQfVj3pVEDNm8Z3Sq1KL4ec039nUr3+OxKa0x/9Cq7agVzXASFeWptywRNwIDppbbP2U2bFq8J1mK2c4xCYKWA5oione5n7b8+7/+sH1Z3f/GShdzm0zEElCVyXIwk1HN9FENSQW3fWnv4XnHXGqg99qv7tp/T/zq4fXP/nEniD861/+ezOv/3rOx/7xr9c8qTLX7/3cE99fMrv4e4+D89r/bVCPOY/f2jw0BvHRsfeuG/Xwxg+tA+jwwfRrA3D0Q/jpGXj0pbjcc666HXw/HncdjglwF2Jh++8FX6+jEJ5JYrllSiUV6DcuwZwnM9LjetR6rlZiKMfa3Ak1Xn3W1/3vKEf/Z+fdJcAzysiJ3MmF5LDfBdSPLjxjtE5Tdz3yJ/+6ZO6v/dPO5MCp092ITi4QQsolZiRtkljBM189483vf2DLxFtatKNr3nZhdU7v3MjOFw7tsbGU17/gc2bP/3p+2b7jiUDCF357sp9+/d/ZufDv3jDg/f+HGPDexDUHqNrHJ4PeG4Oru9ifY9tUNsJ07t6Dc4459JW6pfZCHpCzgkX0lvOzI0Y238/mo0GmvUaGvUa6vUayj0noXfFKVi+fgsB8lHUmn8pVl5VPZ7v+ou3v+FFA9/76vcJiJwr4Ds5sE2XKoBbXHfgtJ/vWT2X5++58vLb/dFdz1L5HmOPmJliIaC0gk5CqBi3rvvBz58znYF984su+L36ozf/CdXfqGlTaZ36wT9b9+T3fHhGSdFe73N5vwVXRt9+rVffsPk3R0Z3fO6OGz/vDg/cgjyHLTpMje5OsZX7Xc7bNvW3+dwLph6ch0f6Nzzf+l/MUFcHKlGoVUYwOjSIwQO70NV/Gk5/5ht2qaT7Cq/n3Dvmqlsf6afe8ebXXrL3h9fd0F0Acg5MKhlp+iEceEkIveY3lj/lhz+cVXeqfPzjW5o//LtfobQayvEhlYaUjgFDksRImk2opz6vuOEzn2HSgWl/Pz134y+i6v5nQPqIw1GIwinhC//i70riooumNQrnsR4w7fcd0cG9D3xg+bCUD6jR+/q7SwLnPecU5EU6xM0wjAQzoARRgmZTIwwVGvU+NOoVhM0RxGGDLZBNeHFETz5xhYVTTPtb7bhrx5HoXtaF7uUbsOH0s1Adi5EEhzZEYeW2ZuW6W/ff/cnfWP30Dx1zOyOJmsb3FjGGyQypBVyZQKXeCqexdzOAn8xGqZGDB6XfveHfZOJf4TQOIXbpDc8bjx9Vr7jU94nZwMB7953/4ldUf/bjvSpuAn4XonDE/+W2r34OwG9N9+xFLSEe+Y77K5l7zpY4DEy+n541z8Xy9U9FXL0fSXMXVLTfeD7oI7fZtGn5kSR2kL8wA/ptX4M5lp1rDfRnDwQZj+Wtr92u7b7N5zR+TyYJMPkgzHr8vvZ4dg+Wya5h7ohs265tn0f6jobl2q9jFfNc+09AMn2+LEI6ZTSG70d96JdI4sQYp8HYHbdtfPGec9uvOBbbP7n0N1558I4ffr2L6qhj08N4EvClgJAajnT/5Bn3xB+Zy7Mees97cv1J9Vm6UrtcVYffIuqjqxgjpXtXnb32+hvvONw97r3s0uvjgQcuF34OUdhAkO/C6R//6/XLzz9/SsjLopYQYwOx0vo/DI/ECji482d4JOdhxUmvQd+ap6F/w2ugomHoeAQqrkAnY1BxDVB1aCYIIg/Oe4a37EDwCcHJGLn46bZvQibi5n5ElYdQH7oVQeVhhM3HENaBsGGyPB6R+/NwzJedDw/sNQP7SXc6lwgGdqNx6KgTA27fmouAXVnxWdebPvc55k36Ty5669bfPxjHG73K4GuUL/YAN856LU+Wn3zSu4No4HLOIuTmi1Cjoxi94453ALhm8sWTm5PJ5xf0/u3XYnkjwgMQ6GcjzpqnCKfxaRJZSaC7fy1Kfaehq2cdSj3rUOxejVxpGXLFXgsKJsjVIbRxu8bGsDMZrtjJBAWtEw51sXRizZv0TWmaOCNp0hae3hHOaGpacB4j42bkZUpK7liJ0JIsBpHkJC6O7RVvSSeWZYcXxyg70Own0ewIqxtwJ/EoknAQYW0PkuYwwmAEYf0QmtXdCCowKRyTBL8sl3D+09/MrCzH9vfvpxUvjxv16900QZIvAW7zS1xBz5Mc857/juVnf+GJ6Uzc/YYrfhQ1xy7SjkRjaBi5sy548NRP/fmTJ9tQi1pCnP1OHHrk+yv3333rwf6yVT3TZDBpayWA0YN7MTaw1/rJ05lImR2FS77EZRVyxTXw8t3wc2V4fhmu3wXXL4OBa45XMAa6oBfFyZvM0o5bSlUvrggWCeHkJ3CckUCG4XnYwkQzlZxhGTamBIgFk86AZSFos/gihjYAGIZO6tBxFUlUgQoroDqRhBVEzQrCxjDC+iCa1cfAcTpxaNIf4eAI8NKLT1f95zx4zMHAL4oa9dOIcSYH4zqidFAW8oqfVlfdpz//nFX4whd2TyDMcdoRua5rfQcXxVIiL4B4z8On7/7MZ1gpEwzyRQ0I0la6xec+vLdnuJivoysfoejTDWh1WkN7Vg6brZT/VNog0/ZrJkBYPQApuViQcGxLts01k0hk++Ycz3PhcT7HdSDdFXD8Hki3C45TgnDzEC6BlIdwCiCYhMMMdkVowemy8mattQfAY/cTNAPllDJSS8cBlAqgEkqDGlRURRyMIG6OIm4OI6JEaB5EElYNE0YBUKkBoxVgtCrQCPJw3RJ0ol5wnPiPfQRXTo52ofrEiC1KCAKk6XSR6k/Iz/HkfTrfY7J8sK7jsVGsv/hiF+9//4TnL3pAbLzo0ZFrrn4WHv31wygWQ3SVga4SUPAD+K4C+9u4UMelSOfapExlqnTihI10Cgamt2xtZ8esJtMChQEDz6XAEE4C6eyH9PbDcZZBOGXApGSnoUsdPwfJidjJ9Ib5PShNFciFVtLo33SdsiMqIRDiBlSU2jh8Q80e9AhxFCAImmg2I7MEQYJaPYd6QyCMhFETmw2BRl1CIodNTz4Ty877yXEZrbbVNjGb2bZQPpLrs0RhbGgkJ+0BUHns18fFfpnA4emOs2blYDQ2Ch8CsVYIchGGPWPZTCi+6AHBry2WiujpWc6pMVCtBBgeCkEPUqEoUMgDnK2VU445jjIqjitD4yIkQBxKgXRxUxBwTWnAijZr5hKls0lYUBk132o7BigsyA5AIQchxKBV21KJZJpIUTBzFsSJByHyiBMXSksoJZEk9LsLJAmjR5WJ4WEcTxwnZrrZKI4RBCE4RJMAIy8qVUSSaOtSbioEDQVPShTyRazuL6KQ91Es5iYwwrHcefbJ+SdVw2YXmZ804Y/AMJYWwUAj20dz+xevmbUf4li+k0p0QfqemYFU5/LwlFZ9DzwwJc3ckgBERthCPodCXwGFgkQuTy2dxi91cTJYjCiKQAZLtINIa0hmlxMsw6pMk4RmtWvWtKBpWDPxFmuctc92se1Hpph8LDudGchmnwY5Oz1YR7wPjWVrMHNtvUjsTCQSs3NEogZKfFcFRyTI5wVyngPfS030xHoQomaEoCERR+zlzV7g+KwTIV7NO5NilAbZzwCE8kwBbnHFry6+Z6CVdTsrc7zWqlLrzxdzoErMcd1O3v8P0Zb1O3vukgJE9tFcs8Oq3OWhu0eiXJbo6hIoFiW8HNWTEGEUIY5Do34QLGHUQBiFCIMAYZS2vg3YVpjrwExmaTryFDWZ9GFG5SIPOw7YaUa7QRr7geqSzXxtmd96jcjwnp83Ywf8fN6oU56fg5/Lg/v5Qh5+zkMu7yBfAApFjVKXQjEXI+dECOs11EZrqI5UMTZcQ3W4hspow6go7d9/vLa/duWVzthPt/0pZVWrjeDDOIEJEZKmq5e58h5g+qiA4/Funl86O9FMu+9C15sorN8wbWTwkgXETESnV6hQcNDdLUxAn+MqOC7nNqbhG0EIjhGmYybgpDTGa8M4Gfr0uTSqKTDSyqfBTW3Gya2C4/fBy/XCyXXD8btQ6Oo2RjU4za6Th+uXjOeKs+cIQWnAxRrWRjK0rH/enFo4HSQVQFWhowp0ePQRuQ+ddlrOveCCgti+vS8Z3f6MMeEE/lnn3oEaqpu3bZtz3NPKoV1/vlvBpUOBE5gYTzQFXhpsxGP85fvW/QjYPlM1HPPjQse/z36ImI4J+t3z3dP2kncAcYxJb/zu3nhraIxrD3BzDpycCy9nxDW8XA7S8yBcO+cZ6GXKFO5j/E4z3W7761+/Ku8El0a7H3yWGn3kzbjrn4pNKKPjSwXUbtmJegD8aEvXLU7Paf+ai3NfOO/WW2c0xG/9q79atu/Pfvu9OTomqC6l9gM/y0iLFAxsIFZe+MLb8IP/mOnVjunxgx/6yFki3L8BogdSJ2ZIa7NU+n/TPaQDiOmoskSOufd/e38UjEL5LmRuGXQcwoeCFAnCJIAvFOj5DWvV84LRu5hA6ZPfeHLhg92rn33tRTfdNEFqfPs978nt+ezWn1AtolRMeb9FSaM60nMXA17BQX3F2sOGXLQufhwbeutWeWDvoz+OqZ3KBnSjhtgpVp/0rnftxW9NDWfqAOJxEHuhX8rs2/BWWZPfNOkOJDy4OjGOArgaWsbG1ZwwYpVjCyqNT41Ub/rUD5+95UNBqL8dDO+p95761PMGv/65f9QJXErE7GcERCoduE2gNBWwfstFf3H2O9959Ppd9oA5rHc/9OBnXTfohlNCFNQQHTwA/xlnb53cQ53dapJLJDvcWS8FClg1pr0t50xIwkxmTs72nYIZx0A3sydsCHfOA6gSDe2655P1A/feK9TIjoP3/ce/EAyZnUBpYNSlDAxpBEBMh50Etrzx6q1PBH0fevtrX+I3Dv03GjBJo4Fk5BCCRGD1y6/47EzP7wBiJsosieNp9RvjN1X4jf0rDSjYYegK11jIHNPAbizjCxNAgR2PnI2VKpDxollm513SkC7bqZmCgS5XpnVd85QLPtt/1VWcs+G4/u57z3tepO752XcDoRE1aggrw2g+thPF5z7vddkUvNO9QEdlmo4qS+QYxyQzMJGxUmzRzYyq7A7hRGxKGeaXmtG/tmdE0ilQLB2Mo9FvOgn8nMJLGiFWBm1DbSgBMmhlahLJSU9cV//agy/46P/8AH540YwUNuGRpv/HdP7MWG6mE/du3eont938VnX7t651u5chqNPUUYgHD0CtPWvrab/70etmupbHO4CYjTqL/FysODe0Y9UbG6hrOiE1R0XFTRMv5RTWx/6GJ32l1Lv6i+5A9Vervve9eqoJ0XAWN114ck9Xcf0Z4Y4H3hSGh64ImnqNCexlLFfqaeLYHNdDuOLKqzdNHql24A8//HQVhmc09+zZKIYHnrVdqPOSl58vf3neKbvDRu2mUEXb0bX84OjAocaKF77mjsratSMXbd3aBkFbSf+5HoVg4zNffejrf/OPfrAfua71iJlLtrkbKg7Qf+nV15z6iU9NCfeeXMWLHhBsbD73+x3NcHLFF0oCiYmDSs9wPIVWkMEhoLQG3snn/5t3+tM/degZuTs2X7V1POtC240MMG56dAR49FYAt27duvW9z7rhurN0OPzxcGT/y6hOERzljc/4++XL1r/n7K1bW0miH33HOza6SfgV/cgDF4T1YdMRibyHqN5EEjQh/dI6KPVswTnoDj3IcXIYvvELJkTlO2eUfuh3r77X8QoH68ODy6LqvgvGJM7Bjl/YidvzQGN0N+giyG94dnX1xZe//KQP/t7Nba8+42Ym3WYssJBP7L/1mS9MtPzhwaHluP5rj5isDwzb4FIsCZS7nCk91X4+ge8reJ6C57NTLuuYC+fUMRc1bGdd1is73g+xAU6uH16uD06+B16uDOl1mahXBviB4eEiB3bSHX3HXG3GnupmLWiFbhR7HFz0qjXo7gYGPr8DwQ8Owo1GIN1uuM+6bFutr+/9m/7X5x5XWPbXz+rtXX7mc8W+n3yredXuiSHWu99w+Ztl3vsHESvbeZcoJBx3wlF8UYTm6EGTJRz5XoRaDAXN6pd0WMlHzUPvDALl0kahPcLuSXb0MRSFhryfA3LkaL8fpU1nfWr5055z3RmvetXds9kMk/l70UqI/XdceElUf/SG2uCjWLfxJXjz27pwz68i7Ho0snFHkymxyPelI7F2Yy82bPKx8fQ6lGpg3/0/Qe+bngy3uwvhd5fDPf/is9f+6WePSf/Aq+4aGcFdU7OjP/aSC/7Acd0/Zji7SjssyNAmujdpIhwbglx+0lhh05bfDnuXXf/r22+vX5UmNfvalXgf7tvsrPD2FN0geHISNVb5XSejuPkcL0rCpLb9/u2rn3/Zw9HYWGgGHt3wI+DjHz+iml2UEmLXvVv73doPDtQO3uxGDF/JO+hZuQWOiQZ1MDyiMTysETRZEwk8V4PziDOWaTFIiEZNIQw8JMqD67ooliV6+tnhNgwkA4ibe3Do0bvQGLUt69ozn4PhR1530toXv2/a+J4j4qhZCu9659v/VO156MOi3MMIO+PiZWuvdALVrEHROj99y6dOvfTVvz/Z1pjltsf01KKUEI0dn/5ernez6xU4qDxAs5KgNnY3Sr19KPedhL6+Evr6bCSpHYLpQnEYV+qSp6dESibCiqEomNlRpUJIwU6qJgSaEGIY2mgCx2XAGc3RNOKVEfzjcU0CaYiHGY7KcHWOpXaAPMu5yK9w0YMmoMYAxdF0g0ByyAAhGBtBbegR1AZ/jSTtFuta2Y1mPY+m/uQ/AjhuA4YeuuaPXlr/7tc+7K5cZyIi6cgynRJUe5pV8+5dl7zudavf9a7r8Od/dUyZ/EhutigBMXKocpI7egvg9WP56vXQI48gHAUGdg9j9/ZheDmgWPZQ7N6AYtcyFEq9cDiKjWHVJuyaTOdACY5L8CASF1CuWZsIVRN+zRaOI4s8CN9FrsdDjtF+VGYN02aAY3Aej2kT3WoGA8m8iXrNwrizcdF8ppB8Dzr2mVU8zehhfJnMDJKOUDJrO+zU3NvIeaI5AnQTOhmBCgeQNB9D3HgMYfVRhNXHEIdDUNGg4cNi/0aUeldjYO8uDD52I+pVbDoSxjmSsnuvvXb5gf/7D99hyk2PM917LsCASfp6gzq09pF76jNesPpd75o24O5InvV4yy5KQDy2B9ct78I7IYfc2tgQeleejjWndqM2NoDK6E6MDQMHdrOJZLTldsPDBAnDqTlYyM8th5frTpcyHLcAlyHbXtFsM3zboUEsGJzHBAEpGRm1yjBPHk/HMNixDARYBhB73kSvGsZvH9/Q7g0jgzMMLg2joPji2As2rfQOmaUBrTl6bgw6HoKOhqGigzaDSNRAEteRRDUgEfDyT4JfPh2eX4CXc7HnkV9i/90/Q3MUnCi0eWAYf/t4mWm66xlLdNs/f+7epDoMt9CLpFmBiHxIRkEmCcKggRUveOUVJ3/84yccDHz/RWlDfH4rurqb+GlfN57GgTJkLQ4L9elZ6j8N/atWIZ8voF6rIGhwGUPYHEAUNk04NxNs0N5jA8Y1R8OZ/Ww7HUmXHTOeJJ5Lx1Hb8dQCjrsM0uVY6l44Xq8ZB8Hx1NLlWAg3HVPN0O+cGWcNJhljuLcsQsiC9ToxBNx0F1kpY0CSZtgw0kAzlwwXSgxKEXudAMFpx2oHtYOoDj6E6tBDaIw+hHDsfjTZ35YAo6NAZTt2rR173mfK9ZyrpeqWhfJ2GTaGvdrYXbUnrThYGM7Hm7dtm9b1Oh0IsmNfu/JKf9We+78ZHrjnxX7XSkiXiRg8k5SB4SD0Ji175bt++8w//sTns2tO9HpRAoJEvWErisNjqDXqQFc3h5HaYZyG4BxoxtCDHOAX+pHvWo1CVx8KpR4USt0oFLsQRSHisGkn+EjoEuTAfurmlgFFmvVCgGMk6oCu2A4uav8myUABjtsLIUJIly7WskkyYAYHuUUmPzDHBZMOMNmAWwAD0ITkGAmOu2bmjiKEIINTwqS2BMdjwy5mTLbJwVRCFI4hqO5FUN1pctZG9d2IGzuQNB9BWNuBoHrIhFnEEVCrAGMjQHUMWLYcWHd7GfmdBKljErpJHUE5JSR+0QxfVZ4P5Zevi0u5O+TIyAPJqZturYzGzRdt2zY2bnlNZOVvP/sZZ4b77vyxr7FcFlyjLjrSg+P6TFKGqLIf5Qvf9Mfn/t0//uHEK0/s3qIFBMl67fuhT14FDBwChoas79p6k+hRAvIc52+GeFobli2+MagNQ9shyq63Aq7XB9fvNYN6vBxT0DB7Bhm+CMe3ahSPcTScV+ixKpRRmxx4+V6TUcMmERvPo0SVykyaqDhMlQ+2eWaThNk06BpmZj2OleYQ1wSaM+8kFqAqYfNegzYDg0ag432Im4cQNYcQNwaNrQCTS6qBIFAImnbgEgEQBEBXF1Aq2uXAEHDKt0+C1Hw3q7IJ4+G3MUmJeRdlxnQzyZgiaJqjiJIEQXH5bQnE3W513+2hxt0iitaGAmdox71Ah/HFrAMzPoRcZsadO3AdF1EzQG7js6990U23vuvEsv/Upy9qQLzjZav0ivIBbDkNWNFv8xGNVYBKBajXORmKtRtytB/ysAkH2LnjWVvC8CnrkqBJ1aeWmpSBh+oUAdS+zlLTpEFvRoVySuMSwagymecoBQkICGYs5ZqLgEqY9l2laSdDAxRm3DBKIP2Vxr6IQKaN4wBRWEcYNM0kL2EjRrMB8NvYYZVn+p0c86vagLz9B4CHHgWGquvw+p0SjuNaI9ckRBNmGDndoby3gjbvwdmAlNJIVIg4rppONA4+C9P8S7G2CeD4aqahyejWxmVU09yek2+47N5HL5vKjif+yKI0qjOylkpF7NpfxN4BoNwVY93KECt6gZWrwSgB00HXDCwwghAYGwM4CpNqBRdm4jDp8jlsIAUJHSRcaC9wyTJz0D42ahgbWdoTKUhMo2vAVIPj1Mw5gssk60rBxp5pDdtDzbUGvVsWGMy8wV5vZhpkJg2T9dokQ4hMnlIVR/D8ohln7ft5eI6Pnp48nN5huMwZSd9TCIyMAPsOAPsPAgcOlhCGTE4PrFlfRvzIoHGFKr8MyRSe1d3QbpEjeQxnG5c0swMazxsNe358FzTtF4QmwQHBwBuyYTBYNZ1tdpv2G4+ZGKeC+N6l9z56eVZH8229qAGxbsNaxM0amkET9PY9utfD7oMSnqdRKij0lutGdWBGllI3wK4JAwK27Gx/s7SXid1mbA6Zs9m0IQPULLhvGIAxlYwKpeRIB9JnUsU4kzhaLB1NxjIcm2O8qqb1DODm6FGKYfM4eZDSh3SY/t1NW2/HSCLfYeIzBx5dmH7JAJWSgupXEGqjEo1WXVRrKzA6mmB4JMHoqEYcREgYKpEIaCXgew6W93dj06b1qP9SV91V6/+5EDZGaMCLZ79cqCSQqlI7SQ0feIUzeqio2FcQVsw7m4RprWBAm5TEoTHBbyHj25WhCyUFnRT8ulzOveHuh+NXvsYWmW9YMO+zqAHBwS7lchdWrOgG00RSB2dOoygKECUuRus9qEds/TUch9PbKjhkQieG7zStu5wgIQOzUSykYwLY4mdL2sqTIcjglB4EglkySZFJi7RMJjVMX6BmvwMNZ6pOBcSKgzjzUMpDTBWK+1oiThxEShrJFSUCcYU2UWJ0eabOiZm0lq274jazg8SIgggRRR9iOI6DUsFD3i+gq1AAU/KQcU1O2eKavufd8MO2CNJxD+jtV1/teS/s9pO7d50WDe9/vhje/x40a5tEYwC0d1JzwzQgFI5k/NZP2VQIPF5ed9o1r7j94SdkYFDr+UexsagB0U4PJucqFHMoFhwUS9IE8DHnUqKY9S5CEEYmL1MzoDeJzFc0uZo4SYdgDzWZuT1En/oy080w7RElB/kxXWcSg1xC5jfGuklZOZ6Chu5HZvAz/ROmMzDtjzBig9XC0WtkJW6nSDIfxO2sDSYPsz/FhLnB8xwU8h58r2jBTEDyXJwgCRME9QhBUyKJaZuMU+eim25qA8P4cW6lyYj5kLu5aOCvfnDlld2FpPICjA5/IGpWni8Hd0E0KvY1+Wq8twuOx66L7o0/LZ1//h9d/L//+ZaJd56fe0sGEJPJn8+7KJd9dJWLKBWFSVzGES+McKXxGIYBAurqlCYR8zI1EYaRyZJHnZwGOSdbadZtTqaAaWiCNNI1BctcE4IxR5TLDhNB9ciD6+Xhej4c14Ofo+vVMTmZ/FwOuXweubwPP+ead87lFYolhVIhgScCJFQRa3VUR2uojDA/E5c6auGEtnsyOea8b9ys27ZxxNu/c/n+h6/ukT/75dpow6lCx428qI/5vspVxe67wmLfpu0GbHfvmPP9T3TBJQuI2Qjv+wLFkg/Hk5DU2R2GGVDvidI83RNzMmV5mbiOAys5eH/aDvQwuX4fnNxKOLneVl4m46b1iibs24R/s1OEE5uYXEzMy2T7HkwfhAkF4eBNSoxMQrBRp1HLPpAqtNGhnrBEeC3yvfjPvkBwjALTCYAp85G0rpuvG6Twov15zJnY+c1KAT3UGrMza7mlcnJRA+LMh4eWSj0e3XfGCvr7NA06v4wCi1pl2jQwCH/UxS82FBDmFzX2s/qc21oD/mM1FO/ZCVGnFdz5ZRRY1IDgR64PAqx5sI79+RwOrvZRP4kxCwyYW1o/Jhb3Dmr4jzXg7RqBrg4bL1lHqZzIB4seENnnLq9X0ftwiOTBGA1HWeFMkwAADfBJREFUIljeBbW6gOCkApwNObgbfGDFwpciOhSIhwTiXQLY5cDZ7aK010XhgEDUjBE364jDyEzeldGmsx6nwJIBxPgnA26ogN1jiB4bQ+MWoKqBfex1pt++C3B7gVyvGasOv8+F1yWQ69FwispEM3jdNieAcas6tg+CHia2tjzGPgn+TA81hdF0Aoljiisx4DDWnFPVCghHQnMeLxOj5ELwpo4PHUmIWEDHzPbFoRAKIk6gwxCq2oSqBohGIsQjCeKqRtQUiJsOUBdwGwImQryjGbWzwIzbSxIQM1HDpCMaBhrDwFiLgWLj6DQ9z3R8tvVQt7bTY+ytzhae4zY75RwxAikrNgcSx0EwLIP5kMw23brMBM4lD5krQua55M1a5AsQuQKQy0OY6LxsuiMrzRj8p5IEmtPyzNi9NtMXd45PpsDC1xEmf1Fnv0OBx0GBDiAeB/E6ly4+CnQAsfjqtPNFj4MCHUA8DuJ1Ll18FOgAYvHVaeeLHgcFOoB4HMTrXLr4KLBgAaG1FodbAjOIYfFV2rH8orhtCqxjed+Feq8ntB+CDHykhLrmmmumveaaa6am+j/zzDMnlI26C3j2SOVIH7mkyo+s6wN2DC+pb57tY48ZIA7H7NcAYjIPn3nmtgkMvGLFitb+jzkA/sGyWLPmEvT1bW8dvy/9mv79XWKofKB1nId37zZ9aK3vHT6lF837KnhOJ8K5RZP2jb3LCxDP3QTc/PP2w0t6+4gBMQvjt5iTbfeZ28aZnYzOLLrlS8qmzPbtBbPu6uoy6wMFu4+BnBguDJpjpwz7AoVBVPKjopLLCRwCajlPrPGrAkxivWxY5kZtTETO55SAQNNviNDzhMkzA6C7XMZdK3N4sBnhvCGBkxtpht8lXeXAcNHD9tXL4a7twqZlPUucGhM/f1ZAzIX5t21jq7wNWeteLpfFJcyYunmzZfqdvgB2i4FcTgyEIQqDvujp2S1GfV9EY92i4rmiFFdEreqKqDgk+uqeaLiuaLgNUcj70m/mRJNT//lNk+haNSDqXiLdxBNFhuuoRCa6KbRSklktHA6q93wZaEYmAaV8AV65gJ/1N3Bb4GHjcIy1w1X01JYWOBqewt5iiD1dgCqX0NdVQs6ftfoncsoS2ZuWItMAwTA3aWIBAKxYcZNtyU8pi0LBMv9Ojr3cvVvkcjmTR8If9IRfgBjzPNFX8w2DBr0NOVoriwIC2fCUkFFVQrsiLyOZBCXZLMRSNDT8gitVkDhMRuEpyBiu8BLthJwvWTlOoqVI3Fj4GjKOPUcliRBeIpiaQiklXJm03pljlvtLZfh5hdF1CQ6pEpwoQv9wgPKhBvKDAVwOhFxEsdANL8RQdxWHuodxUA6j4YQouA5WuL1mZlGTPmecyUmrVvTW+OGltzUBEDMBYZsdyIsVN90kVqwAKAUKhZXCAsAVzISXy+0TK31fVLBSKuWIPKrS9ZWouYkoNT3ZcCFUEjtunBM5GcoklA48KYRwpNLKceAJIRIZJ8KFHzKy0439RCCAVIgdIRXLSUcLmTCZBHOxCOEoJhlC4gipJSNCldSehhQqthKivUod6aBc8lEslVCitiYiJDpGEEcYC0PI0QDOUANiMIA8pCAGAUGb/IjT/LY/9fhtK6FR8wJUc3VUZRUNjKImRlERY2bCdVcAeUhsTPoQN+O2rBvTvlPWgCxpYLQAMQkMGXFAMBAIJKEFQkH4vi92u67o3ecKv3xADHqe8Cr9chhViXIDbsPn2Hqn4WiR9+oyiKWACh3tuVKFoVCJI6WQrhsmUmnpSJmIGImrhZJKwNVKSiWYhIiJXxzXgXZiIaRU2ok0J04QrnKUFLGWCpr5Wzi9CTNXCxULN0kSGTMv5Cw/RzJnUx5dZWGybjDdowIzbDAlTQymo2kEAZpBiJC2x0gTekxDjZox/UiqgOQY/xrgNAERAq4CXKamoerGJlfYCc9nanu1lIg9Jh6TkJ6DpOhBcyl5UFwKPCaR5BTCQoTITxD4DUSuQuBE0F6IQlGCplgxr9GbL6PgleBgJZq15oSsGwTEjL8rr5TYtlkDWwmGrO6XJDAMIGYAg9gGGKlAIJCYhUJBHCwWZW6fy+kBUSoNySG3IHoqvqTxm/d9GTQ8GRdqIolzTiHfYEvt+J7rxJGQThyZOWAjL3Y0tCsT7fhuIgPlSSkiN3aE48aUE8rV0IIJ5aWI3SSRAjryEkcKEWlXayWkFp4SmmtXCe2IBG6i4SjKCBBUcQvsMzJC2wkhNAo5F93dEp7LVDA5OF5sMm5QkoRhHU2ThqaBMIzBtDPMLM40NFwHXAdAmKanMZzFFI6knBBp5u8ukyBZegWTGNnx8nA85ni1OZo8k36GKWhycF2eY3Y+zk2RQ1e+AD+XZx2YtJVMo+N6tIPas27UWmlo2j7t8Jvbt0tcCYVtWR6xFjCWHCjcSWCYQLxMMvAgwUDJkBXw/QOCYPAcR7iuBYNTdYTj10QYeNL3CAbfiSPI2JXClVIkSjGRrwOtHJkkIqQ8UBwVo0xmVCkSKk0uzQElOBUJJYMUcJQnEteRSkk2vkJKRycxpYOrFKRKtKeF4AMcgkEl2tExc7ccmx9nuikWXRS7ONE52/6Ys2yZuSQ4hodL2LDr6dPQ9BynNDTHxjGwuXmKuHdgQODKe2ElxbGh20K8C5X4GVuBgQsvnPEcP7Y/NiluzXfHzMRr8qGWdCFJdKIKOopjlSilfa20Ytpo2q2KM0fHiXKVdpXWUiZKKKUS/mG+dYjEcbR2tCSPGzNX87gwp5lGjzdKtEq7qqW5KMvCpUyaauar1pQjHqex7/xmoUCi8GAQVFsN3SxFl8Sp6UI3MhBka1QqFd1oNHQYhnp9HOtgTazDcJWu1fpVOQhUpVBICkGXqvmNJBdGKsxFynGDRDheQidQU4aJlE6SKB1pLWgOJBwEqXzEsXIjKd3IgQhcIUMhnUgkKtJQoUZCp1KoIZtC6kDQ/6QRQukAQgYasg7IQEg0kai60mhqiAYE6tqRzVrhyf9qc1Auibo84o/UEPWHBuXrH+45qLBihZ4kHVr1f8Q3XsAXGD2bUmKS6kRiiCvpirvwQk3DegDQVKFoT6xkR1oPQHsieLQ7oYfJ9X3lFgpSNB2lnVCi4gidq8kifNmI80kzCmUul5dRFCYijqUrHRHHVIGUI2nhQsk4gqtUIrWmnqSdRAiHhrYjtEyUFloJV8uE6YiFkyTSjMOkgIHjm/kKOfOxkq4SJkLHrRa3/AgbvMe8oZvfAFRPXcD1dKxfXVVj9wt37uu75svbDw3ilFNUm1F9rJ+1oO7XMjwz1akNGFkLYYHBPogLL0QGDH5luVzWhZUFsdNfIQq7XYEKlMztE034wu+Xoqui5FghFl7FFSofSdSUQM6XfhKLyHFlpCKhvRyNbckU146OpXKl0OxkoJcolnQpOaEMIWJOPa5krIR0Egga4InWEkpI5nhX0FI7jiPiQAglXSkiM2w/KZ02OFx80i8a1Qc39eKhF+YwdC6Q9C+oWjpGL9uMne8N1L2v3rqv/O377ls9eu+KAYVTTkklgzGk+aSs3o/RUxfWbVqAyF57FmDASAy65VLbgp107KArpBdbt2yP2A3A2emLqDAkeqUUu0sheird0s8NicBTwmn4ItAV4RVdEdW0SNxAuE1XxF5eIAql7/giCAKBJJSJ70k/5MSVjgVKRIesx7H7kJFwYi8WSrAbQkkVxwJSCM7rFyWO8GipOEJ4kZRB6Yz9O+NTfrorjt3e6q6T1+iDZ66TI093co2nFIvhhjRxakaGBb9OEhyq1MVNewfdm3fsz91y5yO5B+++e03t3vx2jVNWK9xLNyt/BAL9iea3pMFACszZmGqTHCntWqsJ99iWxjBloRwsRaBsp5p1L+c32ynosXqUbtuBnLm2kMYvDfu+yI/6opIbE7mKJ2q+J3yvKhp1G6vke3XRbLii6TUpjeB7rgiCpghdV3hhICLXFWHICZ7oAWIeFs4EFIs4dkQSRyKOYxFCyyROeB0zaMhGkoiSjPwzVg6sWr98bMO6ZbXTlvXWTi0Xg3Xd5dpJxXx9jeNGrpRBmuyYkYLzI9lxGNV2NMPqQ43m6I56tfrQyHDtoX27q9tvu3vswLa7qmMPHzxo+97LZY2bLmzrh+9Igxb3TtqYwMyTzh12dxaQmGsZ4TrhJtcAWYRrO2BY5kH2ddyBCZGt+9Pgv/IBG/w3XBpo3a80bI/tI7AKw+Z4rZIXoFJH73w1L4qFmsAQMAigmM+JoFk35UboRm42BaM1oiAQhTAwHdJuM6fjfCDiKDRLEueE6wj5tJOGuk5ZN9y3oq/R11Os9ZaKUTnnVno9Uet31FC/TEaXJSHKOkQBEfqUhs9oEenC9zz0zpT9W7jFWInioBZunGh/MIY/puFX48QfirU7FkZyIIrkwUZDHGqEemikHo3WKvHIwzsPDP3s+4O1++NdSe6xLp3P9+k7yg/a1n0C45MSLebnzpKXAIY5ZvnTYrBZyjyuU4cDTXbzmcY98PzkcQ48dt9946Hi2T3G1z/G3jVrZv62O8ZLDq/dJ/r2rtFc82h10EbbjpcAGpVl6b0eRVDrE7nSsOa6vczk7eXNmsCayUft/qHhUosxeS8eHajV2lpwIL+9zxwvp4y+YsUKOjeAzZs1sv4zc7sJDG8f0GH8jA5HvJ61Uo/4bsf4grmCaabHHvbj2gps3To+EGnr1nEm27p1a1upmZ509McNb7c9b5Y7tUA0S5nOqcdJgf8PzTywAhCmPQIAAAAASUVORK5CYII="/>
									</defs>
								</svg>

							</div>
							<p className="text-sm lg:text-md opacity-70">Drupal-разработчик в России по версии Рейтинга
								Рунета</p>
						</div>
						<div className="w-1/2 sm-:w-1/3 pl-4 border-l-2 border-primary">
							<h3 className="text-3xl font-semibold">3+</h3>
							<p className="text-sm lg:text-md opacity-70">средний опыт специалистов более 3 лет</p>
						</div>
						<div className="w-1/2 sm-:w-1/3 pl-4 border-l-2 border-primary">
							<h3 className="text-3xl font-semibold">14</h3>
							<p className="opacity-70">лет опыта в сфере Drupal</p>
						</div>
						<div className="w-1/2 sm-:w-1/3 pl-4 border-l-2 border-primary">
							<h3 className="text-3xl font-semibold">200+</h3>
							<p className="text-sm lg:text-md opacity-70">модулей и тем в формате DrupalGive</p>
						</div>
						<div className="w-1/2 sm-:w-1/3 pl-4 border-l-2 border-primary">
							<h3 className="text-3xl font-semibold">35 000</h3>
							<p className="text-sm lg:text-md opacity-70">часов поддержки сайтов на Drupal</p>
						</div>
						<div className="w-1/2 sm-:w-1/3 pl-4 border-l-2 border-primary">
							<h3 className="text-3xl font-semibold">200+</h3>
							<p className="text-sm lg:text-md opacity-70">Проектов на поддержке</p>
						</div>


					</div>
				</div>
			</div>
		</header>
	);
};

export default AppHeader;
