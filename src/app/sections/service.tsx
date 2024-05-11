import { CardAnimatedBorder } from "@/components/ui/CardAnimatedBorder"

import { ArchiveBoxIcon, ChevronRightIcon, BoltIcon, ChevronDownIcon, DevicePhoneMobileIcon, CodeBracketSquareIcon, PhotoIcon,  RectangleStackIcon } from '@heroicons/react/24/solid'

function Service() {
  return (
    <section className="space-y-6 py-8 lg:py-32 justify-center items-center flex flex-row">
        
        <div className="flex-row flex gap-40 max-w-[80rem]">

        <div className=" pb-20 font-bold text-center">
            <div className="flex flex-row items-center gap-2 justify-start text-[#8776B2]">
            <BoltIcon className="size-7"/>
            <h1 className="text-[40px] ">Serviços</h1>
            </div>
            <p className="font-normal text-left text-white">Veja alguns serviços que desenvolvo durante minha carreira.</p>

            
        </div>


        <div className="flex flex-col gap-4">
            <CardAnimatedBorder

            title="Desenvolvimento de Landing Pages"
            subtitle="Explore the new website that simplifies the creation of
            sophisticated dark mode components."
            icon={<CodeBracketSquareIcon className="w-10 text-white mb-5"/>}
            
            />

            <CardAnimatedBorder

            title="Desenvolvimento de Apps"
            subtitle="Explore the new website that simplifies the creation of
            sophisticated dark mode components."
            icon={<DevicePhoneMobileIcon className="w-10 text-white mb-5"/>}

            />

            <CardAnimatedBorder

            title="Design UI/UX"
            subtitle="Explore the new website that simplifies the creation of
            sophisticated dark mode components."
            icon={<PhotoIcon className="w-10 text-white mb-5"/>}

            />


            
        </div>
        
       
        </div>
        
    </section>
  )
}

export default Service
