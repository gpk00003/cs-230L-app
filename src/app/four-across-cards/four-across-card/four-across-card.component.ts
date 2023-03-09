import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-four-across-card',
  templateUrl: './four-across-card.component.html',
  styleUrls: ['./four-across-card.component.css']
})
export class FourAcrossCardComponent implements OnInit{
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
