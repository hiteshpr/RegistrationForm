import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators} from '@angular/forms';
import { Router } from "@angular/router";
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-passport-info',
  templateUrl: './passport-info.component.html',
  styleUrls: ['./passport-info.component.css']
})
export class PassportInfoComponent implements OnInit {

  model = 'default';
  disability = 'no';
  disabilityDes = '';

  passportDetailsForm = new FormGroup ({
    passNumber : new FormControl('',[ 
      Validators.required
    ]),
    dateofIssue : new FormControl ('', [
      Validators.required
    ]),
    dateofExpiry : new FormControl ('',[
      Validators.required
    ])
  })



  constructor(private router : Router, private spinner: NgxSpinnerService ) { 
  }

  ngOnInit() {
  }

  resetForm(value){

    if(value == 'passportDetailsForm'){
      this.passportDetailsForm.reset();
    }
  }

  showDisability(){
    console.log(this.passportDetailsForm.value);
    this.model = 'showDisabilityForm';

  }

  submitDisability(){
    console.log(this.disability);
    console.log(this.disabilityDes);

    this.spinner.show();
 
    setTimeout(() => {
        this.spinner.hide();
        this.router.navigate(['/educationInfo']);
    }, 3000);


  }

}
