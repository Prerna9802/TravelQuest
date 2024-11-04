import { CommonModule } from '@angular/common';
import { Component,Input,Output,EventEmitter, OnChanges } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faStar } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-rating',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './rating.component.html',
  styleUrl: './rating.component.css'
})
export class RatingComponent implements OnChanges{

faStar = faStar;
@Input() rating:number=0;
@Output() ratingClicked: EventEmitter<string> = new EventEmitter<string>();
starWidth:number=0;

ngOnChanges():void{
  this.starWidth = this.rating * 90/5;
} 

getColorClass(): string {
  if (this.rating >= 4) {
    return 'high-rating'; 
  } else if (this.rating >= 3) {
    return 'medium-rating'; 
  } else {
    return 'low-rating'; 
  }
}

onClick(): void {
  this.ratingClicked.emit(`The rating clicked is ${this.rating}.`);
}

}
