import { Component, OnInit } from '@angular/core';
import { CandidatesService } from '../services/candidates.service';
import { PoliticalGroupsService } from '../services';
import { PoliticalGroupJudgements } from '../services/models/PoliticalGroupJudgements';
import { ICandidate } from '../services/models/ICandidate';

@Component({
    templateUrl: './judgements-index.component.html'
})

export class JudgementsIndexComponent implements OnInit {
    politicalGroupsJudgements: PoliticalGroupJudgements[] = [];
    candidatesJudgements: ICandidate[];
    topCandidatesJudgements: ICandidate[];

    constructor(private candidatesService: CandidatesService, private politicalGroupService: PoliticalGroupsService) { }

    ngOnInit() {
        this.candidatesService.loadCandidatesWithJudgements().subscribe(data => {
            this.candidatesJudgements = data;

            // @ts-ignore
            this.topCandidatesJudgements = this.candidatesJudgements.orderBy((x: ICandidate) => x.Judgements.length).reverse().take(12);

            this.politicalGroupService.loadAll().subscribe(politicalGroups => {
                politicalGroups.forEach(politicalGroup => {
                    let candidatesCount = 0;
                    let crimesCount = 0;
                    this.candidatesJudgements.forEach(candidateJudgements => {
                        if (politicalGroup.Code === candidateJudgements.PoliticalGroupCode) {
                            candidatesCount++;
                            crimesCount += candidateJudgements.Judgements.length;
                        }
                    });
                    this.politicalGroupsJudgements.push({
                        Code: politicalGroup.Code,
                        CandidatesCount: candidatesCount,
                        CrimesCount: crimesCount,
                        ImageUrl: politicalGroup.ImageUrl,
                        Name: politicalGroup.Name
                    });
                });

                // @ts-ignore
                this.politicalGroupsJudgements = this.politicalGroupsJudgements.orderBy((t) => t.CrimesCount).reverse();
            });
        });
    }
}
