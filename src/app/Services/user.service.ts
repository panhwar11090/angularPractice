import { Injectable } from "@angular/core";
import { User } from "../Models/User";
import { LoggerService } from "./logger.service";
import { EventEmitter } from "@angular/core";
@Injectable({
    providedIn: 'root' 
  })
export class UserService{
    users:User[]=[
        new User('Steve Smith','Male', 'Monthly','Active'),
        new User('Mery Jane','Female', 'Yearly','InActive'),
        new User('Mark Tyler','Male', 'Quaterly','Active'),
    ];

    constructor(private loggerSerice : LoggerService){

    }

    OnuserDetailsClicked : EventEmitter<User>= new EventEmitter<User>();

    OnShowUserDetaisl(user:User){
        this.OnuserDetailsClicked.emit(user)
    }
    GetAllUsers(){
        return this.users;
    }

    CreateUser(name:string,gender:string,subType:string,status:string){
        let user = new User(name,gender,subType,status);
        this.users.push(user);
        this.loggerSerice.LogMessage(name,status)
    }
}