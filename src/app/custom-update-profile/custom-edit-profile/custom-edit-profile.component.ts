import { Component, OnInit } from '@angular/core';
import { UpdateProfileComponent } from '@spartacus/user/profile/components';
import { CustomUpdateprofileService } from 'src/app/services/custom-updateprofile.service';

@Component({
  selector: 'app-custom-edit-profile',
  templateUrl: './custom-edit-profile.component.html',
  styleUrls: ['./custom-edit-profile.component.scss']
})
export class CustomEditProfileComponent extends UpdateProfileComponent {
  constructor(service: CustomUpdateprofileService){
    super(service);
  }
}
