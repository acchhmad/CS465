import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { Trip } from '../models/trip';
import { TripDataService } from '../services/trip-data.service';

@Component({
  selector: 'app-trip-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './trip-card.component.html',
  styleUrl: './trip-card.component.css'
})
export class TripCardComponent {
  @Input() trip!: Trip;
  @Output() tripDeleted = new EventEmitter<void>();

  constructor(
    private router: Router,
    private tripDataService: TripDataService
  ) { }

  public editTrip(trip: Trip): void {
    this.router.navigate(['edit-trip', trip.code]);
  }

  public deleteTrip(trip: Trip): void {
    const confirmed = confirm(`Delete ${trip.name}?`);
    if (!confirmed) {
      return;
    }

    this.tripDataService.deleteTrip(trip.code).subscribe({
      next: () => this.tripDeleted.emit(),
      error: (error: unknown) => console.log('Error:', error)
    });
  }
}
