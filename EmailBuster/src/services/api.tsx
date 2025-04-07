import Axios from "axios";
import { EmailSummary } from '@/interfaces/EmailSummary';
import { EmailContents } from '@/interfaces/EmailContents';

const BASE_URL = "http://localhost:8080";
const axios = Axios.create({baseURL: BASE_URL});

export const getUnmarkedEmails = async() => {
    return (await axios.get<EmailSummary[]>(`UnmarkedEmails`)).data;
}

export const getUnmarkedEmailPreviews = async() => {
    return (await axios.get<EmailContents[]>(`UnmarkedEmailPreviews`)).data;
}

// export const Api = {
//     getUnmarkedEmails,
//     getUnmarkedEmailPreviews
// }





