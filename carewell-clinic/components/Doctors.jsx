import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { doctors } from '@/data/clinicData';
import Reveal from './Reveal';

export default function Doctors() {
  return (
    <section className="section" id="doctors">
      <div className="container">
        <div className="section-head center">
          <div className="eyebrow" style={{ justifyContent: 'center' }}>
            OUR TEAM
          </div>
          <h2 className="heading">Meet Our Healthcare Professionals</h2>
        </div>
        <div className="doctors-grid">
          {doctors.map((doc, i) => (
            <Reveal key={i}>
              <div className="doctor-card">
                <div className="doctor-photo">
                  <Image
                    src={doc.image}
                    alt={doc.alt}
                    width={500}
                    height={667}
                    sizes="(max-width: 560px) 100vw, (max-width: 1100px) 50vw, 25vw"
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                </div>
                <div className="doctor-info">
                  <h3>{doc.name}</h3>
                  <div className="doctor-specialty">{doc.specialty}</div>
                  <div className="doctor-meta">{doc.meta}</div>
                  <div className="doctor-footer">
                    <div className="doctor-social">
                      <a href={doc.linkedin} aria-label={`${doc.name} on LinkedIn`}>
                        <FontAwesomeIcon icon={faLinkedinIn} aria-hidden="true" />
                      </a>
                      <a href={doc.email} aria-label={`Email ${doc.name}`}>
                        <FontAwesomeIcon icon={faEnvelope} aria-hidden="true" />
                      </a>
                    </div>
                    <a href={doc.profile} className="view-profile">
                      Profile{' '}
                      <FontAwesomeIcon icon={faArrowRight} aria-hidden="true" />
                    </a>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
