import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faStethoscope,
  faPeopleGroup,
  faChild,
  faVenus,
  faMicroscope,
  faShieldHeart,
  faArrowRight,
} from '@fortawesome/free-solid-svg-icons';
import { services } from '@/data/clinicData';
import Reveal from './Reveal';

const iconMap = {
  faStethoscope,
  faPeopleGroup,
  faChild,
  faVenus,
  faMicroscope,
  faShieldHeart,
};

export default function Services() {
  return (
    <section className="section" id="services">
      <div className="container">
        <div className="section-head center">
          <div className="eyebrow" style={{ justifyContent: 'center' }}>
            OUR SERVICES
          </div>
          <h2 className="heading">Healthcare Services Designed Around You</h2>
        </div>
        <div className="services-grid">
          {services.map((service, i) => (
            <Reveal key={i}>
              <div className="service-card">
                <div className="service-num">{service.num}</div>
                <div className="service-icon">
                  <FontAwesomeIcon
                    icon={iconMap[service.icon]}
                    aria-hidden="true"
                  />
                </div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <a href="#appointment" className="service-link">
                  Learn more{' '}
                  <FontAwesomeIcon
                    icon={faArrowRight}
                    className="service-link-icon"
                    aria-hidden="true"
                  />
                </a>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
