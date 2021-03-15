import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-avatar',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.scss']
})
export class AvatarComponent implements OnInit {

  name: string = 'John Doe';
  image: string = 'https://source.unsplash.com/WNoLnJo7tS8/800x800';
  

  constructor() { }

  ngOnInit(): void {
  }

}
