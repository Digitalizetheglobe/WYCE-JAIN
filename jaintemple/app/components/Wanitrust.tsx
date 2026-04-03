'use client';

import React, { useState } from 'react';
import Image from 'next/image';

const features = [
    {
        title: 'Divine Blessings',
        description: 'We aim to protect and promote Jain culture, traditions, & sacred teachings for future generations.',
        iconPath: '/trust/icon_divine.png',
        position: 'top',
        animationClass: 'animate-fadeIn'
    },
    {
        title: 'Mandir Upkeep',
        description: 'Maintaining the temple premises, ensuring cleanliness, & enhancing spiritual experiences for devotees.',
        iconPath: '/trust/icon_mandir.png',
        position: 'right',
        animationClass: 'animate-slideInRight'
    },
    {
        title: 'Educational Aid',
        description: 'Providing scholarships and educational support to empower students & encourage learning.',
        iconPath: '/trust/icon_edu.jpeg',
        position: 'bottom',
        animationClass: 'animate-fadeIn'
    },
    {
        title: 'Social Welfare',
        description: 'Organizing community initiatives, charity programs, & support services for those in need.',
        iconPath: '/trust/icon_social.jpeg',
        position: 'left',
        animationClass: 'animate-slideInLeft'
    },
];

const FeatureItem: React.FC<{ feature: typeof features[0], index: number }> = ({ feature, index }) => {
    // Desktop layout variations based on position
    const desktopLayoutClasses = {
        top: 'lg:top-1/2 lg:left-1/2 lg:-translate-x-1/2 lg:-translate-y-[280px] lg:flex-col-reverse',
        right: 'lg:top-1/2 lg:left-1/2 lg:translate-x-[120px] lg:-translate-y-1/2 lg:flex-row text-left lg:w-[320px]',
        bottom: 'lg:top-1/2 lg:left-1/2 lg:-translate-x-1/2 lg:translate-y-[120px] lg:flex-col',
        left: 'lg:top-1/2 lg:-translate-y-1/2 lg:flex-row-reverse text-right lg:w-[320px] lg:left-1/2 lg:-translate-x-[440px]',
    }[feature.position];

    // Text container padding logic for desktop
    const textPadding = {
        top: 'pb-4 text-center',
        right: 'pl-5',
        bottom: 'pt-4 text-center',
        left: 'pr-5',
    }[feature.position];

    return (
        <div
            className={`flex flex-col items-center lg:absolute transition-all duration-700 hover:scale-[1.05] group ${desktopLayoutClasses} ${feature.animationClass} opacity-0`}
            style={{ animationDelay: `${(index + 3) * 200}ms` }}
        >
            {/* Icon Circle */}
            <div className="relative z-20 w-16 h-16 md:w-20 md:h-20 bg-white border-2 border-red-500 rounded-full flex items-center justify-center p-3 shadow-[-5px_10px_30px_rgba(0,0,0,0.06)] text-red-500 group-hover:bg-red-500 group-hover:text-white group-hover:border-white transition-all duration-500 hover:rotate-6">
                <div className="relative w-10 h-10 md:w-12 md:h-12">
                    <Image
                        src={feature.iconPath}
                        alt={feature.title}
                        fill
                        className="object-contain"
                    />
                </div>
                <div className="absolute inset-0 rounded-full border border-red-500 scale-100 group-hover:scale-125 group-hover:opacity-0 transition-all duration-500" />
            </div>

            {/* Text block */}
            <div className={`z-10 ${textPadding}`}>
                <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-1 leading-tight group-hover:text-red-600 transition-colors duration-300">
                    {feature.title}
                </h3>
                <p className="text-black font-semibold text-xs md:text-sm leading-relaxed font-light">
                    {feature.description}
                </p>
            </div>
        </div>
    );
};

const Wanitrust: React.FC = () => {
    const [activeFeature, setActiveFeature] = useState(0);

    return (
        <section id="Wanitrust" className="relative py-16 lg:py-24 bg-white overflow-hidden font-raleway scroll-mt-24">
            <div className="container mx-auto px-4 max-w-7xl">

                {/* Header Section */}
                <div className="text-center mb-12 lg:mb-16">
                    <span className="text-red-500 font-bold tracking-[0.4em] text-xs lg:text-lg uppercase block mb-2 animate-fadeIn">
                        VANI TRUST
                    </span>
                    <h2 className="text-3xl md:text-4xl lg:text-4xl font-extrabold text-[#1a1a1a] tracking-[0.1rem] lg:tracking-[0.3rem] animate-fadeIn" style={{ animationDelay: '200ms' }}>
                        The Vani Trust <span className="opacity-80">Our Foundation</span>
                    </h2>
                </div>

                {/* Mobile Interactive Layout (lg:hidden) */}
                <div className="lg:hidden flex flex-col items-center gap-16 mt-12 mb-16 px-4">
                    {/* Circular Area - Increased base size and added margin to prevent clipping */}
                    <div className="relative w-72 h-72 flex justify-center items-center">
                        {/* The Circular Border */}
                        <div className="absolute inset-0 border-[3px] border-red-500 rounded-full" />

                        {/* Central Image */}
                        <div className="relative z-10 w-64 h-64 rounded-full overflow-hidden border-[6px] border-white shadow-[0_10px_30px_rgba(0,0,0,0.1)]">
                            <Image
                                src="/trust/foundation_main.png"
                                alt="Main Image"
                                fill
                                className="object-cover"
                            />
                        </div>

                        {/* Satellite Icons - Increased z-index and size for visibility */}
                        {features.map((feature, idx) => (
                            <button
                                key={idx}
                                onClick={() => setActiveFeature(idx)}
                                className={`absolute w-16 h-16 rounded-full border-2 border-red-500 flex items-center justify-center transition-all duration-500 z-50 cursor-pointer ${idx === activeFeature ? 'bg-red-500 scale-110 shadow-lg shadow-red-500/40' : 'bg-white shadow-md'
                                    }`}
                                style={{
                                    top: feature.position === 'top' ? '0' : feature.position === 'bottom' ? 'auto' : '50%',
                                    bottom: feature.position === 'bottom' ? '0' : 'auto',
                                    left: feature.position === 'left' ? '0' : feature.position === 'right' ? 'auto' : '50%',
                                    right: feature.position === 'right' ? '0' : 'auto',
                                    transform: `translate(${feature.position === 'left' ? '-50%' : feature.position === 'right' ? '50%' : '-50%'}, ${feature.position === 'top' ? '-50%' : feature.position === 'bottom' ? '50%' : '-50%'})`
                                }}
                            >
                                <div className="relative w-8 h-8">
                                    <Image
                                        src={feature.iconPath}
                                        alt={feature.title}
                                        fill
                                        className="object-contain transition-all duration-300 rounded-full"
                                    />
                                </div>
                            </button>
                        ))}
                    </div>

                    {/* Active Content Card */}
                    <div
                        className="w-full max-w-sm bg-white p-10 rounded-[2.5rem] shadow-[0_20px_60px_rgba(0,0,0,0.06)] border border-gray-100 flex flex-col items-center text-center animate-fadeIn"
                        key={activeFeature}
                    >
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">{features[activeFeature].title}</h3>
                        <p className="text-gray-500 text-sm leading-relaxed font-light">
                            {features[activeFeature].description}
                        </p>
                    </div>
                </div>

                {/* Desktop Layout (hidden on mobile) */}
                <div className="hidden lg:flex relative justify-center items-center min-h-[600px]">

                    {/* Decorative Background Rings */}
                    <div className="absolute w-[400px] h-[400px] border border-red-100 rounded-full animate-scaleIn opacity-50" style={{ animationDelay: '400ms' }} />
                    <div className="absolute w-[520px] h-[520px] border border-red-50/50 rounded-full animate-scaleIn opacity-30" style={{ animationDelay: '600ms' }} />

                    {/* Central Image Showcase */}
                    <div className="relative z-10 w-80 h-80 rounded-full overflow-hidden border-[10px] border-white shadow-[0_15px_40px_rgba(0,0,0,0.12)] animate-scaleIn group transition-all duration-700 hover:shadow-red-200/40 hover:shadow-2xl">
                        <Image
                            src="/trust/foundation_main.png"
                            alt="Sacred Tirthankara Image"
                            fill
                            className="object-cover transition-transform duration-1000 group-hover:scale-110"
                            priority
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-red-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                    </div>

                    {/* Desktop Satellite Items */}
                    <div className="w-full h-full absolute top-0 left-0 z-30">
                        {features.map((feature, index) => (
                            <FeatureItem key={index} feature={feature} index={index} />
                        ))}
                    </div>
                </div>

            </div>

            {/* Background Texture */}
            <div className="absolute inset-0 pointer-events-none opacity-[0.03] bg-[url('/noise.png')]" />
        </section>
    );
};

export default Wanitrust;
