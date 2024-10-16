import { Component } from '@angular/core';
import { UserService } from '../../../Services/user.service';
import { CommonModule } from '@angular/common';
import { User } from '../../../Models/User';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user-list.component.html',
  // providers:[UserService]
  
})
export class UserListComponent {

  // constructor(private userService : UserService ){

  // }

  userList: any[] = [];

  constructor(private userService: UserService) {
    this.userList = this.userService.GetAllUsers();
  }

  ShowUserDetails(user: User){
    this.userService.OnShowUserDetaisl(user);
  }
}
