import { Component, OnInit } from '@angular/core';
import { ScullyRoute, ScullyRoutesService } from '@scullyio/ng-lib';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-blog-landing',
  templateUrl: './blog-landing.component.html',
  styleUrls: ['./blog-landing.component.css'],
})
export class BlogLandingComponent implements OnInit {
  constructor(private scully: ScullyRoutesService) {}
  links$ = this.scully.available$.pipe(
    map((routes) =>
      routes.filter((route: ScullyRoute) => route.route.startsWith('/blog/'))
    )
  );
  respOptions = [
    {
      viewClasses: 'd-none d-md-flex',
      displayInColumns: true,
      titleClasses: 'display-3',
    },
    {
      viewClasses: 'd-flex d-md-none',
      displayInColumns: true,
      titleClasses: '',
    },
  ];

  ngOnInit(): void {}
}
/** To get a list of all blog routes, you will use the ScullyRoutesService.
 * The available$ observable will return all the routes rendered by Scully and marked as published.
 * You can mark whether a blog post is published or not in its markdown file frontmatter.
 * (This will be covered in the next step.)
 * This observable will return all routes, including those from the portfolio.
 * So you will filter only routes containing the prefix /blog/. The blog routes will be held by the links$ property.
 * The respOptions property will help with responsiveness.

*/
