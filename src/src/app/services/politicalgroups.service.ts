import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IPoliticalGroup } from './models/IPoliticalGroup';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class PoliticalGroupsService {
    constructor(private httpClient: HttpClient) { }

    loadAll(): Observable<Array<IPoliticalGroup>> {
        return <Observable<Array<IPoliticalGroup>>>this.httpClient.get("/assets/data/politicalgroups.json")
    }

}