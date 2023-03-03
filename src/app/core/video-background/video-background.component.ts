import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-video-background',
  // templateUrl: 'video-background.component.html',
  template:
    '<div class="video-background"><div class="overlay" [class.show]="showOverlay"></div><video loop autoplay muted playsinline><source src="{{ videoUrl }}" type="video/mp4" /></video></div>',
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
