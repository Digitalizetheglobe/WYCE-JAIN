'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const [activeSection, setActiveSection] = useState('Home');

  useEffect(() => {
    if (pathname !== '/') return;

    const observerOptions = {
      root: null,
      rootMargin: '-15% 0px -80% 0px',
      threshold: 0,
    };

    const handleIntersect = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);

    // Ordered specifically to match the layout in page.tsx
    const sectionIds = ['Home', 'About', 'Ourguruji', 'Events', 'Wanitrust', 'Ourstory', 'Media'];
    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [pathname]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  };
  // const toggleMenu = () => {
  //   console.log("clicked"); // 👈 check in console
  //   setIsOpen(!isOpen);
  // };
  const closeMenu = () => {
    setIsOpen(false);
    document.body.style.overflow = 'unset';
  };


  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Jain Dharma', href: '/#About' },
    { name: 'Our Guruji', href: '/#Ourguruji' },
    { name: 'Events', href: '/#Events' },
    { name: 'Wani Trust', href: '/#Wanitrust' },
    { name: 'Our Story', href: '/#Ourstory' },
    { name: 'Media', href: '/#Media' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    const targetId = href.split('#')[1];
    if (targetId) {
      setActiveSection(targetId);
    }

    if (href.startsWith('/#') && pathname === '/') {
      e.preventDefault();
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        // Update URL without multiple hashes
        window.history.pushState(null, '', `/#${targetId}`);
        closeMenu();
      }
    } else {
      closeMenu();
    }
  };

  return (

    <header className="fixed top-0 z-[10000] w-full pointer-events-none font-raleway">
      <div className="absolute inset-0 bg-[#FFEDDF] shadow-[0_4px_20px_-5px_rgba(239,68,68,0.1)] backdrop-blur-md pointer-events-none" />
      {/* Lotus Watermark Background - Container with overflow hidden */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 flex items-center justify-center opacity-[0.08]">
          <Image
            src="/header/header_back.png"
            alt="watermark"
            width={600}
            height={300}
            className="object-contain scale-150"
          />
        </div>
      </div>

      <div className="mx-auto flex max-w-[1400px] items-center justify-between px-6 py-3 lg:px-8 relative z-10 pointer-events-auto">
        <div className="flex items-center transition-transform duration-300 hover:scale-[1.02] ease-[cubic-bezier(0.34,1.56,0.64,1)]">
          <Link href="/">
            <Image
              src="/header/jain_logo.png"
              alt="JAIN MANDIR logo"
              width={180}
              height={70}
              className="max-h-[70px] w-auto object-contain"
              priority
            />
          </Link>
        </div>

        {/* Backdrop overlay */}
        {isOpen && (
          <div
            className="fixed inset-0 bg-black/20 backdrop-blur-sm z-[90] lg:hidden transition-opacity duration-300"
            onClick={closeMenu}
          />
        )}

        {/* Desktop and Mobile Navigation */}
        <nav
          className={`
    fixed top-0 right-0 h-screen w-[280px] sm:w-[320px] 
    bg-[#fdf5ef] flex flex-col items-center justify-start 
    pt-32 gap-8 
    transition-all duration-500 ease-[cubic-bezier(0.77,0,0.175,1)] 
    touch-pan-y
    z-[100]

    lg:static lg:h-auto lg:w-auto lg:bg-transparent 
    lg:flex-row lg:pt-0 lg:gap-10 lg:shadow-none lg:z-auto

  ${isOpen
              ? 'translate-x-0 opacity-100 pointer-events-auto'
              : 'max-lg:translate-x-full max-lg:opacity-0 max-lg:pointer-events-none'
            }
  `}
        >
          {navLinks.map((link) => {
            const hrefId = link.href.split('#')[1];
            const isActive = (pathname === '/' && activeSection === hrefId) ||
              (pathname !== '/' && pathname === link.href);

            return (
              <Link
                key={link.name}
                href={link.href}
                className={`
                  text-[0.95rem] font-bold transition-colors duration-200 relative tracking-tight outline-none
                  ${isActive
                    ? 'text-accent-red'
                    : 'text-zinc-600 hover:text-[#FF0000]'}
                  ${isOpen ? 'text-xl' : ''}
                `}
                onClick={(e) => handleNavClick(e, link.href)}
              >
                {link.name}
                {/* Fixed dot indicator to prevent shifts */}
                {isActive && (
                  <span className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-accent-red rounded-full" />
                )}
              </Link>
            );
          })}

          {/* Mobile version of the button inside the side menu */}
          <div className="lg:hidden mt-4">
            <Link
              href="/donate"
              className="bg-accent-red text-white inline-block px-8 py-3.5 rounded-full font-bold text-base transition-transform active:scale-95]"
              onClick={closeMenu}
            >
              Donate Now
            </Link>
          </div>
        </nav>

        {/* Desktop version of the button outside the side menu */}
        <div className="hidden lg:flex items-center">
          <Link
            href="/donate"
            className="bg-[#FF0000] text-white px-7 py-3 rounded-full font-bold text-[1rem] transition-all duration-300 hover:bg-[#D40000] hover:scale-105 active:scale-100 whitespace-nowrap"
          >
            Donate Now
          </Link>
        </div>

        <button
          className="lg:hidden relative z-[110] text-zinc-900 focus:outline-none p-2"
          onClick={toggleMenu}
          aria-label="Toggle navigation menu"
        >
          {isOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-8 h-8">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-8 h-8">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          )}
        </button>
      </div>

    </header>
  );
};

export default Header;
