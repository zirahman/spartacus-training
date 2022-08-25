import { Component, OnInit } from '@angular/core';
import { Address, TranslationService, User } from '@spartacus/core';
import { combineLatest, Observable } from 'rxjs';
import { UseraccountService } from '../services/useraccount.service';
import { Card } from '@spartacus/storefront';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-custom-account',
  templateUrl: './custom-account.component.html',
  styleUrls: ['./custom-account.component.scss']
})
export class CustomAccountComponent implements OnInit {
  user : User ={};
  //addresses : Address[] =[];
  addresses$:any;
  active = 1;
  constructor(private accountService:UseraccountService, 
    private translation: TranslationService) { }

  ngOnInit(): void {
    this.user = this.accountService.getUserDetails().subscribe((data: any) => 
      {
        this.user = data;
        console.log("User data >>> ",data);
      });

    this.accountService.getUserAddress().subscribe((data : any) => 
    {
      this.addresses$ = data;
      console.log("address >>>>> ",data);
    });
  }

  addAddressButtonHandle(){
    console.log('add address clicked');
  }

  getCardContent(address: Address) {
    return combineLatest([
      this.translation.translate('addressCard.default'),
      this.translation.translate('addressCard.setAsDefault'),
      this.translation.translate('common.delete'),
      this.translation.translate('common.edit'),
      this.translation.translate('addressBook.areYouSureToDeleteAddress'),
    ]).pipe(
      map(
        ([
          defaultText,
          setAsDefaultText,
          textDelete,
          textEdit,
          textVerifyDeleteMsg,
        ]) => {
          let region = '';

          if (address.region && address.region.isocode) {
            region = address.region.isocode + ', ';
          }

          const actions: { name: string; event: string }[] = [];
          if (!address.defaultAddress) {
            actions.push({ name: setAsDefaultText, event: 'default' });
          }
          actions.push({ name: textEdit, event: 'edit' });
          actions.push({ name: textDelete, event: 'delete' });

          return {
            textBold: address.firstName + ' ' + address.lastName,
            text: [
              address.line1,
              address.line2,
              address.town + ', ' + region + address.country?.isocode,
              address.postalCode,
              address.phone,
            ],
            actions: actions,
            header: address.defaultAddress ? `✓ ${defaultText}` : '',
            deleteMsg: textVerifyDeleteMsg,
          };
        }
      )
    );
  }


  getProfileContent(user: User) {
    return combineLatest([
      this.translation.translate('addressCard.default'),
      this.translation.translate('addressCard.setAsDefault'),
      this.translation.translate('common.delete'),
      this.translation.translate('common.edit'),
      this.translation.translate('addressBook.areYouSureToDeleteAddress'),
    ]).pipe(
      map(
        ([
          defaultText,
          setAsDefaultText,
          textDelete,
          textEdit,
          textVerifyDeleteMsg,
        ]) => {
          let region = '';

          if (user.defaultAddress && user.defaultAddress.formattedAddress) {
            region = user.defaultAddress.formattedAddress ;
          }

          const actions: { name: string; event: string }[] = [];
          /** if (!user.defaultAddress) {
            actions.push({ name: setAsDefaultText, event: 'default' });
          } */
          actions.push({ name: textEdit, event: 'edit' });
          actions.push({ name: textDelete, event: 'delete' });

          return {
            textBold: user.title +' '+user.firstName + ' ' + user.lastName,
            text: [
              user.displayUid,
              user.defaultAddress?.phone,
              user.language?.name,
              user.currency?.name,
            ],
            actions: actions,
            header: user.defaultAddress ? `✓ ${defaultText}` : '',
            deleteMsg: textVerifyDeleteMsg,
          };
        }
      )
    );
  }



}
