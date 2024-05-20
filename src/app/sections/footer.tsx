import Image from 'next/image'
import React from 'react'

import Logo from '@/app/favicon.ico'
import { Button } from '@/components/ui/button'
 

function Footer() {
  return (
    <footer className='bg-[#020007] text-white py-6 px-8'>
        <div className="container max-w-[100rem] flex items-center justify-between gap-6">
            
            <div>
            <Image src={Logo} alt='Logo' className='size-12'/>
            </div>

            <div>
            <a href='#home' className="text-white ml-6  hover:text-[#a3a0ad]">Home</a>
            <a href='#projects' className="text-white ml-6 hover:text-[#a3a0ad]">Projetos</a>
            <a href='#services' className="text-white ml-6 hover:text-[#a3a0ad]">Serviços</a>

           
            <Button className='ml-3'>
            Contato
            </Button>
        
            </div>

         
        
        </div>

        <span className="container max-w-[100rem] flex items-center justify-between gap-6 mt-7">© Feito por pedro Lucas</span>

        
    </footer>
  )
}

export default Footer
