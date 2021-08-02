import { Component, OnInit, Input } from '@angular/core';
import { ListCalification } from '../services/models/ListCalification';

@Component({
    selector: 'app-lists-comparator',
    templateUrl: './lists-comparator.component.html'
})

export class ListsComparatorComponent {
    califications: ListCalification[];
    firstGrouping: ListCalification = new ListCalification();
    secondGrouping: ListCalification = new ListCalification();
    thirdGrouping: ListCalification = new ListCalification();

    setCalifications(califications: ListCalification[]) {
        this.califications = califications;
        this.firstGrouping = this.califications[0];
        this.secondGrouping = this.califications[1];
        this.thirdGrouping = this.califications[2];
    }

    setFirstGrouping(calificationCode: string) {
        // @ts-ignore
        this.firstGrouping = this.califications.first(x => x.PoliticalGroupCode === calificationCode);
    }

    setSecondGrouping(calificationCode: string) {
        // @ts-ignore
        this.secondGrouping = this.califications.first(x => x.PoliticalGroupCode === calificationCode);
    }

    setThirdGrouping(calificationCode: string) {
        // @ts-ignore
        this.thirdGrouping = this.califications.first(x => x.PoliticalGroupCode === calificationCode);
    }
}
