import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { NgxSpinnerModule } from 'ngx-spinner';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';


import { PersonalInfoComponent } from './components/personal-info/personal-info.component';
import { PassportInfoComponent } from './components/passport-info/passport-info.component';
import { EducationInfoComponent } from './components/education-info/education-info.component';
import { ServiceInfoComponent } from './components/service-info/service-info.component';
import { DocumentsInfoComponent } from './components/documents-info/documents-info.component';
import { AuthComponent } from './components/auth/auth.component';
import { LoginComponent } from './components/auth/login/login.component';
import { LoginService } from './services/login.service';
import { SignupComponent } from './components/auth/signup/signup.component';

@NgModule({
  declarations: [
    AppComponent,
    PersonalInfoComponent,
    PassportInfoComponent,
    EducationInfoComponent,
    ServiceInfoComponent,
    DocumentsInfoComponent,
    AuthComponent,
    LoginComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    NgMultiSelectDropDownModule.forRoot(),
    FormsModule,
    NgxSpinnerModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule
  ],
  providers: [LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
