"use client";

import Image from "next/image";

export default function ComingSoon() {
  return (
    <div className="w-full bg-[#0a0a0a]">
      {/* Large Desktop Banner (3780 x 1890) */}
      <div className="hidden lg:block relative w-full h-screen animate-fadeIn">
        <Image
          src="/home/Jain%20Mandir%20website%20banner%20(1920%20x%201080%20px)%20(3780%20x%201890%20px).png"
          alt="Jain Mandir Event Main Banner Large"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Standard Desktop/Tablet Banner (1920 x 1080) */}
      <div className="hidden md:block lg:hidden relative w-full h-screen animate-fadeIn">
        <Image
          src="/home/Jain%20Mandir%20website%20banner%20(1920%20x%201080%20px).png"
          alt="Jain Mandir Event Main Banner Standard"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Mobile Banner (1080 x 1920) */}
      <div className="block md:hidden relative w-full h-screen animate-fadeIn">
        <Image
          src="/home/Jain%20Mandir%20website%20banner%20(1920%20x%201080%20px)%20(1080%20x%201920%20px).png"
          alt="Jain Mandir Event Main Banner Mobile"
          fill
          className="object-contain"
          priority
        />
      </div>
    </div>
  );
}
