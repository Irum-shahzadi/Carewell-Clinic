import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarCheck, faPhone } from '@fortawesome/free-solid-svg-icons';
import Reveal from './Reveal';

export default function FinalCTA() {
  return (
    <section className="cta-panel-wrap">
      <div className="container">
        <Reveal className="cta-panel">
          <h2>Ready to Prioritize Your Health and Wellbeing?</h2>
          <p>
            Schedule your personalized clinical consultation today or speak with our care coordination team to explore the right healthcare program for you and your family.
          </p>
          <div className="cta-actions">
            <a href="#appointment" className="btn btn-primary">
              <FontAwesomeIcon icon={faCalendarCheck} aria-hidden="true" /> Book an Appointment
            </a>
            <a href="tel:+10001234567" className="btn btn-outline">
              <FontAwesomeIcon icon={faPhone} aria-hidden="true" /> Call (000) 123-4567
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
