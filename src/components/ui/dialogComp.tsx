import React from 'react'

import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "./alert-dialog";
import { Square3Stack3DIcon } from '@heroicons/react/24/solid';
import { Badge } from './badge';


function DialogComp() {
  return (
    <AlertDialog>
            <AlertDialogTrigger className="bg-[#020007] border border-[#574487] hover:bg-[#574487] w-24 text-white text- rounded-md font-semibold text-xs flex items-center justify-center gap-1">Outros
            <Square3Stack3DIcon className="size-3"/>
            </AlertDialogTrigger>
            <AlertDialogContent>
                <AlertDialogHeader>
                <AlertDialogTitle>Tecnologias utilizadas:</AlertDialogTitle>
                <AlertDialogDescription className='flex flex-wrap gap-1'>
                    <Badge title='Nextjs'/> <Badge title='Nextjs'/> <Badge title='Firebase'/> <Badge title='ReactNative'/> <Badge title='MUI'/>
                </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                <AlertDialogAction>Continue</AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
            </AlertDialog>
  )
}

export default DialogComp