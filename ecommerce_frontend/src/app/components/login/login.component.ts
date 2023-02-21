import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RestapiService } from 'src/app/restapi.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

 
  logincred: any  ={
    email:" ",
    password:" "
  }

  constructor(private service:RestapiService,private router:Router){
  }

  ngOnInit(): void {
    
  }

register(){ 
  console.log("rigister works");
};

// onLogin(){
//   console.log("submit");
//   console.log(this.loginData)
// }

doLogin(){
  console.log(this.logincred)
 let response = this.service.login(this.logincred);
 response.subscribe(data=> {
  console.log(data)
  this.logincred.message;
  this.router.navigate(["/home"])
})
};


}
