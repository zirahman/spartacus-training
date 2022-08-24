import { Component, OnInit } from '@angular/core';
import { Note } from '../model/note.model';
import { UsernoteService } from '../services/usernote.service';
import { HttpClient } from '@angular/common/http';
import { GlobalMessageService, OccEndpointsService, UserIdService } from '@spartacus/core';


@Component({
  selector: 'app-user-note',
  templateUrl: './user-note.component.html',
  styleUrls: ['./user-note.component.scss']
})
export class UserNoteComponent implements OnInit {
  userNotes : any = [];
  
  constructor(private noteService : UsernoteService, private http: HttpClient, private occ: OccEndpointsService, 
    private globalMessageService: GlobalMessageService) {
  
   }

  //constructor(service: CustomUpdateprofileService){
  

  ngOnInit(): void {
    console.log('>>>> In UserNoteComponent Init method');
    //this.userNotes = this.noteService.loadUserNotes();
    //this.userNotes = this.noteService.getUserNotes();
    this.http.get<Note>(
      `${this.occ.getBaseUrl()}/user/note/all?customerId=zirahman@deloitte.com`)
      .subscribe(apiResponse => {
        this.userNotes = apiResponse;
        console.log('Service ---',apiResponse);
      }
      );
    console.log('In UserNoteComponent init method'+this.userNotes)
  }

}
