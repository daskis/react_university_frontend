import AppHeader from "./AppHeader/AppHeader";
import AppSupport from "./AppSupport/AppSupport";
import AppSecondSupport from "./AppSecondSupport/AppSecondSupport";
import AppExp from "./AppExp/AppExp";
import AppRates from "./AppRates/AppRates";
import AppTeam from "./AppTeam/AppTeam";
import AppVTB from "./AppVTB/AppVTB";
import AppReviews from "./AppReviews/AppReviews";
function App() {

	return (
		<>
			<AppHeader/>
			<AppSupport/>
			<AppSecondSupport/>
			<AppExp/>
			<AppRates/>
			<AppTeam/>
			{/*<AppVTB/>*/}
			<AppReviews/>
		</>
	);
}

export default App;
