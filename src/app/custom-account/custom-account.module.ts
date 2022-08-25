import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomAccountComponent } from './custom-account.component';
import { CardModule, CmsPageGuard } from '@spartacus/storefront';
import { RouterModule, Routes } from '@angular/router';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

const value : Routes=[
  {
    path: 'custom/account',
    component:CustomAccountComponent,
    canActivate: [CmsPageGuard],
  }
]


@NgModule({
  declarations: [
    CustomAccountComponent
  ],
  imports: [
    CommonModule,
    NgbModule,
    CardModule,
    RouterModule.forChild(value)
  ]
})
export class CustomAccountModule { }
