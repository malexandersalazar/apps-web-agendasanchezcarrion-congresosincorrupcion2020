import { Component, OnInit, Input } from '@angular/core';
import { ListCalification } from '../services/models/ListCalification';
import { Indicator } from '../services/models/Indicator';
import { ListPartialCalification } from '../services/models/ListPartialCalification';

@Component({
    selector: 'app-lists-comparator-indicators',
    templateUrl: './lists-comparator-indicators.component.html'
})

export class ListsComparatorIndicatorsComponent {
    indicators: Indicator[] = [];
    califications: ListCalification[];
    selectedIndicator: Indicator;

    partialCalification: ListPartialCalification[];

    setCalifications(califications: ListCalification[]) {
        // this.indicators.push({ Code: '1', Name: '1.1 Número de representantes de sectores productivos. ' });
        // this.indicators.push({ Code: '2', Name: '1.2 Número de representantes de sectores sociales.' });
        // this.indicators.push({ Code: '3', Name: '1.3 Número de representantes de pueblos originarios.' });
        this.indicators.push({ Code: '4', Name: '1.4 Diferencia entre N° de candidatos hombres y mujeres en la lista.' });
        this.indicators.push({ Code: '5', Name: '1.5 Número de representantes jóvenes entre 25 y 35 años.' });
        this.indicators.push({ Code: '6', Name: '2.1 Número de candidatos profesionales con maestrías.' });
        this.indicators.push({ Code: '7', Name: '2.2 Número de candidatos con experiencia profesional acreditada igual o mayor 10 años.' });
        // this.indicators.push({ Code: '8', Name: '2.3 Número de candidatos que hayan publicado uno o más libros.' });
        this.indicators.push({
            Code: '9',
            Name: '3.1 Número de candidatos que participaron en dos (2) o más elecciones anteriores en listas de partidos diferentes.'
        });
        // this.indicators.push({
        //     Code: '10',
        //     Name: '3.2 Número de candidatos que son o han sido dirigentes gremiales o empresariales, un mínimo de dos años.'
        // });
        this.indicators.push({
            Code: '11',
            Name: '3.3 Número de candidatos que acrediten al menos un cargo público por elección y sin sentencia firme.'
        });
        // this.indicators.push({
        //     Code: '12',
        // tslint:disable-next-line: max-line-length
        //     Name: '3.4 Candidatos que autorizan el levantamiento de su secreto bancario ante la Unidad de Investigacion Financiera (UIF).'
        // });
        this.selectedIndicator = this.indicators[1];
        this.califications = califications;

        this.selectedIndicatorChanged();
    }

    selectedIndicatorChanged() {
        const result: ListPartialCalification[] = [];

        // tslint:disable-next-line: prefer-for-of
        for (let index = 0; index < this.califications.length; index++) {
            const partialCalification = new ListPartialCalification();
            partialCalification.PoliticalGroupImageUrl = this.califications[index].PoliticalGroupImageUrl;
            partialCalification.PoliticalGroupName = this.califications[index].PoliticalGroupName;

            if (this.selectedIndicator.Code === '1') {
                partialCalification.PartialPoints = this.califications[index].OneOnePoints;
                partialCalification.PartialValue = this.califications[index].OneOneValue;
            } else if (this.selectedIndicator.Code === '2') {
                partialCalification.PartialPoints = this.califications[index].OneTwoPoints;
                partialCalification.PartialValue = this.califications[index].OneTwoValue;
            } else if (this.selectedIndicator.Code === '3') {
                partialCalification.PartialPoints = this.califications[index].OneThreePoints;
                partialCalification.PartialValue = this.califications[index].OneThreeValue;
            } else if (this.selectedIndicator.Code === '4') {
                partialCalification.PartialPoints = this.califications[index].OneFourPoints;
                partialCalification.PartialValue = this.califications[index].OneFourValue;
            } else if (this.selectedIndicator.Code === '5') {
                partialCalification.PartialPoints = this.califications[index].OneFivePoints;
                partialCalification.PartialValue = this.califications[index].OneFiveValue;
            } else if (this.selectedIndicator.Code === '6') {
                partialCalification.PartialPoints = this.califications[index].TwoOnePoints;
                partialCalification.PartialValue = this.califications[index].TwoOneValue;
            } else if (this.selectedIndicator.Code === '7') {
                partialCalification.PartialPoints = this.califications[index].TwoTwoPoints;
                partialCalification.PartialValue = this.califications[index].TwoTwoValue;
            } else if (this.selectedIndicator.Code === '8') {
                partialCalification.PartialPoints = this.califications[index].TwoThreePoints;
                partialCalification.PartialValue = this.califications[index].TwoThreeValue;
            } else if (this.selectedIndicator.Code === '9') {
                partialCalification.PartialPoints = this.califications[index].ThreeOnePoints;
                partialCalification.PartialValue = this.califications[index].ThreeOneValue;
            } else if (this.selectedIndicator.Code === '10') {
                partialCalification.PartialPoints = this.califications[index].ThreeTwoPoints;
                partialCalification.PartialValue = this.califications[index].ThreeTwoValue;
            } else if (this.selectedIndicator.Code === '11') {
                partialCalification.PartialPoints = this.califications[index].ThreeThreePoints;
                partialCalification.PartialValue = this.califications[index].ThreeThreeValue;
            } else if (this.selectedIndicator.Code === '12') {
                partialCalification.PartialPoints = this.califications[index].ThreeFourPoints;
                partialCalification.PartialValue = this.califications[index].ThreeFourValue;
            }

            result.push(partialCalification);
        }

        // @ts-ignore
        // tslint:disable-next-line: max-line-length
        this.partialCalification = result.orderBy((x: ListPartialCalification) => (x.PartialValue - 1000) * -1) as ListPartialCalification[];
    }
}
