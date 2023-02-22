import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import { Observable } from 'rxjs';
import { User } from '../user';

@Component({
  selector: 'app-chatdashboard',
  templateUrl: './chatdashboard.component.html',
  styleUrls: ['./chatdashboard.component.css']
})
export class ChatdashboardComponent {
  userList = this.userService.getAllUsers();
  tableData:any[]=[{}];
constructor(private userService:UserService, private router:Router){}
onSubmit(){
  this.userList.subscribe(u=> {this.tableData = u as User[]});
}


}