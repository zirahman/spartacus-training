import { HttpClientModule } from "@angular/common/http";
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { EffectsModule } from "@ngrx/effects";
import { StoreModule } from "@ngrx/store";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SpartacusModule } from './spartacus/spartacus.module';
import { CustomSiteLogoComponentComponent } from './custom-site-logo-component/custom-site-logo-component.component';
import { CustomPdpModule } from "./custom-pdp/custom-pdp.module";
import { CheckoutComponentsModule } from "@spartacus/checkout/components";
import { CheckoutConfigurationModule } from "./configuration/checkout-configuration/checkout-configuration.module";
import { CustomUpdateProfileModule } from "./custom-update-profile/custom-update-profile.module";
import { UserNoteModule } from "./user-note/user-note.module";
import { UpdateNoteModule } from "./update-note/update-note.module";
import { ReactiveFormsModule } from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    CustomSiteLogoComponentComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    SpartacusModule,
    CustomPdpModule,
    CustomUpdateProfileModule,
    UserNoteModule,
    UpdateNoteModule,
    ReactiveFormsModule
    //CheckoutConfigurationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
