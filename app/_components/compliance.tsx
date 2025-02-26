import Image from "next/image";
import Shield from "@/assets/img/shield.png";
import Rotate from "@/assets/img/rotate.png";
import * as motion from "motion/react-client";

const ComplianceSection = () => {
    return (
		<section className="padding py-12 md:px-12 lg:px-20 xl:px-[10%] 2xl:px-[15%] overflow-hidden compliance grid gap-16 md:flex md:items-center">
			<div className="relative w-4/5 mx-auto md:w-1/3">
				<Image
					src={Shield}
					alt="PCI and NDPC compliant"
					className="size-full relative z-50"
				/>

				<motion.div
					animate={{
						rotate: [
							0, 0, -60, -60, -120, -120, -180, -180, -240, -240, -300,
							-300, -360, -360,
						],
					}}
					transition={{
						repeat: Infinity,
						duration: 10,
						ease: "linear",
						times: [
							0, 0.125, 0.25, 0.375, 0.5, 0.625, 0.75, 0.875, 1,
						],
					}}
					className="inset-y-1 inset-x-[0.75rem] md:inset-x-2.5 lg:inset-x-4 w-[90%] size-full absolute"
				>
					<Image
						src={Rotate}
						alt=""
						className="size-full"
					/>
				</motion.div>
			</div>

			<div className="space-y-4 md:w-4/6">
				<div className="font-bold text-sm">⚡ COMPLIANCE</div>

				<h2 className="header text-[2rem] leading-[2rem] md:text-4xl lg:text-5xl lg:leading-[3.563rem] md:leading-tight">
					Ensuring Compliance and Building Trust With Monita
				</h2>

				<p className="text-sm md:text-base">
					At Monita, your safety is our priority. We comply with key
					regulations like NDPC and PCI DSS, partner with trusted,
					insured banks, and display our certifications to ensure
					secure, reliable, and transparent financial services you can
					trust.
				</p>
			</div>
		</section>
	);
};

export default ComplianceSection;
