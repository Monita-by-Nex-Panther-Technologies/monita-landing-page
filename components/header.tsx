"use client";

import Image from "next/image";
import Link from "next/link";
import Logo from "@/assets/img/logo.png";
import toast from "react-hot-toast";
import { useEffect, useState } from "react";
import { XCircleIcon } from "lucide-react";

export const isValidEmail = (email: string): boolean => {
	const emailRegex =
		/^[a-zA-Z0-9][a-zA-Z0-9._%+-]*@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
	return emailRegex.test(email);
};

const Header = () => {
	const [modalIsActive, setModalIsActive] = useState(false);

	const [formData, setFormData] = useState({ name: "", email: "" });
	const [loading, setLoading] = useState(false);

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		setLoading(true);

		if (!formData.name || !formData.email) {
			toast.error("Please enter your full name and email.");

			setLoading(false);

			return;
		}

		if (!isValidEmail(formData.email)) {
			toast.error("Invalid email address.");

			setLoading(false);

			return;
		}

		try {
			const res = await fetch("/api/zoho", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify(formData),
			});

			if (res.ok) {
				toast("You'd be notified when we launch!", {
					style: {
						backgroundColor: "#ceef08",
						color: "#121212",
						paddingLeft: "1rem",
						paddingRight: "1rem",
					},
					icon: "🚀",
				});

                setFormData({ name: "", email: "" });

                setModalIsActive(false);
			} else {
				toast(
					"There was an error storing your details. Please try again.",
					{
						style: {
							backgroundColor: "#ceef08",
							color: "#121212",
							paddingLeft: "1rem",
							paddingRight: "1rem",
						},
						icon: "🚀",
					},
				);
			}
		} catch (error) {
			toast(String(error), {
				style: {
					backgroundColor: "#ceef08",
					color: "#121212",
					paddingLeft: "1rem",
					paddingRight: "1rem",
				},
				icon: "🚀",
			});
		} finally {
			setLoading(false);
		}
	};

    useEffect(() => {
		if (modalIsActive) {
			document.querySelector("body")!.style!.overflow = "hidden";
		} else {
			document.querySelector("body")!.style!.overflow = "auto";
		}
	}, [modalIsActive]);

	return (
		<>
			<header className="flex items-center justify-between gap-4 bg-black/100 pt-6 lg:pt-10 padding">
				<Link href="/">
					<Image
						className="w-4/5 xl:w-[13.25rem]"
						src={Logo}
						alt="Monita - Pay Fast. Live Simple."
						quality={100}
						priority
					/>
				</Link>

				<button
					className="bg-brand-lime text-[#010101] font-medium rounded-full py-3 inline-block relative px-5 z-[1024] shrink-0 after:absolute after:-z-50 hover:after:border-2 after:inset-0 after:size-full after:border after:border-brand-lime after:-rotate-[15deg] after:rounded-full isolate hover:after:rotate-0 after:transition-all after:duration-300 after:ease-in-out transition-all duration-300 ease-in-out text-sm md:text-base hover:ring-1 hover:ring-brand-lime/50 ring-offset-2 hover:ring-offset-black"
					type="button"
					onClick={() => setModalIsActive(true)}
				>
					Join Waitlist
				</button>
			</header>

			<div
				className={`fixed inset-0 z-[1024] h-full w-full place-items-center gap-4 bg-brand-lime/10 backdrop-blur-[5px] duration-300 ease-linear overflow-y-auto transition-all ${
					modalIsActive ? "grid" : "hidden"
				}`}
			>
				<div className="h-auto z-50 my-6 max-h-[calc(100%-3.5rem)] custom-scrollbar relative overflow-y-auto rounded-2xl bg-white text-brand-black w-[calc(100%-10%)] p-6 min-[500px]:w-3/5 lg:w-2/5 xl:w-1/3 shadow-xl">
					<button
						className="absolute top-4 right-4 hover:text-brand-lime"
						type="button"
						onClick={() => {
							setModalIsActive(false)
						}}
						aria-label="Close modal"
					>
						<XCircleIcon
							size={30}
							strokeWidth={1}
						/>
					</button>

					<div className="space-y-2 text-center">
						<h2 className="text-xl font-semibold">Join Waitlist</h2>

						<p className="md:w-4/5 md:mx-auto">
							Join our waitlist and be the first to know when we
							launch!
						</p>
					</div>

					<form
						className="grid gap-4 mt-4"
						onSubmit={handleSubmit}
					>
						<label
							className="grid gap-2"
							htmlFor="fullName"
						>
							<span>Full Name</span>

							<input
								className="input"
								type="text"
								placeholder="Enter your full name"
								id="fullName"
								value={formData.name}
								onChange={(e) =>
									setFormData({
										...formData,
										name: e.target.value,
									})
								}
							/>
						</label>

						<label
							className="grid gap-2"
							htmlFor="email"
						>
							<span>Email</span>

							<input
								className="input"
								type="email"
								placeholder="email@example.com"
								id="email"
								value={formData.email}
								onChange={(e) =>
									setFormData({
										...formData,
										email: e.target.value,
									})
								}
							/>
						</label>

						<button
							className="bg-brand-lime text-black rounded-xl py-3.5 px-3 text-center block w-full hover:bg-brand-lime/60 hover:text-black/50 transition-colors duration-300 ease-in-out hover:ring-1 hover:ring-brand-lime/50 ring-offset-2 hover:ring-offset-white/100 disabled:bg-brand-lime/60 disabled:text-black/50 disabled:cursor-not-allowed"
							type="submit"
							disabled={
								loading ||
								!formData.name ||
								!formData.email ||
								!isValidEmail(formData.email)
							}
						>
							{loading
								? "Adding to waitlist..."
								: "Join Waitlist"}
						</button>
					</form>
				</div>
			</div>
		</>
	);
};

export default Header;
