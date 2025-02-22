"use client";

import Image, { StaticImageData } from "next/image";
import Avatar from "@/assets/img/avatar.png";
import { Swiper, SwiperRef, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useRef, useState } from "react";

interface Testimonial {
	id: number;
	quote: string;
	name: string;
	position: string;
	avatar: string | StaticImageData;
}

const testimonials: Testimonial[] = [
	{
		id: 1,
		quote: "I like getting the SMS & knowing the job's done. I often refer to it, “hope you get a ping today!” because my product",
		name: "Mike Torello",
		position: "CEO of Initech",
		avatar: Avatar,
	},
	{
		id: 2,
		quote: "I like getting the SMS & knowing the job's done.I often refer to it, “hope you get a ping today!” because my product",
		name: "John Doe",
		position: "CTO of TechCorp",
		avatar: Avatar,
	},
	{
		id: 3,
		quote: "I like getting the SMS & knowing the job's done. I often refer to it, “hope you get a ping today!” because my product",
		name: "Jane Smith",
		position: "Marketing Director at Innovate",
		avatar: Avatar,
	},
	{
		id: 4,
		quote: "I like getting the SMS & knowing the job's done. I often refer to it, “hope you get a ping today!” because my product",
		name: "Alice Johnson",
		position: "Product Manager at Innovate",
		avatar: Avatar,
	},
	{
		id: 5,
		quote: "I like getting the SMS & knowing the job's done. I often refer to it, “hope you get a ping today!” because my product",
		name: "LOlly Tech",
		position: "CEO of Innovate",
		avatar: Avatar,
	},
];

const Testimonials = () => {
    const swiperRef = useRef<null | SwiperRef>(null);

	const [isBeginning, setIsBeginning] = useState(true);
	const [isEnd, setIsEnd] = useState(false);

	const handlePrev = () => {
		if (swiperRef.current) {
			swiperRef.current.swiper.slidePrev();
		}
	};

	const handleNext = () => {
		if (swiperRef.current) {
			swiperRef.current.swiper.slideNext();
		}
	};

	const updateNavigationState = () => {
		if (swiperRef.current) {
			setIsBeginning(swiperRef.current.swiper.isBeginning);
			setIsEnd(swiperRef.current.swiper.isEnd);
		}
	};

	return (
		<section className="space-y-10 bg-black/100 padding py-14">
			<div className="text-center w-[90%] mx-auto lg:w-3/5 space-y-4">
				<p className="text-brand-lime font-bold text-xs">
					⚡ TESTIMONIALS
				</p>

				<h2 className="header gradient-text text-[2rem] leading-[2rem] md:text-4xl lg:text-6xl md:leading-tight">
					Here’s what our <br /> clients have to say
				</h2>
			</div>

			<div className="w-full relative">
				<Swiper
					ref={swiperRef}
					modules={[Navigation, Pagination]}
					spaceBetween={24}
					slidesPerView={1}
					centeredSlides={true}
					pagination={{
						clickable: true,
						dynamicBullets: true,
                        enabled: false
					}}
					onSlideChange={updateNavigationState}
					onSwiper={(swiper) => {
						setIsBeginning(swiper.isBeginning);
						setIsEnd(swiper.isEnd);
					}}
					breakpoints={{
						768: {
							slidesPerView: 2,
							centeredSlides: false,
						},
						1024: {
							slidesPerView: 3,
							centeredSlides: false,
						},
					}}
				>
					{testimonials.map((testimonial) => (
						<SwiperSlide
							key={testimonial.id}
						>
							<div className="p-6 lg:p-8 bg-[#010101] rounded-3xl border border-[#282828] h-full">
								<div className="flex flex-col gap-4 flex-grow">
									<svg
										width="59"
										height="58"
										viewBox="0 0 59 58"
										fill="none"
									>
										<g clipPath="url(#clip0_1446_328)">
											<path
												d="M24.0218 8.26367H2.26768C1.33284 8.26367 0.575195 9.02132 0.575195 9.95615V31.7103C0.575195 32.6451 1.33284 33.4027 2.26768 33.4027H11.452V48.0259C11.452 48.9603 12.2097 49.7184 13.1445 49.7184H18.5834C19.3115 49.7184 19.9585 49.2521 20.1886 48.561L25.627 32.2458C25.6847 32.073 25.7143 31.8923 25.7143 31.7103V9.95615C25.7143 9.02132 24.9566 8.26367 24.0218 8.26367ZM22.3293 31.4357L17.3634 46.333H14.837V31.7103C14.837 30.7754 14.0793 30.0178 13.1445 30.0178H3.96016V11.6486H22.3293V31.4357Z"
												fill="#CEEF08"
											/>
											<path
												d="M56.6521 8.26367H34.898C33.9632 8.26367 33.2056 9.02132 33.2056 9.95615V31.7103C33.2056 32.6451 33.9632 33.4027 34.898 33.4027H44.0828V48.0259C44.0828 48.9603 44.8405 49.7184 45.7753 49.7184H51.2137C51.9423 49.7184 52.5889 49.2521 52.8194 48.561L58.2578 32.2458C58.3151 32.073 58.3446 31.8923 58.3446 31.7103V9.95615C58.3446 9.02132 57.587 8.26367 56.6521 8.26367ZM54.9597 31.4357L49.9937 46.333H47.4678V31.7103C47.4678 30.7754 46.7097 30.0178 45.7753 30.0178H36.5905V11.6486H54.9597V31.4357Z"
												fill="#CEEF08"
											/>
										</g>
										<defs>
											<clipPath id="clip0_1446_328">
												<rect
													width="57.77"
													height="57.77"
													fill="white"
													transform="translate(0.575195 0.139648)"
												/>
											</clipPath>
										</defs>
									</svg>

									<p className="text-white">
										{testimonial.quote}
									</p>

									<div className="flex gap-4 items-center">
										<Image
											src={testimonial.avatar}
											alt={testimonial.name}
											className="size-10"
										/>

										<div className="flex flex-col gap-[1px]">
											<h3 className="text-white font-medium">
												{testimonial.name}
											</h3>

											<p className="text-xs text-[#C4C4C4]">
												{testimonial.position}
											</p>
										</div>
									</div>
								</div>
							</div>
						</SwiperSlide>
					))}
				</Swiper>
			</div>

			<div className="grid justify-center md:justify-end">
				<div className="flex gap-4">
					<button
						onClick={handlePrev}
						disabled={isBeginning}
						className={`xl:w-[50px] xl:h-[50px] w-[34px] h-[34px] rounded-full justify-center items-center flex flex-col cursor-pointer ${
							isBeginning ? "bg-gray-300 cursor-not-allowed" : "bg-white"
						}`}
						type="button"
						aria-label="Previous"
					>
						<svg
							width="17"
							height="16"
							viewBox="0 0 17 16"
							fill="none"
						>
							<path
								d="M15.8625 7.98047L0.862549 7.98047M0.862549 7.98047L7.61255 14.7305M0.862549 7.98047L7.61255 1.23047"
								stroke="#252A0F"
								strokeWidth="1.5"
								strokeLinecap="round"
								strokeLinejoin="round"
							/>
						</svg>
					</button>

					<button
						onClick={handleNext}
						disabled={isEnd}
						className={`xl:w-[50px] xl:h-[50px] w-[34px] h-[34px] rounded-full justify-center items-center flex flex-col cursor-pointer ${
							isEnd ? "bg-gray-300 cursor-not-allowed" : "bg-white"
						}`}
						type="button"
						aria-label="Next"
					>
						<svg
							width="17"
							height="16"
							viewBox="0 0 17 16"
							fill="none"
						>
							<path
								fillRule="evenodd"
								clipRule="evenodd"
								d="M0.112549 7.98047C0.112549 7.56625 0.448335 7.23047 0.862549 7.23047L14.0519 7.23047L8.58222 1.7608C8.28933 1.46791 8.28933 0.993033 8.58222 0.700138C8.87511 0.407246 9.34999 0.407246 9.64288 0.700138L16.3929 7.45014C16.6858 7.74303 16.6858 8.21791 16.3929 8.5108L9.64288 15.2608C9.34999 15.5537 8.87511 15.5537 8.58222 15.2608C8.28932 14.9679 8.28932 14.493 8.58222 14.2001L14.0519 8.73047L0.862549 8.73047C0.448335 8.73047 0.112549 8.39468 0.112549 7.98047Z"
								fill="#252A0F"
							/>
						</svg>
					</button>
				</div>
			</div>
		</section>
	);
};

export default Testimonials;
