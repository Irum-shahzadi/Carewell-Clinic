import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faUserDoctor,
  faHospital,
  faHandHoldingHeart,
  faAward,
  faUsers,
} from '@fortawesome/free-solid-svg-icons';

export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="container hero-grid">
        <div>
          <div className="hero-eyebrow">PERSONALIZED HEALTHCARE</div>
          <h1>Healthcare That Puts You First</h1>
          <p className="hero-desc">
            At Carewell Clinic, every visit begins with listening. Our care team
            combines clinical expertise with genuine attention to your story,
            building treatment plans around your life rather than the other way
            around.
          </p>
          <div className="hero-actions">
            <a href="#appointment" className="btn btn-primary">
              Book an Appointment
            </a>
            <a href="#services" className="btn btn-outline">
              Explore Services
            </a>
          </div>
          <div className="hero-trust">
            <div className="hero-trust-item">
              <FontAwesomeIcon icon={faUserDoctor} className="hero-trust-icon" aria-hidden="true" />
              Experienced Care Team
            </div>
            <div className="hero-trust-item">
              <FontAwesomeIcon icon={faHospital} className="hero-trust-icon" aria-hidden="true" />
              Modern Facilities
            </div>
            <div className="hero-trust-item">
              <FontAwesomeIcon icon={faHandHoldingHeart} className="hero-trust-icon" aria-hidden="true" />
              Patient-Centered Care
            </div>
          </div>
        </div>

        <div className="hero-visual">
          <div className="hero-visual-frame">
            <Image
              src="/hero_doctor_welcome.jpg"
              alt="Compassionate Carewell doctor warmly welcoming patient in modern clinic"
              width={900}
              height={1125}
              priority
              sizes="(max-width: 960px) 420px, 45vw"
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>
          <div className="floating-card fc-experience">
            <span className="fc-icon">
              <FontAwesomeIcon icon={faAward} aria-hidden="true" />
            </span>
            <span>
              <span className="fc-num">15+</span>
              <br />
              <span className="fc-label">Years Experience</span>
            </span>
          </div>
          <div className="floating-card fc-patients">
            <span className="fc-icon">
              <FontAwesomeIcon icon={faUsers} aria-hidden="true" />
            </span>
            <span>
              <span className="fc-num">10K+</span>
              <br />
              <span className="fc-label">Patients Served</span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
