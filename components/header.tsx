import Image from "next/image";
import Link from "next/link";
import Logo from "@/assets/img/logo.png";

const Header = () => {
	return (
		<header className="flex items-center justify-between gap-4 bg-black/100 pt-6 lg:pt-10 padding">
			<Link href="/">
				<Image
					className="w-4/5 xl:w-[13.25rem]"
					src={Logo}
					alt="Monita - Pay Fast. Live Simple."
					quality={100}
				/>
			</Link>

			<Link
				className="bg-brand-lime text-[#010101] font-medium rounded-full py-3 inline-block relative px-5 z-[1024] shrink-0 after:absolute after:-z-50 hover:after:border-2 after:inset-0 after:size-full after:border after:border-brand-lime after:-rotate-[15deg] after:rounded-full isolate hover:after:rotate-0 after:transition-all after:duration-300 after:ease-in-out transition-all duration-300 ease-in-out text-sm md:text-base hover:ring-1 hover:ring-brand-lime/50 ring-offset-2 hover:ring-offset-black"
				href="/contact-us"
			>
				Contact Us
			</Link>
		</header>
	);
};

export default Header;
