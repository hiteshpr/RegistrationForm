import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators} from '@angular/forms';
import { Router } from "@angular/router";
import { NgxSpinnerService } from 'ngx-spinner';
import {Md5} from 'ts-md5/dist/md5';
import { LoginService } from '../../../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  passwordType = 'password';

  loginForm = new FormGroup({
    email : new FormControl('',[
      Validators.required,
      Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$')
    ]),
    password : new FormControl('', [Validators.required])
  })

  constructor(private router : Router, private spinner: NgxSpinnerService, private login: LoginService) { }

  ngOnInit() {
  }

  getFormValue(){
  
    this.loginForm.value.password = Md5.hashStr(this.loginForm.value.password);
    console.log(this.loginForm.value);

    this.spinner.show();
    
    setTimeout(() => {
      
        this.spinner.hide();
        this.login.state = true;
        this.router.navigate(['/personalInfo']);
    }, 5000);

  }

  showPassword(){
    
    if(this.passwordType == 'password'){
      this.passwordType = 'text';
    } else {
      this.passwordType = 'password';
    }

  }
}
