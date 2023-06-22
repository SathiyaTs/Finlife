import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactInformationComponent } from './contact-information 1/contact-information.component';
import { EngagementInformationComponent } from './engagement-information1/engagement-information.component';
import { EngagementQuestionsComponent } from './engagement-questions1/engagement-questions.component';
import { VendorProfileComponent } from './vendor-profile1/vendor-profile.component';
 

const routes: Routes = [
  {path:'Engagement Information',component:EngagementInformationComponent},
  {path:'Contact Information',component:ContactInformationComponent},
  {path:'Vendor Profile',component:VendorProfileComponent},
  {path:'Engagement Questions',component:EngagementQuestionsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
