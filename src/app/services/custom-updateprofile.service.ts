import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GlobalMessageService, OccEndpointsService } from '@spartacus/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Title, UserProfileFacade } from '@spartacus/user/profile/root';
import { UpdateProfileComponentService } from '@spartacus/user/profile/components';
import { from, Observable, Observer } from 'rxjs';
import { filter, switchMap, tap } from 'rxjs/operators';
import { User } from '@spartacus/user/account/root';
import { CustomUser } from '../model/customuser.model';

@Injectable({
  providedIn: 'root'
})
export class CustomUpdateprofileService extends UpdateProfileComponentService {
  list : any;
  responseData : any = [];
  constructor(private http: HttpClient, private occ: OccEndpointsService, 
    userProfile: UserProfileFacade, globalMessageService: GlobalMessageService){
    super(userProfile,globalMessageService);
    
  }

  /*ngOnInit(): void {
    this.getUserAPI();

   /* this.http.get(`${this.occ.getBaseUrl()}/custom/user/zirahman@deloitte.com`).subscribe(data=>{

      console.log("Response Data:" + data);

      this.list = data;

      this.responseData = this.list.posts;

    })

  }*/

 updateProfile1():void{
    console.log('In CustomUpdateprofileService');
    //this.user$.subscribe(user1 => console.log(user1));
    
  } 

  /**
   * Updates the user's details and handles the UI.
   */
   updateProfile(): void {
    console.log(">>>>> In Update Profile>>>>>");
    this.callTestAPI();
    console.log(">>>>> After Call Test API");
    console.log(">>>>> Before Call getUserAPI>>>>>");
    this.getUserAPI();
    console.log(">>>>> After Call getUserAPI");
    if (!this.form.valid) {
      this.form.markAllAsTouched();
      return;
    }

    this.busy$.next(true);

    this.userProfile.update(this.form.value).subscribe({
      next: () => this.onSuccess(),
      error: (error: Error) => this.onError(error),
    });
  }

  //OOTB get API -Start
  //protected user$ = this.getUserAPI()
  // .pipe(filter((user): user is User => Boolean(user)));
    
  //OOTB get API -END

  callTestAPI():void{
    this.http.get(
      `${this.occ.getBaseUrl()}/custom/user/profile`)
      .subscribe(apiResponse => console.log(apiResponse));
  }

  getUserAPI():any{
    this.http.get<CustomUser>(
      `${this.occ.getBaseUrl()}/custom/user/zirahman@deloitte.com`)
      .subscribe(apiResponse => {
        console.log(apiResponse);
      }
      ); 
     // return user$$$;
  }

  form: FormGroup = new FormGroup({
    customerId: new FormControl(''),
    titleCode: new FormControl(''),
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    favouriteQuote: new FormControl(''),
  });
}
