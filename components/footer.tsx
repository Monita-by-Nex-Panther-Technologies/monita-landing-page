"use client";

import Logo from "@/assets/img/logo.svg";
import Image from "next/image";
import Link from "next/link";
import FacebookIcon from "./svg-icons/facebook-icon";
import XIcon from "./svg-icons/x-icon";
import InstagramIcon from "./svg-icons/instagram-icon";
import TikTokIcon from "./svg-icons/tiktok-icon";
import { comingSoonText } from "@/utils/coming-soon-toast";

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
							Monita™ is a product of Nex Panther Technologies
							Ltd, a trusted and innovative payment solution
							provider based in Nigeria. We specialize in
							delivering secure, seamless, and efficient payment
							services to businesses and individuals alike. Our
							cutting-edge technology ensures reliable
							transactions, empowering our clients with
							world-class payment solutions.
						</p>

						<div className="flex flex-row gap-3.5 mt-6">
							<Link
								href="https://www.facebook.com/share/19kn5M2yRZ/?mibextid=wwXIfr"
								target="_blank"
								rel="noopener noreferrer"
                                aria-label="Connect with us on Facebook"
							>
								<FacebookIcon />
							</Link>

							<Link
								href="https://www.instagram.com/usemonitang/profilecard/?igsh=ODNmc2Z1dnVkejBk"
								target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Connect with us on Instagram"
							>
								<InstagramIcon />
							</Link>

							<Link
								href="https://www.tiktok.com/@usemonitang?_t=ZM-8sqqsCOfkXN&_r=1"
								target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Coonnect with us on TikTok"
							>
								<TikTokIcon />
							</Link>

							<Link
								href="https://x.com/usemonitang?s=21"
								target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Connect with us on X (formerly Twitter)"
							>
								<XIcon />
							</Link>
						</div>
					</div>
				</div>

				<div className="grid grid-cols-2 gap-8 md:w-[55%] md:ml-auto md:grid-cols-3 lg:w-[55%] lg:flex lg:justify-between">
					<div className="space-y-8">
						<div className="space-y-8">
							<h3 className="font-semibold text-lg">Home</h3>

							<div className="space-y-4">
								<Link
									className="block hover:text-brand-lime decoration-wavy underline-offset-4 hover:underline"
									href=""
                                    onClick={(e) => {
                                        e.preventDefault();

                                        comingSoonText();
                                    }}
								>
									About Us
								</Link>

								<Link
									className="block hover:text-brand-lime decoration-wavy underline-offset-4 hover:underline"
                                    href=""
                                    onClick={(e) => {
                                        e.preventDefault();

                                        comingSoonText();
                                    }}
								>
									Contact Us
								</Link>
							</div>
						</div>

						<div className="space-y-8 col-span-2 md:hidden">
							<h3 className="font-semibold text-lg">Legal & Privacy</h3>

							<div className="space-y-4">
								<Link
									className="block hover:text-brand-lime decoration-wavy underline-offset-4 hover:underline"
									href=""
                                    onClick={(e) => {
                                        e.preventDefault();

                                        comingSoonText();
                                    }}
								>
									Privacy Notice
								</Link>

								<Link
									className="block hover:text-brand-lime decoration-wavy underline-offset-4 hover:underline"
									href=""
                                    onClick={(e) => {
                                        e.preventDefault();

                                        comingSoonText();
                                    }}
								>
									Cookies Policy
								</Link>

								<Link
									className="block hover:text-brand-lime decoration-wavy underline-offset-4 hover:underline"
									href=""
                                    onClick={(e) => {
                                        e.preventDefault();

                                        comingSoonText();
                                    }}
								>
									Terms and Conditions
								</Link>
							</div>
						</div>
					</div>

					<div className="space-y-8 ml-auto md:ml-0">
						<h3 className="font-semibold text-lg">Features</h3>

						<div className="space-y-4">
							<Link
								className="block hover:text-brand-lime decoration-wavy underline-offset-4 hover:underline"
								href=""
                                onClick={(e) => {
                                        e.preventDefault();

                                        comingSoonText();
                                    }}
							>
								Send Money
							</Link>

							<Link
								className="block hover:text-brand-lime decoration-wavy underline-offset-4 hover:underline"
								href=""
                                onClick={(e) => {
                                        e.preventDefault();

                                        comingSoonText();
                                    }}
							>
								Receive Money
							</Link>

							<Link
								className="block hover:text-brand-lime decoration-wavy underline-offset-4 hover:underline"
								href=""
                                onClick={(e) => {
                                        e.preventDefault();

                                        comingSoonText();
                                    }}
							>
								One Card
							</Link>

							<Link
								className="block hover:text-brand-lime decoration-wavy underline-offset-4 hover:underline"
								href=""
                                onClick={(e) => {
                                        e.preventDefault();

                                        comingSoonText();
                                    }}
							>
								Bill Payment
							</Link>

							<Link
								className="block hover:text-brand-lime decoration-wavy underline-offset-4 hover:underline"
								href=""
                                onClick={(e) => {
                                        e.preventDefault();

                                        comingSoonText();
                                    }}
							>
								Gift Card
							</Link>

							<Link
								className="block hover:text-brand-lime decoration-wavy underline-offset-4 hover:underline"
								href=""
                                onClick={(e) => {
                                        e.preventDefault();

                                        comingSoonText();
                                    }}
							>
								Cashback
							</Link>
						</div>
					</div>

					<div className="hidden space-y-8 col-span-2 md:block md:col-span-1">
						<h3 className="font-semibold text-lg">Legal & Privacy</h3>

						<div className="space-y-4">
							<Link
								className="block hover:text-brand-lime decoration-wavy underline-offset-4 hover:underline"
								href=""
                                onClick={(e) => {
                                        e.preventDefault();

                                        comingSoonText();
                                    }}
							>
								Privacy Notice
							</Link>

							<Link
								className="block hover:text-brand-lime decoration-wavy underline-offset-4 hover:underline"
								href=""
                                onClick={(e) => {
                                        e.preventDefault();

                                        comingSoonText();
                                    }}
							>
								Cookies Policy
							</Link>

							<Link
								className="block hover:text-brand-lime decoration-wavy underline-offset-4 hover:underline"
								href=""
                                onClick={(e) => {
                                        e.preventDefault();

                                        comingSoonText();
                                    }}
							>
								Terms and Conditions
							</Link>
						</div>
					</div>
				</div>
			</div>

			<div className="text-sm text-center space-y-4">
				<p>
					All rights reserved. Monita™ is a trademark of Nex Panther
					Technologies Ltd. Unauthorized use of this trademark is
					prohibited.
				</p>

				<p>© {new Date().getFullYear()} Monita. All rights reserved.</p>
			</div>
		</footer>
	);
};

export default Footer;
