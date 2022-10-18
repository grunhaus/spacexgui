import { FC, useEffect, useState } from "react";
import spacex from "../api/spacex";
import CardGrid from "../components/CardGrid";
import Header from "../components/Header";
import Pagination from "../components/Pagination";

const LaunchesMain: FC = () => {
	const [launches, setLaunches] = useState([]);
	const [rockets, setRockets] = useState([]);
	const [merged, setMerged] = useState([]);
	const [currentPage, setCurrentPage] = useState(1);
	const [postsPerPage, setPostsPerPage] = useState(9);
	const [searchTerm, setSearchTerm] = useState("");
	const [filteredResult, setFilteredResult] = useState([]);

	console.log(filteredResult);
	useEffect(() => {
		const fetchRockets = async () => {
			const responseRocket = await spacex.get("/rockets");
			const responseLaunches = await spacex.get("/launches");

			setRockets(responseRocket.data);
			setLaunches(responseLaunches.data);
		};
		fetchRockets();
	}, []);

	useEffect(() => {
		const mergedApis = () => {
			const launchesCopy = [...launches];

			for (let i = 0; i < launches.length; i++) {
				for (let j = 0; j < rockets.length; j++) {
					if (launches[i].rocket.rocket_name === rockets[j].rocket_name) {
						launchesCopy[i].rocket = rockets[j];
					}
				}
			}
			setMerged(launchesCopy);
		};
		mergedApis();
	}, [filteredResult]);

	const handleSearchChange = (event) => {
		setSearchTerm(event.target.value);

		if (searchTerm !== "") {
			const filteredData = merged.filter((launch) => {
				return `${launch.mission_name}`
					.toLowerCase()
					.includes(searchTerm.toLowerCase());
			});
			setFilteredResult(filteredData);
		} else {
			setFilteredResult(merged);
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
						className="md:w-[26rem] w-[16rem] h-[3rem] rounded-lg mt-10 mx-5 md:mx-24 rounded-3"
					/>
				</div>
				<div className="mx-5 md:ml-24 mt-5 opacity-40">
					Total({currentPosts.length})
				</div>
				<CardGrid
					postsData={currentPosts}
					filteredResult={filteredResult}
					searchTerm={searchTerm}
				/>
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
