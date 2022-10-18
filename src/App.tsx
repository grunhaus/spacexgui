import { FC } from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import LaunchesMain from "./screens/LaunchesMain";
import { routes } from "./shared/routes";
import LaunchesShow from "./screens/LaunchesShow";
import Favorites from "./screens/Favorites";

const App: FC = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path={routes.LAUNCHES_MAIN} element={<LaunchesMain />} />
				<Route path={routes.LAUNCHES_SHOW} element={<LaunchesShow />} />
				<Route path={routes.FAVORITES_SHOW} element={<Favorites />} />
			</Routes>
		</BrowserRouter>
	);
};

export default App;
