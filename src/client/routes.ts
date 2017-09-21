import { Routes } from '@angular/router';
import { AppComponent } from './app/app.component';
import { MobilesComponent } from './app/mobiles.component';

export const appRoutes: Routes = [
  { path: 'home', component: AppComponent },
  { path: 'mobile', component: MobilesComponent },

  { path: '',
    redirectTo: '/mobile',
    pathMatch: 'full'
  },
  { path: '**', component: AppComponent }
];
