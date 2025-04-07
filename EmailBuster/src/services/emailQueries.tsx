import {useQuery} from '@tanstack/react-query';
import { getUnmarkedEmails, getUnmarkedEmailPreviews } from './api';

export const useUnmarkedEmailsQuery = () => {
   console.log("called useUnmarkedEmailPreviewsQuery");
   return  useQuery({
        queryKey: ['unmarkedEmails'],
        queryFn: () => getUnmarkedEmails(),
    })
}


export const useUnmarkedEmailPreviewsQuery = () => {
    console.log("called useUnmarkedEmailPreviewsQuery");
    return useQuery({
        queryKey: ['unmarkedEmailPreviews'],
        queryFn: () => getUnmarkedEmailPreviews()    
    });
}



