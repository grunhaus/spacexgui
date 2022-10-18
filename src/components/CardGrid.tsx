import { FC, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import FavButton from "./FavButton";

interface props {
	postsData: object[];
	filteredResult: object[];
	searchTerm: string;
}

const CardGrid: FC<props> = ({ postsData, filteredResult, searchTerm }) => {
	const [favoriteList, setFavoriteList] = useState([]);

	useEffect(() => {
		const favoriteStore = JSON.parse(
			localStorage.getItem("favorites") as string
		);
		if (favoriteStore !== null) {
			setFavoriteList(JSON.parse(localStorage.getItem("favorites") as string));
		} else {
			setFavoriteList([]);
		}
	}, []);

	const renderLaunchesList = () => {
		return postsData.map((launch: any) => {
			return (
				<div key={launch.mission_name}>
					<Link
						to={`/launches/${launch.flight_number}`}
						state={{
							launch: launch,
							favoriteList: favoriteList,
						}}
						style={{
							background: `linear-gradient(90.86deg, rgba(255, 255, 255, 0) -9.83%, rgba(0, 0, 0, 0.61) 99.51%), url('${launch.rocket.flickr_images[0]}')`,
							backgroundPosition: "10%",
							backgroundRepeat: "no-repeat",
							backgroundSize: "cover",
						}}
						className="h-[13rem] flex flex-col rounded-lg items-center mx-5 mt-16  z-30"
					></Link>
					<div
						style={{
							background:
								"linear-gradient(0deg, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.05)), #121212",
							boxShadow: "0px 0px 4px rgba(0, 0, 0, 0.25)",
						}}
						className="h-auto rounded-lg -mt-5 md:pb-5 px-5 flex flex-col mx-5  z-20"
					>
						<div
							style={{
								background:
									"linear-gradient(0deg, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.05)), #121212",
							}}
							className="mt-5 font-bold"
						>
							{launch.mission_name}
						</div>
						<div
							style={{
								background:
									"linear-gradient(0deg, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.05)), #121212",
							}}
						>
							{launch.rocket.description.substring(0, 100)}
						</div>
						<div
							style={{
								background:
									"linear-gradient(0deg, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.05)), #121212",
							}}
							className="flex justify-between"
						>
							<div
								style={{
									background:
										"linear-gradient(0deg, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.05)), #121212",
								}}
								className="opacity-40"
							>
								{launch.launch_date_utc}
							</div>
							<FavButton
								id={launch.flight_number}
								url={`/launches/${launch.flight_number}`}
								image={launch.rocket.flickr_images[0]}
								title={launch.mission_name}
								description={launch.rocket.description}
								date={launch.launch_date_utc}
								favoriteList={favoriteList}
								setFavoriteList={setFavoriteList}
							/>
						</div>
					</div>
				</div>
			);
		});
	};

	const renderFilteredResults = () => {
		return filteredResult.map((launch: any) => {
			return (
				<div key={launch.mission_name}>
					<Link
						to={`/launches/${launch.flight_number}`}
						state={{
							launch: launch,
							favoriteList: favoriteList,
						}}
						style={{
							background: `linear-gradient(90.86deg, rgba(255, 255, 255, 0) -9.83%, rgba(0, 0, 0, 0.61) 99.51%), url('${launch.rocket.flickr_images[0]}')`,
							backgroundPosition: "10%",
							backgroundRepeat: "no-repeat",
							backgroundSize: "cover",
						}}
						className="h-[13rem] flex flex-col rounded-lg items-center mx-5 mt-16  z-30"
					></Link>
					<div
						style={{
							background:
								"linear-gradient(0deg, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.05)), #121212",
							boxShadow: "0px 0px 4px rgba(0, 0, 0, 0.25)",
						}}
						className="h-auto rounded-lg -mt-5 md:pb-5 px-5 flex flex-col mx-5  z-20"
					>
						<div
							style={{
								background:
									"linear-gradient(0deg, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.05)), #121212",
							}}
							className="mt-5 font-bold"
						>
							{launch.mission_name}
						</div>
						<div
							style={{
								background:
									"linear-gradient(0deg, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.05)), #121212",
							}}
						>
							{launch.rocket.description.substring(0, 100)}
						</div>
						<div
							style={{
								background:
									"linear-gradient(0deg, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.05)), #121212",
							}}
							className="flex justify-between"
						>
							<div
								style={{
									background:
										"linear-gradient(0deg, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.05)), #121212",
								}}
								className="opacity-40"
							>
								{launch.launch_date_utc}
							</div>
							<FavButton
								id={launch.flight_number}
								url={`/launches/${launch.flight_number}`}
								image={launch.rocket.flickr_images[0]}
								title={launch.mission_name}
								description={launch.rocket.description}
								date={launch.launch_date_utc}
								favoriteList={favoriteList}
								setFavoriteList={setFavoriteList}
							/>
						</div>
					</div>
				</div>
			);
		});
	};

	return (
		<div className="grid sm:grid-cols-1 md:grid-cols-2 md:mx-20 lg:grid-cols-3 lg:mx-20  mt-10">
			{searchTerm.length > 0 ? renderFilteredResults() : renderLaunchesList()}
		</div>
	);
};

export default CardGrid;
