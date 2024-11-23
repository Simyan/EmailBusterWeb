import { useState } from 'react'
import { Button } from "@/components/ui/button"

interface AddNoisyBoxButtonProps {
    Ids : number[],
    UserId: number
}

function AddNoisyBoxButton(props : AddNoisyBoxButtonProps){

//TODO: call API to save this change
function handleOnClick() {
    alert("clicked");
} 

    return (
        <>
            <Button onClick={handleOnClick}>Add to Noisy Box</Button>
        </>
    )
}


export default AddNoisyBoxButton;


