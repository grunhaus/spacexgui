import { FC } from "react";

interface PaginationProps {
	totalPosts: number;
	postsPerPage: number;
	setCurrentPage: (e: number) => void;
	currentPage: number;
}

const Pagination: FC<PaginationProps> = ({
	totalPosts,
	postsPerPage,
	setCurrentPage,
	currentPage,
}) => {
	let pages: Array<number> = [];

	for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
		pages.push(i);
	}

	const renderPages = () => {
		return pages.map((page, index) => {
			return (
				<button
					className={`px-2 mx-2 my-2 md:my-4  rounded-full ${[
						page === currentPage ? "active" : "",
					]}`}
					onClick={() => setCurrentPage(page)}
					key={index}
				>
					{page}
				</button>
			);
		});
	};

	return (
		<div className="flex  flex-col-reverse md:flex-row justify-between md:px-24">
			<div className="flex justify-center items-center md:mt-0 mt-5">
				SPACEX@2021
			</div>
			<div>{renderPages()}</div>
		</div>
	);
};

export default Pagination;
