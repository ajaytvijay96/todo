import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Todo } from '../list-todos/list-todos.component';
import { TotoDataService } from '../service/data/toto-data.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  id !:number
  todo!:Todo
  constructor(private todoDataService :TotoDataService,
    private route :ActivatedRoute ,
    private router:Router) { }

  ngOnInit(): void {
    this.id=this.route.snapshot.params['id']
    this.todo= new Todo(this.id,'',false,new Date())

    if(this.id!=-1){
    this.todoDataService.retrieveTodo("ajayt",this.id)
    .subscribe(
      data=>this.todo=data
    )
  }
}

  saveTodo(){
    if(this.id===-1){
      //create new todo
      this.todoDataService.createTodo("ajayt",this.todo)
      .subscribe(
        data=>{console.log(data)
        this.router.navigate(['todos'])}
      )
    }
else{
    this.todoDataService.updateTodo("ajayt",this.id,this.todo)
    .subscribe(
      data=>{console.log(data)
      this.router.navigate(['todos'])}
    )
      }
  }

}
