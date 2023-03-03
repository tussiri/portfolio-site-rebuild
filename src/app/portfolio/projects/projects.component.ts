import { Component, OnInit } from '@angular/core';
import { mergeMap } from 'rxjs/operators';
import { HeaderService } from 'src/app/core/services/header.service';
import { ProjectsService } from 'src/app/core/services/projects.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
})
export class ProjectsComponent implements OnInit {
  constructor(
    private projectsService: ProjectsService,
    private headerService: HeaderService
  ) {}
  isHome$ = this.headerService.isHome();
  projects$ = this.isHome$.pipe(
    mergeMap((atHome) => this.projectsService.getProjects(atHome))
  );

  respOptions = [
    {
      viewClasses: 'd-none d-md-flex',
      displayInColumn: false,
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

  ngOnInit(): void {}
}

/**The projects come from the ProjectsService. You will use the HeaderService to determine whether the current page is the home page.
 * You will use the value of isHome$ to determine whether to fetch a full list of projects or just featured projects. */
