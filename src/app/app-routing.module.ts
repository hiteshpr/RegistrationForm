import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PagesComponent } from './components/pages/pages.component';
import { PersonalInfoComponent } from './components/pages/personal-info/personal-info.component';
import { PassportInfoComponent } from './components/pages/passport-info/passport-info.component';
import { EducationInfoComponent } from './components/pages/education-info/education-info.component';
import { ServiceInfoComponent } from './components/pages/service-info/service-info.component';
import { DocumentsInfoComponent } from './components/pages/documents-info/documents-info.component';
import { LoginComponent } from './components/auth/login/login.component';
import { SignupComponent } from './components/auth/signup/signup.component';
import { NotFoundComponent } from './components/auth/not-found/not-found.component';

const routes: Routes = [
    { 
      path:'', redirectTo: 'login' , pathMatch: 'full'
    },
    {
      path: 'login', component:LoginComponent
    },
    
    {
      path : 'register', component: SignupComponent
    },
    { 
      path : 'pages',
      component: PagesComponent,
      children: [
        {path: '', redirectTo: 'personalInfo', pathMatch: 'full'}, 
        { path:'personalInfo', component: PersonalInfoComponent },
        { path :'passportInfo', component: PassportInfoComponent },
        { path : 'educationInfo', component : EducationInfoComponent },
        { path : 'serviceInfo', component : ServiceInfoComponent },
        { path : 'documentsInfo', component: DocumentsInfoComponent },
      ]
    },
    {
      path: 'not-found',  component: NotFoundComponent
    },
    {
      path : "**", redirectTo: 'not-found', pathMatch: 'full'
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
