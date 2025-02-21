import type { Metadata } from "next";
import Header from "@/components/header";
import { Poppins, MuseoModerno } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
	subsets: ["latin"],
	weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const museo_moderno = MuseoModerno({
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "Monita - Pay Fast. Live Simple.",
	description:
		"Simplify your finances with Monita - secure, fast, and reliable.",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body
				className={`${poppins.className} ${museo_moderno.className} antialiased text-white selection:bg-brand-lime selection:text-brand-black font-poppins`}
			>
				<Header />

				<main>{children}</main>
			</body>
		</html>
	);
}
