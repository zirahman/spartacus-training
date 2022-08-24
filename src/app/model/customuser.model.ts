import { Address, Currency, Language } from "@spartacus/core";
import { last } from "rxjs/operators";

export class CustomUser {
    currency?: Currency;
    customerId?: string;
    deactivationDate?: Date;
    defaultAddress?: Address;
    displayUid?: string;
    firstName?: string;
    language?: Language;
    lastName?: string;
    name?: string;
    title?: string;
    titleCode?: string;
    uid?: string;
    roles?: string[];
    favouriteQuote?:string;
    constructor(currency: Currency, customerId: string, deactivationDate: Date, 
        defaultAddress: Address, displayUid: string, firstName: string, language: Language, 
        lastName: string, name : string, title : string, titleCode : string, uid: string,
        roles: string[], favouriteQuote : string){  
            this.currency=currency;
            this.customerId=customerId;
            this.deactivationDate=deactivationDate;
            this.defaultAddress = defaultAddress;
            this.displayUid=displayUid;
            this.firstName=firstName;
            this.language=language;
            this.lastName=lastName;
            this.name=name;
            this.title=title;
            this.titleCode = titleCode;
            this.uid=uid;
            this.roles=roles;
            this.favouriteQuote = favouriteQuote;
        }
}