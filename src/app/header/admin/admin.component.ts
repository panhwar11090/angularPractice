import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UserListComponent } from './user-list/user-list.component';
import { UserService } from '../../Services/user.service';
import { UserDetailComponent } from './user-detail/user-detail.component';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [FormsModule, UserListComponent, UserDetailComponent],
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  // providers:[UserService]
})
export class AdminComponent {
  constructor(private userService:UserService){

  }

  name: string = '';
  gender: string = 'Male';
  subType: string = 'Yearly';
  status: string = 'Active';

  CreateNewUser(){
    this.userService.CreateUser(this.name,this.gender,this.status, this.subType)
    console.log(this.userService.users)
  }
}
