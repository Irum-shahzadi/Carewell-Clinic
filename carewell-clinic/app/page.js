import AnnouncementBar from "@/components/AnnouncementBar";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import TrustStrip from "@/components/TrustStrip";
import About from "@/components/About";
import Services from "@/components/Services";
import FeaturedCheckup from "@/components/FeaturedCheckup";
import Doctors from "@/components/Doctors";
import WhyChooseUs from "@/components/WhyChooseUs";
import HowItWorks from "@/components/HowItWorks";
import AppointmentForm from "@/components/AppointmentForm";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import HomeContact from "@/components/HomeContact";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <AnnouncementBar />
      <Header />
      <main id="main-content">
        <Hero />
        <TrustStrip />
        <About />
        <Services />
        <FeaturedCheckup />
        <Doctors />
        <WhyChooseUs />
        <HowItWorks />
        <AppointmentForm />
        <Testimonials />
        <FAQ />
        <HomeContact />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
