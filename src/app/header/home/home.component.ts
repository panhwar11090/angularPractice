import { Component } from '@angular/core';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HeroComponent } from './hero/hero.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  standalone: true,  // Make it standalone
  imports: [CommonModule, HeroComponent, SidebarComponent], 
})
export class HomeComponent {

}