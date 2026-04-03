'use client';

import React, { useState, useEffect } from 'react';

const ScrollToBottom = () => {
  const [isVisible, setIsVisible] = useState(true);

  const toggleVisibility = () => {
    // Hide when getting close to bottom
    const scrolled = window.innerHeight + window.pageYOffset;
    const totalHeight = document.documentElement.scrollHeight;
    
    if (scrolled >= totalHeight - 300) {
      setIsVisible(false);
    } else {
      setIsVisible(true);
    }
  };

  const scrollToBottom = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <div className={`fixed bottom-24 right-8 z-[100] transition-all duration-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'}`}>
      <button
        onClick={scrollToBottom}
        className="bg-white/90 backdrop-blur-sm border border-zinc-200 text-[#FF0000] p-3.5 rounded-full  transition-all duration-300 hover:scale-110 active:scale-95 group focus:outline-none"
        aria-label="Scroll to bottom"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2.5}
          stroke="currentColor"
          className="w-5 h-5 rotate-180"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
        </svg>
      </button>
    </div>
  );
};

export default ScrollToBottom;
