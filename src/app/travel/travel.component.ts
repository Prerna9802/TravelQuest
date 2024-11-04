import { Component, OnInit, OnChanges, OnDestroy, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ICity } from './travel.interface';
import { FormsModule } from '@angular/forms';
import { FormatDescriptionPipe } from "../format-description.pipe";
import { RatingComponent } from "../rating/rating.component";
import { Router } from '@angular/router';

@Component({
  selector: 'app-travel',
  standalone: true,
  imports: [CommonModule, FormsModule, FormatDescriptionPipe, RatingComponent],
  templateUrl: './travel.component.html',
  styleUrl: './travel.component.css'
})
export class TravelComponent implements OnInit, OnChanges, OnDestroy {

  cities: ICity[] = [
    {
      id: 1,
      description: 'Paris, France',
      placesToSee: ['Eiffel Tower', 'Louvre Museum', 'Notre-Dame Cathedral'],
      rating: 4.8,
      image: 'assets/paris.png',
      type: 'Cultural Heritage'
    },
    {
      id: 2,
      description: 'Barcelona, Spain',
      placesToSee: ['Sagrada Familia', 'Park Güell', 'Gothic Quarter'],
      rating: 4.7,
      image: 'assets/barcelona.jpg',
      type: 'Adventure'
    },
    {
      id: 3,
      description: 'New York City, USA',
      placesToSee: ['Statue of Liberty', 'Central Park', 'Times Square'],
      rating: 3.8,
      image: 'assets/newyork.png',
      type: 'Family'
    },
    {
      id: 4,
      description: 'Beijing, China',
      placesToSee: ['Great Wall of China', 'Forbidden City', 'Tiananmen Square'],
      rating: 4.6,
      image: 'assets/beijing.jpg',
      type: 'Family'
    },
    {
      id: 5,
      description: 'Mumbai, India',
      placesToSee: ['Gateway of India', 'Marine Drive', 'Chhatrapati Shivaji Terminus'],
      rating: 4.5,
      image: 'assets/mumbai.jpg',
      type: 'Family'
    },
    {
      id: 6,
      description: 'Copenhagen, Denmark',
      placesToSee: ['Tivoli Gardens', 'Nyhavn', 'The Little Mermaid'],
      rating: 4.6,
      image: 'assets/copenhagen.jpg',
      type: 'Nature'
    },
    {
      id: 7,
      description: 'Rome, Italy',
      placesToSee: ['Colosseum', 'Vatican City', 'Pantheon'],
      rating: 1.8,
      image: 'assets/rome.png',
      type: 'Cultural Heritage'
    },
    {
      id: 8,
      description: 'Istanbul, Turkey',
      placesToSee: ['Hagia Sophia', 'Blue Mosque', 'Topkapi Palace'],
      rating: 4.7,
      image: 'assets/istanbul.jpg',
      type: 'Adventure'
    },
    {
      id: 9,
      description: 'Cancun, Mexico',
      placesToSee: ['Chichen Itza', 'Tulum', 'Cenotes'],
      rating: 4.7,
      image: 'assets/cancun.jpg',
      type: 'Nature'
    },
    {
      id: 10,
      description: 'Berlin, Germany',
      placesToSee: ['Brandenburg Gate', 'Berlin Wall', 'Museum Island'],
      rating: 4.6,
      image: 'assets/berlin.jpg',
      type: 'Cultural Heritage'
    },
    {
      id: 11,
      description: 'London, United Kingdom',
      placesToSee: ['Big Ben', 'British Museum', 'Tower of London'],
      rating: 4.8,
      image: 'assets/london.png',
      type: 'Family'
    }
  ];

  showImages: boolean[] = this.cities.map(() => false);
  selectedType: string = '';
  searchTerm: string = '';

  constructor(private router: Router) {
    console.log('Constructor: TravelComponent instance is created');
  }

  ngOnInit() {
    console.log('ngOnInit: TravelComponent initialized');
    // Additional initialization logic can be added here
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('ngOnChanges: Changes detected', changes);
    // Respond to changes if needed
  }

  ngOnDestroy() {
    console.log('ngOnDestroy: Cleaning up before TravelComponent is destroyed');
    // Perform any cleanup needed
  }

  get filteredCities(): ICity[] {
    return this.cities.filter(city => {
      const matchesType = this.selectedType ? city.type === this.selectedType : true;
      const matchesSearch = city.description.toLowerCase().includes(this.searchTerm.toLowerCase());
      return matchesType && matchesSearch;
    });
  }

  toggleImage(index: number): void {
    this.showImages[index] = !this.showImages[index];
  }

  getButtonText(index: number): string {
    return this.showImages[index] ? 'Hide Image' : 'Show Image';
  }

  clickedRatingMessages: { [id: number]: string } = {};

 
  toggleRatingMessage(cityId: number, rating: number): void {
    
    if (this.clickedRatingMessages[cityId]) {
      delete this.clickedRatingMessages[cityId];
    } else {
      this.clickedRatingMessages[cityId] = `The rating clicked is ${rating}`;
    }
  }

  goToCityDetail(cityId: number): void {
    this.router.navigate(['/city', cityId]); 
}
}
