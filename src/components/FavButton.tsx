import { useEffect, useState } from "react";
import { AiOutlineStar, AiFillStar } from "react-icons/ai";

const FavButton = ({
	id,
	url,
	image,
	title,
	description,
	date,
	setFavoriteList,
	favoriteList,
}) => {
	const [favorite, setFavorite] = useState(false);

	useEffect(() => {
		favoriteList.map((favItem: any) => {
			if (favItem.id === id) {
				setFavorite(true);
			}
		});
	}, []);

	const details = {
		id,
		url,
		image,
		title,
		description,
		date,
	};

	const handleFavorite = () => {
		let copyFavoriteList = [...favoriteList];

		if (!favorite) {
			copyFavoriteList.push(details);

			setFavorite(true);
		} else if (favorite) {
			copyFavoriteList.map((favLaunch, index) => {
				if (favLaunch.id === id) {
					copyFavoriteList.splice(index, 1);
					setFavorite(false);
				}
			});
		}

		setFavoriteList(copyFavoriteList);
	};
	localStorage.setItem("favorites", JSON.stringify(favoriteList));
	return (
		<button className="z-50 hover:bg-white" onClick={handleFavorite}>
			{favorite ? (
				<AiFillStar
					style={{
						background:
							"linear-gradient(0deg, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.05)), #121212",
					}}
					className="text-3xl hover:text-gray z-50 ease-in duration-200"
				/>
			) : (
				<AiOutlineStar
					style={{
						background:
							"linear-gradient(0deg, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.05)), #121212",
					}}
					className="text-3xl hover:text-gray z-50 ease-in duration-200"
				/>
			)}
		</button>
	);
};

export default FavButton;
