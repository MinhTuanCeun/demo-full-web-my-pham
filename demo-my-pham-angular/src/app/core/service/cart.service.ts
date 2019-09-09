import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Product } from '../model/product.model';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({ providedIn: 'root' })
export class CartService {

    listCart: Product[] = [];
    constructor() { }

  /** GET heroes from the server */
  getListCart() {
    return this.listCart;
  }

  addToListCart(item) {
    let check;
    if (this.listCart.length === 0) {
        this.listCart.push(item);
    } else {
        check = this.listCart.find(e => {
            return e._id === item._id;
        });
        if (check) {
            check.qty++;
        } else {
            this.listCart.push(item);
        }
    }
  }

  deleteItem(item) {
    for ( let i = 0; i <= this.listCart.length; i++) {
        if ( this.listCart[i]._id === item._id) {
            this.listCart.splice(i, 1);
            break;
        }
     }
  }

  /** GET hero by id. Will 404 if id not found */
//   getHero(id: number): Observable<Hero> {
//     const url = `${this.heroesUrl}/${id}`;
//     return this.http.get<Hero>(url).pipe(
//       tap(_ => this.log(`fetched hero id=${id}`)),
//       catchError(this.handleError<Hero>(`getHero id=${id}`))
//     );
//   }

  /* GET heroes whose name contains search term */
//   searchHeroes(term: string): Observable<Hero[]> {
//     if (!term.trim()) {
//       // if not search term, return empty hero array.
//       return of([]);
//     }
//     return this.http.get<Hero[]>(`${this.heroesUrl}/?name=${term}`).pipe(
//       tap(_ => this.log(`found heroes matching "${term}"`)),
//       catchError(this.handleError<Hero[]>('searchHeroes', []))
//     );
//   }

  /** POST: add a new hero to the server */
//   addHero(hero: Hero): Observable<Hero> {
//     return this.http.post<Hero>(this.heroesUrl, hero, httpOptions).pipe(
//       tap((newHero: Hero) => this.log(`added hero w/ id=${newHero.id}`)),
//       catchError(this.handleError<Hero>('addHero'))
//     );
//   }

  /** DELETE: delete the hero from the server */
//   deleteHero (hero: Hero | number): Observable<Hero> {
//     const id = typeof hero === 'number' ? hero : hero.id;
//     const url = `${this.heroesUrl}/${id}`;

//     return this.http.delete<Hero>(url, httpOptions).pipe(
//       tap(_ => this.log(`deleted hero id=${id}`)),
//       catchError(this.handleError<Hero>('deleteHero'))
//     );
//   }

  /** PUT: update the hero on the server */
//   updateHero (hero: Hero): Observable<any> {
//   }

}
