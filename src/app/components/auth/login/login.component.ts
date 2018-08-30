import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators} from '@angular/forms';
import { Router } from "@angular/router";
import { NgxSpinnerService } from 'ngx-spinner';
import {Md5} from 'ts-md5/dist/md5';
import { LoginService } from '../../../services/login.service';
import { RestService } from './../../../services/rest.service';

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

  constructor(private router : Router, private spinner: NgxSpinnerService, private login: LoginService, private rest: RestService) { }

  ngOnInit() {
  }

  getFormValue(){
  
    const data = {"loginId": this.loginForm.value.email, "password": this.loginForm.value.password } ;
    
    console.log(data);

    this.rest.loginUser(data).subscribe((data) => {
      console.log('success', data);
    },
    (data) => {
      console.log('error', data);
    }); 


  }

  showPassword(){
    
    if(this.passwordType == 'password'){
      this.passwordType = 'text';
    } else {
      this.passwordType = 'password';
    }

  }
}
