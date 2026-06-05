import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-restaurant',
  standalone: true,
  imports: [RouterLink, FormsModule],
  templateUrl: './restaurant.component.html',
  styleUrl: './restaurant.component.css'
})
export class RestaurantComponent {
  menuOpen = false;
  successMessage = false;
  errorMessage = '';
  showPopup = false;

  today = new Date().toISOString().split('T')[0];

reservationDate = '';
reservationTime = '';

isValidReservationTime(): boolean {
  if (!this.reservationTime) return false;

  const [hours, minutes] = this.reservationTime.split(':').map(Number);
  const totalMinutes = hours * 60 + minutes;

  const lunchStart = 12 * 60;
  const lunchEnd = 14 * 60;

  const dinnerStart = 19 * 60;
  const dinnerEnd = 22 * 60;

  return (
    (totalMinutes >= lunchStart && totalMinutes <= lunchEnd) ||
    (totalMinutes >= dinnerStart && totalMinutes <= dinnerEnd)
  );
}

isFutureReservation(): boolean {
  if (!this.reservationDate || !this.reservationTime) return false;

  const reservation = new Date(`${this.reservationDate}T${this.reservationTime}`);
  const now = new Date();

  return reservation > now;
}

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  closeMenu() {
    this.menuOpen = false;
  }

sendReservation(form: NgForm) {
  if (form.invalid || !this.isValidReservationTime() || !this.isFutureReservation()) {
    this.errorMessage =
      'Merci de choisir une date future et une heure entre 12h-14h ou 19h-22h.';

    form.control.markAllAsTouched();
    return;
  }

  this.errorMessage = '';
  this.showPopup = true;
  form.resetForm();

  this.reservationDate = '';
  this.reservationTime = '';
}

  closePopup() {
    this.showPopup = false;
  }
}