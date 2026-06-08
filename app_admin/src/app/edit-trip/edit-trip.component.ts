import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TripDataService } from '../services/trip-data.service';
import { Trip } from '../models/trip';

@Component({
  selector: 'app-edit-trip',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './edit-trip.component.html',
  styleUrl: './edit-trip.component.css'
})
export class EditTripComponent implements OnInit {
  public editForm!: FormGroup;
  trip!: Trip;
  submitted = false;
  message = '';

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private tripDataService: TripDataService
  ) { }

  ngOnInit(): void {
    const tripCode = this.route.snapshot.paramMap.get('code');

    if (!tripCode) {
      alert('No trip code was selected.');
      this.router.navigate(['']);
      return;
    }

    this.editForm = this.formBuilder.group({
      _id: [],
      code: [tripCode, Validators.required],
      name: ['', Validators.required],
      length: ['', Validators.required],
      start: ['', Validators.required],
      resort: ['', Validators.required],
      perPerson: ['', Validators.required],
      image: ['', Validators.required],
      description: ['', Validators.required]
    });

    this.tripDataService.getTrip(tripCode).subscribe({
      next: (value: Trip) => {
        this.trip = value;
        const normalizedTrip = {
          ...value,
          start: value.start ? value.start.substring(0, 10) : ''
        };
        this.editForm.patchValue(normalizedTrip);
        this.message = `Trip ${tripCode} retrieved.`;
      },
      error: (error: unknown) => {
        this.message = 'Error retrieving trip.';
        console.log('Error:', error);
      }
    });
  }

  public onSubmit(): void {
    this.submitted = true;

    if (this.editForm.valid) {
      this.tripDataService.updateTrip(this.editForm.value).subscribe({
        next: () => this.router.navigate(['']),
        error: (error: unknown) => console.log('Error:', error)
      });
    }
  }

  public cancel(): void {
    this.router.navigate(['']);
  }

  get f() { return this.editForm.controls; }
}
