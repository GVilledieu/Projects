import { Component, HostListener } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-restaurant',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './restaurant.component.html',
  styleUrl: './restaurant.component.css'
})
export class RestaurantComponent {
  menuOpen = false;
isScrolled = false;

toggleMenu() {
  this.menuOpen = !this.menuOpen;
}

closeMenu() {
  this.menuOpen = false;
}



@HostListener('window:scroll')
 onScroll() {
  this.isScrolled = window.scrollY > 50;
  }
}
