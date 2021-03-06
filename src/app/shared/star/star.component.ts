import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'pm-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css'],
})
export class StarComponent implements OnInit {
  @Input() rating: number;
  starWidth: number;
  @Output() notify: EventEmitter<string> = new EventEmitter<string>();

  onClick() {
    this.notify.emit('Clicked!');
  }

  constructor() {}

  ngOnInit(): void {
    this.starWidth = (this.rating * 75) / 5;
  }
}
