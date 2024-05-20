// /components/Conhecimentos.tsx
import React from 'react';
import IconCard from '@/components/ui/IconCard';
import { BoltIcon } from '@heroicons/react/24/solid';

import Html from '@/assets/ICONS/html.png';
import Css from '@/assets/ICONS/css.png';
// import Figma from '@/assets/ICONS/figma.svg';
// import Ilu from '@/assets/ICONS/illustrator.svg';
import Java from '@/assets/ICONS/java.png';
import Js from '@/assets/ICONS/js.png';
import Next from '@/assets/ICONS/next.png';
import Ts from '@/assets/ICONS/ts.png';
import ReactIcon from '@/assets/ICONS/react.png';
// import Ps from '@/assets/ICONS/ps.svg';
import Tail from '@/assets/ICONS/tail.png';


import { FaHtml5 ,FaCss3, FaJava, FaJs, FaFigma, FaReact   } from 'react-icons/fa';
import { RiTailwindCssFill, RiNextjsFill   } from 'react-icons/ri';
import { IoLogoJavascript } from "react-icons/io";
import { SiTypescript, SiAdobeillustrator, SiAdobephotoshop   } from "react-icons/si";




const Conhecimentos: React.FC = () => {
  return (
    <section className="lg:py-20 justify-center items-center flex flex-col">
      <div className="pb-20 font-bold text-center">
        <div className="flex flex-row items-center gap-2 justify-center text-[#8776B2]">
          <BoltIcon className="size-7"/>
          <h1 className="text-[40px]">Conhecimentos</h1>
        </div>
        <p className="font-normal text-white">Conheça as tecnologias nas quais sou especializado.</p>
      </div>

       <div className="grid grid-cols-6 gap-3 text-[#574487]">

        {/* CIMA */}
         <IconCard name='Html' icon={<FaHtml5 className="w-9 h-9"/>}/>
         <IconCard name='CSS' icon={<FaCss3 className="w-9 h-9"/>}/>
         <IconCard name='javascript' icon={<FaJs className="w-9 h-9"/>}/>
         <IconCard name='react' icon={<FaReact className="w-9 h-9"/>}/>
         <IconCard name='next' icon={<RiNextjsFill className="w-9 h-9"/>}/>
         <IconCard name='tailwind' icon={<RiTailwindCssFill className="w-9 h-9"/>}/>

         {/* BAIXO */}
         <IconCard name='Typescript' icon={<SiTypescript className="w-9 h-9"/>}/>
         <IconCard name='java' icon={<FaJava className="w-9 h-9"/>}/>
         <IconCard name='javascript' icon={<IoLogoJavascript className="w-9 h-9"/>}/>
         <IconCard name='Figma' icon={<FaFigma className="w-9 h-9"/>}/>
         <IconCard name='Illustrator' icon={<SiAdobeillustrator className="w-9 h-9"/>}/>
         <IconCard name='Photoshop' icon={<SiAdobephotoshop className="w-9 h-9"/>}/>
        </div>
    </section>
  );
};

export default Conhecimentos;
