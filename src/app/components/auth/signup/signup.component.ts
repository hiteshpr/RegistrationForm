import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators} from '@angular/forms';
import { Router } from "@angular/router";
import { NgxSpinnerService } from 'ngx-spinner';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {ElementRef,Renderer2} from '@angular/core';


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
    name : new FormControl('', [Validators.required]),
    phoneNumber: new FormControl('', [ Validators.required]),
    city: new FormControl('', [Validators.required])
  })

  constructor(private router : Router, private spinner: NgxSpinnerService,private modalService: NgbModal, private rd: Renderer2) { }

  ngOnInit() {
  }

  getFormValue(){

    console.log(this.signUpForm.value);

    this.spinner.show();
    
    setTimeout(() => {
      
        this.spinner.hide();
        this.open(this.el);
    }, 5000);

    

  }

  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'});
  }


}
