'use client';

import { useState } from 'react';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCheck,
  faUser,
  faEnvelope,
  faPhone,
  faCalendar,
  faClock,
  faNotesMedical,
  faUserDoctor,
  faCircleCheck,
  faTriangleExclamation,
} from '@fortawesome/free-solid-svg-icons';
import {
  appointmentBenefits,
  serviceOptions,
  doctorOptions,
} from '@/data/clinicData';
import Reveal from './Reveal';

function validateEmail(v) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
}

function validatePhone(v) {
  return /^[0-9+()\-\s]{7,}$/.test(v);
}

export default function AppointmentForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    service: '',
    doctor: '',
    message: '',
  });
  const [errors, setErrors] = useState({});
  const [formStatus, setFormStatus] = useState(null); // 'success' | 'error' | null

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error on change
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: false }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStatus(null);

    const newErrors = {};
    let valid = true;

    // Name
    if (!formData.name.trim()) {
      newErrors.name = true;
      valid = false;
    }
    // Email
    if (!formData.email.trim() || !validateEmail(formData.email.trim())) {
      newErrors.email = true;
      valid = false;
    }
    // Phone
    if (!formData.phone.trim() || !validatePhone(formData.phone.trim())) {
      newErrors.phone = true;
      valid = false;
    }
    // Date
    if (!formData.date) {
      newErrors.date = true;
      valid = false;
    } else {
      const chosen = new Date(formData.date + 'T00:00:00');
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      if (chosen < today) {
        newErrors.date = true;
        valid = false;
      }
    }
    // Time
    if (!formData.time) {
      newErrors.time = true;
      valid = false;
    }
    // Service
    if (!formData.service) {
      newErrors.service = true;
      valid = false;
    }

    setErrors(newErrors);

    if (valid) {
      setFormStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        date: '',
        time: '',
        service: '',
        doctor: '',
        message: '',
      });
    } else {
      setFormStatus('error');
    }
  };

  return (
    <section className="section split-section" id="appointment">
      <div className="container appointment-grid">
        <Reveal className="appointment-copy">
          <div className="eyebrow">BOOK A VISIT</div>
          <h2 className="heading">Request Your Appointment</h2>
          <p className="lede" style={{ marginTop: '16px' }}>
            Tell us a little about what you need, and our team will reach out to
            confirm the best available time.
          </p>
          <ul className="appointment-benefits">
            {appointmentBenefits.map((item, i) => (
              <li key={i}>
                <FontAwesomeIcon icon={faCheck} className="benefit-icon" aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>
          <Image
            src="https://images.unsplash.com/photo-1666214280391-8ff5bd3c0bd0?auto=format&fit=crop&w=800&q=80"
            alt="Receptionist helping a patient schedule an appointment at the front desk"
            width={800}
            height={600}
            sizes="(max-width: 900px) 100vw, 45vw"
            style={{ width: '100%', height: 'auto', borderRadius: 'var(--radius-lg)', marginTop: '26px', aspectRatio: '4/3', objectFit: 'cover' }}
          />
        </Reveal>

        <Reveal>
          <form className="appointment-form" noValidate onSubmit={handleSubmit}>
            <div className="form-row">
              <div className={`form-group${errors.name ? ' has-error' : ''}`}>
                <label htmlFor="apptName">Full Name</label>
                <div className="input-wrap">
                  <FontAwesomeIcon icon={faUser} className="input-icon" aria-hidden="true" />
                  <input
                    type="text"
                    id="apptName"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="field-error">Please enter your full name.</div>
              </div>
              <div className={`form-group${errors.email ? ' has-error' : ''}`}>
                <label htmlFor="apptEmail">Email</label>
                <div className="input-wrap">
                  <FontAwesomeIcon icon={faEnvelope} className="input-icon" aria-hidden="true" />
                  <input
                    type="email"
                    id="apptEmail"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="field-error">Please enter a valid email address.</div>
              </div>
            </div>
            <div className="form-row">
              <div className={`form-group${errors.phone ? ' has-error' : ''}`}>
                <label htmlFor="apptPhone">Phone</label>
                <div className="input-wrap">
                  <FontAwesomeIcon icon={faPhone} className="input-icon" aria-hidden="true" />
                  <input
                    type="tel"
                    id="apptPhone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="field-error">Please enter a valid phone number.</div>
              </div>
              <div className={`form-group${errors.date ? ' has-error' : ''}`}>
                <label htmlFor="apptDate">Preferred Date</label>
                <div className="input-wrap">
                  <FontAwesomeIcon icon={faCalendar} className="input-icon" aria-hidden="true" />
                  <input
                    type="date"
                    id="apptDate"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="field-error">Please choose a future date.</div>
              </div>
            </div>
            <div className="form-row">
              <div className={`form-group${errors.time ? ' has-error' : ''}`}>
                <label htmlFor="apptTime">Preferred Time</label>
                <div className="input-wrap">
                  <FontAwesomeIcon icon={faClock} className="input-icon" aria-hidden="true" />
                  <input
                    type="time"
                    id="apptTime"
                    name="time"
                    value={formData.time}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="field-error">Please choose a preferred time.</div>
              </div>
              <div className={`form-group${errors.service ? ' has-error' : ''}`}>
                <label htmlFor="apptService">Service</label>
                <div className="input-wrap">
                  <FontAwesomeIcon icon={faNotesMedical} className="input-icon" aria-hidden="true" />
                  <select
                    id="apptService"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select a service</option>
                    {serviceOptions.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="field-error">Please select a service.</div>
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="apptDoctor">Preferred Doctor (optional)</label>
              <div className="input-wrap">
                <FontAwesomeIcon icon={faUserDoctor} className="input-icon" aria-hidden="true" />
                <select
                  id="apptDoctor"
                  name="doctor"
                  value={formData.doctor}
                  onChange={handleChange}
                >
                  <option value="">No preference</option>
                  {doctorOptions.map((opt) => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className="form-group full">
              <label htmlFor="apptMessage">Message (optional)</label>
              <textarea
                id="apptMessage"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell us anything that will help us prepare for your visit"
              />
            </div>
            <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>
              Request Appointment
            </button>
            {formStatus === 'success' && (
              <div className="form-msg success is-visible" role="status">
                <FontAwesomeIcon icon={faCircleCheck} aria-hidden="true" />
                <span>
                  Your appointment request has been received. Our team will
                  contact you to confirm availability.
                </span>
              </div>
            )}
            {formStatus === 'error' && (
              <div className="form-msg error is-visible" role="alert">
                <FontAwesomeIcon icon={faTriangleExclamation} aria-hidden="true" />
                <span>Please correct the highlighted fields and try again.</span>
              </div>
            )}
          </form>
        </Reveal>
      </div>
    </section>
  );
}
