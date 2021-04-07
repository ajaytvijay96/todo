import { CATCH_ERROR_VAR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TotoDataService } from '../service/data/toto-data.service';


export class Todo{
  constructor( public id: number,public description: string,public done: boolean,public targetDate: Date){}
}



@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})



export class ListTodosComponent implements OnInit {


  // todos=[
  //   new Todo(1,'learn dance',false,new Date()),
  //   new Todo(2,'bcOme expert',false,new Date()),
  //   new Todo(3,'Visit India',false,new Date())

  // ]
  todos: any
  message=''

  constructor(private todoservice:TotoDataService,private router : Router) { }

  ngOnInit(): void {
   
    this.refreshTodos()
  }


  refreshTodos(){
    this.todoservice.retrieveAllTodos('ajay').subscribe(
      response=>{
        console.log(response)
      this.todos=response;
     },
      error=>{console.log(error)}
    )
  }

  deleteTodo(id:number){
    console.log("deletetoto  "+id)
    this.todoservice.deleteTodo('ajay',id).subscribe(
      response=>{console.log(response)
                  this.message="deleted successfully!!!"
                  this.refreshTodos()},
      error=>{console.log(error)}
    )
  }

  updateTodo(id:number){
    console.log(`adding id ${id}`)
    this.router.navigate(['todos',id])
  }

  addTodo(){
    this.router.navigate(['todos',-1])
  }

}
