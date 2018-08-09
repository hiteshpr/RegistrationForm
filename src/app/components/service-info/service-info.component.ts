import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators} from '@angular/forms';
import { Router } from "@angular/router";
import { NgxSpinnerService } from 'ngx-spinner';


@Component({
  selector: 'app-service-info',
  templateUrl: './service-info.component.html',
  styleUrls: ['./service-info.component.css']
})
export class ServiceInfoComponent implements OnInit {

  servicesForm = new FormGroup({
    services : new FormControl('')
  })
  comboservicesForm = new FormGroup({
    comboservices : new FormControl('')
  })

  servicesOffered = [];
  comboservicesOffered = [];
  dropdownSettings = {};
  totalServiceSelected = 0;

  constructor(private router : Router, private spinner: NgxSpinnerService ) {  }

  ngOnInit() {
    this.servicesOffered = [
      { item_id: 1, item_text: 'Counselling for Germany' },
      { item_id: 2, item_text: 'Counselling for USA' },
      { item_id: 3, item_text: 'Counselling for Any other country (Please Specify)' },
      { item_id: 4, item_text: 'IELTS coaching and practice test' },
      { item_id: 5, item_text: 'TOEFL' },
      { item_id: 6, item_text: 'GRE' },
      { item_id: 7, item_text: 'GMAT'},
      { item_id: 8, item_text: 'German language preparation'},
      { item_id: 9, item_text: 'Pre-departure help'},
      { item_id: 10, item_text: 'Vise counselling'}
  ];

  this.comboservicesOffered = [
    { item_id: 1, item_text: 'IELTS preparation + counselling for germany + german Language + Pre-departure guidance + Visa counselling + scholarship' },
  ]

  
  this.dropdownSettings = {
    singleSelection: false,
    idField: 'item_id',
    textField: 'item_text',
    selectAllText: 'Select All',
    unSelectAllText: 'UnSelect All',
    allowSearchFilter: false
  };
  }

  onItemSelect(type){
    this.resetForm(type);
    this.totalServiceSelected++;
  }

  onItemDeSelect(){
    this.totalServiceSelected--;
    console.log('called');
  }

  onSelectAll(type){
    this.resetForm(type);
    this.totalServiceSelected = 10; 
  }

  resetForm(type){
    if(type == 'combo'){
      this.servicesForm.reset(); 
    } else if (type == 'individual'){
      this.comboservicesForm.reset()
    }
  }

  saveServices(){

    this.spinner.show();
 
    setTimeout(() => {
        this.spinner.hide();
        this.router.navigate(['/documentsInfo']);
    }, 3000);

  }

}
