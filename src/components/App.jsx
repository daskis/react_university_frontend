import AppHeader from "./AppHeader/AppHeader";
import AppSupport from "./AppSupport/AppSupport";
import AppSecondSupport from "./AppSecondSupport/AppSecondSupport";
import AppExp from "./AppExp/AppExp";
import AppRates from "./AppRates/AppRates";
import AppTeam from "./AppTeam/AppTeam";
import AppVTB from "./AppVTB/AppVTB";
import AppCase from "./AppCase/AppCase";
import AppFooter from "./AppFooter/AppFooter";

import AppReviews from "./AppReviews/AppReviews";
import {Alert} from "flowbite-react";
import {useSelector} from "react-redux";
import AppFAQ from "./AppFAQ/AppFAQ";
import {Route, Routes, useLocation} from "react-router-dom";
import AppContent from "./AppContent/AppContent";
import AppModal from "./AppModal/AppModal";

function App() {
	const location = useLocation();
	const background = location.state && location.state.background;
	return (
		<div className="App">
			<Routes location={background || location}>
				<Route path="/" element={<AppContent />}>
					<Route path="modal" element={<AppModal />} />
				</Route>
			</Routes>
			{background && (
				<Routes>
					<Route path="modal" element={<AppModal />} />
				</Routes>
			)}
		</div>
	);
}

export default App;
