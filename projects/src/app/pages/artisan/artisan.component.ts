import { Component, HostListener } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-artisan',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './artisan.component.html',
  styleUrl: './artisan.component.css'
})
export class ArtisanComponent {
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
