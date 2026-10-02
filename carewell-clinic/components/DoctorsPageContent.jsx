'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHouse,
  faStethoscope,
  faUserDoctor,
  faHandHoldingHeart,
  faUsers,
  faClock,
  faComments,
  faHeartPulse,
  faGraduationCap,
  faArrowRight,
  faMagnifyingGlass,
  faXmark,
  faBorderAll,
  faUserSlash,
  faCalendarDays,
  faLocationDot,
  faEnvelope,
  faCalendarCheck,
  faPhone,
  faEarListen,
  faClipboardCheck,
} from '@fortawesome/free-solid-svg-icons';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import Reveal from './Reveal';

const ALL_DOCTORS = [
  {
    id: 'sarah',
    name: 'Dr. Sarah Ahmed',
    specialty: 'General Medicine',
    category: 'general-medicine',
    credentials: 'MBBS, FCPS · 15+ Years Experience',
    photo: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&w=600&q=80',
    bio: 'Specializing in comprehensive adult checkups, chronic ailment management, and preventive medical guidance. Dr. Sarah brings over 15 years of clinical practice with an unhurried, patient-centered focus.',
    expertise: ['Adult Checkups', 'Chronic Condition Management', 'Preventive Screenings', 'Diagnostic Workups', 'Lifestyle Medicine'],
    days: 'Monday, Tuesday, Thursday',
    hours: '9:00 AM – 4:30 PM',
  },
  {
    id: 'james',
    name: 'Dr. James Wilson',
    specialty: 'Family Medicine',
    category: 'family-medicine',
    credentials: 'MBBS, MD · 12+ Years Experience',
    photo: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=600&q=80',
    bio: 'Providing holistic multi-generational family health services with an emphasis on preventive checkups and household wellness roadmaps for parents, children, and grandparents.',
    expertise: ['Family Health Management', 'Adolescent Care', 'Senior Mobility', 'Annual Physicals', 'Immunization Reviews'],
    days: 'Monday through Friday',
    hours: '8:30 AM – 3:30 PM',
  },
  {
    id: 'emily',
    name: 'Dr. Emily Carter',
    specialty: 'Pediatrics',
    category: 'pediatrics',
    credentials: 'MBBS, DCH · 10+ Years Experience',
    photo: 'https://images.unsplash.com/photo-1651008376811-b90baee60c1f?auto=format&fit=crop&w=600&q=80',
    bio: 'Dedicated to compassionate pediatric care, childhood immunizations, developmental screenings, and gentle parent reassurance in an anxiety-free environment.',
    expertise: ['Newborn Care', 'Childhood Development', 'Vaccination Schedules', 'Pediatric Nutrition', 'School Physicals'],
    days: 'Tuesday, Wednesday, Saturday',
    hours: '9:00 AM – 2:00 PM',
  },
  {
    id: 'daniel',
    name: 'Dr. Daniel Khan',
    specialty: 'Internal Medicine',
    category: 'internal-medicine',
    credentials: 'MBBS, FCPS · 14+ Years Experience',
    photo: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=600&q=80',
    bio: 'Expert in diagnostic evaluations, complex symptom investigation, metabolic wellness, and coordinated care for multi-system health conditions.',
    expertise: ['Complex Diagnostics', 'Metabolic Health', 'Hypertension Control', 'Preventive Labs', 'Endocrine Management'],
    days: 'Monday, Wednesday, Friday',
    hours: '10:00 AM – 5:00 PM',
  },
  {
    id: 'ayesha',
    name: 'Dr. Ayesha Malik',
    specialty: "Women's Health",
    category: 'womens-health',
    credentials: 'MBBS, MRCOG · 13+ Years Experience',
    photo: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=600&q=80',
    bio: "Focusing on comprehensive women's healthcare, routine screenings, prenatal wellness counseling, and personalized health guidance throughout all stages of life.",
    expertise: ["Routine Women's Care", 'Prenatal Guidance', 'Hormonal Wellness', 'Preventive Screenings', 'Bone Health'],
    days: 'Monday, Thursday, Friday',
    hours: '9:00 AM – 3:00 PM',
  },
  {
    id: 'michael',
    name: 'Dr. Michael Brown',
    specialty: 'Cardiology',
    category: 'cardiology',
    credentials: 'MD, FACC · 16+ Years Experience',
    photo: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&w=600&q=80',
    bio: 'Providing preventive cardiovascular risk assessments, hypertension control, ECG interpretations, and lifestyle cardiology to safeguard long-term heart health.',
    expertise: ['Cardiovascular Screenings', 'Hypertension Management', 'ECG Interpretations', 'Lipid Optimization', 'Lifestyle Cardiology'],
    days: 'Tuesday, Wednesday, Friday',
    hours: '9:30 AM – 4:00 PM',
  },
  {
    id: 'sophia',
    name: 'Dr. Sophia Williams',
    specialty: 'Dermatology',
    category: 'dermatology',
    credentials: 'MD, FAAD · 11+ Years Experience',
    photo: 'https://images.unsplash.com/photo-1591604021695-0c69b7c03381?auto=format&fit=crop&w=600&q=80',
    bio: 'Experienced in clinical dermatology, skin health screenings, chronic dermatitis management, and preventive skin checks with a patient-friendly approach.',
    expertise: ['Skin Screenings', 'Acne & Dermatitis Care', 'Allergic Reactions', 'Skin Barrier Health', 'Preventive Dermoscopy'],
    days: 'Monday, Wednesday, Thursday',
    hours: '10:00 AM – 3:30 PM',
  },
  {
    id: 'hamza',
    name: 'Dr. Hamza Ali',
    specialty: 'Preventive Medicine',
    category: 'general-medicine',
    credentials: 'MBBS, MPH · 9+ Years Experience',
    photo: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?auto=format&fit=crop&w=600&q=80',
    bio: 'Championing preventive medicine, health risk scorecards, biometric health coaching, and evidence-grounded longevity strategies for lifelong health.',
    expertise: ['Biometric Health Coaching', 'Preventive Scorecards', 'Metabolic Assessments', 'Nutritional Counseling', 'Wellness Planning'],
    days: 'Tuesday through Saturday',
    hours: '8:30 AM – 2:30 PM',
  },
];

const FILTER_CATEGORIES = [
  { id: 'all', label: 'All Doctors' },
  { id: 'general-medicine', label: 'General Medicine' },
  { id: 'family-medicine', label: 'Family Medicine' },
  { id: 'pediatrics', label: 'Pediatrics' },
  { id: 'womens-health', label: "Women's Health" },
  { id: 'internal-medicine', label: 'Internal Medicine' },
  { id: 'cardiology', label: 'Cardiology' },
  { id: 'dermatology', label: 'Dermatology' },
];

export default function DoctorsPageContent() {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedDoctor, setSelectedDoctor] = useState(null);

  // Close modal on Escape
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setSelectedDoctor(null);
    };
    if (selectedDoctor) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedDoctor]);

  const filteredDoctors = ALL_DOCTORS.filter((doc) => {
    const matchesCategory =
      activeCategory === 'all' || doc.category === activeCategory;
    const query = searchTerm.toLowerCase().trim();
    const matchesSearch =
      !query ||
      doc.name.toLowerCase().includes(query) ||
      doc.specialty.toLowerCase().includes(query) ||
      doc.bio.toLowerCase().includes(query);
    return matchesCategory && matchesSearch;
  });

  return (
    <>
      {/* 1. Page Title Banner */}
      <section className="page-title-banner" id="doctors-hero">
        <div className="container">
          <nav className="breadcrumb-nav" aria-label="Breadcrumb">
            <ol className="breadcrumb-list">
              <li>
                <Link href="/">
                  <FontAwesomeIcon icon={faHouse} /> Home
                </Link>
              </li>
              <li aria-current="page">Our Doctors</li>
            </ol>
          </nav>
          <h1 className="page-title">Our Doctors</h1>
          <p className="page-lead">
            Meet our dedicated team of board-certified physicians, specialists,
            and compassionate healthcare professionals committed to personalized,
            unhurried care.
          </p>
        </div>
      </section>

      {/* 2. Introduction Section */}
      <section className="section">
        <div className="container intro-grid">
          <Reveal className="intro-image">
            <Image
              src="https://images.unsplash.com/photo-1551601651-2a8555f1a136?auto=format&fit=crop&w=900&q=80"
              alt="Carewell physicians collaborating on a comprehensive patient treatment plan"
              width={900}
              height={700}
              style={{ objectFit: 'cover' }}
            />
            <div className="intro-float-badge">
              <FontAwesomeIcon icon={faStethoscope} />
              <span>Multidisciplinary Expertise, Centered on You</span>
            </div>
          </Reveal>

          <Reveal>
            <div className="eyebrow">EXPERIENCE & COMPASSION</div>
            <h2 className="heading">Experienced Professionals. Personal Care.</h2>
            <p className="lede" style={{ marginTop: '16px' }}>
              We believe that great medicine begins with genuine listening. Our
              multidisciplinary care team collaborates across specialties to deliver
              integrated, evidence-based healthcare tailored to the unique rhythms of
              your life.
            </p>

            <div className="intro-points-grid">
              <div className="intro-point">
                <div className="intro-point-icon">
                  <FontAwesomeIcon icon={faUserDoctor} />
                </div>
                <div>
                  <h4>Experienced Healthcare Professionals</h4>
                  <p>Clinicians with extensive hospital and private clinical backgrounds.</p>
                </div>
              </div>
              <div className="intro-point">
                <div className="intro-point-icon">
                  <FontAwesomeIcon icon={faHandHoldingHeart} />
                </div>
                <div>
                  <h4>Patient-Centered Approach</h4>
                  <p>Every care plan is shaped around your personal goals and lifestyle.</p>
                </div>
              </div>
              <div className="intro-point">
                <div className="intro-point-icon">
                  <FontAwesomeIcon icon={faUsers} />
                </div>
                <div>
                  <h4>Clinical Collaboration</h4>
                  <p>Specialists confer with one another to ensure seamless continuity.</p>
                </div>
              </div>
              <div className="intro-point">
                <div className="intro-point-icon">
                  <FontAwesomeIcon icon={faClock} />
                </div>
                <div>
                  <h4>Personalized Attention</h4>
                  <p>Unhurried visits allowing ample time for all your questions.</p>
                </div>
              </div>
              <div className="intro-point">
                <div className="intro-point-icon">
                  <FontAwesomeIcon icon={faComments} />
                </div>
                <div>
                  <h4>Clear Communication</h4>
                  <p>Plain-language guidance without confusing medical jargon.</p>
                </div>
              </div>
              <div className="intro-point">
                <div className="intro-point-icon">
                  <FontAwesomeIcon icon={faHeartPulse} />
                </div>
                <div>
                  <h4>Continued Care</h4>
                  <p>Dedicated post-visit follow-up and monitoring to keep health on track.</p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 3. Doctor Directory with Filter & Search */}
      <section className="section" id="doctor-directory" style={{ background: 'var(--primary-08)' }}>
        <div className="container">
          <div className="section-head center">
            <div className="eyebrow" style={{ justifyContent: 'center' }}>
              COMPLETE PHYSICIAN DIRECTORY
            </div>
            <h2 className="heading">Find Your Specialist</h2>
            <p className="lede" style={{ margin: '16px auto 0' }}>
              Search our physicians by name or filter by clinical specialty to find
              the right partner for your care.
            </p>
          </div>

          {/* Search & Filter Controls */}
          <div className="directory-controls">
            <div className="search-bar-wrap">
              <FontAwesomeIcon icon={faMagnifyingGlass} className="search-icon" />
              <input
                type="search"
                className="search-input"
                placeholder="Search doctors by name or specialty..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                aria-label="Search doctors by name or specialty"
              />
              {searchTerm && (
                <button
                  type="button"
                  className="search-clear"
                  onClick={() => setSearchTerm('')}
                  aria-label="Clear search"
                >
                  <FontAwesomeIcon icon={faXmark} />
                </button>
              )}
            </div>

            <div className="filter-nav-wrap" role="toolbar" aria-label="Specialty filters">
              {FILTER_CATEGORIES.map((cat) => (
                <button
                  key={cat.id}
                  className={`filter-btn ${activeCategory === cat.id ? 'active' : ''}`}
                  onClick={() => setActiveCategory(cat.id)}
                >
                  {cat.id === 'all' && <FontAwesomeIcon icon={faBorderAll} />}
                  {cat.label}
                </button>
              ))}
            </div>
          </div>

          {/* Empty State */}
          {filteredDoctors.length === 0 && (
            <div className="no-results" role="status">
              <FontAwesomeIcon icon={faUserSlash} />
              <h3>No Doctors Found</h3>
              <p>No physicians found matching your criteria. Try another search or filter.</p>
              <button
                type="button"
                className="btn btn-dark"
                style={{ marginTop: '16px' }}
                onClick={() => {
                  setSearchTerm('');
                  setActiveCategory('all');
                }}
              >
                View All Doctors
              </button>
            </div>
          )}

          {/* Doctors Grid */}
          <div className="doctors-grid">
            {filteredDoctors.map((doc) => (
              <article className="doctor-card reveal" key={doc.id}>
                <div className="doctor-photo">
                  <Image
                    src={doc.photo}
                    alt={doc.name}
                    width={600}
                    height={800}
                    sizes="(max-width: 560px) 100vw, (max-width: 1100px) 50vw, 25vw"
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                  <span className="doctor-badge-overlay">{doc.specialty}</span>
                </div>
                <div className="doctor-info">
                  <h3>{doc.name}</h3>
                  <div className="doctor-specialty">{doc.specialty}</div>
                  <div className="doctor-meta">
                    <FontAwesomeIcon icon={faGraduationCap} /> {doc.credentials}
                  </div>
                  <p className="doctor-bio-excerpt">{doc.bio}</p>
                  <div className="doctor-footer">
                    <button
                      className="view-profile"
                      onClick={() => setSelectedDoctor(doc)}
                      aria-haspopup="dialog"
                    >
                      View Profile <FontAwesomeIcon icon={faArrowRight} />
                    </button>
                    <Link href="/#appointment" className="btn btn-primary btn-sm">
                      Book
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Collaborative Process (Steps) */}
      <section className="section">
        <div className="container">
          <div className="section-head center">
            <div className="eyebrow" style={{ justifyContent: 'center' }}>
              COLLABORATIVE PROCESS
            </div>
            <h2 className="heading">How We Work Together</h2>
            <p className="lede" style={{ margin: '16px auto 0' }}>
              Healthcare is a relationship built on trust, clinical thoroughness, and
              continuous collaboration with every patient.
            </p>
          </div>

          <div className="steps-wrap">
            <div className="steps-grid">
              <div className="step-card reveal">
                <div className="step-icon">
                  <FontAwesomeIcon icon={faEarListen} />
                </div>
                <div className="step-tag">STEP 01</div>
                <h4>01 — LISTEN</h4>
                <p>We begin by understanding your concerns, symptoms, and daily routine in an unhurried consultation.</p>
              </div>
              <div className="step-card reveal">
                <div className="step-icon">
                  <FontAwesomeIcon icon={faStethoscope} />
                </div>
                <div className="step-tag">STEP 02</div>
                <h4>02 — ASSESS</h4>
                <p>We review relevant health information, examine biometric vitals, and order diagnostics if necessary.</p>
              </div>
              <div className="step-card reveal">
                <div className="step-icon">
                  <FontAwesomeIcon icon={faClipboardCheck} />
                </div>
                <div className="step-tag">STEP 03</div>
                <h4>03 — PLAN</h4>
                <p>We discuss appropriate care, agree on actionable next steps, and tailor the treatment plan to your life.</p>
              </div>
              <div className="step-card reveal">
                <div className="step-icon">
                  <FontAwesomeIcon icon={faHeartPulse} />
                </div>
                <div className="step-tag">STEP 04</div>
                <h4>04 — SUPPORT</h4>
                <p>We provide continuous follow-up, track your recovery, and keep lines of communication open.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Final CTA Panel */}
      <section className="section" style={{ padding: '0 0 100px' }}>
        <div className="container">
          <div className="cta-panel reveal">
            <h2>Ready to Meet Your Dedicated Healthcare Team?</h2>
            <p>
              Whether you need a routine health checkup or specialized consultation,
              our physicians are ready to listen, advise, and support your long-term
              health.
            </p>
            <div className="cta-actions">
              <Link href="/#appointment" className="btn btn-primary">
                <FontAwesomeIcon icon={faCalendarCheck} /> Book an Appointment
              </Link>
              <a href="tel:+10001234567" className="btn btn-outline">
                <FontAwesomeIcon icon={faPhone} /> Call (000) 123-4567
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Interactive Doctor Modal */}
      {selectedDoctor && (
        <div
          className="modal-backdrop is-open"
          role="dialog"
          aria-modal="true"
          onClick={() => setSelectedDoctor(null)}
        >
          <div
            className="doctor-modal"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="modal-close-btn"
              onClick={() => setSelectedDoctor(null)}
              aria-label="Close modal"
            >
              <FontAwesomeIcon icon={faXmark} />
            </button>
            <div className="modal-body">
              <div className="modal-photo-wrap">
                <Image
                  src={selectedDoctor.photo}
                  alt={selectedDoctor.name}
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <div className="modal-details">
                <div className="modal-specialty">{selectedDoctor.specialty}</div>
                <h2>{selectedDoctor.name}</h2>
                <div className="modal-credentials">
                  <FontAwesomeIcon icon={faGraduationCap} /> {selectedDoctor.credentials}
                </div>
                <p className="modal-bio">{selectedDoctor.bio}</p>

                <div className="modal-section-title">Clinical Expertise</div>
                <div className="modal-expertise-list">
                  {selectedDoctor.expertise.map((item, idx) => (
                    <span key={idx}>{item}</span>
                  ))}
                </div>

                <div className="modal-consultation-info">
                  <div>
                    <FontAwesomeIcon icon={faCalendarDays} />
                    <span>{selectedDoctor.days}</span>
                  </div>
                  <div>
                    <FontAwesomeIcon icon={faClock} />
                    <span>{selectedDoctor.hours}</span>
                  </div>
                  <div>
                    <FontAwesomeIcon icon={faLocationDot} />
                    <span>Main Medical Wing, Carewell Clinic</span>
                  </div>
                </div>

                <div className="modal-actions">
                  <Link
                    href="/#appointment"
                    className="btn btn-primary btn-sm"
                    onClick={() => setSelectedDoctor(null)}
                  >
                    Book Appointment
                  </Link>
                  <div className="doctor-social" style={{ margin: 0 }}>
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                      <FontAwesomeIcon icon={faLinkedinIn} />
                    </a>
                    <a href="mailto:hello@carewellclinic.example" aria-label="Email doctor">
                      <FontAwesomeIcon icon={faEnvelope} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
