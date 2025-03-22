import { useState, useEffect, useRef } from 'react'
import {
    Card,
    CardDescription,
    CardHeader,
    CardTitle
} from "@/components/ui/card"


interface EmailContentSummaryProp {
    id : number,
    sentOn: Date,
    emailContent: string
}


function EmailContentSummary(props : EmailContentSummaryProp){
    return (
        <>
        <Card className='w-full'>
            <CardHeader>
                <CardTitle> 
                    {props.sentOn.toLocaleDateString()} 
                </CardTitle>
                <CardDescription>
                    {props.emailContent}
                </CardDescription>
            </CardHeader>
        </Card>
    </>
    )
}


export default EmailContentSummary;