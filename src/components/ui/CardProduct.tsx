// @NOTE: in case you are using Next.js
"use client";

import Image, { StaticImageData } from "next/image";

import { useMotionValue, motion, useMotionTemplate } from "framer-motion";
import { ArchiveBoxIcon, ChevronRightIcon, BoltIcon, ChevronDownIcon, Square3Stack3DIcon } from '@heroicons/react/24/solid'


import productImage1 from "@/assets/projeto1.svg";
import { Badge } from "./badge";
import DialogComp from "./dialogComp";

type BadgeProps = {
    title1: string,
    title2: string,
    title3: string,
    title4: string,
    title5: string,
    title: string,
    description: string
    button: string
    href: string
    imageProject: StaticImageData
    
  }
export function CardProduct({title1, title2, title3, title4, title5, title, description, button, href, imageProject }: BadgeProps) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);



  return (
    <div
      onMouseMove={(e) => {
        const { left, top } = e.currentTarget.getBoundingClientRect();

        mouseX.set(e.clientX - left);
        mouseY.set(e.clientY - top);
      }}
      className="group relative max-w-[350px] w-full overflow-hidden rounded-xl bg-[#020007]"
    >
      <div className="absolute right-5 top-0 h-px w-80 bg-gradient-to-l from-transparent via-white/30 via-10% to-transparent" />
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
						radial-gradient(200px circle at ${mouseX}px ${mouseY}px, rgba(51, 51, 51, 0.4), transparent 80%)
					`,
        }}
      />
      <div className="relative flex flex-col gap-3 rounded-xl border border-white/10 px-4 py-5">
        <div className="space-y-2">
          <Image
            src={imageProject}
            alt="Product image1"
            height={10}
            width={10}
            className="rounded-xl h-52 w-full object-cover opacity-75"
          />
          <div className="flex flex-row items-center justify-between pt-2">
            <h3 className="text-xl font-semibold text-neutral-200">{title}</h3>
          </div>
          <p className="text-sm leading-[1.5] text-neutral-400 pb-3">
           {description}
          </p>
          <div className="flex  flex-wrap gap-1 pb-5">
          <Badge title={title1}/>
          <Badge title={title2}/>
          <Badge title={title3}/>
          <Badge title={title4}/>
          <Badge title={title5}/>
          {/* <DialogComp
          /> */}
          </div>
          
          <a href={href} target="_blank" className="inline-flex items-center justify-center gap-1 text-sm py-3 px-4 font-semibold bg-[#574487] border border-[#574487] text-white rounded-lg duration-300 hover:bg-[#7860b5] w-full">
            Ver projeto 
            <ChevronRightIcon className="w-3"/>

          </a>
        </div>
      </div>
    </div>
  );
}
