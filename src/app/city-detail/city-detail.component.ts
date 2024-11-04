import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';
import { RatingComponent } from '../rating/rating.component';

@Component({
  selector: 'app-city-detail',
  standalone: true,
  imports: [RatingComponent, CommonModule],
  templateUrl: './city-detail.component.html',
  styleUrl: './city-detail.component.css'
})
export class CityDetailComponent implements OnInit {
  cityData: any;
  cityId: number = 0;

  private cities = [
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
      rating: 4.7,
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
      rating: 4.8,
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

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.cityId = +params['id']; 
      this.loadCityData();
    });
  }

  loadCityData(): void {
    this.cityData = this.cities.find(city => city.id === this.cityId);
  }

  handleRatingClick(message: string): void {
    alert(message); 
  }

  goBack(): void {
    this.router.navigate(['/travel']); 
  }
}