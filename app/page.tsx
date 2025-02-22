import Features from "./_components/features";
import HeroSection from "./_components/hero-section";
import Testimonials from "./_components/testimonials";
import ComplianceSection from "./_components/compliance";
import HowItWorksSection from "./_components/how-it-works";

const Index = () => {
    return (
		<>
			<HeroSection />
			<Features />
			<Testimonials />
			<HowItWorksSection />
			<ComplianceSection />
		</>
	);
};

export default Index;
