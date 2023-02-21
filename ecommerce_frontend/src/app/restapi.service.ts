import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RestapiService {

  constructor(private http:HttpClient) { 

  }
  public login(body:any){
    // var body = {
    //   "email":"ayush@gmail.com",
    // "password":"password"
    // }
    const headers = new HttpHeaders({Authorization: 'Basic '});
    return this.http.post("http://localhost:8001/token",body);
  }

}
