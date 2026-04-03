'use client';

import React from 'react';
import Image from 'next/image';

const About: React.FC = () => {
    const cards = [
        { id: 1, text: 'Ahimsa (Non-violence)', path: '/about/card_img.png' },
        { id: 2, text: 'Satya (Truth)', path: '/about/card_img.png' },
        { id: 3, text: 'Brahmacharya (Self-control)', path: '/about/card_img.png' },
        { id: 4, text: 'Ahimsa (Non-violence)', path: '/about/card_img.png' },
        { id: 5, text: 'Ahimsa (Non-violence)', path: '/about/card_img.png' },
    ];

    return (
        <section id="About" className="relative w-full py-20 px-6 lg:px-12 bg-gradient-to-b from-[#FFECDC] to-[#FFFFFF] scroll-mt-24">
            <div className="max-w-[1400px] mx-auto">
                {/* Top Section: Image and Content */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-4">
                    {/* Left Side: Temple Image Placeholder */}
                    <div className="flex justify-center items-center overflow-hidden rounded-2xl group transition-all duration-700  shadow-black/20 ">
                        {/* SET IMAGE PATH HERE LATER */}
                        <Image
                            src="/about/about_img.png"
                            alt="Jain Temple"
                            width={450}
                            height={300}
                            className="object-contain transition-transform duration-1000 group-hover:scale-105"
                            priority
                        />
                    </div>

                    {/* Right Side: Text Content */}
                    <div className="space-y-6 mb-24">
                        <span className="text-[#FF0000] font-bold tracking-[0.2em] text-lg uppercase block animate-fadeIn" style={{ animationDelay: '200ms' }}>
                            V A N I  T R U S T
                        </span>
                        <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 leading-tight animate-fadeIn" style={{ animationDelay: '400ms' }}>
                            Shree Mahapunya Prabhavak Jain Religious Trust.
                            Under the aegis of Shree Punyanidhan Shwetambar
                            Murtipujak Tapagachha Jain Sangh, Bavdhan, Pune
                        </h2>
                        <p className="text-black text-sm leading-relaxed max-w-xl font-light animate-fadeIn" style={{ animationDelay: '600ms' }}>
                            Under the aegis of Shree Punyanidhan Shwetambar Murtipujak Tapagachha Jain Sangh, Bavdhan, Pune, we celebrate the commencement of the magnificent Temple of our Supreme Savior, Shree Vimalnath Prabhu.
                        </p>
                    </div>
                </div>

                {/* Cards row */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2">
                    {cards.map((card, index) => (
                        <div
                            key={card.id}
                            className={`relative flex flex-col items-center justify-center transition-all duration-700 hover:-translate-y-3 hover:brightness-110 cursor-pointer opacity-0 animate-fadeIn`}
                            style={{ animationDelay: `${index * 150 + 800}ms` }}
                        >
                            <Image
                                src={card.path}
                                alt={card.text}
                                width={240}
                                height={100}
                                className="object-contain rounded-lg"
                            />
                            {/* Text overlay on top of the image */}
                            <div className="absolute inset-0 flex items-center justify-center px-4 text-center">
                                <span className="text-white font-bold text-[0.7rem] md:text-[0.8rem] lg:text-[0.9rem] leading-tight drop-shadow-md">
                                    {card.text}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default About;
