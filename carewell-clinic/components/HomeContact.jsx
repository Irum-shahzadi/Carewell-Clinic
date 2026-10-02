'use client';

import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faLocationDot,
  faPhone,
  faEnvelope,
  faClock,
  faMapLocationDot,
  faUser,
  faCircleCheck,
  faTriangleExclamation,
} from '@fortawesome/free-solid-svg-icons';
import Reveal from './Reveal';

export default function HomeContact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [hasError, setHasError] = useState(false);

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) {
      newErrors.name = 'Please enter your name.';
    }
    if (!formData.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address.';
    }
    if (!formData.message.trim()) {
      newErrors.message = 'Please enter a message.';
    }
    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setHasError(true);
      setSubmitted(false);
    } else {
      setErrors({});
      setHasError(false);
      setSubmitted(true);
      setFormData({ name: '', email: '', phone: '', message: '' });
      setTimeout(() => {
        setSubmitted(false);
      }, 5000);
    }
  };

  return (
    <section className="section" id="contact">
      <div className="container contact-grid">
        <Reveal>
          <div className="eyebrow">GET IN TOUCH</div>
          <h2 className="heading">Let&apos;s Stay Connected</h2>
          <p className="lede" style={{ marginTop: '14px' }}>
            Reach out with any question, big or small — our patient care team responds during business hours.
          </p>
          <div className="contact-info-list">
            <div className="contact-info-item">
              <FontAwesomeIcon icon={faLocationDot} aria-hidden="true" />
              <div>
                <h4>Address</h4>
                <p>450 Health Avenue, Suite 300, Medical Plaza, Metro City</p>
              </div>
            </div>
            <div className="contact-info-item">
              <FontAwesomeIcon icon={faPhone} aria-hidden="true" />
              <div>
                <h4>Phone</h4>
                <p>
                  <a href="tel:+10001234567">(000) 123-4567</a>
                </p>
              </div>
            </div>
            <div className="contact-info-item">
              <FontAwesomeIcon icon={faEnvelope} aria-hidden="true" />
              <div>
                <h4>Email</h4>
                <p>
                  <a href="mailto:hello@carewellclinic.example">hello@carewellclinic.example</a>
                </p>
              </div>
            </div>
            <div className="contact-info-item">
              <FontAwesomeIcon icon={faClock} aria-hidden="true" />
              <div>
                <h4>Opening Hours</h4>
                <p>
                  Mon–Fri: 8:00 AM – 6:00 PM
                  <br />
                  Sat: 9:00 AM – 2:00 PM
                </p>
              </div>
            </div>
          </div>
          <div className="map-placeholder">
            <FontAwesomeIcon icon={faMapLocationDot} aria-hidden="true" />
            <span>Carewell Health Clinic · 450 Health Avenue, Suite 300</span>
          </div>
        </Reveal>

        <Reveal>
          <form className="contact-form-card" onSubmit={handleSubmit} noValidate>
            <div className="form-row">
              <div className={`form-group ${errors.name ? 'has-error' : ''}`}>
                <label htmlFor="homeContactName">Name</label>
                <div className="input-wrap">
                  <FontAwesomeIcon icon={faUser} aria-hidden="true" />
                  <input
                    type="text"
                    id="homeContactName"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                {errors.name && <div className="field-error">{errors.name}</div>}
              </div>

              <div className={`form-group ${errors.email ? 'has-error' : ''}`}>
                <label htmlFor="homeContactEmail">Email</label>
                <div className="input-wrap">
                  <FontAwesomeIcon icon={faEnvelope} aria-hidden="true" />
                  <input
                    type="email"
                    id="homeContactEmail"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                {errors.email && <div className="field-error">{errors.email}</div>}
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="homeContactPhone">Phone</label>
              <div className="input-wrap">
                <FontAwesomeIcon icon={faPhone} aria-hidden="true" />
                <input
                  type="tel"
                  id="homeContactPhone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className={`form-group full ${errors.message ? 'has-error' : ''}`}>
              <label htmlFor="homeContactMessage">Message</label>
              <textarea
                id="homeContactMessage"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="How can our care team help you today?"
                required
              />
              {errors.message && <div className="field-error">{errors.message}</div>}
            </div>

            <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>
              Send Message
            </button>

            {submitted && (
              <div className="form-msg success" role="status">
                <FontAwesomeIcon icon={faCircleCheck} aria-hidden="true" />
                <span>Thanks for reaching out — our team will get back to you shortly.</span>
              </div>
            )}

            {hasError && (
              <div className="form-msg error" role="alert">
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
