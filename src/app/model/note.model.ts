export class Note {
    customerId?: string;
    noteId?: string;
    title?: string;
    subject?: string;
    lastUpdatedDate?: Date;
    content?: string;
    constructor(customerId: string, noteId: string, title: string,  
        subject: string, lastUpdatedDate: Date, content: string){ 
            this.customerId=customerId;
            this.noteId=noteId;
            this.title = title;
            this.subject=subject;
            this.lastUpdatedDate=lastUpdatedDate;
            this.content=content;
        }
}