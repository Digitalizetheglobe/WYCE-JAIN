"use client";

import Image from "next/image";
import { useState } from "react";

type FAQItem = {
    question: string;
    answer: string;
};

const faqs: FAQItem[] = [
    {
        question: "What are the temple timings?",
        answer:
            "The mandir is open daily from 6:00 AM to 12:00 PM and 4:00 PM to 8:30 PM.",
    },
    {
        question: "Is there any dress code for visitors?",
        answer: "Yes, modest and traditional attire is recommended.",
    },
    {
        question: "Are non-Jains allowed to visit the temple?",
        answer: "Yes, all visitors are welcome.",
    },
];

export default function FAQSection() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section className="bg-white py-12 md:py-20">
            <div className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

                {/* LEFT SIDE */}
                <div className="relative flex justify-center items-center">

                    {/* Mandala Background */}
                    <div className="absolute  bottom-32  w-[280px] md:w-[400px] ">
                        <Image
                            src="/faqs/mandala.gif"
                            alt="mandala"
                            width={500}
                            height={500}
                            className="object-contain"
                        />
                    </div>

                    {/* Statue */}
                    <div className="relative z-10 w-[220px] md:w-[300px]">
                        <Image
                            src="/faqs/statue.png"
                            alt="statue"
                            width={300}
                            height={400}
                            className="object-contain"
                        />
                    </div>
                </div>

                {/* RIGHT SIDE */}
                <div>
                    <p className="text-[#FF0000] tracking-widest text-lg font-semibold mb-2">
                        F A Q
                    </p>

                    <h2 className="text-2xl md:text-4xl font-extrabold tracking-[0.3rem] text-gray-800  mb-4">
                        Get Every Answer <br /> From Over Here
                    </h2>

                    <p className="text-gray-500 mb-6">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    </p>

                    {/* FAQ */}
                    <div className="space-y-4 ">
                        {faqs.map((item, index) => {
                            const isOpen = openIndex === index;

                            return (
                                <div
                                    key={index}
                                    className=" rounded-lg border bg-white shadow-sm overflow-hidden"
                                >
                                    <button
                                        onClick={() =>
                                            setOpenIndex(isOpen ? null : index)
                                        }
                                        className={`w-full flex justify-between items-center px-4 py-4 text-left font-medium ${isOpen ? "bg-[#FFEDDE]" : "bg-white"
                                            }`}
                                    >
                                        {item.question}
                                        <span className="text-xl">
                                            {isOpen ? "−" : "+"}
                                        </span>
                                    </button>

                                    {isOpen && (
                                        <div className="px-4 pb-4 text-gray-600 text-sm">
                                            {item.answer}
                                        </div>
                                    )}
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}