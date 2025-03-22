import { useState } from 'react'
import { Button } from "@/components/ui/button"


import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"
import BoxFormDialouge from './BoxFormDialouge';

export interface SelectedEmailProp{
    ids : number[],
    userId: number,
}

function AddBoxButton(prop : SelectedEmailProp ){
    return (
        <div className='unmarked-email-button'>   
            <Dialog>
                <DialogTrigger asChild>
                    <Button>Add to Box</Button>
                </DialogTrigger>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>Move emails to</DialogTitle>
                    </DialogHeader>
                    <BoxFormDialouge
                        {...prop}
                    />
                </DialogContent>
            </Dialog>
        </div>
    )
}





export default AddBoxButton;