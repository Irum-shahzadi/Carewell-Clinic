'use client';

import { useState, useEffect, useCallback } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faPhone } from '@fortawesome/free-solid-svg-icons';
import { navLinks } from '@/data/clinicData';

export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const closeMenu = useCallback(() => {
    setMenuOpen(false);
    document.body.style.overflow = '';
  }, []);

  const openMenu = useCallback(() => {
    setMenuOpen(true);
    document.body.style.overflow = 'hidden';
  }, []);

  const toggleMenu = useCallback(() => {
    if (menuOpen) closeMenu();
    else openMenu();
  }, [menuOpen, closeMenu, openMenu]);

  const isHashLink = (href) => href.startsWith('#');
  const isPageLink = (href) => href.startsWith('/');

  // Sticky header + active nav on scroll (only on home page)
  useEffect(() => {
    if (pathname !== '/') return;

    function onScroll() {
      setScrolled(window.scrollY > 12);

      const scrollPos = window.scrollY + 140;
      const hashLinks = navLinks.filter((l) => isHashLink(l.href));
      const sections = hashLinks
        .map((l) => document.getElementById(l.href.slice(1)))
        .filter(Boolean);

      let current = sections[0];
      sections.forEach((sec) => {
        if (sec.offsetTop <= scrollPos) current = sec;
      });

      if (current) setActiveSection(current.id);
    }

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, [pathname]);

  // On non-home pages, just track scroll for sticky header
  useEffect(() => {
    if (pathname === '/') return;

    function onScroll() {
      setScrolled(window.scrollY > 12);
    }

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, [pathname]);

  // Escape to close
  useEffect(() => {
    function onKeyDown(e) {
      if (e.key === 'Escape' && menuOpen) closeMenu();
    }
    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [menuOpen, closeMenu]);

  const handleHashClick = (e, href) => {
    closeMenu();
    if (href.length > 1) {
      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        const top = target.getBoundingClientRect().top + window.scrollY - 90;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    }
  };

  const isActive = (link) => {
    if (isPageLink(link.href)) {
      return pathname === link.href;
    }
    if (isHashLink(link.href) && pathname === '/') {
      return activeSection === link.href.slice(1);
    }
    return false;
  };

  return (
    <>
      <header className={`site-header${scrolled ? ' scrolled' : ''}`} id="siteHeader">
        <div className="container nav-inner">
          <Link href="/" className="logo" aria-label="Carewell Clinic home">
            <span className="logo-icon">
              <FontAwesomeIcon icon={faPlus} aria-hidden="true" />
            </span>
            <span className="logo-text">
              <span className="logo-name">Carewell</span>
              <span className="logo-sub">HEALTH CLINIC</span>
            </span>
          </Link>

          <nav
            className={`main-nav${menuOpen ? ' is-open' : ''}`}
            id="mainNav"
            aria-label="Primary"
          >
            {navLinks.map((link) =>
              isPageLink(link.href) ? (
                <Link
                  key={link.href}
                  href={link.href}
                  className={isActive(link) ? 'active' : ''}
                  onClick={closeMenu}
                >
                  {link.label}
                </Link>
              ) : (
                <a
                  key={link.href}
                  href={pathname === '/' ? link.href : `/${link.href}`}
                  className={isActive(link) ? 'active' : ''}
                  onClick={(e) => {
                    if (pathname === '/') {
                      handleHashClick(e, link.href);
                    } else {
                      closeMenu();
                    }
                  }}
                >
                  {link.label}
                </a>
              )
            )}
          </nav>

          <div className="nav-right">
            <a href="tel:+10001234567" className="nav-phone">
              <FontAwesomeIcon icon={faPhone} className="nav-phone-icon" aria-hidden="true" />
              (000) 123-4567
            </a>
            <Link
              href={pathname === '/' ? '#appointment' : '/#appointment'}
              className="btn btn-dark book-btn-header"
              onClick={(e) => {
                if (pathname === '/') {
                  handleHashClick(e, '#appointment');
                }
              }}
            >
              Book Appointment
            </Link>
            <button
              className="hamburger"
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={menuOpen}
              aria-controls="mainNav"
              onClick={toggleMenu}
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
      </header>
      <div
        className={`nav-overlay${menuOpen ? ' is-active' : ''}`}
        onClick={closeMenu}
      />
    </>
  );
}
