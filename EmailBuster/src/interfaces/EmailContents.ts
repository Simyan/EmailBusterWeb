export interface EmailContents {
    emailSummaryId: number;
    emailContentItems: EmailContentItem[];
}

export interface EmailContentItem {
    id: number;
    sentOn: Date;
    emailContent: string;
}

        