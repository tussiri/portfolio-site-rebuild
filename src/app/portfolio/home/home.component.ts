import { Component, OnInit } from '@angular/core';
import { BioService } from '../../core/services/bio.service';
import { ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor(private bioService: BioService) { }
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

  ngOnInit(): void { }
}

/** The home page will display your name and a short bio, which is retrieved from the
 * BioService you inject here. Once you call its getBio method, the resultant observable
 * will be stored in the bio$ property. The respOptions property stores config that helps
 * ensure that the view is responsive.*/
