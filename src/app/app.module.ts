import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { NgxSpinnerModule } from 'ngx-spinner';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { HttpClientModule } from '@angular/common/http'; 

import { RestService } from './services/rest.service';
import { FooterComponent } from './components/ui/footer/footer.component';
import { HeaderComponent } from './components/ui/header/header.component';
import { LayoutComponent } from './components/ui/layout/layout.component';
import { PersonalInfoComponent } from './components/pages/personal-info/personal-info.component';
import { PassportInfoComponent } from './components/pages/passport-info/passport-info.component';
import { EducationInfoComponent } from './components/pages/education-info/education-info.component';
import { ServiceInfoComponent } from './components/pages/service-info/service-info.component';
import { DocumentsInfoComponent } from './components/pages/documents-info/documents-info.component';
import { AuthComponent } from './components/auth/auth.component';
import { LoginComponent } from './components/auth/login/login.component';
import { LoginService } from './services/login.service';
import { SignupComponent } from './components/auth/signup/signup.component';
import { PagesComponent } from './components/pages/pages.component';
import { NotFoundComponent } from './components/auth/not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    LayoutComponent,
    PersonalInfoComponent,
    PassportInfoComponent,
    EducationInfoComponent,
    ServiceInfoComponent,
    DocumentsInfoComponent,
    AuthComponent,
    LoginComponent,
    SignupComponent,
    PagesComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    NgMultiSelectDropDownModule.forRoot(),
    HttpClientModule,
    FormsModule,
    NgxSpinnerModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule
  ],
  providers: [LoginService, RestService],
  bootstrap: [AppComponent]
})
export class AppModule { }
