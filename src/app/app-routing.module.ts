import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PersonalInfoComponent } from './components/personal-info/personal-info.component';
import { PassportInfoComponent } from './components/passport-info/passport-info.component';
import { EducationInfoComponent } from './components/education-info/education-info.component';
import { ServiceInfoComponent } from './components/service-info/service-info.component';
import { DocumentsInfoComponent } from './components/documents-info/documents-info.component';
import { LoginComponent } from './components/auth/login/login.component';
import { SignupComponent } from './components/auth/signup/signup.component';

const routes: Routes = [
    { 
      path:'', redirectTo: 'login' , pathMatch: 'full'
    },
    {
      path: 'login', component:LoginComponent
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
    {
      path : 'register', component: SignupComponent
    },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
