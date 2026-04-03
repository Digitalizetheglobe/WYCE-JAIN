'use client';

import React from 'react';

const ScrollDown = ({ targetId }: { targetId: string }) => {
  const scrollToTarget = () => {
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 hidden lg:block">
      <button
        onClick={scrollToTarget}
        className="flex flex-col items-center gap-2 text-white/70 hover:text-white transition-colors cursor-pointer group"
      >
        <span className="text-xs font-medium tracking-[0.15em] uppercase opacity-70 group-hover:opacity-100 transition-opacity">
          Scroll Down
        </span>
        <div className="w-[30px] h-[50px] border-2 border-white/30 rounded-full relative">
          <div className="w-1.5 h-1.5 bg-white rounded-full absolute top-2 left-1/2 -translate-x-1/2 animate-bounce" />
        </div>
      </button>
    </div>
  );
};

export default ScrollDown;
