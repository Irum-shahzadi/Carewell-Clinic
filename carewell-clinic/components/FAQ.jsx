'use client';

import { useState } from 'react';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCircleCheck,
  faPhone,
  faEnvelope,
  faPlus,
} from '@fortawesome/free-solid-svg-icons';
import Reveal from './Reveal';

const faqData = [
  {
    id: 1,
    category: 'appointments',
    tag: 'Appointments',
    question: 'What should I bring to my first appointment?',
    answer:
      'Please bring a government-issued photo ID, your insurance card, and an updated list of any current medications, supplements, or past relevant surgical records. Arriving 10 minutes early allows our reception team to complete your digital check-in smoothly.',
  },
  {
    id: 2,
    category: 'appointments',
    tag: 'Appointments',
    question: 'Do you accept same-day or walk-in patients?',
    answer:
      'Yes! We reserve designated urgent and same-day consultation slots every morning and afternoon. We recommend calling ahead at (000) 123-4567 or submitting an appointment request online so our triage desk can immediately match you with an available physician.',
  },
  {
    id: 3,
    category: 'billing',
    tag: 'Billing',
    question: 'What insurance plans and payment methods do you accept?',
    answer:
      'Carewell Clinic is in-network with most major private insurers, Medicare, and regional provider networks. We also provide clear, upfront self-pay pricing schedules with HSA/FSA card acceptance for patients without insurance.',
  },
  {
    id: 4,
    category: 'appointments',
    tag: 'Appointments',
    question: 'How can I reschedule or cancel my appointment?',
    answer:
      "You can easily reschedule through your booking confirmation link or by calling our desk. We kindly request at least 24 hours' advance notice so that another patient in need may utilize the consultation slot.",
  },
  {
    id: 5,
    category: 'billing',
    tag: 'Billing',
    question: 'How do prescription refills work?',
    answer:
      'Refill requests can be sent directly by your preferred pharmacy via electronic health record (EHR) transmission or by calling our office. Please allow 24–48 business hours for routine non-urgent prescription authorizations.',
  },
  {
    id: 6,
    category: 'records',
    tag: 'Records',
    question: 'How are my medical records protected and transferred?',
    answer:
      'All patient health records are encrypted in strict compliance with HIPAA and healthcare privacy regulations. Records are released or shared with outside specialists only with your explicit signed authorization.',
  },
];

const categories = [
  { key: 'all', label: 'All Questions' },
  { key: 'appointments', label: 'Appointments' },
  { key: 'billing', label: 'Insurance & Billing' },
  { key: 'records', label: 'Medical Records' },
];

export default function FAQ() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [openId, setOpenId] = useState(null);

  const filteredFaqs =
    activeCategory === 'all'
      ? faqData
      : faqData.filter((item) => item.category === activeCategory);

  const toggleItem = (id) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section className="section faq-section" id="faq">
      <div className="container">
        <div className="section-head center">
          <div className="eyebrow" style={{ justifyContent: 'center' }}>
            COMMON INQUIRIES
          </div>
          <h2 className="heading">Frequently Asked Questions</h2>
          <p className="lede" style={{ margin: '16px auto 0' }}>
            Have a question about your visit, insurance coverage, or medical records? Find answers below or speak directly with our team.
          </p>
        </div>

        <div className="faq-grid">
          {/* Left: Interactive Showcase Card */}
          <Reveal className="faq-showcase">
            <div className="faq-showcase-img">
              <Image
                src="/faq_patient_support.jpg"
                alt="Carewell patient coordinator assisting visitor at reception desk"
                width={700}
                height={480}
                sizes="(max-width: 960px) 100vw, 40vw"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
              <div className="faq-showcase-badge">
                <FontAwesomeIcon icon={faCircleCheck} aria-hidden="true" />
                <span>Patient Support · Helpful &amp; Friendly</span>
              </div>
            </div>
            <div className="faq-showcase-body">
              <h3>Still Have Questions?</h3>
              <p>
                Our patient care coordination desk is here to guide you with any questions before, during, or after your visit.
              </p>
              <div className="faq-contact-pills">
                <div className="faq-contact-pill">
                  <FontAwesomeIcon icon={faPhone} aria-hidden="true" />
                  <span>Call Us: (000) 123-4567</span>
                </div>
                <div className="faq-contact-pill">
                  <FontAwesomeIcon icon={faEnvelope} aria-hidden="true" />
                  <span>Email: hello@carewellclinic.example</span>
                </div>
              </div>
              <a href="#contact" className="btn btn-primary" style={{ width: '100%' }}>
                Message Support Team
              </a>
            </div>
          </Reveal>

          {/* Right: Category Filters & Modern Accordion */}
          <Reveal className="faq-content-col">
            <div className="faq-filter-bar" role="tablist" aria-label="FAQ Categories">
              {categories.map((cat) => (
                <button
                  key={cat.key}
                  className={`faq-filter-btn ${activeCategory === cat.key ? 'active' : ''}`}
                  onClick={() => {
                    setActiveCategory(cat.key);
                    setOpenId(null);
                  }}
                  role="tab"
                  aria-selected={activeCategory === cat.key}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            <div className="faq-list">
              {filteredFaqs.map((item) => {
                const isOpen = openId === item.id;
                return (
                  <div className={`faq-item ${isOpen ? 'open' : ''}`} key={item.id}>
                    <button
                      className="faq-question"
                      onClick={() => toggleItem(item.id)}
                      aria-expanded={isOpen}
                    >
                      <span className="faq-question-title">
                        <span className="faq-tag">{item.tag}</span>
                        <span>{item.question}</span>
                      </span>
                      <span className="faq-toggle-icon">
                        <FontAwesomeIcon icon={faPlus} aria-hidden="true" />
                      </span>
                    </button>
                    <div className="faq-answer">
                      <div className="faq-answer-inner">{item.answer}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
