import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faStethoscope,
  faPeopleGroup,
  faChild,
  faVenus,
  faMicroscope,
  faShieldHeart,
  faArrowRight,
} from '@fortawesome/free-solid-svg-icons';
import Reveal from './Reveal';

const services = [
  {
    num: '01',
    icon: faStethoscope,
    title: 'General Medicine',
    description:
      'Comprehensive checkups, accurate diagnosis, and personalized treatment plans for everyday and chronic health concerns.',
    image: '/service-general-medicine.jpg',
    alt: 'General Medicine Consultation at Carewell Clinic',
  },
  {
    num: '02',
    icon: faPeopleGroup,
    title: 'Family Medicine',
    description:
      'Ongoing, coordinated healthcare across all generations of your household, promoting lifelong wellness for the entire family.',
    image: '/service-family-medicine.jpg',
    alt: 'Family Medicine Healthcare at Carewell Clinic',
  },
  {
    num: '03',
    icon: faChild,
    title: 'Pediatrics',
    description:
      'Gentle, attentive medical care for infants, children, and teens with developmental screenings, vaccinations, and parental guidance.',
    image: '/service-pediatrics.jpg',
    alt: 'Pediatric Care at Carewell Clinic',
  },
  {
    num: '04',
    icon: faVenus,
    title: "Women's Health",
    description:
      'Dedicated clinical screenings, wellness consultations, hormonal health, and compassionate preventive care at every stage of life.',
    image: '/service-womens-health.jpg',
    alt: "Women's Health Screening at Carewell Clinic",
  },
  {
    num: '05',
    icon: faMicroscope,
    title: 'Diagnostics & Lab',
    description:
      'State-of-the-art pathology testing, imaging, and rapid biometric analysis supporting fast and confident clinical decisions.',
    image: '/service-diagnostics.jpg',
    alt: 'Modern Diagnostics and Lab Testing at Carewell Clinic',
  },
  {
    num: '06',
    icon: faShieldHeart,
    title: 'Preventive Care',
    description:
      'Structured wellness checkups, cardiovascular risk reviews, and proactive health coaching to keep you ahead of health concerns.',
    image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=800&q=80',
    alt: 'Preventive Health and Wellness at Carewell Clinic',
  },
];

export default function Services() {
  return (
    <section className="section" id="services">
      <div className="container">
        <div className="section-head center">
          <div className="eyebrow" style={{ justifyContent: 'center' }}>
            OUR SERVICES
          </div>
          <h2 className="heading">Healthcare Services Designed Around You</h2>
          <p className="lede" style={{ margin: '16px auto 0' }}>
            From preventive checkups to specialized diagnostics, we provide thoughtful and comprehensive health services tailored to your needs.
          </p>
        </div>
        <div className="services-grid">
          {services.map((service, i) => (
            <Reveal key={i}>
              <div className="service-card">
                <div className="service-card-media">
                  <Image
                    src={service.image}
                    alt={service.alt}
                    width={600}
                    height={375}
                    sizes="(max-width: 600px) 100vw, (max-width: 960px) 50vw, 33vw"
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                  <span className="service-badge-num">{service.num}</span>
                </div>
                <div className="service-card-body">
                  <div className="service-icon">
                    <FontAwesomeIcon icon={service.icon} aria-hidden="true" />
                  </div>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                  <a href="#appointment" className="service-link">
                    Learn more <FontAwesomeIcon icon={faArrowRight} aria-hidden="true" />
                  </a>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
