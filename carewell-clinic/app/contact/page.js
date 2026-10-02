import Header from '@/components/Header';
import ContactPageContent from '@/components/ContactPageContent';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Contact Us — Carewell Health Clinic',
  description:
    'Get in touch with Carewell Health Clinic. View clinical hours, location, contact details, and schedule appointments online or by phone.',
};

export default function ContactPage() {
  return (
    <>
      <Header />
      <main id="main-content">
        <ContactPageContent />
      </main>
      <Footer />
    </>
  );
}
