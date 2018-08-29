import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators} from '@angular/forms';
import { Router } from "@angular/router";
import { NgxSpinnerService } from 'ngx-spinner';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {ElementRef,Renderer2} from '@angular/core';
import { RestService } from './../../../services/rest.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  @ViewChild('content') el:ElementRef;

  closeResult: string;
  
  signUpForm = new FormGroup({
    email : new FormControl('',[
      Validators.required,
      Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$')
    ]),
    firstName : new FormControl('', [Validators.required]),
    phoneNumber: new FormControl('', [ Validators.required]),
    lastName: new FormControl('', [Validators.required])
  })

  constructor(private router : Router, private spinner: NgxSpinnerService,private modalService: NgbModal, private rd: Renderer2, private rest: RestService) { }

  ngOnInit() {
  }

  getFormValue(){

    console.log(this.signUpForm.value);

    const data = {"fName": this.signUpForm.value.firstName, "lName": this.signUpForm.value.lastName, "email": this.signUpForm.value.email, "mobile": this.signUpForm.value.phoneNumber } ;

    console.log(data);

    this.rest.registerUser(data).subscribe((data) => {
      console.log('success', data);
    },
    (data) => {
      console.log('error', data);
    });
    

  }

  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'});
  }


}
