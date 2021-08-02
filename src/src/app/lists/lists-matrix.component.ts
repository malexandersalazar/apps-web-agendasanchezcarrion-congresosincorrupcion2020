import { Component, OnInit } from '@angular/core';
import { ListsService } from '../services';
import { ActivatedRoute } from '@angular/router';
import { ListCalification } from '../services/models/ListCalification';

@Component({
    templateUrl: './lists-matrix.component.html'
})

export class ListsMatrixComponent implements OnInit {

    selectedList: ListCalification = new ListCalification();

    constructor(private route: ActivatedRoute, private listsService: ListsService) { }

    ngOnInit() {
        this.listsService.loadLists().subscribe(data => {
            const code = this.route.snapshot.params.code;
            // @ts-ignore
            const list: ListCalification = data.first((x: ListCalification) => x.PoliticalGroupCode === code ) as ListCalification;
            // tslint:disable-next-line: max-line-length
            list.ComponentOneAvgPoints = (list.OneOnePoints + list.OneTwoPoints + list.OneThreePoints + list.OneFourPoints + list.OneFivePoints) / 5.0;
            list.ComponentTwoAvgPoints = (list.TwoOnePoints + list.TwoTwoPoints + list.TwoThreePoints) / 3.0;
            // tslint:disable-next-line: max-line-length
            list.ComponentThreeAvgPoints = (list.ThreeOnePoints + list.ThreeTwoPoints + list.ThreeThreePoints + list.ThreeFourPoints) / 5.0;
            list.TotalPoints = (list.ComponentOneAvgPoints + list.ComponentTwoAvgPoints + list.ComponentThreeAvgPoints) / 3.0;

            // @ts-ignore
            this.selectedList = list;
        });
    }
}
