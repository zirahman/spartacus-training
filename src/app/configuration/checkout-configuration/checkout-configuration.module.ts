import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheckoutConfig } from '@spartacus/checkout/root';
import { ConfigModule } from '@spartacus/core';



@NgModule({
  declarations: [],
  imports: [
    ConfigModule.withConfig({
      checkout :{
        guest:true,
      }
    } as CheckoutConfig)
    
  ]
})
export class CheckoutConfigurationModule { }
