'use client';

import React, { useState } from 'react';
import Image from 'next/image';

const Ourguruji: React.FC = () => {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <section id="Ourguruji" className="relative w-full py-24 px-6 lg:px-12 bg-white overflow-hidden bg-gradient-to-b from-[#FFECDC] via-[#FFFFFF] to-[#FFECDC] scroll-mt-24">
            <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

                {/* Left Side: Guruji Image with Watermark - Now Second on Mobile */}
                <div className="order-2 lg:order-1 relative flex justify-center items-center">
                    {/* Mandala Watermark Background - Centered as an Aura behind the head */}
                    <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none scale-[1.4] lg:scale-[1.8] opacity-30 -translate-y-6 lg:-translate-y-12 transition-all duration-1000">
                        <Image
                            src="/ourguruji/flower_back.gif"
                            alt="watermark"
                            width={400}
                            height={500}
                            className="object-contain"
                        />
                    </div>

                    {/* Guruji Image Container */}
                    <div className="relative z-10 flex flex-col items-center animate-scaleIn">
                        {/* SET GURUJI IMAGE PATH HERE */}
                        <div className="relative group mb-4">
                            <Image
                                src="/ourguruji/guru_2.png"
                                alt="Punyapal Surishwarji Maharaj"
                                width={500}
                                height={500}
                                className="object-contain transition-transform duration-700 group-hover:scale-[1.03]"
                                priority
                            />
                        </div>

                        {/* Name Label with soft background - Refined for both views */}
                        <div className="cursor-pointer bg-[#FFECDC]/90 absolute bottom-6 lg:bottom-12 inline-flex items-center justify-center px-6 lg:px-12 py-3 lg:py-4 backdrop-blur-sm rounded-xl lg:rounded-2xl animate-fadeIn shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-white/40 w-[85%] lg:w-auto" style={{ animationDelay: '600ms' }}>
                            <span className="text-[#FF0000] font-bold text-sm lg:text-lg text-center leading-tight">
                                Pujya Acharya Dev Shrimad Vijay Bhuvanbhushan
                                Surishvarji's Maharaj Saheb
                            </span>
                        </div>
                    </div>

                </div>

                {/* Right Side: Text Content - Now First on Mobile */}
                <div className="order-1 lg:order-2 space-y-6 lg:space-y-10 text-center lg:text-left flex flex-col items-center lg:items-start px-2 lg:px-0">
                    <div className="space-y-4">
                        <span className="text-[#FF0000] font-bold tracking-[4px] lg:tracking-[6px] text-base lg:text-lg uppercase block animate-textReveal" style={{ animationDelay: '200ms' }}>
                            G U R U G I
                        </span>

                        <h2 className="text-3xl lg:text-4xl font-extrabold tracking-[0.1rem] lg:tracking-[0.3rem] text-gray-900 leading-tight animate-fadeIn" style={{ animationDelay: '400ms' }}>
                            Guidance from Our Guruji
                        </h2>
                    </div>

                    <div className="space-y-4 w-full flex flex-col items-center lg:items-start">
                        <p
                            className="text-black text-sm lg:text-base leading-relaxed max-w-xl font-light animate-fadeIn"
                            style={{ animationDelay: '800ms' }}
                        >
                            <span className="font-semibold text-gray-900 lg:border-l-2 lg:border-[#FF0000] lg:pl-3 lg:ml-[-12px] block lg:inline mb-1 lg:mb-0">
                                Life of Renunciation:
                            </span>{' '}
                            The Journey of Pujya Acharya Bhagwant Bhuvanbhushan Surishvarji Maharaj Saheb.
                            Guruji's path to spiritual leadership began with a simple, pious childhood and evolved into a lifetime of profound dedication to the Jain Shasan.
                        </p>

                        <div
                            className={`overflow-hidden transition-all duration-700 ease-in-out ${isExpanded ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'
                                }`}
                        >
                            <div className="space-y-4 pt-2 text-black text-sm lg:text-base leading-relaxed max-w-xl font-light">
                                <p>
                                    <span className="font-semibold text-gray-900">Early Life & Discipline:</span>{' '}
                                    Known in his childhood as Shreyans, he was a soft-spoken boy with a passion for cricket and a brilliant academic record, consistently ranking first or second in his class.
                                </p>

                                <p>
                                    <span className="font-semibold text-gray-900">Turning Point:</span>{' '}
                                    His spiritual journey was ignited at a young age when he started staying in companionship of then Muni, Pujya Muniraj Mahabal Vijayji Maharaj (later Aacharya) and Pujya Muniraj Punyapal Vijayji Maharaj (later Aacharya). He became the first disciple of Pujya Muniraj Punyapal Vijayji Maharaj Saheb.
                                </p>

                                <p>
                                    <span className="font-semibold text-gray-900">Path of Monkhood:</span>{' '}
                                    Guruji has now entered his golden 50th year of renunciation. Over these five decades, he has maintained unwavering discipline in his study, service, and monastic duties.
                                </p>
                            </div>
                        </div>

                        <button
                            onClick={() => setIsExpanded(!isExpanded)}
                            className="relative z-10 group flex items-center gap-2 text-[#FF0000] font-bold text-sm uppercase tracking-widest hover:gap-4 transition-all duration-300 animate-fadeIn mt-2 cursor-pointer touch-manipulation active:scale-95"
                            style={{ animationDelay: '1000ms' }}
                        >
                            <span>{isExpanded ? 'Read Less' : 'Read More'}</span>
                            <div className="w-8 h-[1px] bg-[#FF0000] group-hover:w-12 transition-all duration-300"></div>
                            <svg
                                className={`w-4 h-4 transition-transform duration-500 ${isExpanded ? 'rotate-180' : ''}`}
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                        </button>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Ourguruji;
