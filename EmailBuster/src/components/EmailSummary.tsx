import { useState, useEffect, useRef } from 'react'
import {
    Card,
    CardDescription,
    CardHeader,
    CardTitle
} from "@/components/ui/card"

interface EmailSummaryProp {
    id : number,
    numberOfEmails : number,
    emailId : string,
    emailFrequencyRank : number,
    onClickHandle : (id : number , isSelected : boolean) => void
}




function EmailSummary(props : EmailSummaryProp){
    
    const { id, numberOfEmails , emailId , emailFrequencyRank } = props;
    const [isSelected, setIsSelected] = useState(false);
    const firstRender = useRef(true);
    const cardColor = isSelected ? 'bg-cyan-400' : '';
    function handleClick(){
        setIsSelected((prev) => !prev);  
    } 

    useEffect(() => {
        if(firstRender.current){
            console.log("yo");
            firstRender.current = false;
        }
        else{
            console.log("heey");
            props.onClickHandle(id, isSelected);    
        }
    }, [isSelected]);
    
    return (
        <>
            <Card className={cardColor} onClick={handleClick}>
                <CardHeader>
                    <CardTitle> 
                        {numberOfEmails} emails from {emailId} 
                    </CardTitle>
                    <CardDescription>
                        Rank is {emailFrequencyRank}
                    </CardDescription>
                </CardHeader>
            </Card>
        </>
    )
}


export default EmailSummary;