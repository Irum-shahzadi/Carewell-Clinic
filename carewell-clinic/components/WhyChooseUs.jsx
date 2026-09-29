import Image from 'next/image';
import { whyReasons } from '@/data/clinicData';
import Reveal from './Reveal';

export default function WhyChooseUs() {
  return (
    <section className="section split-section">
      <div className="container split-grid reverse">
        <Reveal className="split-image">
          <Image
            src="https://images.unsplash.com/photo-1666887360742-974c8fce8e6b?auto=format&fit=crop&w=900&q=80"
            alt="Care team consulting together in a modern clinic hallway"
            width={900}
            height={675}
            sizes="(max-width: 900px) 100vw, 50vw"
            style={{ width: '100%', height: 'auto', borderRadius: 'var(--radius-lg)', aspectRatio: '4/3', objectFit: 'cover', boxShadow: 'var(--shadow-soft)' }}
          />
        </Reveal>
        <Reveal className="split-copy">
          <div className="eyebrow">WHY CAREWELL</div>
          <h2 className="heading">Care That Goes Beyond the Consultation</h2>
          <div className="why-list">
            {whyReasons.map((reason, i) => (
              <div className="why-item" key={i}>
                <span className="why-num">{reason.num}</span>
                <div>
                  <h4>{reason.title}</h4>
                  <p>{reason.description}</p>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
