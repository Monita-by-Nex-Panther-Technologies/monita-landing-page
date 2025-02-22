import HeroSection from "./_components/hero-section";
import ContactForm from "./_components/contact-form";

export const metadata = {
    title: "Monita - Contact Us",
    description: "Have any questions/ enquiries? We would love to hear from you."
};

const ContactUs = () => {
    return (
        <>
            <HeroSection />
            <ContactForm />
        </>
    );
};

export default ContactUs;
