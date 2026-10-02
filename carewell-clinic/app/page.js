import AnnouncementBar from "@/components/AnnouncementBar";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import TrustStrip from "@/components/TrustStrip";
import About from "@/components/About";
import Services from "@/components/Services";
import FeaturedCheckup from "@/components/FeaturedCheckup";
import WhyChooseUs from "@/components/WhyChooseUs";
import HowItWorks from "@/components/HowItWorks";
import Statistics from "@/components/Statistics";
import Doctors from "@/components/Doctors";
import Testimonials from "@/components/Testimonials";
import AppointmentForm from "@/components/AppointmentForm";
import Resources from "@/components/Resources";
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
        <WhyChooseUs />
        <HowItWorks />
        <Statistics />
        <Doctors />
        <Testimonials />
        <AppointmentForm />
        <Resources />
      </main>
      <Footer />
    </>
  );
}
