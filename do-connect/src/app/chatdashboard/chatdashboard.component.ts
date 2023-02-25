import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import { Observable } from 'rxjs';
import { User } from '../user';

@Component({
  selector: 'app-chatdashboard',
  templateUrl: './chatdashboard.component.html',
  styleUrls: ['./chatdashboard.component.css']
})
export class ChatdashboardComponent implements OnInit {
  userList = this.userService.getAllUsers();
  
  
  tableData!:User[];

  constructor(private userService:UserService, private router:Router){}
  ngOnInit(){
    this.userList.subscribe(u=> {this.tableData = u as User[]});
  }

  onClick(id:number){
    this.router.navigateByUrl(`/chatroom/${this.userService.user.id}/${id}`);
  }
  
  notCurrentUser(user:User):boolean{
    if (user.id===this.userService.user.id){
      return false;
    }
    return true;
  }

}
