import Image from "next/image";
import Cards from "@/assets/img/cards.png";
import FundWallet from "@/assets/img/fund-wallet.png";
import Verify from "@/assets/img/verify.png";
import SignUp from "@/assets/img/sign-up.png";
import ShortLine from "@/assets/img/connector-short.svg";
import LongLine from "@/assets/img/connector-long.svg";

const HowItWorksSection = () => {
    return (
		<section className="space-y-10 bg-black/100 padding py-14">
			<div className="text-center w-[90%] mx-auto lg:w-3/5 space-y-4">
				<p className="text-brand-lime font-bold text-xs">
					⚡ How it Works
				</p>

				<h2 className="header gradient-text text-[2rem] leading-[2rem] md:text-4xl lg:text-6xl md:leading-tight">
					Start using Monita in just 4 steps!
				</h2>

				<p className="font-medium">
					It’s finally fast, secure and fully digital. Exactly how it
					should be.
				</p>
			</div>

			<div className="">
				<div className="grid gap-6 lg:w-4/5 lg:mx-auto xl:w-[90%] 2xl:w-9/12 lg:gap-x-16 md:gap-y-0">
					<div className="grid gap-6 md:grid-cols-2 lg:gap-16 relative">
						<div className="group flex flex-col place-content-center gap-4 xl:gap-8 bg-[#0E0E0E] p-5 xl:p-8 border border-[#202122] rounded-3xl relative overflow-hidden transition-all duration-300 w-full group">
							<div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none inner-glow" />

							<p className="font-medium">Step 1</p>

							<h3 className="text-lg font-medium">
								Enter your Information
							</h3>

							<p>
								Provide your email and phone number, then verify
								your phone number with an OTP.
							</p>

							<div className="w-full lg:w-[356px] h-[250px] lg:h-[279px] relative flex justify-between items-center overflow-hidden rounded-lg group/mockup border border-transparent transition-colors duration-300 group-hover:border-[rgba(206,239,10,0.5)] how-it-works-bg-blend">
								<div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[200px] lg:w-[280px] h-[120px] lg:h-[200px] opacity-0 group-hover:opacity-10 transition-opacity duration-300 blur-2xl bg-[#CEEF0A] rounded-full" />

								<div className="mx-auto relative z-10">
									<Image
										src={SignUp}
										alt="Enter your information"
										className="flex xl:mt-[230px] mt-[230px] w-[200px] lg:w-[230px]"
									/>
								</div>

								<div className="absolute inset-0 how-it-works-overlay-grid" />
							</div>
						</div>

						<Image
							className="hidden md:block absolute top-1/2 w-4 md:left-[calc(50%-0.5rem)] lg:left-[calc(50%-2rem)] lg:w-16"
							src={ShortLine}
							alt=""
						/>

						<div className="group flex flex-col place-content-center gap-4 xl:gap-8 bg-[#0E0E0E] p-5 xl:p-8 border border-[#202122] rounded-3xl relative overflow-hidden transition-all duration-300 w-full group">
							<div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none inner-glow" />

							<p className="font-medium">Step 2</p>

							<h3 className="text-lg font-medium">
								Complete Verification
							</h3>

							<p>
								Choose a username and password. Submit your BVN
								and KYC details, complete face and ID
								verification, and set up a PIN for account
								management.
							</p>

							<div className="w-full lg:w-[356px] h-[250px] lg:h-[279px] relative flex justify-between items-center overflow-hidden rounded-lg group/mockup border border-transparent transition-colors duration-300 group-hover:border-[rgba(206,239,10,0.5)] how-it-works-bg-blend">
								<div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[200px] lg:w-[280px] h-[120px] lg:h-[200px] opacity-0 group-hover:opacity-10 transition-opacity duration-300 blur-2xl bg-[#CEEF0A] rounded-full" />

								<div className="mx-auto relative z-10">
									<Image
										src={Verify}
										alt="Complete verification"
										className="flex xl:mt-[230px] mt-[230px] w-[200px] lg:w-[230px]"
									/>
								</div>

								<div className="absolute inset-0 how-it-works-overlay-grid" />
							</div>
						</div>
					</div>

					<div className="hidden relative w-full md:block h-20">
						<Image
							className="hidden md:block absolute h-full md:left-[calc(25%+calc(1.5rem/2))] lg:left-[calc(25%-calc(4rem/2))] md:w-1/2 top-0"
							src={LongLine}
							alt=""
						/>
					</div>

					<div className="grid gap-6 md:grid-cols-2 lg:gap-16 relative">
						<div className="group flex flex-col place-content-center gap-4 xl:gap-8 bg-[#0E0E0E] p-5 xl:p-8 border border-[#202122] rounded-3xl relative overflow-hidden transition-all duration-300 w-full group">
							<div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none inner-glow" />

							<p className="font-medium">Step 3</p>

							<h3 className="text-lg font-medium">
								Request Your One Card
							</h3>

							<p>Fund Your Wallet</p>

							<div className="w-full lg:w-[356px] h-[250px] lg:h-[279px] relative flex justify-between items-center overflow-hidden rounded-lg group/mockup border border-transparent transition-colors duration-300 group-hover:border-[rgba(206,239,10,0.5)] how-it-works-bg-blend">
								<div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[200px] lg:w-[280px] h-[120px] lg:h-[200px] opacity-0 group-hover:opacity-10 transition-opacity duration-300 blur-2xl bg-[#CEEF0A] rounded-full" />

								<div className="mx-auto relative z-10">
									<Image
										src={FundWallet}
										alt="Fund your wallet"
										className="flex xl:mt-[230px] mt-[230px] w-[200px] lg:w-[230px]"
									/>
								</div>

								<div className="absolute inset-0 how-it-works-overlay-grid" />
							</div>
						</div>

						<Image
							className="hidden md:block absolute top-1/2 w-4 md:left-[calc(50%-0.5rem)] lg:left-[calc(50%-2rem)] lg:w-16"
							src={ShortLine}
							alt=""
						/>

						<div className="group flex flex-col place-content-center gap-4 xl:gap-8 bg-[#0E0E0E] p-5 xl:p-8 border border-[#202122] rounded-3xl relative overflow-hidden transition-all duration-300 w-full group">
							<div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none inner-glow" />

							<p className="font-medium">Step 4</p>

							<h3 className="text-lg font-medium">
								Request Your One Card
							</h3>

							<p>
								Access the dashboard, navigate to the Card menu,
								and apply for a One Card supporting both local
								and international payments with virtual and
								physical options.
							</p>

							<div className="w-full lg:w-[356px] h-[250px] lg:h-[279px] relative flex justify-between items-center overflow-hidden rounded-lg group/mockup border border-transparent transition-colors duration-300 group-hover:border-[rgba(206,239,10,0.5)] how-it-works-bg-blend">
								<div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[200px] lg:w-[280px] h-[120px] lg:h-[200px] opacity-0 group-hover:opacity-10 transition-opacity duration-300 blur-2xl bg-[#CEEF0A] rounded-full" />

								<div className="mx-auto relative z-10">
									<Image
										src={Cards}
										alt="Request your one card"
										className="flex xl:mt-[230px] mt-[230px] w-[200px] lg:w-[230px]"
									/>
								</div>

								<div className="absolute inset-0 how-it-works-overlay-grid" />
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default HowItWorksSection;
