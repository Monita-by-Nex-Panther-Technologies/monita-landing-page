import PhoneIcon from "@/components/svg-icons/phone-icon";
import LocationIcon from "@/components/svg-icons/location-icon";
import EnvelopeIcon from "@/components/svg-icons/envelope-icon";
import Link from "next/link";

const ContactForm = () => {
	return (
		<div className="grid gap-8 md:grid-cols-2 bg-black padding pb-16 items-center lg:px-[10%]">
			<div className="bg-brand-lime/[4%] bg-features-img bg-[center_center] bg-cover bg-no-repeat space-y-6 rounded-[20px] p-6 grid place-content-center border border-[#4B4A4A]">
				<h2 className="font-bold text-lg">We’re Here to Help!</h2>

				<p>
					Have questions, need assistance, or want to share feedback?
					Our team at Monita is always ready to assist you. Reach out
					to us through any of the following channels:
				</p>

				<div className="space-y-4">
					<Link
						className="flex items-center gap-4"
						href="tel:+2349037346247"
					>
						<PhoneIcon />
						+234 903 734 6247
					</Link>

					<Link
						className="flex items-center gap-4"
						href="mailto:support@monita.com"
					>
						<EnvelopeIcon />
						support@monita.com
					</Link>

					<p className="flex items-center gap-4">
						<LocationIcon />
						Block 10 Monsurat Olayinka Street , Lekki Scheme II
						Ajah, Lagos State
					</p>
				</div>

				<p>
					Your satisfaction is our priority. Let’s make your Monita
					experience even better!
				</p>
			</div>

			<form className="space-y-4">
				<label
					className="grid gap-3"
					htmlFor="firstname"
				>
					<span>Name</span>

					<div className="grid gap-2 md:grid-cols-2">
						<input
							className="input"
							type="text"
							placeholder="First name"
							id="firstname"
						/>

						<input
							className="input"
							type="text"
							placeholder="Last name"
							id="lastname"
						/>
					</div>
				</label>

				<label
					className="grid gap-3"
					htmlFor="email"
				>
					<span>Email</span>

					<input
						className="input"
						type="email"
						placeholder="email@example.com"
						id="email"
					/>
				</label>

				<label
					className="grid gap-3"
					htmlFor="message"
				>
					<span>Enter Message</span>

					<textarea
						className="input"
						placeholder="Enter your message here"
						id="message"
						rows={3}
					/>
				</label>

				<button
					className="bg-brand-lime text-black rounded-xl p-3 text-center block w-full hover:bg-brand-lime/50 transition-colors duration-300 ease-in-out hover:ring-1 hover:ring-brand-lime/50 ring-offset-2 hover:ring-offset-black"
					type="submit"
				>
					Send Message
				</button>
			</form>
		</div>
	);
};

export default ContactForm;
