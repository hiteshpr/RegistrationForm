import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators} from '@angular/forms';
import { Router } from "@angular/router";
import { NgxSpinnerService } from 'ngx-spinner';


@Component({
  selector: 'app-education-info',
  templateUrl: './education-info.component.html',
  styleUrls: ['./education-info.component.css']
})
export class EducationInfoComponent implements OnInit {

  model = 'default';

  ugEducationInfoForm = new FormGroup ({
    collegeName : new FormControl('',[Validators.required]),
    univName : new FormControl('',[Validators.required]),
    branch: new FormControl('',[Validators.required]),
    yrofPassing : new FormControl('',[Validators.required]),
    
  })

  pgEducationInfoForm = new FormGroup ({
    collegeName : new FormControl('',[Validators.required]),
    univName : new FormControl('',[Validators.required]),
    branch: new FormControl('',[Validators.required]),
    yrofPassing : new FormControl('',[Validators.required])
  })

  furtherEducationInfoForm = new FormGroup ({
    intField : new FormControl('',[Validators.required]),
    semester : new FormControl('',[Validators.required]),
    prefCountry : new FormControl('',[Validators.required])
  })

  countries = [];
  dropdownSettings = {};

  constructor(private router : Router, private spinner: NgxSpinnerService ) { 
  }

  ngOnInit() {
    this.countries = [
      { item_id: 1, item_text: 'United States' },
      { item_id: 2, item_text: 'United Kingdom' },
      { item_id: 3, item_text: 'Germany' },
      { item_id: 4, item_text: 'Australia' },
      { item_id: 5, item_text: 'Italy' },
      { item_id: 6, item_text: 'Spain' }
  ];
  
  this.dropdownSettings = {
    singleSelection: false,
    idField: 'item_id',
    textField: 'item_text',
    selectAllText: 'Select All',
    unSelectAllText: 'UnSelect All',
    allowSearchFilter: false
  };
  }

  getugFormValues(){
    console.log(this.ugEducationInfoForm.value);
  }

  getpgFormValues(){
    console.log(this.pgEducationInfoForm.value);
    
  }

  getFurtherFormValues(){
    console.log(this.ugEducationInfoForm.value);

  }

  getAllValues(){
    this.spinner.show();
 
    setTimeout(() => {
        this.spinner.hide();
        this.router.navigate(['/serviceInfo']);
    }, 3000);
  }

  resetForm(){
    this.ugEducationInfoForm.reset();
  }
}
