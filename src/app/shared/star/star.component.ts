import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'pm-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css'],
})
export class StarComponent implements OnInit {
  @Input() rating: number;
  starWidth: number;

  constructor() {}

  ngOnInit(): void {
    this.starWidth = (this.rating * 75) / 5;
  }
}
