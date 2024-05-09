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
            <a href='' className="text-white ml-6  hover:text-[#8776B2]">Home</a>
            <a href='' className="text-white ml-6 hover:text-[#8776B2]">Projetos</a>
            <a href='' className="text-white ml-6 hover:text-[#8776B2]">Serviços</a>
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
