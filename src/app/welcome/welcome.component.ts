import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WelcomeDataService,HelloWorldBean } from '../service/data/welcome-data.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  name=''
  welcomemessage=''
  constructor(private route:ActivatedRoute,private service:WelcomeDataService) { }

  ngOnInit(): void {
   // console.log(this.route.snapshot.params['name'])
    this.name=this.route.snapshot.params['name']
  }

  getWelcomeMessage(){
    this.service.executeHelloWorldBeanService().subscribe(
      response=>this.handleResponse(response),
      error=>this.handleErrorResponse(error)
    )

  }

  getWelcomeMessageWithVariable(){
    this.service.executeHelloWorldBeanServiceWithPathVariable(this.name).subscribe(
      response=>this.handleResponse(response),
      error=>this.handleErrorResponse(error)
    )}


  handleResponse(response:any){
  //console.log(response.message+"printing using welcome")
  this.welcomemessage=response.message
  }

  handleErrorResponse(error:any){

    //console.log(error.message)
    this.welcomemessage=error.error.message
  }

}
