import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHandHoldingHeart,
  faListCheck,
  faUserDoctor,
  faHospital,
  faHeart,
} from '@fortawesome/free-solid-svg-icons';
import { aboutPoints } from '@/data/clinicData';
import Reveal from './Reveal';

const iconMap = {
  faListCheck,
  faUserDoctor,
  faHospital,
  faHeart,
};

export default function About() {
  return (
    <section className="section" id="about">
      <div className="container about-grid">
        <Reveal className="about-visual">
          <Image
            src="https://images.unsplash.com/photo-1550831107-1553da8c8464?auto=format&fit=crop&w=800&q=80"
            alt="Nurse and elderly patient sharing a warm conversation during a check-up"
            width={800}
            height={1000}
            sizes="(max-width: 900px) 100vw, 45vw"
            style={{ width: '100%', height: 'auto', borderRadius: 'var(--radius-lg)', aspectRatio: '4/5', objectFit: 'cover', boxShadow: 'var(--shadow-soft)' }}
          />
          <div className="about-badge">
            <FontAwesomeIcon icon={faHandHoldingHeart} className="about-badge-icon" aria-hidden="true" />
            <span>Care With Compassion</span>
          </div>
        </Reveal>
        <Reveal>
          <div className="eyebrow">ABOUT CAREWELL</div>
          <h2 className="heading">Healthcare Built Around People</h2>
          <p className="lede" style={{ marginTop: '18px' }}>
            Carewell Clinic was founded on a simple idea: healthcare works best
            when it starts with the person, not the paperwork. Our
            multidisciplinary team takes the time to understand your history,
            your goals, and your concerns before recommending a path forward.
          </p>
          <div className="about-points">
            {aboutPoints.map((point, i) => (
              <div className="about-point" key={i}>
                <FontAwesomeIcon
                  icon={iconMap[point.icon]}
                  className="about-point-icon"
                  aria-hidden="true"
                />
                <div>
                  <h4>{point.title}</h4>
                  <p>{point.description}</p>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
