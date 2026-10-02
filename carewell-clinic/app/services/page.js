import Header from '@/components/Header';
import ServicesPageContent from '@/components/ServicesPageContent';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Our Services — Carewell Health Clinic',
  description:
    'Explore the full range of medical services at Carewell Health Clinic — general medicine, family medicine, pediatrics, women\'s health, diagnostics, and preventive care.',
};

export default function ServicesPage() {
  return (
    <>
      <Header />
      <ServicesPageContent />
      <Footer />
    </>
  );
}
