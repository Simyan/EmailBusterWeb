import { useEffect, useState } from 'react'
import EmailSummary from '@/components/EmailSummary'
import AddBoxButton from '@/components/AddBoxButton'
import AddNoisyBoxButton from '@/components/AddNoisyBoxButton'
import {createFileRoute} from '@tanstack/react-router'
import './../App.css'
import EmailContentSummary from '@/components/EmailContentSummary'


export const Route = createFileRoute('/home')({
    component: Home
})

//Dummy data - start
interface EmailSummary {
    id : number,
    numberOfEmails: number,
    emailId: string,
    emailFrequencyRank: number
}

interface EmailContentItem {
    id: number,
    sentOn: Date,
    emailContent: string
}

interface EmailContents {
    emailSummaryId: number,
    emailContentItems: EmailContentItem[]   
}

const data: EmailSummary[] = [
    { id : 1, numberOfEmails: 10, emailId: "sim@test.com", emailFrequencyRank: 5 },
    { id : 2, numberOfEmails: 30, emailId: "aayu@test.com", emailFrequencyRank: 4 },
    { id : 3, numberOfEmails: 40, emailId: "enbd@test.com", emailFrequencyRank: 3 },
    { id : 4, numberOfEmails: 50, emailId: "vt@test.com", emailFrequencyRank: 2 },
    { id : 5, numberOfEmails: 70, emailId: "sid@test.com", emailFrequencyRank: 1 },
]

const dataEmailContents : EmailContents[] = [
    { 
        emailSummaryId : 1, 
        emailContentItems: [
                             {id: 100, sentOn: new Date(2024, 11, 20), emailContent: "Hello XYX, Blah blah blah...More blah blah"},
                             {id: 140, sentOn: new Date(2024, 12, 14), emailContent: "Hello XYX, WOOO blah blah...More blah blah"},
                             {id: 143, sentOn: new Date(2024, 12, 18), emailContent: "Oh hello there this is a sample mail"},
                           ]
    },
    { 
        emailSummaryId : 2, 
        emailContentItems: [
                             {id: 103, sentOn: new Date(2024, 10, 18), emailContent: "LALALALALA LALAL ALA ALA ALA AA"},
                             {id: 120, sentOn: new Date(2024, 11, 17), emailContent: "KAMEHAMAMEHAAAAAA"},
                             {id: 129, sentOn: new Date(2024, 12, 9), emailContent: "OO OOOO OOO adasddsadsddsa sadasdsasad dassdadsd addsdsdsdsa daadsadsdadsds dadssddsds a ds"},
                             {id: 150, sentOn: new Date(2025, 1, 3), emailContent: "HAKUNA MATATA TIMON AND PUMBA HAHAHA"},
                           ]
    }
]


//let selectedEmailContent : EmailContents | undefined;



const userId : number = 880012;
//Dummy data - end



function Home() {

    const [selectedEmails, setSelectedEmails] = useState<number[]>([]);
    const [emailPreview, setEmailPreview] = useState<EmailContents>();
    

    function onEmailSelectionToggle(id: number, isSelected : boolean){
        
         setSelectedEmails((prev) =>{
            return isSelected 
                        ? [...prev, id] 
                        : prev.filter(item => item != id)
           });   
    }

    function onEmailHiglightShowPreviews(id : number){
        console.log(`Hovered onto ${id}`)
        let selectedEmailContent = dataEmailContents.find(item => item.emailSummaryId === id)
        setEmailPreview(selectedEmailContent);
    }

    

    return (
        <>
            <div id='header'>
                <h1>HEADER</h1>
            </div>

            <div className='email-container'>
                <div className='unmarked-emails' id='unmarkedEmails'>
                    {data.map(email => 
                        <EmailSummary
                            key={email.id}
                            id={email.id}
                            numberOfEmails={email.numberOfEmails}
                            emailFrequencyRank={email.emailFrequencyRank}
                            emailId={email.emailId} 
                            onClickHandle={onEmailSelectionToggle}
                            onMouseEnterHandle={onEmailHiglightShowPreviews}
                        />
                    )}

                    
                    
                    {/* <AddNoisyBoxButton/> */}
                </div>
                <div className='email-contents'>
                    <p>{emailPreview?.emailSummaryId}</p>
                    <hr className='w-full' />
                    {
                        emailPreview?.emailContentItems.map(content =>
                            <EmailContentSummary
                                key={content.id}
                                id={content.id}
                                sentOn={content.sentOn}
                                emailContent={content.emailContent}
                            />
                        )
                    }
                </div>
            </div>

            
            <AddBoxButton
                    ids={selectedEmails}
                    userId={userId}
                />
            <div id='emailPreview'>
            <h1>EMAIL PREVIEW</h1>
            <pre>{selectedEmails}</pre>
            </div>


        </>
    )
}


export default Home;