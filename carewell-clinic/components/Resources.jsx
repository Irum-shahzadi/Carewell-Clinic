import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFileLines,
  faBookMedical,
  faFileInvoiceDollar,
  faCircleQuestion,
  faArrowRight,
} from '@fortawesome/free-solid-svg-icons';
import { resources } from '@/data/clinicData';
import Reveal from './Reveal';

const iconMap = {
  faFileLines,
  faBookMedical,
  faFileInvoiceDollar,
  faCircleQuestion,
};

export default function Resources() {
  return (
    <section className="section" id="resources">
      <div className="container">
        <div className="section-head center">
          <div className="eyebrow" style={{ justifyContent: 'center' }}>
            PATIENT RESOURCES
          </div>
          <h2 className="heading">Resources to Help You Prepare</h2>
        </div>
        <div className="resources-grid">
          {resources.map((res, i) => (
            <Reveal key={i}>
              <div className="resource-card">
                <FontAwesomeIcon
                  icon={iconMap[res.icon]}
                  className="resource-icon"
                  aria-hidden="true"
                />
                <h4>{res.title}</h4>
                <p>{res.description}</p>
                <a href={res.href} className="service-link">
                  {res.linkText}{' '}
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
