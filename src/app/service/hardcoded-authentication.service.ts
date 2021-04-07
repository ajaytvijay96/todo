import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardcodedAuthenticationService {

  constructor() { }

  authenticate(username: string,password:string){
    if(username==='ajay'&& password==='ajay'){
      sessionStorage.setItem('authenticaterUser',username);
    return true;}
    else 
    return false;
  }

  isUserLoggedIn(){
    let user =sessionStorage.getItem('authenticaterUser')
    return !(user===null);
  }

  logout(){
    sessionStorage.removeItem('authenticaterUser')
  }
}
