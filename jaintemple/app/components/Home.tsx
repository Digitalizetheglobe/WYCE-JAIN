import Image from "next/image";
import React from 'react';
import ScrollDown from './ScrollDown';

const Home: React.FC = () => {
    return (
        <div id="Home" className="relative w-full h-screen overflow-hidden flex items-center justify-center scroll-mt-24">
            {/* Background Image */}
            <div className="absolute inset-0 z-0 px-4 md:px-16 py-8 md:py-16">
                <Image
                    src="/home/Jain Mandir website banner (1920 x 1080 px).png"
                    alt="Mandala Background"
                    fill
                    style={{ objectFit: 'cover' }}
                    quality={100}
                    priority
                />
                {/* Subtle Overlay to make content pop */}
                <div className="absolute inset-0 bg-[#FF0000]/60" />
            </div>

            {/* Content Container */}
            <div className="relative z-10 w-full max-w-[1400px] px-6 lg:px-12 flex flex-col lg:grid lg:grid-cols-2 gap-8 lg:gap-12 items-center justify-between lg:justify-center h-full pt-24 lg:pt-0">
                {/* Left Side: Text Content */}
                <div className="text-white space-y-4 md:space-y-6 lg:space-y-8 text-center lg:text-left mt-8 lg:mt-0">
                    <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight drop-shadow-lg">
                        Divine Peace & Spiritual <br className="hidden md:block" />
                        <span className="text-white">Enlightenment</span>
                    </h1>
                    <p className="text-sm md:text-lg lg:text-xl text-white/90 max-w-xl mx-auto lg:mx-0 leading-relaxed font-light">
                        Experience serenity, devotion, and the timeless teachings of Jainism
                        in a sacred space dedicated to inner peace and spiritual growth.
                    </p>
                    <div className="flex justify-center lg:justify-start">
                        <button className="bg-white cursor-pointer text-[#FF0000] px-8 md:px-10 py-2.5 md:py-3 rounded-full font-bold text-base md:text-lg transition-all duration-300 hover:scale-105 active:scale-95 shadow-xl">
                            More Info
                        </button>
                    </div>
                </div>

                {/* Right Side: Image Placeholder */}
                <div className="flex justify-center lg:justify-end items-end relative h-[300px] md:h-[450px] lg:h-[600px] w-full lg:w-auto">
                    <Image
                        src="/home/jain-budh.png"
                        alt="Tirthankara"
                        width={500}
                        height={600}
                        className="h-full w-auto object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)] transition-transform duration-700 hover:scale-[1.02]"
                        priority
                    />
                </div>
            </div>

            {/* Scroll Down Indicator */}
            {/* <ScrollDown targetId="About" /> */}
        </div>
    );
};

export default Home;
