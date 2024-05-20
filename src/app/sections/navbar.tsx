import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';

import Logo from '@/app/favicon.ico'

const Navbar = () => {
  return (
    <nav className=" py-9 z-10">
      <div className="container max-w-[60rem] flex items-center justify-between">
        <div className="flex items-center">
          
            <a href='' className="text-white text-lg font-bold select-none">
              <Image src={Logo} alt='Logo' className='size-12'/>
            </a>
          
        </div>
        <div className="flex items-center">

        <div className='mr-7'>
            <a href='#home' className="text-white ml-6  hover:text-[#a3a0ad]">Home</a>
            <a href='#projects' className="text-white ml-6 hover:text-[#a3a0ad]">Projetos</a>
            <a href='#services' className="text-white ml-6 hover:text-[#a3a0ad]">Serviços</a>
        </div>

         
          <Button>
            Contato
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
