import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators} from '@angular/forms';
import { Router } from "@angular/router";
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-personal-info',
  templateUrl: './personal-info.component.html',
  styleUrls: ['./personal-info.component.css']
})
export class PersonalInfoComponent implements OnInit {

  

  personalInfoForm = new FormGroup ({
    
    name: new FormGroup({
      firstName: new FormControl('', [
        Validators.required
      ]),
      middleName: new FormControl('', [
        Validators.required
      ]),
      lastName: new FormControl('', [
        Validators.required
      ])
    }),

    gender: new FormControl('', [
      Validators.required
    ]),
    dateofbirth : new FormControl('', [
      Validators.required
    ]),

    address: new FormGroup({
      houseNo: new FormControl('', [
        Validators.required
      ]),
      street: new FormControl('', [
        Validators.required
      ]),
      landmark: new FormControl('', [
        Validators.required
      ]),
      pincode: new FormControl('', [
        Validators.required
      ]),
      city: new FormControl('', [
        Validators.required
      ]),
      state: new FormControl('', [
        Validators.required
      ]),
      country: new FormControl('', [
        Validators.required
      ]),
    }),

    contactnumber : new FormControl('', [
      Validators.required,
      Validators.maxLength(10)
    ]),
    
    contactnumber2 : new FormControl(''),

    emailAddress : new FormControl('', [
      Validators.required,
      Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$')
    ])

  })


  constructor(private router : Router, private spinner: NgxSpinnerService ) { 
    
  }

  ngOnInit() {
  }


  getFormValues(){
    console.log(this.personalInfoForm.value);
    this.spinner.show();
 
    setTimeout(() => {
        this.spinner.hide();
        this.router.navigate(['/passportInfo']);
    }, 5000);
    
  }

  resetForm(){
    console.log('resetForm');
    this.personalInfoForm.reset(); 
  }

}
