import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faShieldHalved,
  faUserDoctor,
  faHeartPulse,
  faHospital,
  faCalendarCheck,
  faLock,
  faComments,
} from '@fortawesome/free-solid-svg-icons';
import Reveal from './Reveal';

const whyCards = [
  {
    icon: faUserDoctor,
    title: 'Experienced Specialists',
    description: 'Clinicians with verified hospital and clinical credentials across diverse specialties.',
  },
  {
    icon: faHeartPulse,
    title: 'Personalized Treatment',
    description: 'Custom care plans crafted around your specific lifestyle, history, and health targets.',
  },
  {
    icon: faHospital,
    title: 'Modern Facilities',
    description: 'State-of-the-art diagnostic technology and soothing, comfortable examination suites.',
  },
  {
    icon: faCalendarCheck,
    title: 'Hassle-Free Appointments',
    description: 'Fast online scheduling with flexible same-day slots and friendly pre-visit reminders.',
  },
  {
    icon: faLock,
    title: 'Strict Patient Privacy',
    description: 'Your medical records and personal health information remain securely protected.',
  },
  {
    icon: faComments,
    title: 'Continued Follow-up',
    description: 'Dedicated post-consultation check-ins to monitor recovery and maintain long-term wellness.',
  },
];

export default function WhyChooseUs() {
  return (
    <section className="section why-section">
      <div className="container why-grid">
        <Reveal className="why-visual-col">
          <div className="why-visual-frame">
            <Image
              src="/why_choose_us_clinic.jpg"
              alt="Carewell clinical team walking through state-of-the-art clinic facility"
              width={900}
              height={700}
              sizes="(max-width: 992px) 100vw, 50vw"
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
            <div className="why-overlay-badge">
              <FontAwesomeIcon icon={faShieldHalved} aria-hidden="true" />
              <div>
                <h5>99.4% Patient Trust &amp; Satisfaction</h5>
                <p>Accredited clinical standards, multidisciplinary consultation, and warm individualized care.</p>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal className="why-copy-col">
          <div className="eyebrow">WHY CHOOSE CAREWELL</div>
          <h2 className="heading">Care That Goes Beyond the Consultation</h2>
          <p className="lede" style={{ marginTop: '14px' }}>
            We combine clinical expertise with deep personal attention, ensuring you are heard, respected, and supported throughout your healthcare journey.
          </p>

          <div className="why-cards-grid">
            {whyCards.map((card, i) => (
              <div className="why-card-item" key={i}>
                <div className="why-card-icon">
                  <FontAwesomeIcon icon={card.icon} aria-hidden="true" />
                </div>
                <div className="why-card-content">
                  <h4>{card.title}</h4>
                  <p>{card.description}</p>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
