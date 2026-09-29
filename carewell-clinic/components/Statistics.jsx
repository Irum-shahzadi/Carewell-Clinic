'use client';

import { useEffect, useRef, useState, useCallback } from 'react';
import { statistics } from '@/data/clinicData';

export default function Statistics() {
  const sectionRef = useRef(null);
  const [hasAnimated, setHasAnimated] = useState(false);
  const [values, setValues] = useState(statistics.map(() => 0));

  const animateCounters = useCallback(() => {
    if (hasAnimated) return;
    setHasAnimated(true);

    const duration = 1400;
    const start = performance.now();

    function step(timestamp) {
      const progress = Math.min((timestamp - start) / duration, 1);
      setValues(statistics.map((stat) => Math.floor(progress * stat.target)));
      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        setValues(statistics.map((stat) => stat.target));
      }
    }

    requestAnimationFrame(step);
  }, [hasAnimated]);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el || !('IntersectionObserver' in window)) {
      setValues(statistics.map((stat) => stat.target));
      setHasAnimated(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animateCounters();
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.4 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [animateCounters]);

  return (
    <section className="section stats" id="statsSection" ref={sectionRef}>
      <div className="container">
        <div className="stats-grid">
          {statistics.map((stat, i) => (
            <div key={i}>
              <div className="stat-num">
                {values[i]}
                {stat.suffix}
              </div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
