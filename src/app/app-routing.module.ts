import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PersonalInfoComponent } from './components/personal-info/personal-info.component';
import { PassportInfoComponent } from './components/passport-info/passport-info.component';
import { EducationInfoComponent } from './components/education-info/education-info.component';
import { ServiceInfoComponent } from './components/service-info/service-info.component';
import { DocumentsInfoComponent } from './components/documents-info/documents-info.component';

const routes: Routes = [
    { 
      path:'', redirectTo: 'personalInfo' , pathMatch: 'full'
    },
    { 
      path:'personalInfo', component: PersonalInfoComponent 
    },
    {
      path :'passportInfo', component: PassportInfoComponent
    },
    {
      path : 'educationInfo', component : EducationInfoComponent
    },
    {
      path : 'serviceInfo', component : ServiceInfoComponent
    },
    {
      path : 'documentsInfo', component: DocumentsInfoComponent
    },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
