import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomEditProfileComponent } from './custom-edit-profile/custom-edit-profile.component';
import { CmsConfig, ConfigModule, I18nModule } from '@spartacus/core';
import { ReactiveFormsModule } from '@angular/forms';
import { SpinnerModule } from '@spartacus/storefront';
import { FormErrorsModule } from '@spartacus/storefront';
import { RouterModule } from '@angular/router';




@NgModule({
  declarations: [
    CustomEditProfileComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SpinnerModule,
    I18nModule,
    FormErrorsModule,
    RouterModule/*,
    ConfigModule.withConfig({
      cmsComponents : {
        UpdateProfileComponent : {
          component : CustomEditProfileComponent
        }
      }
    } as CmsConfig)*/
  ]
})
export class CustomUpdateProfileModule { }
