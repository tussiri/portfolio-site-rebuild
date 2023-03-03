import { Component, OnInit } from '@angular/core';
import { BioService } from 'src/app/core/services/bio.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent implements OnInit {
  constructor(private bioService: BioService) {}
  bio$ = this.bioService.getBio();

  respOptions = [
    {
      viewClasses: 'd-none d-md-flex',
      headingClass: 'display-3',
      useSmallerHeadings: true,
    },
    {
      viewClasses: 'd-flex d-md-none',
      headingClass: '',
      useSmallerHeadings: true,
    },
  ];

  ngOnInit(): void {}
}

// The “About” information will come from the BioService, and once its getBio method is called, the observable will be stored in the bio$ property.
// respOptions helps with responsiveness by providing optional CSS classes for different display sizes.
