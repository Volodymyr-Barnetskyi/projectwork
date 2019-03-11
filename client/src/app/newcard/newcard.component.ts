import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-newcard',
  templateUrl: './newcard.component.html',
  styleUrls: ['./newcard.component.css']
})
export class NewcardComponent implements OnInit {

  public card: FormGroup = new FormGroup({
    name: new FormControl(''),
    sex: new FormControl(''),
    age: new FormControl(''),
    illness: new FormControl('')
  });
  
  constructor() { }

  ngOnInit() {
  }

}
