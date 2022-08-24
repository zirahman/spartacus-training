import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserNoteComponent } from './user-note.component';
import { RouterModule, Routes } from '@angular/router';
import { CmsPageGuard } from '@spartacus/storefront';

const value : Routes=[
  {
    path: 'note',
    component:UserNoteComponent,
    canActivate: [CmsPageGuard],
  }
]

@NgModule({
  declarations: [
    UserNoteComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(value)
  ]
})
export class UserNoteModule { }
