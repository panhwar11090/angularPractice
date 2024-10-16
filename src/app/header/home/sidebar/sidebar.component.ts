import { Component } from '@angular/core';
import { SubscribeService } from '../../../Services/subscribe.service';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css',
  //providers:[SubscribeService]
})
export class SidebarComponent {

  constructor(private subService: SubscribeService){

  }


  source: string= "../../../../assets/background.jpg"

  OnSubscribe(){
    
    this.subService.OnSubscribeClicked('Weekly');
  }
}
