import { Component, Inject } from '@angular/core';
import { NgForm } from '@angular/forms';

import { retry } from 'rxjs';
import { MessageService } from './message.service';
import { TodoService, Todo } from './todo.service';
import {  ViewChild, ViewContainerRef } from '@angular/core';
import { UserCardComponent } from './user-card/user-card.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {


  title = 'blog';
  data = 'sandeep kadu data';
  data1=100;
  getValue()
  {
    return "Get function data"
  }

  getName(name:string,LastName:string)
  {
    alert( "function called name is : "+name+ "  LastName :"+LastName);
  }
 
  getData(val:string)
  {
  console.warn(val);
  }

  displayVal:string='';
  getValue2(val:string)
  {
  console.warn(val);
  this.displayVal=val;
  }

  count=0;
  counter(type:string)
  {
  type==='add'?this.count++:this.count--;
  }

fullname="peter";
disable=false;

show ="no";

color="red";
bgColor = "black";
users=['sandeep','kadu','peter','sandy'];

userDetails=[
  {name:'sandeep',email:'sandeep@test.com',phone:'8888',socialAccounts:['whatsapp','linkedin','gmail']},
  {name:'kadu',email:'kadu@test.com',phone:'1111',socialAccounts:['facebook','instagram','gmail']},
  {name:'peter',email:'peter@test.com',phone:'2222',socialAccounts:['youtube','instagram','twitter']},
  {name:'sandy',email:'sandy@test.com',phone:'3333',socialAccounts:['yahoo','facebook','gmail']}
];

updateColor()
{
  this.color="blue"  
  this.bgColor="orange"  
}

userData:any={};
getData3(data:any)
{
  console.warn(data);
  this.userData=data;
}

display=true;

toggle()
{
  this.display=!this.display;
}

list:any[]=[];
addTask(item:string)
{
  //console.warn(item);
  this.list.push({id:this.list.length,name:item});
  console.warn(this.list);
}
removeTask(id:number)
{
  console.warn(id);
  this.list=this.list.filter(item=>item.id!==id);
}

data2=10;

updateChild()
{
  this.data2=Math.floor(Math.random()*10);
}

data3="X";

updateData(item:string)
{
  console.warn(item);
  this.data3=item;
}
//pipes examples 
  today: Date = new Date(); // This is the current date

  message: string = '';
  todos: Todo[] = [];

  constructor(
    @Inject(MessageService) private messageService: MessageService,
    private todoService: TodoService
  ) {}

  ngOnInit() {
    this.message = this.messageService.getMessage();

     this.todoService.getTodos().subscribe(data => {
      this.todos = data;
    });
  }


//constant url through app example
currentPage = 'home';

  changePage(page: string) {
    this.currentPage = page;
  }

 //dynamic component loading example
  @ViewChild('container', { read: ViewContainerRef }) container!: ViewContainerRef;

  loadComponent() {
    this.container.clear(); // optional, to remove previous components
    this.container.createComponent(UserCardComponent); // dynamically load
  }
}
