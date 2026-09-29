'use client';

import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeartPulse } from '@fortawesome/free-solid-svg-icons';
import { announcements } from '@/data/clinicData';

export default function AnnouncementBar() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [prevIndex, setPrevIndex] = useState(null);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (announcements.length <= 1 || prefersReducedMotion || isPaused) return;

    const interval = setInterval(() => {
      setActiveIndex((current) => {
        setPrevIndex(current);
        return (current + 1) % announcements.length;
      });
    }, 3800);

    return () => clearInterval(interval);
  }, [isPaused]);

  return (
    <div
      className="announcement"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="container">
        <FontAwesomeIcon icon={faHeartPulse} className="announcement-icon" aria-hidden="true" />
        <div className="announcement-text-wrap" aria-live="polite">
          {announcements.map((text, i) => {
            let statusClass = '';
            if (i === activeIndex) {
              statusClass = ' is-active';
            } else if (i === prevIndex) {
              statusClass = ' is-exiting';
            }
            return (
              <span
                key={i}
                className={`announcement-text${statusClass}`}
              >
                {text}
              </span>
            );
          })}
        </div>
        <a href="#appointment">Book Now</a>
      </div>
    </div>
  );
}
