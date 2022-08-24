import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder  } from '@angular/forms';
import { FormGroup, FormControl } from '@angular/forms';
import { GlobalMessageService, OccEndpointsService } from '@spartacus/core';
import { Note } from '../model/note.model';
import { UsernoteService } from '../services/usernote.service';

@Component({
  selector: 'app-update-note',
  templateUrl: './update-note.component.html',
  styleUrls: ['./update-note.component.scss']
})
export class UpdateNoteComponent implements OnInit {

  formData: any;
  emailid:any;
  userNote : Note | undefined;


  constructor(private noteService : UsernoteService, private http: HttpClient, private occ: OccEndpointsService, 
    private globalMessageService: GlobalMessageService) { }

  ngOnInit(): void {
    this.formData = new FormGroup({
      title: new FormControl(),
      subject: new FormControl(),
      content: new FormControl()
   });
  }

  onClickSubmit(data: Note) {
    this.userNote = data; 
    console.log("Creare Note -->>",data); 
    this.http.post<Note>(
      `${this.occ.getBaseUrl()}/user/note/add`,data)
      .subscribe(apiResponse => {
        console.log('Response from create note Service ---',apiResponse);
      }
      );
  }

}
