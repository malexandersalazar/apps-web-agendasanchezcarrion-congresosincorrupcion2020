import { Component, OnInit, Inject, ViewChild, ElementRef } from '@angular/core';
import { ListsService } from '../services/lists.service';
import { JQUERY_TOKEN } from '../common';
import { ListCalification } from '../services/models/ListCalification';
import { ListsComparatorIndicatorsComponent } from '../lists/lists-comparator-indicators.component';
import { ListsComparatorComponent } from '../lists/lists-comparator.component';

@Component({
    templateUrl: './lists-index.component.html'
})

export class ListsIndexComponent implements OnInit {
    @ViewChild('comparator', null) comparatorContainerEl: ListsComparatorComponent;
    @ViewChild('comparatorIndicators', null) comparatorIndicatorsContainerEl: ListsComparatorIndicatorsComponent;
    candidatesTotalCount = 0;
    califications: ListCalification[];
    selectedList: ListCalification = new ListCalification();

    constructor(@Inject(JQUERY_TOKEN) private $: any, private listsService: ListsService) { }

    ngOnInit() {
        this.listsService.loadLists().subscribe(data => {
            data.forEach(list => {
                this.candidatesTotalCount += list.CandidatesCount;
                // tslint:disable-next-line: max-line-length
                list.ComponentOneAvgPoints = (list.OneOnePoints + list.OneTwoPoints + list.OneThreePoints + list.OneFourPoints + list.OneFivePoints) / 5.0;
                list.ComponentTwoAvgPoints = (list.TwoOnePoints + list.TwoTwoPoints + list.TwoThreePoints) / 3.0;
                // tslint:disable-next-line: max-line-length
                list.ComponentThreeAvgPoints = (list.ThreeOnePoints + list.ThreeTwoPoints + list.ThreeThreePoints + list.ThreeFourPoints) / 5.0;
                list.TotalPoints = (list.ComponentOneAvgPoints + list.ComponentTwoAvgPoints + list.ComponentThreeAvgPoints) / 3.0;
            });

            this.califications = data;
            this.comparatorContainerEl.setCalifications(this.califications);
            this.comparatorIndicatorsContainerEl.setCalifications(this.califications);

            setTimeout(() => {
                this.$('#lists-result-table').DataTable({
                    searching: false,
                    paging: false,
                    info: false,
                    columnDefs: [
                        { orderable: false, targets: 5 }
                    ],
                    order: [[4, 'desc']]
                });
            }, 100);
        });
    }

    getRowClass(calification: ListCalification) {
        const p = (calification.TotalPoints * 100.0 / 5);
        if (p < 66.66) {
            return 'table-danger';
        } else if (p < 81.0) {
            return 'table-warning';
        }
    }

    getTdClass(points: number) {
        if (points <= 1.67) {
            return 'table-danger';
        } else { return ''; }
    }

    onSelect(list: ListCalification) {
        this.selectedList = list;
    }
}
