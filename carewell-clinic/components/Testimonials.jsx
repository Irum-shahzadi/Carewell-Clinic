'use client';

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faQuoteLeft,
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons';
import { testimonials } from '@/data/clinicData';

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slidesPerView, setSlidesPerView] = useState(3);

  const updateSlidesPerView = useCallback(() => {
    if (window.innerWidth <= 640) setSlidesPerView(1);
    else if (window.innerWidth <= 960) setSlidesPerView(2);
    else setSlidesPerView(3);
  }, []);

  useEffect(() => {
    updateSlidesPerView();
    window.addEventListener('resize', updateSlidesPerView);
    return () => window.removeEventListener('resize', updateSlidesPerView);
  }, [updateSlidesPerView]);

  const maxIndex = Math.max(0, testimonials.length - slidesPerView);
  const safeIndex = Math.min(currentIndex, maxIndex);
  const dotCount = maxIndex + 1;
  const pct = (100 / slidesPerView) * safeIndex;

  const goTo = (index) => {
    setCurrentIndex(Math.max(0, Math.min(index, maxIndex)));
  };

  const handleKeyDown = (e) => {
    if (e.key === 'ArrowLeft') goTo(safeIndex - 1);
    if (e.key === 'ArrowRight') goTo(safeIndex + 1);
  };

  // Reset index when slidesPerView changes
  useEffect(() => {
    setCurrentIndex((prev) => Math.min(prev, maxIndex));
  }, [maxIndex]);

  return (
    <section className="section testimonials">
      <div className="container">
        <div className="section-head center">
          <div className="eyebrow" style={{ justifyContent: 'center' }}>
            PATIENT STORIES
          </div>
          <h2 className="heading">What Our Patients Say</h2>
        </div>
        <div
          className="carousel"
          role="region"
          aria-label="Patient testimonials"
          aria-roledescription="carousel"
        >
          <div className="carousel-track-wrap">
            <div
              className="carousel-track"
              style={{ transform: `translateX(-${pct}%)` }}
              tabIndex={0}
              onKeyDown={handleKeyDown}
            >
              {testimonials.map((t, i) => (
                <div className="t-slide" key={i}>
                  <div className="t-card">
                    <FontAwesomeIcon
                      icon={faQuoteLeft}
                      className="t-quote-icon"
                      aria-hidden="true"
                    />
                    <div className="t-stars" aria-hidden="true">
                      ★★★★★
                    </div>
                    <p className="t-text">{t.text}</p>
                    <div className="t-person">
                      <Image
                        src={t.image}
                        alt=""
                        width={46}
                        height={46}
                        style={{ borderRadius: '50%', objectFit: 'cover' }}
                      />
                      <div>
                        <div className="t-name">{t.name}</div>
                        <div className="t-context">{t.context}</div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="carousel-controls">
            <button
              className="carousel-arrow"
              onClick={() => goTo(safeIndex - 1)}
              aria-label="Previous testimonials"
            >
              <FontAwesomeIcon icon={faChevronLeft} aria-hidden="true" />
            </button>
            <div className="carousel-dots">
              {Array.from({ length: dotCount }, (_, i) => (
                <button
                  key={i}
                  className={i === safeIndex ? 'active' : ''}
                  onClick={() => goTo(i)}
                  aria-label={`Go to testimonial group ${i + 1}`}
                />
              ))}
            </div>
            <button
              className="carousel-arrow"
              onClick={() => goTo(safeIndex + 1)}
              aria-label="Next testimonials"
            >
              <FontAwesomeIcon icon={faChevronRight} aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
