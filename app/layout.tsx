import type { Metadata } from "next";
import Header from "@/components/header";
import Footer from "@/components/footer";
import DownloadMobileAppSection from "@/components/download-section";
import { Poppins, MuseoModerno } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
	subsets: ["latin"],
	weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
	variable: "--font-poppins",
});

const museo_moderno = MuseoModerno({
	subsets: ["latin"],
    variable: "--font-museo_moderno"
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
				className={`${poppins.variable} ${museo_moderno.variable} antialiased text-white selection:bg-brand-lime selection:text-brand-black font-poppins`}
			>
				<Header />

                <main>{children}</main>

                <DownloadMobileAppSection />
                <Footer />
			</body>
		</html>
	);
}
