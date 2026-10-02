'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHouse,
  faPhone,
  faEnvelope,
  faLocationDot,
  faClock,
  faArrowRight,
  faPaperPlane,
  faCheckCircle,
  faCircleCheck,
  faHeadset,
  faShieldHeart,
  faCar,
  faWheelchair,
} from '@fortawesome/free-solid-svg-icons';
import Reveal from './Reveal';

export default function ContactPageContent() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'General Medicine',
    subject: '',
    message: '',
    consent: false,
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: 'General Medicine',
        subject: '',
        message: '',
        consent: false,
      });
    }, 600);
  };

  return (
    <>
      {/* 1. Page Title Banner */}
      <section className="page-title-banner" id="contact-hero">
        <div className="container">
          <nav className="breadcrumb-nav" aria-label="Breadcrumb">
            <ol className="breadcrumb-list">
              <li>
                <Link href="/">
                  <FontAwesomeIcon icon={faHouse} /> Home
                </Link>
              </li>
              <li aria-current="page">Contact Us</li>
            </ol>
          </nav>
          <h1 className="page-title">Contact Us</h1>
          <p className="page-lead">
            We are here to support your healthcare journey. Send us a message,
            request an appointment, or speak directly with our clinic staff.
          </p>
        </div>
      </section>

      {/* 2. Quick Info Cards */}
      <section className="quick-info-section">
        <div className="container">
          <div className="quick-cards-grid">
            <div className="quick-card">
              <div className="quick-card-icon">
                <FontAwesomeIcon icon={faPhone} />
              </div>
              <h3>Main Clinic Line</h3>
              <div className="quick-card-highlight">(000) 123-4567</div>
              <p className="quick-card-sub">Direct telephone access to our front desk team during normal clinic hours.</p>
              <a href="tel:+10001234567" className="quick-card-link">
                Call Now <FontAwesomeIcon icon={faArrowRight} />
              </a>
            </div>

            <div className="quick-card">
              <div className="quick-card-icon">
                <FontAwesomeIcon icon={faEnvelope} />
              </div>
              <h3>Email Inquiries</h3>
              <div className="quick-card-highlight">hello@carewellclinic.example</div>
              <p className="quick-card-sub">Non-urgent clinical questions and general feedback answered within 1 business day.</p>
              <a href="mailto:hello@carewellclinic.example" className="quick-card-link">
                Send Email <FontAwesomeIcon icon={faArrowRight} />
              </a>
            </div>

            <div className="quick-card">
              <div className="quick-card-icon">
                <FontAwesomeIcon icon={faLocationDot} />
              </div>
              <h3>Clinic Location</h3>
              <div className="quick-card-highlight">Metro City Plaza, Suite 300</div>
              <p className="quick-card-sub">Ground-floor wheelchair access, on-site patient parking, and transit connections.</p>
              <a href="#location" className="quick-card-link">
                View Directions <FontAwesomeIcon icon={faArrowRight} />
              </a>
            </div>

            <div className="quick-card">
              <div className="quick-card-icon">
                <FontAwesomeIcon icon={faClock} />
              </div>
              <h3>Operating Hours</h3>
              <div className="quick-card-highlight">Mon–Fri: 8am–6pm</div>
              <p className="quick-card-sub">Extended Wednesday hours until 7:00 PM for working families and commuters.</p>
              <a href="#hours" className="quick-card-link">
                Full Schedule <FontAwesomeIcon icon={faArrowRight} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Feature Split Section */}
      <section className="contact-image-feature">
        <div className="container">
          <div className="feature-split-grid">
            <Reveal className="feature-media-box">
              <Image
                src="/faq_patient_support.jpg"
                alt="Carewell patient coordinator assisting visitor at reception desk"
                width={800}
                height={600}
                className="feature-main-img"
              />
            </Reveal>

            <Reveal className="feature-content">
              <div className="eyebrow">ACCESSIBLE CARE</div>
              <h2 className="heading">Compassionate Healthcare Always Within Reach</h2>
              <p className="lede" style={{ marginTop: '16px' }}>
                Whether scheduling your first visit, consulting on a health concern,
                or inquiring about test results, our patient coordinators ensure a
                responsive, unhurried experience.
              </p>

              <div style={{ marginTop: '24px', display: 'flex', flexDirection: 'column', gap: '14px' }}>
                <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                  <FontAwesomeIcon icon={faCheckCircle} style={{ color: 'var(--accent)', fontSize: '1.1rem' }} />
                  <span style={{ fontSize: '.95rem', color: 'var(--primary-85)', fontWeight: 500 }}>
                    Dedicated Patient Coordinator for Every Visit
                  </span>
                </div>
                <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                  <FontAwesomeIcon icon={faCheckCircle} style={{ color: 'var(--accent)', fontSize: '1.1rem' }} />
                  <span style={{ fontSize: '.95rem', color: 'var(--primary-85)', fontWeight: 500 }}>
                    Prompt Response to Online Queries within 24 Hours
                  </span>
                </div>
                <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                  <FontAwesomeIcon icon={faCheckCircle} style={{ color: 'var(--accent)', fontSize: '1.1rem' }} />
                  <span style={{ fontSize: '.95rem', color: 'var(--primary-85)', fontWeight: 500 }}>
                    Private, HIPAA-Compliant Patient Data Handling
                  </span>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 4. Modern Contact Form Section */}
      <section className="contact-form-section" id="contact-form">
        <div className="container">
          <div className="section-head center">
            <div className="eyebrow" style={{ justifyContent: 'center' }}>GET IN TOUCH</div>
            <h2 className="heading">Send Us a Direct Message</h2>
            <p className="lede" style={{ margin: '14px auto 0' }}>
              Fill out the inquiry form below and our clinical team will get back to you promptly.
            </p>
          </div>

          <div className="contact-form-layout">
            {/* Highlight Card */}
            <Reveal className="contact-highlight-card">
              <h3>Need Immediate Assistance?</h3>
              <p>
                For urgent clinical matters or same-day appointment requests, please
                call our dedicated triage line directly rather than submitting an
                online message.
              </p>

              <div className="highlight-point">
                <div className="highlight-point-icon">
                  <FontAwesomeIcon icon={faHeadset} />
                </div>
                <div>
                  <h4 style={{ color: 'var(--white)', fontSize: '1rem', marginBottom: '2px' }}>Urgent Nurse Helpline</h4>
                  <p style={{ color: 'var(--white-85)', fontSize: '.88rem', margin: 0 }}>(000) 123-4567 (Ext 1)</p>
                </div>
              </div>

              <div className="highlight-point">
                <div className="highlight-point-icon">
                  <FontAwesomeIcon icon={faShieldHeart} />
                </div>
                <div>
                  <h4 style={{ color: 'var(--white)', fontSize: '1rem', marginBottom: '2px' }}>Emergency Protocol</h4>
                  <p style={{ color: 'var(--white-85)', fontSize: '.88rem', margin: 0 }}>If experiencing acute distress, call 911 or visit the nearest ER.</p>
                </div>
              </div>

              <div style={{ marginTop: 'auto', paddingTop: '24px', borderTop: '1px solid rgba(255,255,255,0.15)' }}>
                <div style={{ color: 'var(--accent)', fontWeight: 700, fontSize: '.92rem' }}>
                  Metro City Medical Plaza
                </div>
                <div style={{ color: 'var(--white-85)', fontSize: '.86rem', marginTop: '4px' }}>
                  450 Health Avenue, Suite 300, Metro City
                </div>
              </div>
            </Reveal>

            {/* Form Card */}
            <Reveal className="contact-form-card" style={{ background: 'var(--white)', borderRadius: 'var(--radius-lg)', padding: '44px 38px', border: '1px solid var(--black-08)', boxShadow: 'var(--shadow-soft)' }}>
              {submitted ? (
                <div className="contact-success-banner" style={{ display: 'flex' }}>
                  <FontAwesomeIcon icon={faCircleCheck} />
                  <div>
                    <h4 style={{ margin: '0 0 6px', fontSize: '1.2rem' }}>Message Received Successfully!</h4>
                    <p style={{ margin: 0, fontSize: '.9rem', color: 'var(--primary-85)', lineHeight: 1.5 }}>
                      Thank you for contacting Carewell Clinic. A patient coordinator will review your request and reach out within 24 business hours.
                    </p>
                    <button
                      type="button"
                      className="btn btn-dark btn-sm"
                      style={{ marginTop: '16px' }}
                      onClick={() => setSubmitted(false)}
                    >
                      Send Another Message
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="modern-form-row">
                    <div className="modern-form-group">
                      <label htmlFor="cName">Your Full Name *</label>
                      <input
                        type="text"
                        id="cName"
                        className="modern-input"
                        placeholder="e.g. Jane Doe"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      />
                    </div>
                    <div className="modern-form-group">
                      <label htmlFor="cEmail">Email Address *</label>
                      <input
                        type="email"
                        id="cEmail"
                        className="modern-input"
                        placeholder="jane@example.com"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      />
                    </div>
                  </div>

                  <div className="modern-form-row">
                    <div className="modern-form-group">
                      <label htmlFor="cPhone">Phone Number</label>
                      <input
                        type="tel"
                        id="cPhone"
                        className="modern-input"
                        placeholder="(000) 000-0000"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      />
                    </div>
                    <div className="modern-form-group">
                      <label htmlFor="cService">Department / Specialty</label>
                      <select
                        id="cService"
                        className="modern-select"
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      >
                        <option value="General Medicine">General Medicine</option>
                        <option value="Family Medicine">Family Medicine</option>
                        <option value="Pediatrics">Pediatrics</option>
                        <option value="Women's Health">Women's Health</option>
                        <option value="Diagnostics">Diagnostics & Lab</option>
                        <option value="Preventive Care">Preventive Health Checkup</option>
                      </select>
                    </div>
                  </div>

                  <div className="modern-form-group">
                    <label htmlFor="cSubject">Subject *</label>
                    <input
                      type="text"
                      id="cSubject"
                      className="modern-input"
                      placeholder="Brief topic of your inquiry"
                      required
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    />
                  </div>

                  <div className="modern-form-group">
                    <label htmlFor="cMessage">Message Details *</label>
                    <textarea
                      id="cMessage"
                      rows={5}
                      className="modern-textarea"
                      placeholder="Please let us know how we can help you..."
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    />
                  </div>

                  <label className="modern-checkbox-label">
                    <input
                      type="checkbox"
                      required
                      checked={formData.consent}
                      onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
                    />
                    <span>
                      I acknowledge that Carewell Clinic protects patient privacy in accordance with healthcare privacy standards.
                    </span>
                  </label>

                  <button
                    type="submit"
                    className="form-submit-btn"
                    disabled={loading}
                  >
                    <FontAwesomeIcon icon={faPaperPlane} />
                    {loading ? 'Sending...' : 'Send Message'}
                  </button>
                </form>
              )}
            </Reveal>
          </div>
        </div>
      </section>

      {/* 5. Location & Directions Section */}
      <section className="location-section" id="location">
        <div className="container">
          <div className="section-head center">
            <div className="eyebrow" style={{ justifyContent: 'center' }}>CLINIC LOCATION</div>
            <h2 className="heading">Visit Our Modern Facility</h2>
            <p className="lede" style={{ margin: '14px auto 0' }}>
              Conveniently located in Metro City Medical Plaza with dedicated patient parking and transit access.
            </p>
          </div>

          <div className="location-grid">
            <Reveal className="map-container">
              <iframe
                title="Carewell Clinic Location Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509374!2d144.9537353153166!3d-37.81627977975171!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf577d206f477e68e!2sMedical%20Centre!5e0!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '420px', width: '100%' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </Reveal>

            <Reveal className="location-details-card" id="hours">
              <div className="loc-item">
                <FontAwesomeIcon icon={faLocationDot} />
                <div>
                  <h4>Address</h4>
                  <p>450 Health Avenue, Suite 300<br />Medical Plaza, Metro City</p>
                </div>
              </div>

              <div className="loc-item">
                <FontAwesomeIcon icon={faClock} />
                <div>
                  <h4>Clinical Operating Hours</h4>
                  <p>
                    <strong>Monday – Friday:</strong> 8:00 AM – 6:00 PM<br />
                    <strong>Wednesday:</strong> 8:00 AM – 7:00 PM (Late Clinic)<br />
                    <strong>Saturday:</strong> 9:00 AM – 2:00 PM<br />
                    <strong>Sunday:</strong> Closed (Emergency Triage On-Call)
                  </p>
                </div>
              </div>

              <div className="loc-item">
                <FontAwesomeIcon icon={faCar} />
                <div>
                  <h4>Parking & Transit</h4>
                  <p>Free underground parking with validation. Metro City Bus lines #14, #22 stop directly opposite.</p>
                </div>
              </div>

              <div className="loc-item">
                <FontAwesomeIcon icon={faWheelchair} />
                <div>
                  <h4>Accessibility</h4>
                  <p>Full ramp access, automatic sliding entrance doors, and wide elevator clearance.</p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
