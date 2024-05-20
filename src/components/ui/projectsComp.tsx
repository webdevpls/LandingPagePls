import React from 'react'
import { CardProduct } from './CardProduct'

import productImage1 from "@/assets/projeto1.svg";
import productImage2 from "@/assets/projeto2.svg";
import productImage3 from "@/assets/projeto3.svg";
import productImage4 from "@/assets/projeto4.svg";



function ProjectsComp() {
  return (
    <div className="flex  flex-col gap-6 ">

    <div className="flex flex-row gap-5">
      <CardProduct title1="Nextjs" title2="JS" title3="TypeScript" title4="ShadCN/UI" title5="LUXE" imageProject={productImage1}
      title="LandingPage Stan" description="Landing Page criada para a empresa Stan que forcece atendimento ágil ao cliente!" button="Ver projeto" href='https://stan-landing-page.vercel.app/'
      
      />
      
      <CardProduct title1="Html" title2="CSS" title3="JavaScrip" title4="Forms"  imageProject={productImage2}
      title="LandingPage Etrium" description="Landing Page criada para a empresa Etrium que fornece um software Jurídico!" button="Ver projeto" href='http://www.etrium.com.br/'
      
      />

      <CardProduct title1="React" title2="" title3="TypeScript" title4="ShadCN/UI" title5="LUXE" imageProject={productImage3}
      title="Jogo SecretWord" description="Jogo para advinhar a palavra aleátoria igual o famoso roda roda jequiti!" button="Ver projeto" href='https://secretwordgame-dusky.vercel.app/'
      
      />
      </div>

      <div className="flex flex-row justify-center  gap-5">
      <CardProduct title1="Figma" title2="Photoshop" title3="Illustrator" title4="SvgRepo" title5="" imageProject={productImage4}
      title="Desin App SkilHub" description="Landing Page criada para a empresa Etrium que fornece um software Jurídico!" button="Ver projeto" href='https://stan-landing-page.vercel.app/'
      
      />

      <CardProduct title1="Nextjs" title2="JS" title3="TypeScript" title4="Tailwind" title5="Shadcn"
      title="Landing Page Itaú" description="Landing Page Itaú, feito totalmente para fins de estudo." button="Ver projeto" href='https://landingpageitau.vercel.app/'
      
      />

      <CardProduct title1="Nextjs" title2="JS" title3="TypeScript" title4="ShadCN/UI" title5="LUXE"
      title="Clone UI Spotify" description="Desenvolvimento da tela principal do Spotify. Somente para estudo" button="Ver projeto" href='https://spotify-clone-front-end.vercel.app/'
      
      />


      </div>
  </div>
  )
}

export default ProjectsComp