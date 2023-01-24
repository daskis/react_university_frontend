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

function App() {
	const success = useSelector(state => state.form.success)
	return (
		<div className="relative">
			{success
				?
				<div className="fixed left-0 right-0 z-50 max-w-[50%] mx-auto top-56">
					<Alert color="success">
						  <span className="text-3xl font-bold p-8 ">
						    Форма успешно отправлена
						  </span>
					</Alert>
				</div>
			:
			<></>
			}
			<AppHeader/>
			<AppSupport/>
			<AppSecondSupport/>
			<AppExp/>
			<AppRates/>
			<AppCase/>
			<AppTeam/>
			<AppReviews/>
			<AppVTB/>
			<AppFooter/>

		</div>
	);
}

export default App;
