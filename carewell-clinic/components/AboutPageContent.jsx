'use client';

import { useEffect, useRef, useState, useCallback } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHandHoldingHeart,
  faListCheck,
  faUserDoctor,
  faHospital,
  faHeart,
  faEye,
  faBullseye,
  faGem,
  faShieldHeart,
  faUsers,
  faStar,
  faArrowRight,
  faQuoteLeft,
  faCheckCircle,
  faCalendarCheck,
  faClock,
  faPhone,
  faAward,
  faStethoscope,
  faHandshake,
  faLightbulb,
  faSeedling,
} from '@fortawesome/free-solid-svg-icons';
import { doctors } from '@/data/clinicData';
import Reveal from './Reveal';

/* ————— Timeline data ————— */
const timeline = [
  {
    year: '2009',
    title: 'Founded with a Vision',
    desc: 'Carewell Clinic opened its doors with a small team and a big promise — to put patients first in every decision.',
  },
  {
    year: '2013',
    title: 'Expanded Services',
    desc: "Added pediatrics, women's health, and on-site diagnostics to serve families under one roof.",
  },
  {
    year: '2017',
    title: 'Modern Facility Upgrade',
    desc: 'Moved to our current location with state-of-the-art equipment and a patient-centered design.',
  },
  {
    year: '2020',
    title: 'Digital-First Care',
    desc: 'Launched same-day online booking and telehealth consultations, reaching more patients than ever.',
  },
  {
    year: '2024',
    title: 'Community Milestone',
    desc: 'Surpassed 10,000 patients served while maintaining a 98% satisfaction rate.',
  },
];

/* ————— Core values data ————— */
const coreValues = [
  {
    icon: faHeart,
    title: 'Compassion',
    desc: 'Every interaction is grounded in empathy. We treat the person, not just the condition.',
  },
  {
    icon: faShieldHeart,
    title: 'Integrity',
    desc: 'Transparent communication, honest guidance, and ethical care at every step.',
  },
  {
    icon: faLightbulb,
    title: 'Innovation',
    desc: 'Embracing modern technology and evidence-based methods to deliver the best outcomes.',
  },
  {
    icon: faUsers,
    title: 'Community',
    desc: 'We believe in building lasting relationships with the families and neighborhoods we serve.',
  },
  {
    icon: faSeedling,
    title: 'Growth',
    desc: 'Continuous learning and professional development keep our team at the forefront of care.',
  },
  {
    icon: faHandshake,
    title: 'Collaboration',
    desc: 'Multi-disciplinary teamwork ensures coordinated, comprehensive care plans.',
  },
];



/* ============================================= */
/*        MAIN ABOUT PAGE CONTENT                */
/* ============================================= */
export default function AboutPageContent() {


  return (
    <main>
      {/* ===== PAGE HERO ===== */}
      <section className="about-hero" id="about-hero">
        <div className="about-hero-bg">
          <Image
            src="/about-team.jpg"
            alt="Carewell Clinic team in the lobby"
            fill
            priority
            sizes="100vw"
            style={{ objectFit: 'cover' }}
          />
          <div className="about-hero-overlay" />
        </div>
        <div className="container about-hero-content">
          <Reveal>
            <div className="about-hero-breadcrumb">
              <Link href="/">Home</Link>
              <span className="breadcrumb-sep">/</span>
              <span>About Us</span>
            </div>
            <h1>About Carewell Clinic</h1>
            <p className="about-hero-desc">
              For over 15 years, we've been delivering compassionate,
              patient-first healthcare to our community. Learn what drives us,
              meet our team, and discover why thousands trust us with their care.
            </p>
            <div className="about-hero-actions">
              <Link href="/#appointment" className="btn btn-primary">
                Book Appointment
              </Link>
              <a href="#our-story" className="btn btn-outline">
                Our Story
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ===== MISSION / VISION / VALUES STRIP ===== */}
      <section className="about-mvv-strip">
        <div className="container">
          <div className="mvv-grid">
            <Reveal className="mvv-card">
              <div className="mvv-icon-wrap">
                <FontAwesomeIcon icon={faBullseye} />
              </div>
              <h3>Our Mission</h3>
              <p>
                To provide accessible, high-quality healthcare through
                personalized treatment plans, honest communication, and a team
                that genuinely cares about every patient's well-being.
              </p>
            </Reveal>
            <Reveal className="mvv-card">
              <div className="mvv-icon-wrap">
                <FontAwesomeIcon icon={faEye} />
              </div>
              <h3>Our Vision</h3>
              <p>
                To be the most trusted community health clinic — known for
                putting people first, embracing innovation, and setting the
                standard for what patient care should feel like.
              </p>
            </Reveal>
            <Reveal className="mvv-card">
              <div className="mvv-icon-wrap">
                <FontAwesomeIcon icon={faGem} />
              </div>
              <h3>Our Values</h3>
              <p>
                Compassion, integrity, and continuous improvement define every
                interaction — from the front desk to the exam room and beyond.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ===== OUR STORY ===== */}
      <section className="section" id="our-story">
        <div className="container about-story-grid">
          <Reveal className="about-story-visual">
            <Image
              src="/about-mission.jpg"
              alt="Doctor caring for a patient during consultation"
              width={700}
              height={525}
              sizes="(max-width: 900px) 100vw, 45vw"
              style={{
                width: '100%',
                height: 'auto',
                borderRadius: 'var(--radius-lg)',
                aspectRatio: '4/3',
                objectFit: 'cover',
                boxShadow: 'var(--shadow-soft)',
              }}
            />
            <div className="about-story-badge">
              <FontAwesomeIcon
                icon={faHandHoldingHeart}
                className="about-badge-icon"
                aria-hidden="true"
              />
              <span>15+ Years of Care</span>
            </div>
          </Reveal>
          <Reveal>
            <div className="eyebrow">OUR STORY</div>
            <h2 className="heading">Healthcare Built on Trust</h2>
            <p className="lede" style={{ marginTop: '18px' }}>
              Carewell Clinic was founded in 2009 by a group of physicians who
              believed healthcare should feel personal, not transactional. What
              began as a small family practice has grown into a comprehensive
              health clinic serving thousands of patients each year.
            </p>
            <p
              className="lede"
              style={{ marginTop: '14px', fontSize: '.94rem' }}
            >
              Our approach is simple: listen first, diagnose carefully, and treat
              the whole person. We invest in modern facilities, ongoing training,
              and open communication so every patient leaves feeling heard,
              informed, and cared for.
            </p>
            <div className="about-story-highlights">
              <div className="about-highlight">
                <FontAwesomeIcon
                  icon={faCheckCircle}
                  className="highlight-icon"
                />
                <span>Board-certified physicians across all specialties</span>
              </div>
              <div className="about-highlight">
                <FontAwesomeIcon
                  icon={faCheckCircle}
                  className="highlight-icon"
                />
                <span>State-of-the-art diagnostic equipment</span>
              </div>
              <div className="about-highlight">
                <FontAwesomeIcon
                  icon={faCheckCircle}
                  className="highlight-icon"
                />
                <span>Same-day appointments and telehealth options</span>
              </div>
              <div className="about-highlight">
                <FontAwesomeIcon
                  icon={faCheckCircle}
                  className="highlight-icon"
                />
                <span>Patient satisfaction rating of 98%</span>
              </div>
            </div>
          </Reveal>
        </div>
      </section>



      {/* ===== CORE VALUES ===== */}
      <section className="section" id="values">
        <div className="container">
          <Reveal>
            <div className="section-head center">
              <div className="eyebrow" style={{ justifyContent: 'center' }}>
                OUR CORE VALUES
              </div>
              <h2 className="heading">The Principles That Guide Us</h2>
            </div>
          </Reveal>
          <div className="values-grid">
            {coreValues.map((v, i) => (
              <Reveal key={i}>
                <div className="value-card">
                  <div className="value-icon">
                    <FontAwesomeIcon icon={v.icon} aria-hidden="true" />
                  </div>
                  <h3>{v.title}</h3>
                  <p>{v.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===== TIMELINE ===== */}
      <section className="section split-section" id="journey">
        <div className="container">
          <Reveal>
            <div className="section-head center">
              <div className="eyebrow" style={{ justifyContent: 'center' }}>
                OUR JOURNEY
              </div>
              <h2 className="heading">Milestones Along the Way</h2>
            </div>
          </Reveal>
          <div className="timeline">
            {timeline.map((item, i) => (
              <Reveal key={i}>
                <div
                  className={`timeline-item ${i % 2 === 0 ? 'left' : 'right'}`}
                >
                  <div className="timeline-marker">
                    <span className="timeline-year">{item.year}</span>
                  </div>
                  <div className="timeline-card">
                    <h4>{item.title}</h4>
                    <p>{item.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===== MEET THE TEAM ===== */}
      <section className="section" id="team">
        <div className="container">
          <Reveal>
            <div className="section-head center">
              <div className="eyebrow" style={{ justifyContent: 'center' }}>
                OUR TEAM
              </div>
              <h2 className="heading">Meet the Professionals Behind Your Care</h2>
            </div>
          </Reveal>
          <div className="doctors-grid">
            {doctors.map((doc, i) => (
              <Reveal key={i}>
                <div className="doctor-card">
                  <div className="doctor-photo">
                    <Image
                      src={doc.image}
                      alt={doc.alt}
                      width={500}
                      height={667}
                      sizes="(max-width: 560px) 100vw, (max-width: 1100px) 50vw, 25vw"
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                      }}
                    />
                  </div>
                  <div className="doctor-info">
                    <h3>{doc.name}</h3>
                    <div className="doctor-specialty">{doc.specialty}</div>
                    <div className="doctor-meta">{doc.meta}</div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA PANEL ===== */}
      <section className="cta-panel-wrap">
        <div className="container">
          <Reveal>
            <div className="cta-panel">
              <span className="cta-label">READY TO GET STARTED?</span>
              <h2>Your Health Journey Begins Here</h2>
              <p>
                Whether it's a routine checkup, a new concern, or ongoing care —
                our team is here for you. Book your appointment today and
                experience the Carewell difference.
              </p>
              <div className="cta-actions">
                <Link href="/#appointment" className="btn btn-primary">
                  <FontAwesomeIcon icon={faCalendarCheck} aria-hidden="true" />
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
