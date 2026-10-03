import Image from 'next/image';
import Header from '@/components/Header';
import AboutPageContent from '@/components/AboutPageContent';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'About Us — Carewell Health Clinic',
  description:
    'Learn about Carewell Health Clinic — our mission, story, core values, and the dedicated team of healthcare professionals committed to patient-first care.',
};

export default function AboutPage() {
  return (
    <>
      <Header />
      <AboutPageContent />
      <Footer />
    </>
  );
}
