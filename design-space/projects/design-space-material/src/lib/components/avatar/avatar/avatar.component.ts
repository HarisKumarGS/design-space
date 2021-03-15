import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ds-avatar',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.css']
})
export class AvatarComponent implements OnInit {

  @Input() image: string = '';
  @Input() name: string = '';
  @Input() size: string = 'medium';
  @Input() title: string = '';
  @Input() shape: string = 'circle';
  @Input() showName: boolean = false;
  @Input() showTitle: boolean = false;
  @Input() backgroundColor: string = '#f1f1f1';
  @Input() fontColor: string = '#111111';
  
  initials: string = '';

  showInitials = false;

  constructor() { }

  ngOnInit(): void {
    if (!this.image) {
      this.showInitials = true;
      this.createInitials();
    }
  }

  createInitials(): void {
    let initials = '';
    for (let i = 0; i < this.name.length; i++) {
      if (this.name.charAt(i) === ' ') {
        continue;
      }

      if (this.name.charAt(i) === this.name.charAt(i).toUpperCase()) {
        initials += this.name.charAt(i);

        if (initials.length === 2) {
          break;
        }
      }
    }

    this.initials = initials;
  }

}
