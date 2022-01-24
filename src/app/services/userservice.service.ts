import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class UserserviceService {

  constructor(private httpClient : HttpClient) { }

  postUser(userObj: any){
    let httpHeaders = new HttpHeaders({
      'content-Type':'application/json'
    });
    return this.httpClient.post('ttp://localhost:3000/api/employees',userObj,{headers:httpHeaders});
  }
  getuserData(){
    return this.httpClient.get('http://localhost:3000/api/employees');
  }


}

