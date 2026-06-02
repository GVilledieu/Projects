import { Routes } from '@angular/router';
import { RestaurantComponent } from './pages/restaurant/restaurant.component';
import { ArtisanComponent } from './pages/artisan/artisan.component';

export const routes: Routes = [
  { path: '', redirectTo: 'restaurant', pathMatch: 'full' },
  { path: 'restaurant', component: RestaurantComponent },
  { path: 'artisan', component: ArtisanComponent },
];
