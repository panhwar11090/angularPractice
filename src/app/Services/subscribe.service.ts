import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root', 
})

export class SubscribeService{
    
    OnSubscribeClicked(type: string){
        alert('you subscribe the '+ type + 'Package' )
    }

}