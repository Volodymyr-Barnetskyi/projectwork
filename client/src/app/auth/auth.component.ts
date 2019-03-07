import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  public form: FormGroup = new FormGroup({
    logintask: new FormControl(''),
    pass: new FormControl('')
  });
  public login() {
    localStorage.setItem('nickname', this.form.value.logintask);
  }
  constructor() { }
  ngOnInit() {
  }
}

