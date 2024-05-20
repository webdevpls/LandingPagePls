import { CardAnimatedBorder } from "@/components/ui/CardAnimatedBorder"

import { ArchiveBoxIcon, ChevronRightIcon, BoltIcon, ChevronDownIcon, DevicePhoneMobileIcon, CodeBracketSquareIcon, PhotoIcon,  RectangleStackIcon } from '@heroicons/react/24/solid'

function Service() {
  return (
    <section id="services" className="space-y-6 py-8 lg:py-32 justify-center items-center flex flex-row">
        
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
            subtitle="Landing pages otimizadas para conversão, com design responsivo e integrações de marketing."
            icon={<CodeBracketSquareIcon className="w-10 text-white mb-5"/>}
            
            />

            <CardAnimatedBorder

            title="Desenvolvimento de Apps"
            subtitle="Apps robustos e intuitivos para iOS e Android, focados em uma excelente experiência do usuário."
            icon={<DevicePhoneMobileIcon className="w-10 text-white mb-5"/>}

            />

            <CardAnimatedBorder

            title="Design UI/UX"
            subtitle="Interfaces intuitivas e visualmente atraentes, combinando estética e funcionalidade para uma melhor experiência do usuário."
            icon={<PhotoIcon className="w-10 text-white mb-5"/>}

            />


            
        </div>
        
       
        </div>
        
    </section>
  )
}

export default Service
