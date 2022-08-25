import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Address, GlobalMessageService, OccEndpointsService, UserIdService } from '@spartacus/core';
import { User } from '@spartacus/user/account/root';
import { Observable, Observer } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UseraccountService {

  userDetails : any ;
  userId:any = this.userIdService.getUserId().subscribe(uId => {
    this.userId = uId;
    console.log("user id >>> "+this.userId);
  });

  constructor(private httpClient: HttpClient, private occ : OccEndpointsService,
    private globalMessageService : GlobalMessageService, private userIdService : UserIdService) {
     }

  loadUserDeatails():any{
    return this.httpClient.get(
      `${this.occ.getBaseUrl()}/users/${this.userId}`);
      /*.subscribe(apiResponse => {
        this.userDetails = apiResponse;
        console.log('Service ---',apiResponse);
      }
      ); */
     // return this.userDetails;
  }

  getUserDetails():any{
    return this.httpClient.get(`${this.occ.getBaseUrl()}/users/current`);
  }

  getUserAddress():any{
    return this.httpClient.get(`${this.occ.getBaseUrl()}/users/current/addresses`);
  }
}
