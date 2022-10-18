import { FC } from "react";
import { AiOutlineStar } from "react-icons/ai";
import { Link, useLocation } from "react-router-dom";
import { MdOutlineArrowBackIos } from "react-icons/md";

const LaunchesShow: FC = () => {
	const location = useLocation();
	const { launch, favoriteList } = location.state;

	return (
		<div className="text-white">
			<div
				style={{
					background: `linear-gradient(to top, rgba(0, 0, 0, 0.6) 30.62%, rgba(255, 255, 255, 0) 117.38%), url(${launch.rocket.flickr_images[0]})`,
					backgroundSize: "cover",
					backgroundPositionY: "center",
					backgroundAttachment: "fixed",
				}}
				className={`w-full h-[34rem]`}
			>
				<div className="h-full flex flex-col justify-between container px-2 md:mx-auto bg-transparent ">
					<div className="flex justify-between items-start bg-transparent mt-2">
						<div className="rounded-full">
							<Link to="/">
								<MdOutlineArrowBackIos className="rounded-full text-5xl p-2" />
							</Link>
						</div>
						<div className="rounded-full">
							<AiOutlineStar className=" rounded-full text-5xl p-2" />
						</div>
					</div>
					<div className=" flex flex-col  items-start bg-transparent pb-10">
						<p className="mt-5 text-lg opacity-70 bg-transparent">
							{launch.launch_date_utc}
						</p>
						<h1 className="  text-5xl  drop-shadow-lg bg-transparent">
							{launch.mission_name}
						</h1>
						<p className="mt-5 text-lg opacity-70 bg-transparent">
							{launch.rocket.description}
						</p>
					</div>
				</div>
			</div>

			<div
				style={{
					background:
						"linear-gradient(0deg, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.05)), #121212",
				}}
				className="flex justify-center items-center py-8 gap-2 md:gap-28"
			>
				<div className="flex flex-col basis-1/3 md:basis-60 items-center justify-center bg-transparent ">
					<h2 className="bg-transparent md:text-5xl">{launch.flight_number}</h2>
					<p className="bg-transparent mt-5 opacity-70">FLIGHT NUMBER</p>
				</div>
				<div className="flex flex-col basis-1/3 md:basis-60 items-center justify-center bg-transparent border-x-2 py-10 px-5 md:px-20">
					<h2 className="bg-transparent md:text-5xl">
						${launch.rocket.cost_per_launch}
					</h2>
					<p className="bg-transparent mt-5 opacity-70">FLIGHT COST</p>
				</div>
				<div className="flex flex-col basis-1/3 md:basis-60 items-center justify-center bg-transparent">
					<h2 className="bg-transparent md:text-3xl">
						{launch.rocket.rocket_name}
					</h2>
					<p className="bg-transparent mt-5 opacity-70">ROCKET</p>
				</div>
			</div>

			<div
				style={{
					background: "linear-gradient(to bottom, #121212 50%, #1E1E1E 80.73%)",
				}}
				className="px-2"
			>
				<div className="container mx-auto h-[20rem] bg-transparent flex flex-col  items-center justify-center pt-20">
					<h3 className="bg-transparent">ABOUT LAUNCHED</h3>
					<p className="mt-10 bg-transparent">{launch.details}</p>
				</div>
				<div className="container mx-auto flex flex-col-reverse md:flex-row h-[47rem] mt-20 items-center justify-center  gap-10 bg-transparent">
					<div className="flex justify-center w-full basis 1/2 bg-transparent">
						OVERVIEW
					</div>
					<div className="flex justify-center w-full basis 1/2 bg-transparent">
						ROCKET.PNG
					</div>
				</div>
			</div>

			<div style={{ background: "#121212" }} className="px-5">
				<div className=" bg-transparent container mx-auto py-10 ">
					<div className="bg-transparent">
						<p className="bg-transparent">
							For information about our launch services, contact
							sales@spacex.com
						</p>
					</div>
					<div className="md:flex mt-10 md:gap-10 bg-transparent ">
						<div className="border p-2 bg-transparent">
							<button>DOWNLOAD USER'S GUIDE</button>
						</div>
						<div className="border p-2 bg-transparent ">
							<button>CAPABILITIES AND SERVICES</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default LaunchesShow;
