"use client";

import AnimatedHeroIcon from "@/components/svg-icons/animated-hero-icon";
import DarkCircleArrow from "@/components/svg-icons/dark-circle-arrow";
import HeroLogo from "@/components/svg-icons/hero-logo";
import IOSAndroidLogo from "@/components/svg-icons/ios-android-logo";
import Link from "next/link";
import Image from "next/image";
import Container from "@/assets/img/index-hero-container.svg";
import PhoneMockup from "@/assets/img/hero-phone-mockup.png";
import PCI from "@/assets/img/pci.png";
import NDPC from "@/assets/img/ndpc.png";
import * as motion from "motion/react-client";
import { comingSoonText } from "@/utils/coming-soon-toast";

const HeroSection = () => {
	return (
		<section className="hero min-h-[60svh] padding lg:pt-20">
			<div className="grid gap-20 items-center md:grid-cols-2">
				<div>
					<p className="bg-brand-black border border-[#4f4f4f] py-2 px-4 text-white rounded-full inline-flex text-[0.688rem] md:text-sm font-medium items-center gap-1 mb-4 md:mb-10">
						<HeroLogo />
						Pay Bills, Buy Data, Shop Online - All in One Place!
					</p>

					<div className="space-y-4 mb-6 md:mb-12">
						<h1 className="header gradient-text text-[2.5rem] leading-[3rem] md:text-5xl md:leading-tight xl:leading-[6rem] xl:text-[5rem]">
							Pay Fast. <br />
							Live Simple.
						</h1>

						<p className="md:text-2xl text-white">
							<span className="inline-block w-auto">
								“Simplify your finances with Monita - secure,
								fast, and reliable.”{"   "}
								<span className="inline-block">
									<AnimatedHeroIcon />
								</span>
							</span>
						</p>
					</div>

					<div className="flex gap-2 md:gap-4">
						<Link
							className="bg-white text-brand-black font-medium rounded-full py-2 pl-3 pr-2 relative flex items-center gap-4 transition-all duration-300 ease-in-out hover:gap-6 hover:ring-1 hover:ring-white/50 ring-offset-2 hover:ring-offset-black text-xs md:text-base lg:text-lg xl:text-[1.375rem]"
							href=""
                            onClick={(e) => {
                                e.preventDefault();

                                comingSoonText();
                            }}
						>
							Get Started{" "}
							<DarkCircleArrow className="lg:size-10 xl:size-[3.875rem]" />
						</Link>

						<Link
							className="bg-brand-lime text-brand-black font-medium rounded-full py-2 px-3 relative flex items-center gap-2 transition-all duration-300 ease-in-out hover:gap-4 hover:ring-1 hover:ring-brand-lime/50 ring-offset-2 hover:ring-offset-black text-xs md:text-base lg:text-lg xl:text-[1.375rem]"
							href=""
                            onClick={(e) => {
                                e.preventDefault();

                                comingSoonText();
                            }}
						>
							<IOSAndroidLogo className="lg:size-10 xl:size-[3.875rem]" />{" "}
							Download the App
						</Link>
					</div>
				</div>

				<div className="relative xl:w-4/5 xl:ml-auto">
					<Image
						className="w-full h-full"
						src={Container}
						alt=""
                        priority
					/>

					<motion.div
						className="absolute -right-[3%] sm:right-[15%] bottom-[4%] h-full max-sm:w-full"
						animate={{
							y: [1, -18, 0],
						}}
						transition={{
							duration: 2,
							repeat: Infinity,
							ease: "easeInOut",
						}}
					>
						<Image
							className="object-contain object-center size-full"
							src={PhoneMockup}
							alt=""
                            priority
						/>
					</motion.div>
				</div>
			</div>

			<div className="grid place-content-center mt-12 mb-8 md:mt-20 xl:mt-28">
				<div className="flex items-center justify-evenly gap-12">
					<div className="grid place-content-center gap-2 text-center text-sm">
						<p>Fully liscened by</p>

						<Image
							className="w-32 h-auto xl:w-44"
							src={PCI}
							alt="Licensed by PCI"
							quality={100}
						/>
					</div>

					<div className="grid place-content-center gap-2 text-center text-sm">
						<p>Backed by</p>

						<Image
							className="w-32 h-auto xl:w-44"
							src={NDPC}
							alt="Licensed by NDPC"
							quality={100}
						/>
					</div>
				</div>
			</div>
		</section>
	);
};

export default HeroSection;
