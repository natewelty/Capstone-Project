import { Component } from '@angular/core';
import { User } from 'app/user';
import { UserService } from 'app/user.service';

@Component({
  selector: 'app-navigationbar',
  templateUrl: './navigationbar.component.html',
  styleUrls: ['./navigationbar.component.css']
})
export class NavigationbarComponent {
constructor(private userService:UserService){}

isNotLoggedIn():boolean{
  return !this.userService.isLoggedIn();
}
isLoggedIn():boolean{
  return this.userService.isLoggedIn();
}
logout(){
  this.userService.user = new User();
}
isAdmin(){
  return this.userService.isAdmin();
}
}
