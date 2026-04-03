'use client';

import React from 'react';
import Image from 'next/image';

const eventsData = [
    {
        id: 1,
        title: 'Bhumi Grahan & Bhumi Pujan (Land Acquisition & Sanctification Ceremony)',
        date: 'Thursday April 23,2026',
        time: '6:00 am - 12:00 pm',
        description:
            'Celebrate the birth anniversary of Lord Mahavir, the 24th Tirthankara. The event includes Abhishek, Shobha Yatra, Pravachan, and Aarti, spreading the message of Ahimsa and truth. Devotees gather to seek blessings and participate in spiritual activities.',
        price: 'Free',
        image: '/events/event1.png',
    },
    {
        id: 2,
        title: 'Khanan Muhurat (Auspicious Groundbreaking Ceremony)',
        date: 'April 29,2026',
        time: '6:00 am - 12:00 pm',
        description:
            'Paryushan is one of the most sacred Jain festivals focused on fasting, prayer, self-reflection, and forgiveness (Kshamavani). Devotees engage in Pratikraman, meditation, and discourses for inner purification.',
        price: 'Free',
        image: '/events/event2.png',
    },
];

const Event: React.FC = () => {
    return (
        <section id="Events" className="py-24 px-6 lg:px-12  overflow-hidden font-raleway scroll-mt-24">
            {/* Heading */}
            <div className="max-w-[1400px] mx-auto text-center mb-12">
                <span className="text-accent-red font-bold tracking-[0.3em] text-sm lg:text-lg uppercase block mb-3">
                    EVENT
                </span>
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-extrabold tracking-[0.3rem] text-gray-900 mb-6 sm:mb-8 md:mb-10 lg:mb-12 text-center">
                    Latest Events
                </h2>
            </div>

            {/* Events */}
            <div className="max-w-[1400px] mx-auto space-y-20">
                {eventsData.map((event, index) => {
                    const isLeft = index % 2 === 0;

                    return (
                        <div
                            key={event.id}
                            className={`flex flex-col ${isLeft ? 'lg:flex-row' : 'lg:flex-row-reverse'
                                } items-center`}
                        >
                            {/* Card Container */}
                            <div
                                className={`relative flex flex-col ${isLeft ? 'lg:flex-row' : 'lg:flex-row-reverse'}
    items-center w-full max-w-6xl mx-auto bg-[#FFF5EC]
    ${isLeft
                                        ? 'lg:rounded-l-full lg:rounded-br-full lg:rounded-tr-[40px]'
                                        : 'lg:rounded-r-full lg:rounded-bl-full lg:rounded-tl-[40px]'
                                    }
    p-4 lg:p-0 transition-all duration-500 hover:shadow-xl group`}
                            >
                                {/* Background Blur */}
                                <div className={`absolute inset-0 overflow-hidden pointer-events-none
        ${isLeft
                                        ? 'lg:rounded-l-full lg:rounded-br-full lg:rounded-tr-[40px]'
                                        : 'lg:rounded-r-full lg:rounded-bl-full lg:rounded-tl-[40px]'
                                    }`}>
                                    <div
                                        className={`absolute w-[400px] h-[400px] rounded-full blur-[100px] opacity-30
            ${isLeft ? '-bottom-32 -left-32' : '-bottom-32 -right-32'}
            bg-gradient-to-br from-orange-300 to-transparent`}
                                    />
                                </div>

                                {/* Image Circle (Reduced) */}
                                <div
                                    className={`relative w-44 h-44 sm:w-52 sm:h-52 lg:w-56 lg:h-56
        rounded-full overflow-hidden border-[6px] border-white shadow-xl z-20 flex-shrink-0
        transition-transform duration-500 group-hover:scale-105
        ${isLeft ? 'lg:-ml-6' : 'lg:-mr-6'}`}
                                >
                                    <Image
                                        src={event.image}
                                        alt={event.title}
                                        fill
                                        className="object-cover"
                                        priority
                                    />
                                </div>

                                {/* Content */}
                                <div className={`relative p-5 lg:p-10 max-w-3xl space-y-4 z-10 flex-1
        ${isLeft ? 'lg:pl-8' : 'lg:pr-8'}`}>

                                    {/* Date + Time */}
                                    <div className="flex flex-wrap gap-5 text-xs font-semibold text-zinc-600">
                                        <div className="flex items-center gap-2">
                                            <span className="text-red-500">
                                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                                </svg>
                                            </span>
                                            {event.date}
                                        </div>

                                        <div className="flex items-center gap-2">
                                            <span className="text-red-500">
                                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                </svg>
                                            </span>
                                            {event.time}
                                        </div>
                                    </div>

                                    {/* Title */}
                                    <h3 className="text-xl lg:text-2xl font-bold text-zinc-900 leading-tight group-hover:text-[#FF0000] transition-colors">
                                        {event.title}
                                    </h3>

                                    {/* Description */}
                                    <p className="text-zinc-600 text-sm leading-relaxed">
                                        {event.description}
                                    </p>

                                    {/* Price */}
                                    <div className="pt-2">
                                        <span className="bg-[#FF0000] text-white px-4 py-1.5 rounded-md font-semibold text-sm shadow-md uppercase tracking-wide">
                                            {event.price}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
};

export default Event;