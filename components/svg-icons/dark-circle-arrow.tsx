const DarkCircleArrow = ({ className = "" }: { className?: string; }) => {
    return (
        <svg
            className={`shrink-0 ${className}`}
			width="34"
			height="35"
			viewBox="0 0 34 35"
			fill="none"
		>
			<path
				d="M0 17.4766C0 8.08772 7.61116 0.476562 17 0.476562C26.3888 0.476562 34 8.08772 34 17.4766C34 26.8654 26.3888 34.4766 17 34.4766C7.61116 34.4766 0 26.8654 0 17.4766Z"
				fill="#121212"
			/>
			<path
				d="M22.9997 17.4766L10.9998 17.4766"
				stroke="white"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M17.5676 21.4766C17.5676 21.4766 22.9999 18.5306 22.9999 17.4765C23 16.4225 17.5676 13.4766 17.5676 13.4766"
				stroke="white"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
};

export default DarkCircleArrow;
