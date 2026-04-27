"use client";

import Image from "next/image";

export default function ComingSoon() {
  return (
    <div className="w-full min-h-screen bg-[#0a0a0a]">

      {/* Large Desktop Banner (≥1024px) */}
      <div className="hidden lg:block w-full">
        <Image
          src="/home/laptop-banner.jpeg"
          alt="Jain Mandir Event Main Banner Large"
          width={3780}
          height={1890}
          className="w-full h-auto block"
          priority
        />
      </div>

      {/* Tablet Banner (768px – 1023px) */}
      <div className="hidden md:block lg:hidden w-full">
        <Image
          src="/home/tab-banner.jpeg"
          alt="Jain Mandir Event Main Banner Standard"
          width={1920}
          height={1080}
          className="w-full h-auto block"
          priority
        />
      </div>

      {/* Mobile Banner (<768px) */}
      <div className="block md:hidden w-full">
        <Image
          src="/home/mobile-banner.jpeg"
          alt="Jain Mandir Event Main Banner Mobile"
          width={1080}
          height={1920}
          className="w-full h-auto block"
          priority
        />
      </div>

    </div>
  );
}
