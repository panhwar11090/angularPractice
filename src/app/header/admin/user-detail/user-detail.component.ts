import { Component, inject, Input, OnInit } from '@angular/core';
import { User } from '../../../Models/User';
import { UserService } from '../../../Services/user.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-detail',
  standalone: true,
  imports: [ FormsModule, CommonModule],
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

  //@Input() selectedUser: User | null = null;

  selectedUser: User | undefined;
  userService = inject(UserService);
  ngOnInit() {
      this.userService.OnuserDetailsClicked.subscribe((data:User)=>{
        this.selectedUser=data
      })
  }
  
}
