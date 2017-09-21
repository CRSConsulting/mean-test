import { Routes } from '@angular/router';
import { AppComponent } from './app/app.component';
import { MobilesComponent } from './app/mobiles.component';

export const appRoutes: Routes = [
  { path: 'loaderio-6f795de852dfe0866bc1f8d54bc851d0.txt', component: AppComponent },
  { path: 'mobile',      component: MobilesComponent },

  { path: '',
    redirectTo: '/mobile',
    pathMatch: 'full'
  },
  { path: '**', component: AppComponent }
];
