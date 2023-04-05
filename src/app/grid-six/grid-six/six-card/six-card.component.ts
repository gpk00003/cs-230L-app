import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-six-card',
  templateUrl: './six-card.component.html',
  styleUrls: ['./six-card.component.css']
})
export class SixCardComponent implements OnInit{
  @Input() img: string;
  @Input() category: string;
  @Input() cardtitle: string;
  @Input() ratings: string;

  constructor() {
    this.img = "No img found";
    this.category = "No category found";
    this.cardtitle = "No title found";
    this.ratings = "-1";
  }
  ngOnInit(): void {
  }
}
