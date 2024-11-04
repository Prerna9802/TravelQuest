import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-booking',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './booking.component.html',
  styleUrl: './booking.component.css'
})
export class BookingComponent {

  isDropdownOpen = false;
  
  bookingData = {
    name: '',
    email: '',
    destination: '',
    date: '',
    tickets: 1,
    travelClass: 'Economy'
  };
  
  confirmationMessage: string | null = null;
  showSummary: boolean = false;

  destinations = [
    'Bali, Indonesia',
    'Santorini, Greece',
    'Kyoto, Japan',
    'Machu Picchu, Peru',
    'New York City, USA',
    'Cape Town, South Africa',
    'Rome, Italy',
    'Queenstown, New Zealand',
    'Iceland',
    'Barcelona, Spain',
    'Petra, Jordan',
    'Maldives',
    'Sydney, Australia',
    'Buenos Aires, Argentina',
    'Amsterdam, Netherlands'
  ];

  toggleDropdownDestinations() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  selectDestination(dest: string) {
    this.bookingData.destination = dest;
    this.isDropdownOpen = false;
  }

  travelClasses = [
    'Economy',
    'Business',
    'First Class'
  ];

  selectTravelClass(travelclass: string) {
    this.bookingData.travelClass = travelclass;
    this.isDropdownOpen = false;
  }

  toggleDropdownTravelClasses() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  onSubmit() {
    
    this.confirmationMessage = `Thank you, ${this.bookingData.name}! Your tickets to ${this.bookingData.destination} have been booked for ${this.bookingData.date}.`;    
    
    this.showSummary = true;

    this.bookingData = {
      name: '',
      email: '',
      destination: '',
      date: '',
      tickets: 1,
      travelClass: 'Economy'
    };
  }
}


  


