import { Component, OnInit } from '@angular/core';
import { CandidatesService, PoliticalGroupsService } from '../services';
import { ActivatedRoute } from '@angular/router';
import { ICandidate } from '../services/models/ICandidate';
import { IPoliticalGroup } from '../services/models/IPoliticalGroup';

@Component({
    templateUrl: './judgements-candidates.component.html'
})

export class JudgementsCandidatesComponent implements OnInit {
    candidatesJudgements: ICandidate[];
    politicalGroup: IPoliticalGroup;

    // tslint:disable-next-line: max-line-length
    constructor(private route: ActivatedRoute, private candidatesService: CandidatesService, private politicalGroupsService: PoliticalGroupsService) { }

    ngOnInit() {
        this.politicalGroupsService.loadAll().subscribe(data => {
            const code = this.route.snapshot.params.code;
            // @ts-ignore
            this.politicalGroup = data.first((x: IPoliticalGroup) => x.Code === code ) as IPoliticalGroup;
        });

        this.candidatesService.loadCandidatesWithJudgements().subscribe(data => {
            const code = this.route.snapshot.params.code;
            // @ts-ignore
            this.candidatesJudgements = data.where((x: ICandidate) => x.PoliticalGroupCode === code );
        });
    }
}
