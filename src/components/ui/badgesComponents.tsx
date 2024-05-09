import React from 'react'
import { Badge } from './badge'

function BadgesComponents() {
  return (
    <div className="flex flex-col items-center gap-2 py-4">
    <div className=" flex flex-row max-w-full gap-2">
     <Badge title="NextJs" />
     <Badge title="ReactJs"/>
     <Badge title="TailwindCSS"/>
     <Badge title="Figma" />
     <Badge title="Illustrator"/>
     <Badge title="NextJs" />
     </div>

     <div className=" flex flex-row max-w-full gap-2">
     <Badge title="TypeScript" />
     <Badge title="Firebase" />
     <Badge title="MySql"/>
     <Badge title="Java"/>
     <Badge title="ReactNative"/>
     </div>

     </div>
  )
}

export default BadgesComponents
