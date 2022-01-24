import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm:FormGroup = new FormGroup({
    email:new FormControl(null,[Validators.email,Validators.required]),
    password: new FormControl(null,[Validators.required]),
  });

  constructor() { }
  ngOnInit(): void {

  }
  submit() {
    if (!this.loginForm.valid) {
      console.log("Invalid form");
      this.loginForm.reset();
      return;
    } else {
      console.log(JSON.stringify(this.loginForm.value));
    }
  }

}
