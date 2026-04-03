'use client';

import React, { useState, useEffect } from 'react';

const ScrollController = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 300) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const scrollToBottom = () => {
        window.scrollTo({
            top: document.documentElement.scrollHeight,
            behavior: 'smooth',
        });
    };

    return (
        <div className="fixed bottom-8 right-8 z-[100]">
            {scrolled ? (
                // Show UP arrow when scrolled down
                <button
                    onClick={scrollToTop}
                    className="bg-[#FF0000] cursor-pointer text-white p-3.5 rounded-full  transition-all duration-300 hover:scale-110 active:scale-95 group focus:outline-none"
                    aria-label="Scroll to top"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2.5}
                        stroke="currentColor"
                        className="w-6 h-6"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
                    </svg>
                </button>
            ) : (
                // Show DOWN arrow when at top
                <button
                    onClick={scrollToBottom}
                    className="bg-[#FF0000] cursor-pointer text-white p-3.5 rounded-full shadow-[0_4px_15px_rgba(239,68,68,0.4)] transition-all duration-300 hover:scale-110 active:scale-95 group focus:outline-none"
                    aria-label="Scroll to bottom"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2.5}
                        stroke="currentColor"
                        className="w-6 h-6"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                    </svg>
                </button>
            )}
        </div>
    );
};

export default ScrollController;
