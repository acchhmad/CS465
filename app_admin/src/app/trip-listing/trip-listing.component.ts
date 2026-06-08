import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { Trip } from '../models/trip';
import { TripDataService } from '../services/trip-data.service';
import { TripCardComponent } from '../trip-card/trip-card.component';

@Component({
  selector: 'app-trip-listing',
  standalone: true,
  imports: [CommonModule, TripCardComponent],
  templateUrl: './trip-listing.component.html',
  styleUrl: './trip-listing.component.css'
})
export class TripListingComponent implements OnInit {
  trips: Trip[] = [];
  message = '';

  constructor(
    private tripDataService: TripDataService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getTrips();
  }

  private getTrips(): void {
    this.tripDataService.getTrips().subscribe({
      next: (value: Trip[]) => {
        this.trips = value;
        this.message = value.length > 0
          ? `There are ${value.length} trips available.`
          : 'There were no trips retrieved from the database.';
      },
      error: (error: unknown) => {
        this.message = 'Error retrieving trips from the API.';
        console.log('Error:', error);
      }
    });
  }

  public addTrip(): void {
    this.router.navigate(['add-trip']);
  }

  public refreshTrips(): void {
    this.getTrips();
  }
}
