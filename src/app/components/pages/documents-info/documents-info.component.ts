import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators} from '@angular/forms';
import { Router } from "@angular/router";
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-documents-info',
  templateUrl: './documents-info.component.html',
  styleUrls: ['./documents-info.component.css']
})
export class DocumentsInfoComponent implements OnInit {

  moreDocs = '';
  documentsList = [];
  dropdownSettings = {};
  totalDocumentsSelected = 0;

  documentsForm = new FormGroup({
    documents : new FormControl('')
  })

  constructor(private router : Router, private spinner: NgxSpinnerService ) {  }

  ngOnInit() {

    this.documentsList = [
      { item_id: 1, item_text: 'All semester marksheets attested(Transcripts from university- 8 copies)' },
      { item_id: 2, item_text: 'Experience certificate(if any)' },
      { item_id: 3, item_text: '12th/ Diploma certificate and marksheet (8 copies attested)' },
      { item_id: 4, item_text: '10th certificate and marksheet (8 copies attested)' },
      { item_id: 5, item_text: 'Passport (8 copies attested)' },
      { item_id: 6, item_text: 'IELTS/TOEFL score card(8 copies)' },
      { item_id: 7, item_text: 'GRE score card (if applicable and already given)'},
      { item_id: 8, item_text: 'Letter of recommendation (at least 2 professor, from 3 professors would be preferred)'},
      { item_id: 9, item_text: 'German language certificate (if applicable and already given)'},
      { item_id: 10, item_text: 'Extracurricular activities certificates'},
      { item_id: 11, item_text: 'Self-prepared resume (1 copy, and softcopy)'}
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

  onItemSelect(){
    this.totalDocumentsSelected ++ ;
  }

  onSelectAll(){
    this.totalDocumentsSelected = 11;
  }

  onItemDeSelect(){
    this.totalDocumentsSelected--;
  }

  saveDocsData(){
    console.log(this.moreDocs);
  }

}
