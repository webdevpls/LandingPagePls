import { ArchiveBoxIcon } from "@heroicons/react/24/solid";
import { ChevronRightIcon } from "lucide-react";


type ServiceProps = {
  title: string,
  subtitle: string,
  icon: React.ReactNode
}
export function CardAnimatedBorder({title, subtitle, icon}: ServiceProps) {
    return (
      <div className="w-full max-w-[550px]">
        <div className="group relative grid overflow-hidden rounded-xl px-4 py-8 shadow-[0_1000px_0_0_hsl(0_0%_20%)_inset] transition-colors duration-200">
          <span>
            <span className="spark mask-gradient animate-flip before:animate-rotate absolute inset-0 h-[100%] w-[100%] overflow-hidden rounded-xl [mask:linear-gradient(white,_transparent_50%)] before:absolute before:aspect-square before:w-[200%] before:rotate-[-90deg] before:bg-[conic-gradient(from_0deg,transparent_0_340deg,white_360deg)] before:content-[''] before:[inset:0_auto_auto_50%] before:[translate:-50%_-15%]" />
          </span>
          <span className="backdrop absolute inset-px rounded-[11px] bg-[#020007] transition-colors duration-200" />
          <div className="space-y-2 z-10">
            {icon}
            <h3 className="text-xl font-semibold text-neutral-200">{title}</h3>
            <p className="text-sm leading-[1.5] text-neutral-400">
              {subtitle}
            </p>
            <a href="https://api.whatsapp.com/send?phone=5583999794840&text=Ol%C3%A1,%20queria%20fazer%20um%20or%C3%A7amento!%20%F0%9F%98%83%F0%9F%9A%80" target='_blank' className="flex items-center pt-5 justify- gap-1 text-sm font-normal text-[#8776B2]  duration-300 hover:gap-2">
              Solicitar Orçamento
              <ChevronRightIcon className="w-3 pt-1" />
            </a>
          </div>
        </div>
      </div>
    );
  }