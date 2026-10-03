import Header from '@/components/Header';
import DoctorsPageContent from '@/components/DoctorsPageContent';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Our Doctors & Medical Specialists — Carewell Clinic',
  description:
    "Meet the board-certified physicians and specialists at Carewell Clinic. Experienced professionals in General Medicine, Family Care, Pediatrics, Women's Health, Cardiology, and more.",
};

export default function DoctorsPage() {
  return (
    <>
      <Header />
      <main id="main-content">
        <DoctorsPageContent />
      </main>
      <Footer />
    </>
  );
}
