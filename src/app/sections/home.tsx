import { CardRevealedPointer } from "@/components/ui/CardRevealedPointer";
import { DropdownMenu } from "@/components/ui/DropdownMenu";
import { Badge } from "@/components/ui/badge";
import BadgesComponents from "@/components/ui/badgesComponents";
import { Button } from "@/components/ui/button";
import Socialmedia from "@/components/ui/socialmedia";

import { ArchiveBoxIcon, ChevronRightIcon, BoltIcon, ChevronDownIcon } from '@heroicons/react/24/solid'

import { FaGithub, FaLinkedin, FaInstagram, FaYoutube } from "react-icons/fa";

import  Faixa  from '@/assets/faixa.svg'
import Image from "next/image";
import  Blur  from '@/assets/blur.svg'



export default function Home () {
    return (
    <section id="home" className="space-y-6 py-8 lg:py-32 justify-center items-center flex flex-col ">
        <Image src={Blur} alt="blur" className="absolute top-0 left-0"/>
        <div className="container flex flex-col items-center justify-center max-w-[60rem] gap-7 z-10">
            <span className="text-[#8776B2] text-center items-center flex gap-1">
            <BoltIcon className="w-5 h-5"/>
                Olá, meu nome é <span className="font-extrabold">Pedro Lucas!</span>
            
            </span>
            <h1 className="text-center items-center text-white font-bold text-[60px] leading-[70px]">Eu sou <span className="text-[#8776B2]">Desenvolvedor Web,</span> mobile e  <span className="text-[#8776B2]">designer UI/UX</span></h1>
        </div>
    
        <div className="z-10">
        <BadgesComponents/>
        </div>


        <div className="z-10">
        <DropdownMenu/>
        </div>

        <div className=" w-full">
        <Image className=""
        src={Faixa}
        alt="Faixa"
        layout="responsive" // Garante que a imagem seja responsiva
    
        />
        </div>
            
    
  
          

     </section>

     
    )

}