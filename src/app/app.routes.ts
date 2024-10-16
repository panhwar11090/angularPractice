import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AdminComponent } from './header/admin/admin.component';

export const routes: Routes = [
    {
        path: '',
        component: AppComponent  // Your main AppComponent (standalone)
      },
      {
        path: 'header',
        component: HeaderComponent  // Route to the standalone HeaderComponent
      },
      {
        path: 'admin',
        component: AdminComponent
      }
];
