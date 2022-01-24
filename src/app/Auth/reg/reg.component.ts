import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reg',
  templateUrl: './reg.component.html',
  styleUrls: ['./reg.component.css']
})
export class RegComponent implements OnInit {

  formReg:FormGroup = new FormGroup({
    fullname: new FormControl(null,[Validators.required]),
    email:new FormControl(null,[Validators.email,Validators.required]),
    password: new FormControl(null,[Validators.required]),
    cpassword: new FormControl(null,[Validators.required])
  });

  constructor() { }

  ngOnInit(): void {

  }

  Submit(){
    if (!this.formReg.valid || (this.formReg.controls.password.value != this.formReg.controls.cpassword.value)) {
      console.log("Invalid form");
      this.formReg.reset();
      return;
    } else {
      console.log(JSON.stringify(this.formReg.value));
    }

  }
}
