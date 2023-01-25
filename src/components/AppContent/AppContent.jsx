import React from 'react';
import AppHeader from "../AppHeader/AppHeader";
import AppSupport from "../AppSupport/AppSupport";
import AppSecondSupport from "../AppSecondSupport/AppSecondSupport";
import AppExp from "../AppExp/AppExp";
import AppRates from "../AppRates/AppRates";
import AppCase from "../AppCase/AppCase";
import AppTeam from "../AppTeam/AppTeam";
import AppReviews from "../AppReviews/AppReviews";
import AppVTB from "../AppVTB/AppVTB";
import AppFAQ from "../AppFAQ/AppFAQ";
import AppFooter from "../AppFooter/AppFooter";

const AppContent = () => {
	return (
		<div className="relative">
			<AppHeader/>
			<AppSupport/>
			<div className="relative top-0">
				<AppSecondSupport/>
				<AppExp/>
			</div>
			<AppRates/>
			<AppCase/>
			<AppTeam/>
			<AppReviews/>
			<AppVTB/>
			<AppFAQ/>
			<AppFooter/>

		</div>
	);
};

export default AppContent;
