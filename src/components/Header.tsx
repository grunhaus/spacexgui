import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/logo.png";

const Header = () => {
	const { pathname } = useLocation();

	const [allActive, setActive] = useState(false);
	const [favActive, setFavActive] = useState(false);

	useEffect(() => {
		if (pathname === "/") {
			setActive(true);
			setFavActive(false);
		} else if (pathname === "/launches/favorites") {
			setActive(false);
			setFavActive(true);
		}
	}, []);

	return (
		<header>
			<div
				style={{
					background: "linear-gradient(180deg, #121212 64.11%, #1E1E1E 100%)",
					boxShadow:
						" 0px 8px 10px rgba(0, 0, 0, 0.14), 0px 3px 14px rgba(0, 0, 0, 0.12), 0px 5px 5px rgba(0, 0, 0, 0.2)",
				}}
				className="text-2xl "
			>
				<div className="bg-transparent">
					<div className="flex justify-center items-center align-self-center">
						<img src={logo} alt="spacex" />
					</div>
					<div className="text-white ml-5 md:ml-24 bg-transparent">
						<div className="pb-5 font-bold text-5xl bg-transparent">
							Launches
						</div>
						<div className="flex gap-10 bg-transparent pt-10">
							<Link
								to="/"
								className={`bg-transparent ${
									allActive ? "border-b-2" : ""
								} px-16`}
							>
								All
							</Link>
							<Link
								to="/launches/favorites"
								className={`bg-transparent ${favActive ? "border-b-2" : ""}`}
							>
								Favorites
							</Link>
						</div>
					</div>
				</div>
			</div>
		</header>
	);
};

export default Header;
