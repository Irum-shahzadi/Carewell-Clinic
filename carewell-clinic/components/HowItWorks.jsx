import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCalendarCheck,
  faUserDoctor,
  faComments,
  faHeartPulse,
} from '@fortawesome/free-solid-svg-icons';
import { steps } from '@/data/clinicData';
import Reveal from './Reveal';

const iconMap = {
  faCalendarCheck,
  faUserDoctor,
  faComments,
  faHeartPulse,
};

export default function HowItWorks() {
  return (
    <section className="section">
      <div className="container">
        <div className="section-head center">
          <div className="eyebrow" style={{ justifyContent: 'center' }}>
            GETTING STARTED
          </div>
          <h2 className="heading">How It Works</h2>
        </div>
        <div className="steps-wrap">
          <div className="steps-grid">
            {steps.map((step, i) => (
              <Reveal key={i}>
                <div className="step-card">
                  <div className="step-icon">
                    <FontAwesomeIcon
                      icon={iconMap[step.icon]}
                      aria-hidden="true"
                    />
                  </div>
                  <div className="step-tag">{step.tag}</div>
                  <h4>{step.title}</h4>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
