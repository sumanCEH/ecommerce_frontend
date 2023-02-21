import { Component } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  registerData: any = {
    email:"",
    password:"",
    fristname:"",
    lastname:""
  }

  constructor(){
  }

  ngOnInit(): void {
    
  }


onLogin(){
  console.log("submit");
  console.log(this.registerData)
}

}
