
import ProjectsComp from "@/components/ui/projectsComp"

import { ArchiveBoxIcon, ChevronRightIcon, BoltIcon, ChevronDownIcon } from '@heroicons/react/24/solid'


import  Exp  from "@/assets/experiencia.svg"
import Image from "next/image"
import { CardAnimatedBorder } from "@/components/ui/CardAnimatedBorder"




function Projects() {


  
  return (
    <section id="projects" className="lg:py-20 justify-center items-center flex flex-col " >
        

        <div className=" pb-20 font-bold text-center">
            <div className="flex flex-row items-center gap-2 justify-center text-[#8776B2]">
            <BoltIcon className="size-7"/>
            <h1 className="text-[40px] ">Projetos</h1>
            </div>
            <p className="font-normal  text-white">Veja alguns projetos que desenvolvi durante minha carreira.</p>
        </div>


        <ProjectsComp/>

        <div className="flex mt-44">
        <Image src={Exp} alt="exp"/>
        </div>



    </section>
      
    
  )
}

export default Projects
