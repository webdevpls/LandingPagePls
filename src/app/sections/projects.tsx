import { CardProduct } from "@/components/ui/CardProduct"
import ProjectsComp from "@/components/ui/projectsComp"

import { ArchiveBoxIcon, ChevronRightIcon, BoltIcon, ChevronDownIcon } from '@heroicons/react/24/solid'





function Projects() {


  
  return (
    <section className="lg:py-20 justify-center items-center flex flex-col ">
        

        <div className=" pb-20 font-bold text-center">
            <div className="flex flex-row items-center gap-2 justify-center text-[#8776B2]">
            <BoltIcon className="size-7"/>
            <h1 className="text-[40px] ">Projetos</h1>
            </div>
            <p className="font-normal  text-white">Veja alguns projetos que desenvolvi durante minha carreira.</p>
        </div>


        <ProjectsComp/>

    </section>
      
    
  )
}

export default Projects
