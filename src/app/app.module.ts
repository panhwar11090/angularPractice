// app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';  // Import HeaderComponent
import { SubscribeService } from './Services/subscribe.service';
import { HomeComponent } from './header/home/home.component';
import { SidebarComponent } from './header/home/sidebar/sidebar.component';
import { HeroComponent } from './header/home/hero/hero.component';
import { AdminComponent } from './header/admin/admin.component';
import { FormsModule } from '@angular/forms';
import { UserListComponent } from './header/admin/user-list/user-list.component';
import { UserService } from './Services/user.service';
import { LoggerService } from './Services/logger.service';
import { UserDetailComponent } from './header/admin/user-detail/user-detail.component';
import { SearchComponent } from './search/search.component';
import { ProductComponent } from './product/product.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent , 
    HomeComponent,
    SidebarComponent,
    HeroComponent,
    AdminComponent,
    UserListComponent,
    UserDetailComponent,
    SearchComponent,
    ProductComponent

  ],
  imports: [BrowserModule, FormsModule],
  providers: [UserService, LoggerService],
  bootstrap: [AppComponent]
})
export class AppModule {}
