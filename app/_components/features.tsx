import BillPayment from "@/components/svg-icons/bill-payment";
import Image from "next/image";
import BillPaymentImage from "@/assets/img/bill-payment-img.png";
import ESim from "@/components/svg-icons/e-sim";
import OneCard from "@/components/svg-icons/one-card";
import VirtualCard from "@/assets/img/index-virtual-card.png";
import ESimBG from "@/assets/img/e-sim-bg.png";

const Features = () => {
	return (
		<section className="space-y-10 bg-black/100 padding py-14">
			<div className="text-center w-[90%] mx-auto lg:w-3/5 space-y-4">
				<p className="text-brand-lime font-bold text-xs">⚡ FEATURES</p>

				<h2 className="header gradient-text text-[2rem] leading-[2rem] md:text-4xl lg:text-6xl md:leading-tight">
					Tailor-made to your <br /> spending taste
				</h2>

				<p className="font-medium">
					It’s finally fast, secure and fully digital. Exactly how it
					should be.
				</p>
			</div>

			<div className="grid gap-6 md:grid-cols-2 lg:w-4/5 lg:mx-auto xl:w-[90%] 2xl:w-9/12">
				<div className="features grid place-content-center">
					<div className="space-y-4 xl:space-y-8">
						<p className="border border-brand-lime text-brand-lime font-medium rounded-full py-1.5 px-3 inline-block text-xs">
							Fast and easy!
						</p>

						<BillPayment />

						<h3 className="font-bold text-lg xl:text-[2rem]">Bill Payment</h3>

						<p className="xl:text-xl">
							Buy airtime, data, cable tv, electricity all in one
							app at the comfort of your phone.
						</p>

						<Image
							className="block w-full lg:w-4/5 mx-auto object-contain"
							src={BillPaymentImage}
							alt="Bill Payment"
							quality={100}
						/>
					</div>
				</div>

				<div className="grid gap-6">
					<div className="features grid place-content-center relative group overflow-hidden">
						<div className="space-y-4 xl:space-y-8 w-4/5">
							<p className="border border-brand-lime text-brand-lime font-medium rounded-full py-1.5 px-3 inline-block text-xs">
								Seamless Connectivity
							</p>

							<ESim />

							<h3 className="font-bold text-lg xl:text-[2rem]">eSim</h3>

							<p className="xl:text-xl">
								Monita ensures seamless connectivity with our
								eSIM technology. Users can activate a digital
								SIM instantly, enjoy quick setup, and stay
								connected securely wherever they go.
							</p>
						</div>

						<Image
							src={ESimBG}
							className="w-32 h-44 absolute top-1/4 right-0 xl:top-[30%] transition-transform duration-1000 ease-in-out group-hover:scale-[150%]"
							alt=""
						/>
					</div>

					<div className="features relative grid place-content-center">
						<div className="space-y-4 xl:space-y-8 w-3/5">
							<p className="border border-brand-lime text-brand-lime font-medium rounded-full py-1.5 px-3 inline-block text-xs">
								Global Payments
							</p>

							<OneCard />

							<h3 className="font-bold text-lg xl:text-[2rem]">One Card</h3>

							<p className="xl:text-xl">
								A Naira card supporting both local and
								international payments with virtual and physical
								options.
							</p>
						</div>

						<Image
							className="w-2/5 absolute top-[20%] right-0 2xl:top-[20%]"
							src={VirtualCard}
							alt="Monita's virtual card"
						/>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Features;
