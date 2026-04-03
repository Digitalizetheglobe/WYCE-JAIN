// 'use client';

// import React from 'react';
// import Image from 'next/image';

// interface TimelineEvent {
//     id: number;
//     year: string;
//     iconSubtitle: string;
//     boxTitle: string;
//     description: string;
//     imagePath: string;
//     side: 'right' | 'left'; // Which side the Text Box is on
// }

// const Ourstory: React.FC = () => {
//     const events: TimelineEvent[] = [
//         {
//             id: 1,
//             year: 'January 1995',
//             iconSubtitle: 'Mandir Consecration',
//             boxTitle: 'Foundation Stone Laid',
//             description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
//             imagePath: '/ourstory/foundation_img.png',
//             side: 'right'
//         },
//         {
//             id: 2,
//             year: 'January 1995',
//             iconSubtitle: 'Mandir Consecration',
//             boxTitle: 'Mandir Consecration',
//             description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
//             imagePath: '/ourstory/mandir_img.png',
//             side: 'left'
//         },
//         {
//             id: 3,
//             year: 'January 1995',
//             iconSubtitle: 'Trust Establishment',
//             boxTitle: 'Trust Establishment',
//             description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
//             imagePath: '/ourstory/trust_img.png',
//             side: 'right'
//         },
//         {
//             id: 4,
//             year: 'January 1995',
//             iconSubtitle: 'Mandir Consecration',
//             boxTitle: 'Mandir Consecration',
//             description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
//             imagePath: '/ourstory/foundation_img.png',
//             side: 'left'
//         }
//     ];

//     return (
//         <section id="Story" className="relative w-full py-24 px-6 lg:px-12 bg-gradient-to-b from-[#FFFFFF] to-[#FFECDC] overflow-hidden">
//             <div className="max-w-[1400px] mx-auto">
//                 <div className="text-center mb-24 space-y-4">
//                     <span className="text-[#FF0000] font-bold tracking-[0.4em] text-lg uppercase block animate-fadeIn">
//                         Ourstory
//                     </span>
//                     <h2 className="text-4xl lg:text-4xl font-extrabold text-gray-900 leading-tight animate-fadeIn">
//                         A Legacy of Faith: Our Story
//                     </h2>
//                 </div>

//                 <div className="relative">
//                     {/* Central Vertical Dashed Line */}
//                     <div className="absolute left-1/2 top-0 bottom-0 w-0.5 border-l-2 border-dashed border-[#FF0000]/20 -translate-x-1/2 z-0 animate-growVertical" />

//                     <div className="space-y-32 relative z-10">
//                         {events.map((event, index) => (
//                             <div key={event.id} className="relative flex flex-col items-center">
//                                 {/* The Central Dot */}
//                                 <div
//                                     className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white border-4 border-[#FF0000] shadow-[0_0_20px_rgba(255,0,0,0.4)] z-20 opacity-0 animate-fadeIn"
//                                     style={{ animationDelay: `${index * 800 + 400}ms` }}
//                                 />

//                                 <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">

//                                     {/* ICON SIDE */}
//                                     <div className={`flex flex-col items-center space-y-6 ${event.side === 'right' ? 'lg:order-1' : 'lg:order-2'}`}>
//                                         <div className="h-full flex flex-col items-center opacity-0 animate-scaleIn" style={{ animationDelay: `${index * 800 + 600}ms` }}>
//                                             {/* Date Badge above/beside icon */}
//                                             <div className="bg-[#FF0000] text-white px-8 py-2 rounded-full font-bold text-sm shadow-lg mb-6">
//                                                 {event.year}
//                                             </div>

//                                             {/* Icon Circle */}
//                                             <div className="relative w-56 h-56 lg:w-64 lg:h-64 rounded-full flex items-center justify-center p-8 group overflow-hidden">
//                                                 <Image
//                                                     src={event.imagePath}
//                                                     alt={event.iconSubtitle}
//                                                     width={180}
//                                                     height={180}
//                                                     className="object-contain opacity-40 group-hover:scale-110 transition-transform duration-700"
//                                                 />
//                                             </div>

//                                             <h4 className="mt-4 text-xl font-bold text-gray-800">
//                                                 {event.iconSubtitle}
//                                             </h4>
//                                         </div>
//                                     </div>

//                                     {/* TEXT BOX SIDE */}
//                                     <div className={`flex flex-col ${event.side === 'right' ? 'lg:order-2 items-start text-left' : 'lg:order-1 items-end text-right'}`}>
//                                         <div className={`max-w-xl transition-all duration-1000 opacity-0 ${event.side === 'right' ? 'animate-slideInRight' : 'animate-slideInLeft'}`} style={{ animationDelay: `${index * 800 + 1000}ms` }}>
//                                             <h3 className="text-3xl font-extrabold text-gray-900 mb-6 px-2">
//                                                 {event.boxTitle}
//                                             </h3>
//                                             <div className="bg-white/70 backdrop-blur-md p-10 rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.04)] border border-gray-100 hover:shadow-[0_20px_60px_rgba(255,0,0,0.05)] transition-shadow duration-500">
//                                                 <p className="text-gray-600 text-base leading-relaxed font-light">
//                                                     {event.description}
//                                                 </p>
//                                             </div>
//                                         </div>
//                                     </div>

//                                 </div>
//                             </div>
//                         ))}
//                     </div>
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default Ourstory;
'use client';

import React from 'react';
import Image from 'next/image';

interface TimelineEvent {
    id: number;
    year: string;
    iconSubtitle: string;
    boxTitle: string;
    description: string;
    imagePath: string;
    side: 'right' | 'left';
}

const Ourstory: React.FC = () => {
    const events: TimelineEvent[] = [
        {
            id: 1,
            year: 'January 1995',
            iconSubtitle: 'Mandir Consecration',
            boxTitle: 'Foundation Stone Laid',
            description:
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. lorem ipsum dolor sit amet consectetur adipiscing elit lorem ipsum dolor sit amet consectetur adipiscing elit lorem ipsum dolor sit amet consectetur adipiscing elit",
            imagePath: '/ourstory/foundation_img.png',
            side: 'right',
        },
        {
            id: 2,
            year: 'January 1995',
            iconSubtitle: 'Mandir Consecration',
            boxTitle: 'Mandir Consecration',
            description:
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
            imagePath: '/ourstory/mandir_img.png',
            side: 'left',
        },
        {
            id: 3,
            year: 'January 1995',
            iconSubtitle: 'Trust Establishment',
            boxTitle: 'Trust Establishment',
            description:
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
            imagePath: '/ourstory/trust_img.png',
            side: 'right',
        },
        {
            id: 4,
            year: 'January 1995',
            iconSubtitle: 'Mandir Consecration',
            boxTitle: 'Mandir Consecration',
            description:
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
            imagePath: '/ourstory/foundation_img.png',
            side: 'left',
        },
    ];

    return (
        <section id="Ourstory" className="relative w-full py-12 px-6 lg:px-12  overflow-hidden scroll-mt-24">
            <div className="max-w-[1400px] mx-auto">

                {/* Heading */}
                <div className="text-center mb-16 space-y-3">
                    <span className="text-red-500 font-bold tracking-[0.4em] text-lg uppercase block animate-fadeIn" style={{ animationDelay: '200ms' }}>
                        Our Story
                    </span>
                    <h2 className="text-4xl lg:text-4xl font-extrabold tracking-[0.3rem] text-gray-900 leading-tight animate-fadeIn" style={{ animationDelay: '400ms' }}>
                        A Legacy of Faith: Our Story
                    </h2>
                </div>

                {/* Timeline */}
                <div className="relative">

                    {/* Center Line */}
                    {/* <div className="absolute left-1/2 top-0 bottom-0 w-[2px] bg-[#FF0000] -translate-x-1/2 origin-top animate-growVertical" /> */}
                    <div className="absolute left-1/2 top-0 bottom-0 border-l-2 border-dotted border-red-500 -translate-x-1/2 origin-top animate-growVertical" />

                    <div className="space-y-12 lg:space-y-24">
                        {events.map((event, index) => (
                            <div key={event.id} className="relative">

                                {/* MOBILE VIEW: Centered Column (Visible only on mobile) */}
                                <div className="lg:hidden flex flex-col items-center px-2 mb-16 last:mb-0 relative z-10">
                                    {/* Center Dot with Glow */}
                                    <div
                                        className="w-5 h-5 rounded-full bg-white border-4 border-red-500 shadow-[0_0_15px_rgba(239,68,68,0.6)] mb-6 animate-fadeIn"
                                        style={{ animationDelay: `${index * 400 + 200}ms` }}
                                    />

                                    {/* Date Badge */}
                                    <div
                                        className="bg-red-600 text-white px-10 py-2 rounded-full text-sm font-bold shadow-xl shadow-red-500/20 mb-8 animate-fadeIn"
                                        style={{ animationDelay: `${index * 400 + 400}ms` }}
                                    >
                                        {event.year}
                                    </div>

                                    {/* Content Card */}
                                    <div
                                        className="bg-white rounded-[2.5rem] p-10 shadow-[0_20px_60px_rgba(0,0,0,0.08)] border border-gray-100 w-full max-w-[400px] flex flex-col items-center text-center animate-fadeIn"
                                        style={{ animationDelay: `${index * 400 + 600}ms` }}
                                    >
                                        {/* Icon Container */}
                                        <div className="w-32 h-32 rounded-full border border-red-100 flex items-center justify-center mb-8 p-6 bg-red-50/5">
                                            <Image
                                                src={event.imagePath}
                                                alt={event.iconSubtitle}
                                                width={100}
                                                height={100}
                                                className="object-contain opacity-40"
                                            />
                                        </div>

                                        <h3 className="text-2xl font-bold text-gray-900 mb-4 px-2">
                                            {event.boxTitle}
                                        </h3>

                                        <p className="text-gray-500 text-sm lg:text-base leading-relaxed font-light">
                                            {event.description}
                                        </p>
                                    </div>
                                </div>

                                {/* DESKTOP VIEW: Alternating Grid (Visible only on desktop) */}
                                <div className="hidden lg:grid grid-cols-2 gap-24 items-start relative z-10">

                                    {/* CENTER DOT */}
                                    <div
                                        className="absolute left-1/2 top-10 -translate-x-1/2 w-5 h-5 rounded-full bg-white border-4 border-red-500 shadow-md z-10 opacity-0 shadow-red-500 shadow-lg rounded-shadow shadow-red-500 shadow-lg animate-fadeIn"
                                        style={{ animationDelay: `${index * 500 + 300}ms` }}
                                    />

                                    {/* LEFT / RIGHT CONTENT */}
                                    {event.side === 'left' ? (
                                        <>
                                            {/* TEXT LEFT */}
                                            <div
                                                className="flex flex-col items-end text-right opacity-0 animate-slideInLeft"
                                                style={{ animationDelay: `${index * 500 + 500}ms` }}
                                            >
                                                <div className="max-w-xl">
                                                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                                                        {event.boxTitle}
                                                    </h3>
                                                    <div className="bg-white p-8 rounded-2xl shadow-md  hover:shadow-lg transition-shadow duration-300">
                                                        <p className="text-gray-600">
                                                            {event.description}
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* ICON RIGHT */}
                                            <div
                                                className="flex flex-col items-start animate-scaleIn"
                                                style={{ animationDelay: `${index * 500 + 700}ms` }}
                                            >
                                                <div className="bg-red-500 text-white px-6 py-2 rounded-full text-sm font-semibold mb-4 shadow-sm">
                                                    {event.year}
                                                </div>

                                                <div className="w-52 h-52 rounded-full flex items-center justify-center  group overflow-hidden">
                                                    <Image
                                                        src={event.imagePath}
                                                        alt={event.iconSubtitle}
                                                        width={220}
                                                        height={220}
                                                        className="opacity-40 group-hover:scale-110 transition-transform duration-500"
                                                    />
                                                </div>
                                            </div>
                                        </>
                                    ) : (
                                        <>
                                            {/* ICON LEFT */}
                                            <div
                                                className="flex flex-col items-end opacity-0 animate-scaleIn"
                                                style={{ animationDelay: `${index * 500 + 500}ms` }}
                                            >
                                                <div className="bg-red-500 text-white px-6 py-2 rounded-full text-sm font-semibold mb-4 shadow-sm">
                                                    {event.year}
                                                </div>

                                                <div className="w-52 h-52 rounded-full flex items-center justify-center group overflow-hidden">
                                                    <Image
                                                        src={event.imagePath}
                                                        alt={event.iconSubtitle}
                                                        width={220}
                                                        height={220}
                                                        className="opacity-40 group-hover:scale-110 transition-transform duration-500"
                                                    />
                                                </div>
                                            </div>

                                            {/* TEXT RIGHT */}
                                            <div
                                                className="flex flex-col items-start text-left opacity-0 animate-slideInRight"
                                                style={{ animationDelay: `${index * 500 + 700}ms` }}
                                            >
                                                <div className="max-w-xl">
                                                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                                                        {event.boxTitle}
                                                    </h3>
                                                    <div className="bg-white p-8 rounded-2xl shadow-md  hover:shadow-lg transition-shadow duration-300">
                                                        <p className="text-gray-600">
                                                            {event.description}
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Ourstory;