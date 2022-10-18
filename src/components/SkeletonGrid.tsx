import { FC } from "react";

import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

interface SkeletonProps {
	cards: number;
}

const SkeletonGrid: FC<SkeletonProps> = ({ cards }) => {
	const renderSkeleton = () => {
		return Array(cards)
			.fill(0)
			.map((_, i) => {
				return (
					<div key={i} className="mx-12 mt-10">
						<SkeletonTheme baseColor="#202020" highlightColor="#444">
							<Skeleton className="w-auto h-[12rem]" />
							<Skeleton width={"50%"} />
							<Skeleton width={"100%"} count={2} />
						</SkeletonTheme>
					</div>
				);
			});
	};

	return (
		<div className="grid sm:grid-cols-1 md:grid-cols-2 md:mx-20 lg:grid-cols-3 lg:mx-20  my-10">
			{renderSkeleton()}
		</div>
	);
};

export default SkeletonGrid;
