'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import {
  faEnvelope,
  faArrowRight,
  faChevronLeft,
  faChevronRight,
  faGraduationCap,
} from '@fortawesome/free-solid-svg-icons';
import Reveal from './Reveal';

const teamDoctors = [
  {
    name: 'Dr. Sarah Ahmed',
    specialty: 'General Medicine',
    overlayBadge: 'General Medicine',
    meta: 'MBBS, FCPS · 15+ Yrs Exp',
    image: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&w=600&q=80',
    alt: 'Dr. Sarah Ahmed',
  },
  {
    name: 'Dr. James Wilson',
    specialty: 'Family Medicine',
    overlayBadge: 'Family Medicine',
    meta: 'MBBS, MD · 12+ Yrs Exp',
    image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=600&q=80',
    alt: 'Dr. James Wilson',
  },
  {
    name: 'Dr. Emily Carter',
    specialty: 'Pediatrics',
    overlayBadge: 'Pediatrics',
    meta: 'MBBS, DCH · 10+ Yrs Exp',
    image: 'https://images.unsplash.com/photo-1651008376811-b90baee60c1f?auto=format&fit=crop&w=600&q=80',
    alt: 'Dr. Emily Carter',
  },
  {
    name: 'Dr. Daniel Khan',
    specialty: 'Diagnostics & Internal',
    overlayBadge: 'Diagnostics',
    meta: 'MBBS, FCPS · 14+ Yrs Exp',
    image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=600&q=80',
    alt: 'Dr. Daniel Khan',
  },
  {
    name: 'Dr. Ayesha Malik',
    specialty: "Women's Health",
    overlayBadge: "Women's Health",
    meta: 'MBBS, MRCOG · 13+ Yrs Exp',
    image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=600&q=80',
    alt: 'Dr. Ayesha Malik',
  },
  {
    name: 'Dr. Michael Brown',
    specialty: 'Cardiology',
    overlayBadge: 'Cardiology',
    meta: 'MD, FACC · 16+ Yrs Exp',
    image: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&w=600&q=80',
    alt: 'Dr. Michael Brown',
  },
  {
    name: 'Dr. Sophia Williams',
    specialty: 'Dermatology',
    overlayBadge: 'Dermatology',
    meta: 'MD, FAAD · 11+ Yrs Exp',
    image: 'https://images.unsplash.com/photo-1591604021695-0c69b7c03381?auto=format&fit=crop&w=600&q=80',
    alt: 'Dr. Sophia Williams',
  },
  {
    name: 'Dr. Hamza Ali',
    specialty: 'Preventive Medicine',
    overlayBadge: 'Preventive Care',
    meta: 'MBBS, MPH · 9+ Yrs Exp',
    image: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?auto=format&fit=crop&w=600&q=80',
    alt: 'Dr. Hamza Ali',
  },
];

export default function Doctors() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [perView, setPerView] = useState(4);

  useEffect(() => {
    function updatePerView() {
      if (window.innerWidth <= 560) {
        setPerView(1);
      } else if (window.innerWidth <= 860) {
        setPerView(2);
      } else if (window.innerWidth <= 1200) {
        setPerView(3);
      } else {
        setPerView(4);
      }
    }

    updatePerView();
    window.addEventListener('resize', updatePerView);
    return () => window.removeEventListener('resize', updatePerView);
  }, []);

  const maxIndex = Math.max(0, teamDoctors.length - perView);

  const prevSlide = () => {
    setCurrentIndex((prev) => Math.max(0, prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => Math.min(maxIndex, prev + 1));
  };

  const offsetPct = (100 / perView) * Math.min(currentIndex, maxIndex);

  return (
    <section className="section" id="doctors">
      <div className="container">
        <div className="section-head center">
          <div className="eyebrow" style={{ justifyContent: 'center' }}>
            OUR TEAM
          </div>
          <h2 className="heading">Meet Our Healthcare Professionals</h2>
          <p className="lede" style={{ margin: '16px auto 0' }}>
            Experienced clinicians across primary care and clinical specialties committed to unhurried consultations and evidence-based medicine.
          </p>
        </div>

        <Reveal className="team-slider-wrap">
          <div className="team-slider-viewport">
            <div
              className="team-slider-track"
              style={{
                transform: `translateX(-${offsetPct}%)`,
              }}
            >
              {teamDoctors.map((doc, i) => (
                <div className="team-slide" key={i}>
                  <div className="doctor-card">
                    <div className="doctor-photo">
                      <Image
                        src={doc.image}
                        alt={doc.alt}
                        width={600}
                        height={800}
                        sizes="(max-width: 560px) 100vw, (max-width: 860px) 50vw, (max-width: 1200px) 33vw, 25vw"
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                      />
                      <span className="doctor-badge-overlay">{doc.overlayBadge}</span>
                    </div>
                    <div className="doctor-info">
                      <h3>{doc.name}</h3>
                      <div className="doctor-specialty">{doc.specialty}</div>
                      <div className="doctor-meta">
                        <FontAwesomeIcon icon={faGraduationCap} aria-hidden="true" /> {doc.meta}
                      </div>
                      <div className="doctor-footer">
                        <div className="doctor-social">
                          <a href="#" aria-label={`${doc.name} on LinkedIn`}>
                            <FontAwesomeIcon icon={faLinkedinIn} aria-hidden="true" />
                          </a>
                          <a href="mailto:hello@carewellclinic.example" aria-label={`Email ${doc.name}`}>
                            <FontAwesomeIcon icon={faEnvelope} aria-hidden="true" />
                          </a>
                        </div>
                        <Link href="/doctors" className="view-profile">
                          Profile <FontAwesomeIcon icon={faArrowRight} aria-hidden="true" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            className="team-arrow team-prev"
            onClick={prevSlide}
            disabled={currentIndex <= 0}
            aria-label="Previous doctors slide"
          >
            <FontAwesomeIcon icon={faChevronLeft} aria-hidden="true" />
          </button>
          <button
            className="team-arrow team-next"
            onClick={nextSlide}
            disabled={currentIndex >= maxIndex}
            aria-label="Next doctors slide"
          >
            <FontAwesomeIcon icon={faChevronRight} aria-hidden="true" />
          </button>
        </Reveal>
      </div>
    </section>
  );
}
