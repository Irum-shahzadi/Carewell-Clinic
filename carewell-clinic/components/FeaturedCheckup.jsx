import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { checkupFeatures } from '@/data/clinicData';
import Reveal from './Reveal';

export default function FeaturedCheckup() {
  return (
    <section className="section split-section">
      <div className="container split-grid">
        <Reveal className="split-image">
          <Image
            src="https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&w=900&q=80"
            alt="Physician explaining checkup results to a patient using a tablet"
            width={900}
            height={675}
            sizes="(max-width: 900px) 100vw, 50vw"
            style={{ width: '100%', height: 'auto', borderRadius: 'var(--radius-lg)', aspectRatio: '4/3', objectFit: 'cover', boxShadow: 'var(--shadow-soft)' }}
          />
        </Reveal>
        <Reveal className="split-copy">
          <div className="eyebrow">PREVENTIVE CARE</div>
          <h2 className="heading">Make Your Health a Priority</h2>
          <p className="lede" style={{ marginTop: '16px' }}>
            Routine checkups catch small concerns before they become bigger
            ones. Our comprehensive health checkup reviews your vitals,
            bloodwork, and lifestyle factors in a single, unhurried visit.
          </p>
          <ul>
            {checkupFeatures.map((item, i) => (
              <li key={i}>
                <FontAwesomeIcon icon={faCheck} className="split-check-icon" aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>
          <a href="#appointment" className="btn btn-dark">
            Schedule a Checkup
          </a>
        </Reveal>
      </div>
    </section>
  );
}
