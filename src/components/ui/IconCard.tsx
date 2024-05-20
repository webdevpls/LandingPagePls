// /components/IconCard.tsx
import React from 'react';
import { StaticImageData } from 'next/image';

type IconCardProps = {
  icon: React.ReactNode,
  name: string
};

function IconCard({ icon, name }: IconCardProps) {
  return (
    <div className="group relative grid overflow-hidden rounded-xl px-12 py-7 shadow-[0_1000px_0_0_hsl(0_0%_20%)_inset] transition-colors duration-200 ">
      <span>
        <span className="spark mask-gradient animate-flip before:animate-rotate absolute inset-0 h-[100%] w-[100%] overflow-hidden rounded-xl [mask:linear-gradient(white,_transparent_20%)] before:absolute before:aspect-square before:w-[200%] before:rotate-[-90deg] before:bg-[conic-gradient(from_0deg,transparent_0_340deg,white_360deg)] before:content-[''] before:[inset:0_auto_auto_50%] before:[translate:-50%_-15%]" />
      </span>
      <span className="backdrop absolute inset-px rounded-[11px] bg-[#020007] transition-colors duration-200 group-hover:bg-[#08050e]" />
      <div className="z-10 flex items-center justify-center flex-col pointer-events-none">
        <div className="pointer-events-auto">
          {icon}
        </div>
        <span className='text-[#574487] font-bold uppercase pt-2 text-sm'>{name}</span>
      </div>
    </div>
  );
}

export default IconCard;
