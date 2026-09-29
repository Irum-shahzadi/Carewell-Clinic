'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faStethoscope,
  faPeopleGroup,
  faChild,
  faVenus,
  faMicroscope,
  faShieldHeart,
  faArrowRight,
  faCalendarCheck,
  faUserDoctor,
  faComments,
  faHeartPulse,
  faCheckCircle,
  faPlus,
  faChevronDown,
  faClock,
  faPhone,
  faHospital,
  faCertificate,
  faHandHoldingMedical,
  faNotesMedical,
  faFlask,
  faBaby,
  faPersonBreastfeeding,
  faXRay,
  faVialCircleCheck,
  faHeartCircleCheck,
  faClipboardCheck,
  faSyringe,
  faLungs,
  faDroplet,
  faBone,
  faBrain,
  faShieldVirus,
  faWeightScale,
  faEye,
  faClipboardList,
} from '@fortawesome/free-solid-svg-icons';
import { statistics } from '@/data/clinicData';
import Reveal from './Reveal';

/* ————— Icon map ————— */
const iconMap = {
  faStethoscope,
  faPeopleGroup,
  faChild,
  faVenus,
  faMicroscope,
  faShieldHeart,
};

/* ————— Full services data ————— */
const servicesDetailed = [
  {
    id: 'general-medicine',
    num: '01',
    icon: 'faStethoscope',
    title: 'General Medicine',
    tagline: 'Your first point of care for everyday health concerns',
    description:
      'Our general medicine department provides comprehensive checkups, diagnosis, and treatment plans for a wide range of everyday health conditions. From seasonal illnesses to chronic disease management, our board-certified physicians deliver evidence-based care tailored to your needs.',
    image: '/service-general-medicine.jpg',
    imageAlt: 'Doctor performing a general health checkup on a patient',
    highlights: [
      'Comprehensive physical examinations',
      'Chronic disease management (diabetes, hypertension, etc.)',
      'Seasonal illness diagnosis & treatment',
      'Health risk assessments & screenings',
      'Referrals to specialists when needed',
      'Follow-up care and monitoring',
    ],
  },
  {
    id: 'family-medicine',
    num: '02',
    icon: 'faPeopleGroup',
    title: 'Family Medicine',
    tagline: 'Whole-family care from childhood through adulthood',
    description:
      'Our family medicine practice offers continuous, coordinated care for every member of your household — from newborns to grandparents. We build lasting relationships with families, understanding your unique health history and providing proactive, whole-person care.',
    image: '/service-family-medicine.jpg',
    imageAlt: 'Family checking in at the clinic reception',
    highlights: [
      'Care for all ages under one roof',
      'Ongoing health monitoring & wellness plans',
      'Immunizations & vaccinations for all family members',
      'Management of acute and chronic conditions',
      'Sports & school physicals',
      'Coordinated referrals and care planning',
    ],
  },
  {
    id: 'pediatrics',
    num: '03',
    icon: 'faChild',
    title: 'Pediatrics',
    tagline: 'Gentle, attentive care for your growing child',
    description:
      'Our pediatric team provides compassionate care for infants, children, and adolescents. We monitor developmental milestones, administer vaccinations on schedule, and address childhood illnesses with expertise and warmth, ensuring your child grows up healthy and happy.',
    image: '/service-pediatrics.jpg',
    imageAlt: 'Pediatrician examining a smiling child',
    highlights: [
      'Well-child visits & developmental assessments',
      'Childhood immunization schedules',
      'Treatment of common childhood illnesses',
      'Growth & nutrition guidance',
      'Behavioral & developmental screenings',
      'Adolescent health consultations',
    ],
  },
  {
    id: 'womens-health',
    num: '04',
    icon: 'faVenus',
    title: "Women's Health",
    tagline: 'Comprehensive wellness for every stage of life',
    description:
      'Our women\'s health services address the unique healthcare needs of women through every life stage. From routine screenings and reproductive health consultations to menopause management and osteoporosis prevention, we deliver discreet, compassionate care.',
    image: '/service-womens-health.jpg',
    imageAlt: 'Doctor consulting with a female patient',
    highlights: [
      'Annual wellness exams & Pap smears',
      'Breast health screenings',
      'Reproductive & prenatal counseling',
      'Hormonal health & menopause management',
      'Bone density assessments',
      'Mental health & lifestyle guidance',
    ],
  },
  {
    id: 'diagnostics',
    num: '05',
    icon: 'faMicroscope',
    title: 'Diagnostics',
    tagline: 'Accurate testing for fast, confident decisions',
    description:
      'Our in-house diagnostics lab offers a wide range of laboratory tests and imaging services, providing rapid and reliable results. Advanced equipment and experienced technicians ensure diagnostic accuracy, helping your physician make informed treatment decisions quickly.',
    image: '/service-diagnostics.jpg',
    imageAlt: 'Lab technician working with diagnostic equipment',
    highlights: [
      'Complete blood work & metabolic panels',
      'Urinalysis & pathology testing',
      'Cardiac & pulmonary function tests',
      'Digital X-ray & ultrasound imaging',
      'Rapid results — most within 24 hours',
      'Seamless integration with treatment plans',
    ],
  },
  {
    id: 'preventive-care',
    num: '06',
    icon: 'faShieldHeart',
    title: 'Preventive Care',
    tagline: 'Stay ahead of health concerns before they start',
    description:
      'Prevention is the foundation of good health. Our preventive care program includes routine health screenings, lifestyle counseling, immunizations, and personalized wellness plans designed to detect potential issues early and keep you living your best life.',
    image: '/service-general-medicine.jpg',
    imageAlt: 'Doctor reviewing health screening results with patient',
    highlights: [
      'Annual health screenings & physicals',
      'Cancer screening programs',
      'Cardiovascular risk assessments',
      'Vaccination & immunization programs',
      'Lifestyle counseling (nutrition, exercise, stress)',
      'Personalized wellness & prevention plans',
    ],
  },
];

/* ————— Process steps ————— */
const processSteps = [
  {
    icon: faCalendarCheck,
    num: '01',
    title: 'Book',
    desc: 'Schedule online or by phone — same-day slots often available.',
  },
  {
    icon: faUserDoctor,
    num: '02',
    title: 'Visit',
    desc: 'Meet your physician in a comfortable, modern setting.',
  },
  {
    icon: faComments,
    num: '03',
    title: 'Discuss',
    desc: 'Get a clear diagnosis and a personalized treatment plan.',
  },
  {
    icon: faHeartPulse,
    num: '04',
    title: 'Follow Up',
    desc: 'We check in to ensure your recovery stays on track.',
  },
];

/* ————— Insurance FAQ ————— */
const insuranceFaqs = [
  {
    q: 'What insurance plans do you accept?',
    a: 'We work with most major insurance providers including Aetna, Blue Cross Blue Shield, Cigna, United Healthcare, and Medicare. Contact our billing team to confirm your specific plan coverage.',
  },
  {
    q: 'Do you offer payment plans for uninsured patients?',
    a: 'Yes. We believe healthcare should be accessible to everyone. We offer flexible payment plans and will work with you to find a solution that fits your budget.',
  },
  {
    q: 'How do I know if a service is covered?',
    a: 'Our front desk team can verify your coverage before your appointment. We recommend calling ahead so there are no surprises.',
  },
  {
    q: 'Do you offer telehealth consultations?',
    a: 'Yes, many of our services — including general medicine, follow-ups, and prescription renewals — are available via secure video consultations.',
  },
  {
    q: 'What should I bring to my first appointment?',
    a: 'Please bring a valid photo ID, your insurance card, a list of current medications, and any relevant medical records or test results.',
  },
];

/* ————— Animated counter hook ————— */
function useCounter(target, hasAnimated) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!hasAnimated) return;
    const duration = 1400;
    const start = performance.now();

    function step(timestamp) {
      const progress = Math.min((timestamp - start) / duration, 1);
      setValue(Math.floor(progress * target));
      if (progress < 1) requestAnimationFrame(step);
      else setValue(target);
    }

    requestAnimationFrame(step);
  }, [target, hasAnimated]);

  return value;
}

/* ————— Stat card sub-component ————— */
function StatCard({ stat, hasAnimated }) {
  const value = useCounter(stat.target, hasAnimated);
  return (
    <div className="about-stat-card">
      <div className="stat-num">
        {value}
        {stat.suffix}
      </div>
      <div className="stat-label">{stat.label}</div>
    </div>
  );
}

/* ============================================= */
/*       SERVICES PAGE CONTENT                   */
/* ============================================= */
export default function ServicesPageContent() {
  const statsRef = useRef(null);
  const [statsAnimated, setStatsAnimated] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);

  // Stats animation observer
  useEffect(() => {
    const el = statsRef.current;
    if (!el || !('IntersectionObserver' in window)) {
      setStatsAnimated(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setStatsAnimated(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <main>
      {/* ===== PAGE HERO ===== */}
      <section className="svc-hero" id="services-hero">
        <div className="svc-hero-bg">
          <Image
            src="/services-hero.jpg"
            alt="Modern Carewell Clinic facility hallway"
            fill
            priority
            sizes="100vw"
            style={{ objectFit: 'cover' }}
          />
          <div className="svc-hero-overlay" />
        </div>
        <div className="container svc-hero-content">
          <Reveal>
            <div className="about-hero-breadcrumb">
              <Link href="/">Home</Link>
              <span className="breadcrumb-sep">/</span>
              <span>Services</span>
            </div>
            <h1>Our Medical Services</h1>
            <p className="svc-hero-desc">
              Comprehensive healthcare under one roof — from general checkups
              and pediatrics to advanced diagnostics and preventive care. Every
              service is delivered with clinical precision, personal attention,
              and genuine compassion.
            </p>
            <div className="svc-hero-actions">
              <Link href="/#appointment" className="btn btn-primary">
                <FontAwesomeIcon icon={faCalendarCheck} aria-hidden="true" />
                Book Appointment
              </Link>
              <a href="#services-list" className="btn btn-outline">
                Explore Services
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ===== OVERVIEW STRIP ===== */}
      <section className="svc-overview-strip">
        <div className="container">
          <div className="svc-overview-grid">
            <Reveal className="svc-overview-card">
              <div className="svc-overview-icon">
                <FontAwesomeIcon icon={faCertificate} aria-hidden="true" />
              </div>
              <h3>Board-Certified Physicians</h3>
              <p>
                Every specialist on our team holds current board certification
                and participates in ongoing medical education.
              </p>
            </Reveal>
            <Reveal className="svc-overview-card">
              <div className="svc-overview-icon">
                <FontAwesomeIcon icon={faHospital} aria-hidden="true" />
              </div>
              <h3>Modern Facilities</h3>
              <p>
                State-of-the-art equipment, comfortable exam rooms, and an
                in-house diagnostic lab for rapid results.
              </p>
            </Reveal>
            <Reveal className="svc-overview-card">
              <div className="svc-overview-icon">
                <FontAwesomeIcon
                  icon={faHandHoldingMedical}
                  aria-hidden="true"
                />
              </div>
              <h3>Patient-First Care</h3>
              <p>
                Clear communication, shared decision-making, and treatment plans
                designed around your life — not the other way around.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ===== SERVICE DETAIL SECTIONS ===== */}
      <div id="services-list">
        {servicesDetailed.map((service, index) => (
          <section
            className={`section svc-detail${index % 2 !== 0 ? ' svc-detail-alt' : ''}`}
            id={service.id}
            key={service.id}
          >
            <div className="container">
              <div
                className={`svc-detail-grid${index % 2 !== 0 ? ' reverse' : ''}`}
              >
                <Reveal className="svc-detail-visual">
                  <div className="svc-detail-img-wrap">
                    <Image
                      src={service.image}
                      alt={service.imageAlt}
                      width={700}
                      height={525}
                      sizes="(max-width: 900px) 100vw, 45vw"
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                      }}
                    />
                    <div className="svc-detail-num-badge">
                      <span>{service.num}</span>
                    </div>
                  </div>
                </Reveal>
                <Reveal>
                  <div className="svc-detail-copy">
                    <div className="eyebrow">{service.title.toUpperCase()}</div>
                    <h2 className="heading">{service.tagline}</h2>
                    <p className="lede" style={{ marginTop: '18px' }}>
                      {service.description}
                    </p>
                    <div className="svc-detail-highlights">
                      {service.highlights.map((h, i) => (
                        <div className="svc-highlight-item" key={i}>
                          <FontAwesomeIcon
                            icon={faCheckCircle}
                            className="highlight-icon"
                            aria-hidden="true"
                          />
                          <span>{h}</span>
                        </div>
                      ))}
                    </div>
                    <Link
                      href="/#appointment"
                      className="btn btn-dark"
                      style={{ marginTop: '30px' }}
                    >
                      <FontAwesomeIcon
                        icon={faCalendarCheck}
                        aria-hidden="true"
                      />
                      Book This Service
                    </Link>
                  </div>
                </Reveal>
              </div>
            </div>
          </section>
        ))}
      </div>

      {/* ===== HOW IT WORKS PROCESS ===== */}
      <section className="section svc-process-section" id="how-it-works">
        <div className="container">
          <Reveal>
            <div className="section-head center">
              <div className="eyebrow" style={{ justifyContent: 'center' }}>
                HOW IT WORKS
              </div>
              <h2 className="heading">Your Visit in 4 Simple Steps</h2>
            </div>
          </Reveal>
          <div className="svc-process-grid">
            {processSteps.map((step, i) => (
              <Reveal key={i}>
                <div className="svc-process-card">
                  <div className="svc-process-icon">
                    <FontAwesomeIcon icon={step.icon} aria-hidden="true" />
                  </div>
                  <div className="svc-process-num">{step.num}</div>
                  <h4>{step.title}</h4>
                  <p>{step.desc}</p>
                </div>
              </Reveal>
            ))}
            <div className="svc-process-line" aria-hidden="true" />
          </div>
        </div>
      </section>

      {/* ===== STATS BAR ===== */}
      <section
        className="section stats about-stats-section"
        ref={statsRef}
      >
        <div className="container">
          <Reveal>
            <div
              className="section-head center"
              style={{ marginBottom: '40px' }}
            >
              <div className="eyebrow" style={{ justifyContent: 'center', color: 'var(--accent)' }}>
                BY THE NUMBERS
              </div>
              <h2
                className="heading"
                style={{ color: 'var(--white)' }}
              >
                Trusted by Thousands
              </h2>
            </div>
          </Reveal>
          <div className="stats-grid">
            {statistics.map((stat, i) => (
              <StatCard key={i} stat={stat} hasAnimated={statsAnimated} />
            ))}
          </div>
        </div>
      </section>

      {/* ===== INSURANCE / FAQ SECTION ===== */}
      <section className="section" id="insurance-faq">
        <div className="container">
          <div className="svc-faq-grid">
            <Reveal>
              <div className="svc-faq-left">
                <div className="eyebrow">INSURANCE & BILLING</div>
                <h2 className="heading">
                  Questions About Coverage?
                </h2>
                <p className="lede" style={{ marginTop: '16px' }}>
                  We accept most major insurance plans and offer flexible
                  payment options for uninsured patients. Our billing team is
                  here to help you navigate coverage so you can focus on your
                  health.
                </p>
                <div className="svc-insurance-badges">
                  <div className="svc-ins-badge">
                    <FontAwesomeIcon
                      icon={faShieldVirus}
                      className="svc-ins-icon"
                      aria-hidden="true"
                    />
                    <span>Most Major Plans</span>
                  </div>
                  <div className="svc-ins-badge">
                    <FontAwesomeIcon
                      icon={faClipboardList}
                      className="svc-ins-icon"
                      aria-hidden="true"
                    />
                    <span>Flexible Payment Plans</span>
                  </div>
                  <div className="svc-ins-badge">
                    <FontAwesomeIcon
                      icon={faHeartCircleCheck}
                      className="svc-ins-icon"
                      aria-hidden="true"
                    />
                    <span>No-Surprise Billing</span>
                  </div>
                </div>
                <a href="tel:+10001234567" className="btn btn-dark" style={{ marginTop: '28px' }}>
                  <FontAwesomeIcon icon={faPhone} aria-hidden="true" />
                  Call Us to Verify
                </a>
              </div>
            </Reveal>
            <Reveal>
              <div className="svc-faq-right">
                <div className="faq-list">
                  {insuranceFaqs.map((faq, i) => (
                    <div
                      className={`faq-item${openFaq === i ? ' open' : ''}`}
                      key={i}
                    >
                      <button
                        className="faq-question"
                        onClick={() => toggleFaq(i)}
                        aria-expanded={openFaq === i}
                      >
                        {faq.q}
                        <FontAwesomeIcon
                          icon={faPlus}
                          className="faq-toggle-icon"
                          aria-hidden="true"
                        />
                      </button>
                      <div className="faq-answer">
                        <div className="faq-answer-inner">{faq.a}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ===== CTA PANEL ===== */}
      <section className="cta-panel-wrap">
        <div className="container">
          <Reveal>
            <div className="cta-panel">
              <span className="cta-label">READY TO GET STARTED?</span>
              <h2>Take the First Step Toward Better Health</h2>
              <p>
                Whether you need a routine checkup, specialized care, or just
                have a question — our team is ready to help. Schedule your
                appointment today.
              </p>
              <div className="cta-actions">
                <Link href="/#appointment" className="btn btn-primary">
                  <FontAwesomeIcon
                    icon={faCalendarCheck}
                    aria-hidden="true"
                  />
                  Book Your Visit
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
