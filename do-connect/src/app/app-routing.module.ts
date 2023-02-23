import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChatdashboardComponent } from './chatdashboard/chatdashboard.component';
import { ChatroomComponent } from './chatroom/chatroom.component';
import { CreateanswerComponent } from './createanswer/createanswer.component';
import { DisplayquestionComponent } from './displayquestion/displayquestion.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NewquestionComponent } from './newquestion/newquestion.component';
import { PendinganswerComponent } from './pendinganswer/pendinganswer.component';
import { PendingquestionComponent } from './pendingquestion/pendingquestion.component';
import { SearchquestionComponent } from './searchquestion/searchquestion.component';

const routes: Routes = [
  {path: '',redirectTo: 'home', pathMatch: 'full'},
  //login and registration
  { path: 'home', component: HomeComponent },
  {path: 'logincomponent', component: LoginComponent}, 
  
  //admin login or sign up
  //
  //
  //
  //
  //add quesiton
  {path: 'newquestioncomponent', component: NewquestionComponent},
  //serch question and display question
  {path: 'searchquestioncomponent', component: SearchquestionComponent},

  // hit question -> create answer
  {path: 'creatanswercomponent', component: CreateanswerComponent},

  //only admin able to see pending question and answers
  {path: 'pendingquestioncomponent', component: PendingquestionComponent},
  {path: 'pendinganswercomponent', component: PendinganswerComponent},

  {path: 'chatdashboard', component: ChatdashboardComponent},
  {path: 'chatroom', component: ChatroomComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 



}
