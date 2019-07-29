import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({ providedIn: 'root' })
export class PopupService {
    private item;
    constructor() {}

    /** GET hero by id. Will 404 if id not found */
    getItem(): Observable<any> {
        return this.item;
    }

    addItem(item): Observable<any> {
        return this.item = item;
    }
}
