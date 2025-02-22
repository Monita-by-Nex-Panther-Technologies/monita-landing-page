
import * as motion from "motion/react-client";

const DownloadMobileAppSection = () => {
    return (
        <section className="w-full bg-[#000000] py-20">
            <div className="mx-auto flex flex-col md:flex-row rounded-3xl w-[90%] md:w-[80%] p-5 py-10 md:p-10 justify-start lg:justify-center items-center h-[630px] md:h-[461px] overflow-hidden"
                style={{
                    backgroundImage: `url("${images.image.mobileAppSecBg}")`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat"
                }}>

                {/* Text and Buttons Section */}
                <div className="w-full md:w-[60%] flex flex-col items-start gap-4 md:gap-6">

                    {/* Heading */}
                    <h1 className="text-2xl md:text-3xl lg:text-4xl text-white font-bold font-MuseoModerno leading-tight">
                        Fast and Reliable Payments with Monita
                    </h1>

                    {/* Description */}
                    <p className="text-sm md:text-base lg:text-[15px] w-fit lg:w-[460px] font-poppinsRegular text-white leading-relaxed">
                        Experience the convenience of managing your finances with Monita - Your trusted partner for fast, secure, and reliable payments. Whether you're transferring funds, paying bills, or shopping, Monita ensures seamless transactions, unmatched reliability, and peace of mind.
                    </p>

                    {/* Buttons */}
                    <div className="flex flex-row justify-center items-center gap-3.5">
                        <div className="flex flex-row bg-[#CEEF0A] py-2 md:py-3 lg:py-5 gap-x-2 px-4 md:px-4 rounded-full justify-center items-center w-[130px] md:w-[200px] lg:w-[200px] h-[50px]">
                            <img src={images.icon.appleIcon} alt="apple and google play icon" className="w-[20px] md:w-[20px]" />
                            <p className="text-black text-[11px] md:text-[14px] lg:text-[18px] font-medium font-poppinsMedium">Apple Store</p>
                        </div>
                        <div className="flex flex-row bg-[#CEEF0A] py-2 md:py-3 lg:py-5 gap-x-2 px-4 md:px-6 rounded-full justify-center items-center w-[130px] md:w-[200px] lg:w-[200px] h-[50px]">
                            <img src={images.icon.playstoreIcon} alt="apple and google play icon" className="w-[20px] md:w-[20px]" />
                            <p className="text-black text-[11px] md:text-[14px] lg:text-[18px] font-medium font-poppinsMedium">Google Play</p>
                        </div>
                    </div>
                </div>

                {/* Image Section */}
                <div className="flex justify-center relative mt-10 md:mt-0 md:justify-end">
                    <motion.div
                        animate={{
                            y: [1, -20, 0],
                        }}
                        transition={{
                            duration: 1.99,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                        className="w-full max-w"
                    >
                        <img
                            src={images.mockups.fundScreenMockup}
                            alt="Monita Mobile App"
                            className="w-[200px] md:w-[300px] lg:mt-72 h-auto object-contain"
                        />
                    </motion.div>

                    {/* Additional Images */}
                    <img src={images.image.monitaSuccess} alt="success message mockup" className="absolute w-[100px] md:w-[160px] -right-[50px] md:-right-[80px] top-[25px] md:top-[320px]" />

                    <img src={images.image.servicesImg} alt="services image mockup" className="absolute w-[100px] md:w-[160px] right-[140px] md:right-[240px] top-[180px] md:top-[600px]" />
                </div>
            </div>
        </section>
    );
};

export default DownloadMobileAppSection;
