import { enableProdMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HomeIndexComponent } from './home/home-index.component';
import { HomeFormatoMatrizComponent } from './home/home-formatomatriz.compontent';
import { SanchezCarrionIndexComponent } from './sanchezcarrion/sanchezcarrion-index.component';
import {
  ListsIndexComponent,
  ListsMatrixComponent,
  ListsComparatorComponent,
  ListsComparatorIndicatorsComponent
} from './lists/index';

import {
  JudgementsIndexComponent,
  JudgementsCandidatesComponent
} from './judgements/index';

import {
  ListsService,
  CandidatesService,
  PoliticalGroupsService
} from './services/index';

import {
  JQUERY_TOKEN,
  ModalSimpleComponent,
  ModalTriggerDirective
} from './common/index';

// tslint:disable-next-line: no-string-literal
const jQuery = window['$'];

enableProdMode();
@NgModule({
  declarations: [
    AppComponent,
    HomeIndexComponent,
    HomeFormatoMatrizComponent,
    SanchezCarrionIndexComponent,
    ListsIndexComponent,
    ListsMatrixComponent,
    ListsComparatorComponent,
    ListsComparatorIndicatorsComponent,
    JudgementsIndexComponent,
    JudgementsCandidatesComponent,
    ModalSimpleComponent,
    ModalTriggerDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    { provide: JQUERY_TOKEN, useValue: jQuery },
    ListsService,
    CandidatesService,
    PoliticalGroupsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
