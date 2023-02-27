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
import { RegistrationComponent } from './registration/registration.component';
import { SearchquestionComponent } from './searchquestion/searchquestion.component';

const routes: Routes = [{path: '',redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'logincomponent', component: LoginComponent},
  {path: 'registrationcomponent',component:RegistrationComponent}, 
  {path: 'newquestioncomponent', component: NewquestionComponent},
  {path: 'searchquestioncomponent', component: SearchquestionComponent},
  {path: 'creatanswercomponent', component: CreateanswerComponent},
  {path: 'pendingquestioncomponent', component: PendingquestionComponent},
  {path: 'pendinganswercomponent', component: PendinganswerComponent},
  {path: 'chatdashboard', component: ChatdashboardComponent},
  {path: 'chatroom/:user1/:user2', component: ChatroomComponent},
  {path: 'displayquestion/:id', component: DisplayquestionComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
