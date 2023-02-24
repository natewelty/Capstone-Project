import { Component } from '@angular/core';
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
}
