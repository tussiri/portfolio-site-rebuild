import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-languages-skills',
  templateUrl: './languages-skills.component.html',
  styleUrls: ['./languages-skills.component.css']
})
export class LanguagesSkillsComponent implements OnInit {

  constructor() { }
  respOptions = [
    {
      viewClasses: 'd-none d-md-flex',
      displayInColumn: true,
      useSmallerHeadings: true,
      titleClasses: 'display-3',
    },
    {
      viewClasses: 'd-flex d-md-none',
      displayInColumn: true,
      useSmallerHeadings: true,
      titleClasses: '',
    },
  ];

  ngOnInit(): void {
  }

}
