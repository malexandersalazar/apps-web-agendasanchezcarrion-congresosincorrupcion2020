import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ListCalification } from './models/ListCalification';

@Injectable({ providedIn: 'root' })
export class ListsService {
    constructor(private httpClient: HttpClient) { }

    loadLists(): Observable<Array<ListCalification>> {
        return this.httpClient.get('/assets/data/lists-scores.json') as Observable<Array<ListCalification>>;
    }
}
