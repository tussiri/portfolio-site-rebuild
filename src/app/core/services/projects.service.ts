import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { filter, mergeAll, toArray } from 'rxjs/operators';
import { Project } from '../models/project';

@Injectable({
  providedIn: 'root',
})
export class ProjectsService {
  constructor(private http: HttpClient) {}
  getProjects(featured?: boolean): Observable<Project[]> {
    let projects$ = this.http.get<Project[]>('assets/json/projects.json');

    if (featured) {
      return projects$.pipe(
        mergeAll(),
        filter((project) => project.featured || false),
        toArray()
      );
    }
    return projects$;
  }
}
/*The ProjectsService has a getProjects method that gets and filters projects.
It gets the projects from the assets/json/projects.json file.
You’ll inject the HttpClient service into its constructor and use that in the getProjects() method to make a GET request to the file.
Using the featured parameter, you can choose to only return featured projects for brevity.
This is useful on the home page when you only want to show important projects.

*/
