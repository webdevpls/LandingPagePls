import React from 'react'
import { CardProduct } from './CardProduct'

function ProjectsComp() {
  return (
    <div className="flex  flex-col gap-6 ">

    <div className="flex flex-row gap-5">
      <CardProduct title1="Nextjs" title2="JS" title3="TypeScript" title4="ShadCN/UI" title5="LUXE"
      title="LandingPage Stan" description="Landing Page criada para a empresa Stan que forcece atendimento ágil ao cliente!" button="Ver projeto" href='https://stan-landing-page.vercel.app/'
      
      />
      
      <CardProduct title1="Nextjs" title2="JS" title3="TypeScript" title4="ShadCN/UI" title5="LUXE"
      title="LandingPage Etrium" description="Landing Page criada para a empresa Etrium que fornece um software Jurídico!" button="Ver projeto" href='http://www.etrium.com.br/'
      
      />

      <CardProduct title1="Nextjs" title2="JS" title3="TypeScript" title4="ShadCN/UI" title5="LUXE"
      title="Jogo SecretWord" description="Jogo para advinhar a palavra aleátoria igual o famoso roda roda jequiti!" button="Ver projeto" href='https://stan-landing-page.vercel.app/'
      
      />
      </div>

      <div className="flex flex-row justify-center  gap-5">
      <CardProduct title1="Nextjs" title2="JS" title3="TypeScript" title4="ShadCN/UI" title5="LUXE"
      title="Desin App SkilHub" description="Landing Page criada para a empresa Etrium que fornece um software Jurídico!" button="Ver projeto" href='https://stan-landing-page.vercel.app/'
      
      />

      <CardProduct title1="Nextjs" title2="JS" title3="TypeScript" title4="ShadCN/UI" title5="LUXE"
      title="Desin App SkilHub" description="Landing Page criada para a empresa Etrium que fornece um software Jurídico!" button="Ver projeto" href='https://stan-landing-page.vercel.app/'
      
      />

       <CardProduct title1="Nextjs" title2="JS" title3="TypeScript" title4="ShadCN/UI" title5="LUXE"
      title="Desin App SkilHub" description="Landing Page criada para a empresa Etrium que fornece um software Jurídico!" button="Ver projeto" href='https://stan-landing-page.vercel.app/'
      
      />    

      </div>
  </div>
  )
}

export default ProjectsComp
