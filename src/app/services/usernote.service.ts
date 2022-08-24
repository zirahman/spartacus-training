import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GlobalMessageService, OccEndpointsService, UserIdService } from '@spartacus/core';
import { Note } from '../model/note.model';

@Injectable({
  providedIn: 'root'
})
export class UsernoteService {

  userNotes : any = [];

  constructor(private http: HttpClient, private occ: OccEndpointsService, 
    private globalMessageService: GlobalMessageService, private userIdService : UserIdService) { }

    loadUserNotes():Note[]{
      this.userIdService.getUserId().subscribe(userData => {
        console.log('User id >>>>>>>> '+userData);
      });
      this.http.get<Note>(
        `${this.occ.getBaseUrl()}/user/note/all?customerId=zirahman@deloitte.com`)
        .subscribe(apiResponse => {
          this.userNotes = apiResponse;
          console.log('Service ---',apiResponse);
        }
        ); 
       return this.userNotes;
    }

    getUserNotes():any{
      return this.http.get(`${this.occ.getBaseUrl()}/user/note/all?customerId=zirahman@deloitte.com`);
    }
 
}
