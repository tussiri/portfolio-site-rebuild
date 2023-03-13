import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-video-background',
  templateUrl: 'video-background.component.html',

  styleUrls: ['./video-background.component.css'],
})
export class VideoBackgroundComponent implements OnInit {
  videoUrl = '/assets/img/waves.mp4';
  showOverlay = false;
  constructor() { }

  ngOnInit(): void {
    setTimeout(() => {
      this.showOverlay = true;
    }, 1000);
  }
}
