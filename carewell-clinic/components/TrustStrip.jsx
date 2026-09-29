import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faUserDoctor,
  faBuildingCircleCheck,
  faHeartCircleCheck,
  faLock,
} from '@fortawesome/free-solid-svg-icons';
import { trustItems } from '@/data/clinicData';

const iconMap = {
  faUserDoctor,
  faBuildingCircleCheck,
  faHeartCircleCheck,
  faLock,
};

export default function TrustStrip() {
  return (
    <section className="trust-strip">
      <div className="container trust-grid">
        {trustItems.map((item, i) => (
          <div className="trust-item" key={i}>
            <FontAwesomeIcon
              icon={iconMap[item.icon]}
              className="trust-icon"
              aria-hidden="true"
            />
            <span>{item.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
