import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Bio } from '../models/bio';

@Injectable({
  providedIn: 'root',
})
export class BioService {
  constructor(private http: HttpClient) {}
  getBio() {
    return this.http.get<Bio>('assets/json/bio.json');
  }
}

/*The getBio method of the BioService fetches your bio from the assets/json/bio.json file.
You’ll inject the HttpClient service into its constructor and use that in the getBio()
method to make a GET request to the file.*/
