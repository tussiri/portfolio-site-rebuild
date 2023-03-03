import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ContactModel } from '../models/contact-model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class ContactService {
  private api = 'https://mailthis.to/webdevt'

  constructor(private http: HttpClient) { }
  PostMessage(input:any){
    return this.http.post(this.api, input, { responseType: 'text' })
      .pipe(
      map(
        (response) => {
          if (response) {
            return response;
          }
        },
        (error: any) => {
          return error;
        }
      )
    )
   }
}
