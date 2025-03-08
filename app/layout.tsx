import type { Metadata } from "next";
import Header from "@/components/header";
import Footer from "@/components/footer";
import DownloadMobileAppSection from "@/components/download-section";
import { Toaster } from "react-hot-toast";
import { Poppins, MuseoModerno } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
	subsets: ["latin"],
	weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
	variable: "--font-poppins",
});

const museo_moderno = MuseoModerno({
	subsets: ["latin"],
	variable: "--font-museo_moderno",
});

export const metadata: Metadata = {
	title: "Monita - Pay Fast. Live Simple.",
	description:
		"Monita is your trusted partner for seamless mobile money, bill payments, affordable data, Naira cards for international transactions, eSIM, transfers, and prepaid gift cards. Experience secure and hassle-free payments today!",
	keywords:
		"mobile money, bill payments, affordable data, Naira card, international payments, eSIM, money transfer, prepaid gift card, secure payments",
	authors: [{ name: "Monita", url: "https://www.monita.ng" }],
	openGraph: {
		title: "Monita - Fast, Secure & Reliable Payments",
		description:
			"Experience seamless mobile money, bill payments, affordable data, Naira cards for international transactions, eSIM, transfers, and prepaid gift cards.",
		images: "https://www.monita.ng/icon.png",
		url: "https://www.monita.ng",
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Monita - Fast, Secure & Reliable Payments",
		description:
			"Your trusted partner for seamless payments, mobile money, and more.",
		images: "https://www.monita.ng/icon.png",
	},
	verification: { google: "4uzbVVeuR4Cs-uosvUb0IBOIKDUs43sftR3UUiZsm1s" },
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body
				className={`${poppins.variable} ${museo_moderno.variable} antialiased text-white selection:bg-brand-lime selection:text-brand-black font-poppins`}
			>
				<Header />

				<main>{children}</main>

				<DownloadMobileAppSection />

				<Toaster />

				<Footer />
			</body>
		</html>
	);
}
