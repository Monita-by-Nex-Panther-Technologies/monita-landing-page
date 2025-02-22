import Logo from "@/assets/img/logo.svg";
import Image from "next/image";
import Link from "next/link";
import FacebookIcon from "./svg-icons/facebook-icon";
import XIcon from "./svg-icons/x-icon";
import InstagramIcon from "./svg-icons/instagram-icon";
import LinkedInIcon from "./svg-icons/linkedin-icon";
import TikTokIcon from "./svg-icons/tiktok-icon";

const Footer = () => {
	return (
		<footer className="padding space-y-20 py-14 bg-black footer-glow">
			<div className="grid gap-10 md:flex md:items-start">
				<div className="space-y-4 md:space-y-8 md:w-[45%] lg:w-1/3">
					<Image
						src={Logo}
						alt="Monita"
					/>

					<div className="sapce-y-4">
						<p>
							Empowering seamless, secure, and reliable financial
							transactions. Your trusted partner for managing
							payments, transfers, and cards with ease and
							confidence.
						</p>

						<div className="flex flex-row gap-3.5 mt-6">
							<Link href="">
								<FacebookIcon />
							</Link>

							<Link href="">
								<LinkedInIcon />
							</Link>

							<Link href="">
								<InstagramIcon />
							</Link>

                            <Link href="">
								<TikTokIcon />
							</Link>

                            <Link href="">
								<XIcon />
							</Link>
						</div>
					</div>
				</div>

				<div className="grid grid-cols-2 gap-8 md:w-[55%] md:ml-auto md:grid-cols-3 lg:w-[55%] lg:flex lg:justify-between">
					<div className="space-y-8">
						<h3 className="font-semibold">Home</h3>

						<div className="space-y-4">
							<Link
								className="block hover:text-brand-lime decoration-wavy underline-offset-4 hover:underline"
								href=""
							>
								About Us
							</Link>

							<Link
								className="block hover:text-brand-lime decoration-wavy underline-offset-4 hover:underline"
								href=""
							>
								Contact Us
							</Link>
						</div>
					</div>

					<div className="space-y-8 ml-auto md:ml-0">
						<h3 className="font-semibold">Features</h3>

						<div className="space-y-4">
							<Link
								className="block hover:text-brand-lime decoration-wavy underline-offset-4 hover:underline"
								href=""
							>
								Send Money
							</Link>

							<Link
								className="block hover:text-brand-lime decoration-wavy underline-offset-4 hover:underline"
								href=""
							>
								Receive Money
							</Link>

							<Link
								className="block hover:text-brand-lime decoration-wavy underline-offset-4 hover:underline"
								href=""
							>
								One Card
							</Link>

							<Link
								className="block hover:text-brand-lime decoration-wavy underline-offset-4 hover:underline"
								href=""
							>
								Bill Payment
							</Link>

							<Link
								className="block hover:text-brand-lime decoration-wavy underline-offset-4 hover:underline"
								href=""
							>
								Gift Card
							</Link>

							<Link
								className="block hover:text-brand-lime decoration-wavy underline-offset-4 hover:underline"
								href=""
							>
								Cashback
							</Link>
						</div>
					</div>

					<div className="space-y-8 col-span-2 md:col-span-1">
						<h3 className="font-semibold">Legal & Privacy</h3>

						<div className="space-y-4">
							<Link
								className="block hover:text-brand-lime decoration-wavy underline-offset-4 hover:underline"
								href=""
							>
								Privacy Notice
							</Link>

							<Link
								className="block hover:text-brand-lime decoration-wavy underline-offset-4 hover:underline"
								href=""
							>
								Cookies Policy
							</Link>

							<Link
								className="block hover:text-brand-lime decoration-wavy underline-offset-4 hover:underline"
								href=""
							>
								Terms and Conditions
							</Link>
						</div>
					</div>
				</div>
			</div>

			<p className="text-sm text-center">
				© {new Date().getFullYear()} Monita. All rights reserved.
			</p>
		</footer>
	);
};

export default Footer;
