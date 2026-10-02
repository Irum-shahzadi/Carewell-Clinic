'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPlus,
  faLocationDot,
  faPhone,
  faEnvelope,
  faArrowUp,
} from '@fortawesome/free-solid-svg-icons';
import {
  faFacebookF,
  faInstagram,
  faLinkedinIn,
  faXTwitter,
} from '@fortawesome/free-brands-svg-icons';

export default function Footer() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <>
      <footer className="site-footer">
        <div className="container">
          <div className="footer-grid">
            {/* 1. Brand */}
            <div className="footer-brand">
              <Link href="/" className="footer-logo" aria-label="Carewell Clinic home">
                <span className="footer-logo-icon">
                  <FontAwesomeIcon icon={faPlus} />
                </span>
                <div className="footer-logo-text">
                  <span className="footer-logo-name">Carewell</span>
                  <span className="footer-logo-subtitle">HEALTH CLINIC</span>
                </div>
              </Link>
              <p>
                Compassionate Care. Better Health. Patient-centered medical excellence designed around your life.
              </p>
              <div className="footer-social">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Carewell Clinic on Facebook">
                  <FontAwesomeIcon icon={faFacebookF} />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Carewell Clinic on Instagram">
                  <FontAwesomeIcon icon={faInstagram} />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="Carewell Clinic on LinkedIn">
                  <FontAwesomeIcon icon={faLinkedinIn} />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Carewell Clinic on Twitter">
                  <FontAwesomeIcon icon={faXTwitter} />
                </a>
              </div>
            </div>

            {/* 2. Explore */}
            <div className="footer-col">
              <h4>Explore</h4>
              <ul>
                <li><Link href="/">Home</Link></li>
                <li><Link href="/about">About Us</Link></li>
                <li><Link href="/services">Services</Link></li>
                <li><Link href="/#doctors">Our Doctors</Link></li>
                <li><Link href="/#contact">Contact Us</Link></li>
              </ul>
            </div>

            {/* 3. Clinic Hours */}
            <div className="footer-col">
              <h4>Clinic Hours</h4>
              <ul className="footer-hours-list">
                <li><span>Mon – Fri:</span> <strong>8:00 AM – 6:00 PM</strong></li>
                <li><span>Wednesday:</span> <strong>8:00 AM – 7:00 PM</strong></li>
                <li><span>Saturday:</span> <strong>9:00 AM – 2:00 PM</strong></li>
                <li><span>Sunday:</span> <strong style={{ color: 'var(--accent)' }}>Closed (Emergency On-Call)</strong></li>
              </ul>
            </div>

            {/* 4. Contact & Visits */}
            <div className="footer-col">
              <h4>Contact & Visits</h4>
              <address className="footer-contact-info" style={{ fontStyle: 'normal' }}>
                <div className="footer-contact-item">
                  <FontAwesomeIcon icon={faLocationDot} />
                  <span>450 Health Avenue, Suite 300<br />Medical Plaza, Metro City</span>
                </div>
                <div className="footer-contact-item">
                  <FontAwesomeIcon icon={faPhone} />
                  <a href="tel:+10001234567">(000) 123-4567</a>
                </div>
                <div className="footer-contact-item">
                  <FontAwesomeIcon icon={faEnvelope} />
                  <a href="mailto:hello@carewellclinic.example">hello@carewellclinic.example</a>
                </div>
              </address>
              <Link href="/#appointment" className="btn btn-primary btn-sm" style={{ marginTop: '16px', display: 'inline-block' }}>
                Book an Appointment
              </Link>
            </div>
          </div>

          <div className="footer-bottom">
            <span>© 2026 Carewell Health Clinic. All rights reserved.</span>
            <div className="footer-bottom-links">
              <a href="#">Privacy Policy</a>
              <a href="#">Terms of Service</a>
              <a href="#">Accessibility Statement</a>
              <a href="#">Patient Rights</a>
            </div>
          </div>
        </div>
      </footer>

      <button
        className={`scroll-top ${showScrollTop ? 'active' : ''}`}
        onClick={scrollToTop}
        aria-label="Scroll to top"
      >
        <FontAwesomeIcon icon={faArrowUp} />
      </button>
    </>
  );
}
