import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({ providedIn: 'root' })
export class ImgSaleService {

private imgSaleUrl = 'api/sale-img';

constructor(private http: HttpClient) { }

/** GET heroes from the server */
getSaleImgs(): Observable<any[]> {
    return this.http.get<any[]>(this.imgSaleUrl);
}

getFullBanner(): Observable<any[]> {
    return this.http.get<any[]>(this.imgSaleUrl + '/full-banner');
}

}
