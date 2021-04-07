import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'

export class HelloWorldBean{
  constructor(public message: string){}
}


@Injectable({
  providedIn: 'root'
})
export class WelcomeDataService {

  constructor(
    private http:HttpClient
  ) { }

  executeHelloWorldBeanService(){
    //return console.log("Execute hello world service")
    return this.http.get<HelloWorldBean>('http://localhost:8080/hello1');
  }
  executeHelloWorldBeanServiceWithPathVariable(name:string){
     console.log("Execute hello world service")

     let basicAuthHeaderString=this.createAuthenticationBasicHttpHeader()
     let headers= new HttpHeaders(
       { Authorization: basicAuthHeaderString}
     )
    return this.http.get<HelloWorldBean>(`http://localhost:8080/hello/${name}`,{headers});
  }

  createAuthenticationBasicHttpHeader(){
    let username='user'
    let password='password'
    let basicAuthHeaderString = 'Basic '+ window.btoa(username +':'+ password);
    return basicAuthHeaderString;
  }
 
}
