import { useEffect, useState } from 'react'
import EmailSummary from '@/components/EmailSummary'
import AddBoxButton from '@/components/AddBoxButton'
import AddNoisyBoxButton from '@/components/AddNoisyBoxButton'

//Dummy data - start
interface EmailSummary {
    id : number,
    numberOfEmails: number,
    emailId: string,
    emailFrequencyRank: number
}

const data: EmailSummary[] = [
    { id : 1, numberOfEmails: 10, emailId: "sim@test.com", emailFrequencyRank: 5 },
    { id : 2, numberOfEmails: 30, emailId: "aayu@test.com", emailFrequencyRank: 4 },
    { id : 3, numberOfEmails: 40, emailId: "enbd@test.com", emailFrequencyRank: 3 },
    { id : 4, numberOfEmails: 50, emailId: "vt@test.com", emailFrequencyRank: 2 },
    { id : 5, numberOfEmails: 70, emailId: "sid@test.com", emailFrequencyRank: 1 },
]

const userId : number = 880012;
//Dummy data - end



function Home() {

    const [selectedEmails, setSelectedEmails] = useState<number[]>([]);

    function onEmailSelectionToggle(id: number, isSelected : boolean){
        
         setSelectedEmails((prev) =>{
            return isSelected 
                        ? [...prev, id] 
                        : prev.filter(item => item != id)
           });   
    }

    

    return (
        <>
            <div id='header'>
                <h1>HEADER</h1>
            </div>

            <div id='unmarkedEmails'>
                {data.map(email => 
                    <EmailSummary
                        key={email.id}
                        id={email.id}
                        numberOfEmails={email.numberOfEmails}
                        emailFrequencyRank={email.emailFrequencyRank}
                        emailId={email.emailId} 
                        onClickHandle={onEmailSelectionToggle}
                    />
                )}

                <AddBoxButton
                    ids={selectedEmails}
                    userId={userId}
                />
                {/* <AddNoisyBoxButton/> */}
            </div>

            <div id='emailPreview'>
            <h1>EMAIL PREVIEW</h1>
            <pre>{selectedEmails}</pre>
            </div>


        </>
    )
}


export default Home;