import Link from "next/link";
import Image from "next/image";
export default function Footer() {
    return (
        <footer className="bg-[#fdf3e7] font-sans">
            {/* Top Section */}
            <div className="max-w-6xl mx-auto px-6 py-10 md:py-14 relative">
                {/* Decorative mandala watermark */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
                    {/* Mandala Background */}
                    <div className="absolute bottom-18 w-[280px] md:w-[400px] animate-spin-slow">
                        <Image
                            src="/footer/back_designs.png"
                            alt="mandala"
                            width={500}
                            height={500}
                            className="object-contain opacity-40"
                        />
                    </div>
                </div>

                <div className="relative z-10 flex flex-col md:flex-row md:items-start md:justify-between gap-10">
                    {/* Left: Tagline */}
                    <div className="md:w-1/3 flex items-center md:items-start">
                        <h2 className="text-red-600 font-extrabold text-2xl md:text-3xl leading-snug">
                            Experience Peace
                            <br />
                            &amp; Spiritual Harmony!
                        </h2>
                    </div>

                    {/* Center: Address */}
                    <div className="md:w-1/3">
                        <h4 className="text-red-600 font-bold text-base mb-3">Address</h4>
                        <p className="text-gray-700 text-sm leading-relaxed">
                            Jain Mandir Road,
                            <br />
                            Bavdhan, Pune,
                            <br />
                            Maharashtra – 411021
                        </p>

                        {/* Social Icons */}
                        <div className="flex items-center gap-3 mt-5">
                            {/* Facebook */}
                            <a
                                href="#"
                                aria-label="Facebook"
                                className="w-9 h-9 rounded-full bg-red-500 hover:bg-red-600 flex items-center justify-center transition-colors"
                            >
                                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                                </svg>
                            </a>
                            {/* WhatsApp */}
                            <a
                                href="#"
                                aria-label="WhatsApp"
                                className="w-9 h-9 rounded-full bg-red-500 hover:bg-red-600 flex items-center justify-center transition-colors"
                            >
                                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                                    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.125.558 4.122 1.534 5.857L.057 23.998l6.305-1.654A11.954 11.954 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.006-1.37l-.36-.214-3.733.979 1.001-3.642-.234-.374A9.818 9.818 0 1112 21.818z" />
                                </svg>
                            </a>
                            {/* YouTube */}
                            <a
                                href="#"
                                aria-label="YouTube"
                                className="w-9 h-9 rounded-full bg-red-500 hover:bg-red-600 flex items-center justify-center transition-colors"
                            >
                                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M22.54 6.42a2.78 2.78 0 00-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 001.46 6.42 29 29 0 001 12a29 29 0 00.46 5.58 2.78 2.78 0 001.95 1.95C5.12 20 12 20 12 20s6.88 0 8.59-.47a2.78 2.78 0 001.95-1.95A29 29 0 0023 12a29 29 0 00-.46-5.58zM9.75 15.02V8.98L15.5 12l-5.75 3.02z" />
                                </svg>
                            </a>
                        </div>
                    </div>

                    {/* Right: Say Hello */}
                    <div className="md:w-1/4">
                        <h4 className="text-red-600 font-bold text-base mb-3">Say Hello</h4>
                        <p className="text-gray-700 text-sm mb-1">info@email.com</p>
                        <p className="text-gray-700 text-sm font-semibold">+91 776 999 6799</p>
                    </div>
                </div>
            </div>

            {/* Divider */}
            <div className="border-t border-gray-300 mx-6 md:mx-0" />

            {/* Bottom Bar */}
            <div className="max-w-6xl mx-auto px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-sm text-gray-600">
                <nav className="flex items-center gap-5">
                    <Link href="#" className="hover:text-red-500 transition-colors">
                        Our Blog
                    </Link>
                    <Link href="#" className="hover:text-red-500 transition-colors">
                        Latest Events
                    </Link>
                    <Link href="#" className="hover:text-red-500 transition-colors">
                        Contacts
                    </Link>
                </nav>
                <p className="text-gray-500 text-xs sm:text-sm">
                    @2026 Jain Mandir. All Rights Reserved.
                </p>
            </div>
        </footer>
    );
}