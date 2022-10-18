import { FC, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import FavButton from "../components/FavButton";
import Header from "../components/Header";
//import Pagination from "../components/Pagination";

type Launch = {
	id: string;
	title: string;
	description: string;
	date: string;
	image: string;
};

const Favorites: FC = () => {
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

	const renderFavoriteList = () => {
		return favoriteList.map((launch: Launch) => {
			return (
				<div key={launch.title}>
					<Link
						to={`/launches/${launch.id}`}
						state={{
							launch: launch,
							favoriteList: favoriteList,
						}}
						style={{
							background: `linear-gradient(90.86deg, rgba(255, 255, 255, 0) -9.83%, rgba(0, 0, 0, 0.61) 99.51%), url('${launch.image}')`,
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
							{launch.title}
						</div>
						<div
							style={{
								background:
									"linear-gradient(0deg, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.05)), #121212",
							}}
						>
							{launch.description.substring(0, 100)}
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
								{launch.date}
							</div>
							<FavButton
								id={launch.id}
								url={`/launches/${launch.id}`}
								image={launch.image}
								title={launch.title}
								description={launch.description}
								date={launch.date}
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
		<>
			<Header />
			<div className="text-white">
				<div>
					<input
						style={{
							background:
								"linear-gradient(0deg, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.05)), #121212",
						}}
						placeholder="  Search all launches..."
						className="md:w-[26rem] w-[16rem] h-[3rem] rounded-lg mt-10 mx-5 md:mx-24 rounded-3"
					/>
				</div>
				<div className=" mt-5 opacity-40 md:mx-24">
					Total({favoriteList.length})
				</div>
				<div className="grid sm:grid-cols-1 md:grid-cols-2 md:mx-20 lg:grid-cols-3 lg:mx-20  mt-10">
					{favoriteList.length === 0 ? null : renderFavoriteList()}
				</div>
			</div>
		</>
	);
};

export default Favorites;
