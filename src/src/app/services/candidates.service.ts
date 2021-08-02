import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ICandidate } from './models/ICandidate';

@Injectable({ providedIn: 'root' })
export class CandidatesService {
    constructor(private httpClient: HttpClient) { }

    loadCandidatesWithJudgements(): Observable<Array<ICandidate>> {
        return <Observable<Array<ICandidate>>>this.httpClient.get("/assets/data/candidates-judgements.json")
    }
}