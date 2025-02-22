import Image from "next/image";
import Link from "next/link";
import Notification from "@/assets/img/download-notification.png";
import ESim from "@/assets/img/download-esim.png";
import AppPreview from "@/assets/img/download-app-preview.png";
import * as motion from "motion/react-client";

const DownloadMobileAppSection = () => {
    return (
		<section className="w-full bg-[#000000] py-12 padding">
			<div className="download-section grid gap-8 md:grid-cols-2">
				<div className="space-y-6 pb-5 lg:pb-12 grid place-content-center">
					<h2 className="text-2xl md:text-3xl lg:text-4xl text-white font-bold header leading-tight">
						Fast and Reliable Payments with Monita
					</h2>

					<p className="text-sm md:text-base lg:text-[15px] w-fit lg:w-[460px] font-poppinsRegular text-white leading-relaxed">
						Experience the convenience of managing your finances
						with Monita - Your trusted partner for fast, secure, and
						reliable payments. Whether you’re transferring funds,
						paying bills, or shopping, Monita ensures seamless
						transactions, unmatched reliability, and peace of mind.
					</p>

					<div className="flex items-center gap-4 flex-wrap">
						<Link
							className="transition-all duration-300 ease-in-out hover:gap-4 hover:ring-1 hover:ring-brand-lime/50 ring-offset-2 hover:ring-offset-black bg-brand-lime text-[#010101] rounded-full py-3 px-5 flex items-center gap-2 text-xs md:text-base"
							href=""
						>
							<svg
								width="20"
								height="26"
								viewBox="0 0 20 26"
								fill="none"
							>
								<path
									d="M10.2969 6.14844C11.4063 6.14844 12.7969 5.39844 13.625 4.39844C14.375 3.49219 14.9219 2.22656 14.9219 0.960938C14.9219 0.789063 14.9062 0.617188 14.875 0.476562C13.6406 0.523438 12.1563 1.30469 11.2656 2.35156C10.5625 3.14844 9.92188 4.39844 9.92188 5.67969C9.92188 5.86719 9.95313 6.05469 9.96875 6.11719C10.0469 6.13281 10.1719 6.14844 10.2969 6.14844ZM6.39063 25.0547C7.90625 25.0547 8.57812 24.0391 10.4688 24.0391C12.3906 24.0391 12.8125 25.0234 14.5 25.0234C16.1562 25.0234 17.2656 23.4922 18.3125 21.9922C19.4844 20.2734 19.9688 18.5859 20 18.5078C19.8906 18.4766 16.7188 17.1797 16.7188 13.5391C16.7188 10.3828 19.2188 8.96094 19.3594 8.85156C17.7031 6.47656 15.1875 6.41406 14.5 6.41406C12.6406 6.41406 11.125 7.53906 10.1719 7.53906C9.14062 7.53906 7.78125 6.47656 6.17188 6.47656C3.10938 6.47656 0 9.00781 0 13.7891C0 16.7578 1.15625 19.8984 2.57812 21.9297C3.79687 23.6484 4.85938 25.0547 6.39063 25.0547Z"
									fill="#0E1300"
								/>
							</svg>
							Apple Store
						</Link>

						<Link
							className="transition-all duration-300 ease-in-out hover:gap-4 hover:ring-1 hover:ring-brand-lime/50 ring-offset-2 hover:ring-offset-black bg-brand-lime text-[#010101] rounded-full py-3 inline-block px-5 flex items-center gap-2 hover:gap-4 text-xs md:text-base"
							href=""
						>
							<svg
								width="20"
								height="24"
								viewBox="0 0 20 24"
								fill="none"
							>
								<path
									d="M9.33816 11.4754L0.0855713 21.2887C0.0864403 21.2904 0.0864402 21.293 0.0873092 21.2948C0.371483 22.3603 1.3448 23.1445 2.50061 23.1445C2.96294 23.1445 3.39658 23.0195 3.76853 22.8006L3.79808 22.7833L14.2126 16.778L9.33816 11.4754Z"
									fill="#0E1300"
								/>
								<path
									d="M18.6987 9.80469L18.69 9.79861L14.1936 7.19418L9.12805 11.6987L14.2119 16.7773L18.6839 14.199C19.4678 13.7752 20.0005 12.9493 20.0005 11.9975C20.0005 11.0509 19.4756 10.2294 18.6987 9.80469Z"
									fill="black"
									fillOpacity="0.8"
								/>
								<path
									d="M0.0852872 2.66377C0.0296692 2.86872 0.00012207 3.0841 0.00012207 3.30642V20.6473C0.00012207 20.8696 0.0296692 21.085 0.0861563 21.2891L9.65594 11.7267L0.0852872 2.66377Z"
									fill="#0E1300"
								/>
								<path
									d="M9.4062 11.9766L14.1946 7.19236L3.79225 1.16544C3.41422 0.938777 2.97276 0.808513 2.50087 0.808513C1.34506 0.808513 0.370003 1.59444 0.0858295 2.66088C0.0858295 2.66175 0.0849609 2.66262 0.0849609 2.66349L9.4062 11.9766Z"
									fill="black"
									fillOpacity="0.8"
								/>
							</svg>
							Google Play
						</Link>
					</div>
				</div>

				<div className="relative">
					<motion.div
						animate={{
							y: [0, -10, 0],
						}}
						transition={{
							duration: 2,
							repeat: Infinity,
							ease: "easeInOut",
						}}
						className="w-3/5 md:w-full min-[820px]:w-3/5 mx-auto h-full relative"
					>
						<Image
							src="/download-app-preview.png"
							alt="Monita Mobile App"
							className="object-top aspect-square size-full hidden md:block"
							fill
						/>

						<Image
							src={AppPreview}
							alt="Monita Mobile App"
							className="object-center object-contain size-full md:hidden"
						/>
					</motion.div>

					<Image
						className="absolute bottom-5 left-0 w-1/3 md:w-1/3 md:-left-5"
						src={ESim}
						alt="Bills - eSim - One Card"
					/>

					<Image
						className="absolute top-5 right-0 w-1/3 md:w-1/3"
						src={Notification}
						alt="Bills - eSim - One Card"
					/>
				</div>
			</div>
		</section>
	);
};

export default DownloadMobileAppSection;
