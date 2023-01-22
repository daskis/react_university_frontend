import AppHeader from "./AppHeader/AppHeader";
import AppSupport from "./AppSupport/AppSupport";
import AppSecondSupport from "./AppSecondSupport/AppSecondSupport";
import AppExp from "./AppExp/AppExp";
import AppRates from "./AppRates/AppRates";
import AppTeam from "./AppTeam/AppTeam";
import AppVTB from "./AppVTB/AppVTB";
import AppFooter from "./AppFooter/AppFooter";

function App() {
	return (
		<>
			<AppHeader/>
			<AppSupport/>
			<AppSecondSupport/>
			<AppExp/>
			<AppRates/>
			{/*<AppVTB/>*/}
			{/*<AppTeam/>*/}
			<AppFooter/>
		</>
	);
}

export default App;
