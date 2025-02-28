import toast from "react-hot-toast";

export const comingSoonText = () => {
	toast("Coming soon, please stay tuned!", {
		style: {
			backgroundColor: "#ceef08",
			color: "#121212",
			paddingLeft: "1rem",
			paddingRight: "1rem",
		},
		icon: "🚀",
	});
};
