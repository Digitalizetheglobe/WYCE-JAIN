'use client';

import React from 'react';
import Image from 'next/image';

interface MediaItem {
    id: number;
    title: string;
    description: string;
    date: string;
}

const mediaData: MediaItem[] = [
    {
        id: 1,
        title: 'Times of India',
        description:
            'Thousands gather for Mahavir Jayanti at Mandir Thousands gather for Mahavir Jayanti at Mandir',
        date: 'Mar 2024',
    },
    {
        id: 2,
        title: 'Times of India',
        description:
            'Thousands gather for Mahavir Jayanti at Mandir Thousands gather for Mahavir Jayanti at Mandir',
        date: 'Mar 2024',
    },
    {
        id: 3,
        title: 'Times of India',
        description:
            'Thousands gather for Mahavir Jayanti at Mandir Thousands gather for Mahavir Jayanti at Mandir',
        date: 'Mar 2024',
    },
];

const MediaSection: React.FC = () => {
    return (
        <section id="Media" className="bg-gradient-to-b from-[#FFECDC] to-[#FFFFFF] py-16 px-4 scroll-mt-24">
            <div className="max-w-4xl mx-auto text-center px-8 sm:px-12 lg:px-0">   

                <p className="text-red-500 tracking-[0.4em] text-sm lg:text-lg font-semibold mb-2">
                    MEDIA
                </p>

                <h2 className="text-2xl tracking-[0.2rem] lg:tracking-[0.3rem] sm:text-3xl md:text-4xl lg:text-4xl font-extrabold text-gray-900 mb-8 lg:mb-12 text-center">
                    Mandir in the Media
                </h2>
                <div className="relative space-y-10">
                    {/* Vertical Connecting Line (Dotted) */}
                    {/* <div className="absolute left-[8px] lg:left-[-20px] top-4 bottom-4 w-px border-l-2 border-dashed border-red-500/30 z-0" /> */}

                    {mediaData.map((item) => (
                        <div key={item.id} className="relative z-10">

                            {/* CARD */}
                            <div className="group flex items-center justify-between bg-white border-2 border-black/10 rounded-[30px] lg:rounded-[40px] px-6 py-5 lg:px-8 lg:py-6 shadow-sm hover:shadow-md hover:scale-[1.01] transition-all duration-300">

                                {/* Left Circle */}
                                <div className="absolute -left-8 lg:-left-14 top-1/2 -translate-y-1/2">
                                    <div className="w-16 h-16 lg:w-24 lg:h-24 bg-red-500 rounded-full flex items-center justify-center border-4 border-white shadow-lg z-10">
                                        <div className="relative w-10 h-10 lg:w-14 lg:h-14">
                                            <Image
                                                src="/media/media.png"
                                                alt="media"
                                                fill
                                                className="object-contain rounded-full"
                                            />
                                        </div>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="text-left pl-10 lg:pl-20 pr-6 lg:pr-12">
                                    <h3 className="text-lg lg:text-2xl font-bold text-gray-900 leading-tight">
                                        {item.title}
                                    </h3>
                                    <p className="text-sm lg:text-base text-gray-600 mt-1 max-w-xl line-clamp-2 lg:line-clamp-none">
                                        {item.description}
                                    </p>
                                    <p className="text-xs lg:text-sm text-gray-400 mt-2">
                                        {item.date}
                                    </p>
                                </div>

                            </div>

                            {/* RIGHT OUTSIDE ARROW */}
                            <div className="absolute -right-6 lg:-right-14 top-1/2 -translate-y-1/2">
                                <div className="w-12 h-8 lg:w-20 lg:h-12 flex items-center justify-center group-hover:translate-x-2 transition-all duration-300">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 120 40"
                                        className="w-full h-full text-red-500"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="6"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
                                        <line x1="0" y1="20" x2="110" y2="20" />
                                        <polyline points="95,5 115,20 95,35" />
                                    </svg>
                                </div>
                            </div>

                        </div>
                    ))}
                </div>

            </div>

            <div className="max-w-5xl mx-auto mt-16 px-2 lg:px-0">
                <div className="relative overflow-hidden border border-red-100 px-6 py-10 lg:px-16 lg:py-12 rounded-[2.5rem] lg:rounded-full text-center bg-red-50/20">

                    {/* Background Pattern */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] pointer-events-none">
                        <Image
                            src="/mandala.png"
                            alt="pattern"
                            width={400}
                            height={400}
                            className="object-contain"
                        />
                    </div>

                    {/* Content */}
                    <div className="relative z-10">
                        <h2 className="text-red-500 tracking-[0.3em] font-bold text-sm lg:text-base mb-6">
                            DIVYASHEESH
                        </h2>

                        <p className="text-gray-600 text-sm lg:text-base leading-relaxed max-w-4xl mx-auto font-light">
                            Under the Spiritual Grace & Blessings of: <br className="hidden lg:block" />
                            <span className="font-semibold text-gray-800">Vyakhyan Vachaspati, Maharashtra-Deshoddharak Pujya Acharya Bhagwant Shrimad Vijay Ramchandra Surishwarji Maharaja</span> (Master of Discourses & Uplifter of the Land of Maharashtra) <br className="lg:my-2 block lg:hidden" />
                            <span className="font-semibold text-gray-800">Vatsalya-Varidhi, Maharashtra-Sanghopkari Pujya Acharya Bhagwant Shrimad Vijay Mahabal Surishwarji Maharaja</span> (Ocean of Compassion & Benefactor of the Maharashtra Jain Sangha) <br className="lg:my-2 block lg:hidden" />
                            <span className="font-semibold text-gray-800">Gaccha-Saubhagya, Suvishal Gacchadhipati Pujya Acharya Bhagwant Shrimad Vijay Punyapal Surishwarji Maharaja</span> (Fortune of the Gaccha & Supreme Head of the Suvishal Gaccha)
                        </p>
                    </div>

                </div>
            </div>
        </section>

    );
};

export default MediaSection;