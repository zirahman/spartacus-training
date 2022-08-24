import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { UpdateNoteComponent } from './update-note.component';
import { CmsPageGuard } from '@spartacus/storefront';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const value : Routes=[
  {
    path: 'note/add',
    component:UpdateNoteComponent,
    canActivate: [CmsPageGuard],
  }
]

@NgModule({
  declarations: [
    UpdateNoteComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(value)
  ]
})
export class UpdateNoteModule { }
