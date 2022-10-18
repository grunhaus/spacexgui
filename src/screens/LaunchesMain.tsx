import { ChangeEvent, FC, useEffect, useState } from "react";
import spacex from "../api/spacex";
import CardGrid from "../components/CardGrid";
import Header from "../components/Header";
import Pagination from "../components/Pagination";
import SkeletonGrid from "../components/SkeletonGrid";

type Launch = {
	mission_name: string;
};

const LaunchesMain: FC = () => {
	const [merged, setMerged] = useState([]);
	const [currentPage, setCurrentPage] = useState(1);
	const [postsPerPage, setPostsPerPage] = useState(9);
	const [searchTerm, setSearchTerm] = useState("");
	const [filteredResult, setFilteredResult] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		const fetchRockets = () =>
			Promise.all([spacex.get("/rockets"), spacex.get("/launches")]);

		fetchRockets().then(([responseRocket, responseLaunches]) => {
			const rockets = responseRocket.data;
			const launches = responseLaunches.data;

			for (let i = 0; i < launches.length; i++) {
				for (let j = 0; j < rockets.length; j++) {
					if (launches[i].rocket.rocket_name === rockets[j].rocket_name) {
						launches[i].rocket = rockets[j];
					}
				}
			}

			setMerged(launches);
			setIsLoading(false);
		});
	}, []);

	const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
		setSearchTerm(event.target.value);

		if (searchTerm.length === 0) {
			setFilteredResult(merged);
		} else if (searchTerm.length > 0) {
			const filteredData = merged.filter((launch: Launch) => {
				return `${launch.mission_name}`
					.toLowerCase()
					.includes(searchTerm.toLowerCase());
			});
			setFilteredResult(filteredData);
		}
	};

	const lastPostIndex = currentPage * postsPerPage;
	const firstPostIndex = lastPostIndex - postsPerPage;
	const currentPosts = merged.slice(firstPostIndex, lastPostIndex);

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
						onChange={(event) => handleSearchChange(event)}
						placeholder="Search all launches..."
						value={searchTerm}
						className="md:w-[26rem] w-[16rem] h-[3rem] rounded-lg mt-10 mx-5 md:mx-24 rounded-3"
					/>
				</div>
				<div className="mx-5 md:ml-24 mt-5 opacity-40">
					Total({currentPosts.length})
				</div>
				{isLoading ? (
					<SkeletonGrid cards={postsPerPage} />
				) : (
					<CardGrid
						postsData={currentPosts}
						filteredResult={filteredResult}
						searchTerm={searchTerm}
					/>
				)}

				<Pagination
					totalPosts={merged.length}
					postsPerPage={postsPerPage}
					setCurrentPage={setCurrentPage}
					currentPage={currentPage}
				/>
			</div>
		</>
	);
};

export default LaunchesMain;
