import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({ providedIn: 'root' })
export class ProductService {

private productUrl = 'api/product';

constructor(private http: HttpClient) { }

/** GET hot deal from the server */
getProductsInHomePage(link: string): Observable<any[]> {
    return this.http.get<any[]>(this.productUrl + '/' + link);
}

getProductById(id: string): Observable<any> {
  return this.http.get<any>(this.productUrl + '/' + id);
}

}
