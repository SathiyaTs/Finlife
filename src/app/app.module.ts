import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { EngagementinfoAddEditComponent } from './engagementinfo-add-edit 1/engagementinfo-add-edit.component';
import {MatDialogModule } from '@angular/material/dialog';
import { NavbarComponent } from './navbar1/navbar.component';
import { EngagementInformationComponent } from './engagement-information1/engagement-information.component';
import { ContactInformationComponent } from './contact-information 1/contact-information.component';
import { VendorProfileComponent } from './vendor-profile1/vendor-profile.component';
import { EngagementQuestionsComponent } from './engagement-questions1/engagement-questions.component';
 
@NgModule({
  declarations: [
    AppComponent,
    EngagementinfoAddEditComponent,
    NavbarComponent,
    EngagementInformationComponent,
    ContactInformationComponent,
    VendorProfileComponent,
    EngagementQuestionsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
