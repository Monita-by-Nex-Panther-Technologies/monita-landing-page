import Image from "next/image";
import ContactHero from "@/assets/img/contact-hero.png";
import HeroLogo from "@/components/svg-icons/hero-logo";

const HeroSection = () => {
	return (
		<section className="grid md:grid-cols-2 md:items-center gap-8 hero bg-none bg-black padding py-16">
			<div>
				<p className="bg-brand-black border border-[#4f4f4f] py-2 px-4 text-white rounded-full inline-flex text-[0.688rem] md:text-sm font-medium items-center gap-1 mb-4 md:mb-10">
					<HeroLogo />
					Pay Bills, Buy Data, Shop Online - All in One Place!
				</p>

				<div className="space-y-4 mb-6 md:mb-12">
					<h1 className="header gradient-text text-[2.5rem] leading-[3rem] md:text-5xl md:leading-tight xl:leading-[6rem] xl:text-[5rem]">
						Contact Us
					</h1>

					<p className="md:text-2xl text-white">
						Our team at Monita is always ready to assist you. Reach
						out to us through any of the following channels.
					</p>
				</div>
			</div>

			<Image
				src={ContactHero}
				alt="Hero image"
			/>
		</section>
	);
};

export default HeroSection;
