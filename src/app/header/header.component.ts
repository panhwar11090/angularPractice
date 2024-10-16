import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SidebarComponent } from './home/sidebar/sidebar.component';
import { HeroComponent } from './home/hero/hero.component';
import { HomeComponent } from './home/home.component';
import { SubscribeService } from '../Services/subscribe.service';
import { AdminComponent } from './admin/admin.component';

// @Component({
//   selector: 'app-header',
//   standalone: true,
//   imports: [],
//   templateUrl: './header.component.html',
//   styleUrl: './header.component.css'
// })
// export class HeaderComponent {

// }

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  standalone: true,
  imports:[
    CommonModule,
    SidebarComponent,
    HeroComponent,
    HomeComponent, 
    AdminComponent
  ],
  // providers:[SubscribeService]
})
export class HeaderComponent {

  constructor(private subService : SubscribeService){}

  heading ="Huzaifa Site";
  selectedTab: string = 'home';

  //When HOME Link is clicked
  HomeClicked(){
    this.selectedTab = 'home';
  }

  //When Admin Link is clicked
  AdminClicked(){
    this.selectedTab = 'admin';
  }

  OnSubscribe(){
    this.subService.OnSubscribeClicked('Yearly');
  }
  link(){
    return 'About'
  }
}