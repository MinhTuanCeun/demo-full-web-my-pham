import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({ providedIn: 'root' })
export class SlideContentService {

private slideUrl = 'api/slide-img';

constructor(private http: HttpClient) { }

/** GET heroes from the server */
getSlideContents(): Observable<any[]> {
    return this.http.get<any[]>(this.slideUrl);
}

}
