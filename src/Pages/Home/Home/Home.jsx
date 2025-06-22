import Contact from '../Contact/Contact';
import CustomerReviews from '../CustomerReviews/CustomersReviews';
import DiamondPackages from '../DiamondPackages/DiamondPackages';
import Faq from '../Faq/Faq';
import Hero from '../Hero/Hero';
import HowItWorks from '../HowItWorks/HowItWorks';
import PromoBanner from '../PromoBanner/PromoBanner';
import ProofGallery from '../ProofGallery/ProofGallery';
import TrustedByGamers from '../TrustedByGamers/TruetedByGamers';
import WhyChooseUs from '../WhyChooseUs/WhyChooseUs';

const Home = () => {
    // const countdownEnd = new Date(Date.now() + 72000000);
    const countdownEnd = new Date(Date.now() + 2 * 60 * 60 * 1000);

    return (
        <>
            <Hero />
            <DiamondPackages />
            <WhyChooseUs />
            <HowItWorks />
            <CustomerReviews />
            <ProofGallery />
            <Faq />
            <Contact />
            <PromoBanner countdownEnd={countdownEnd} message={"🎉 Get 10% bonus on first top-up!"} />
            <TrustedByGamers />
        </>
    );
};

export default Home;