import { Component, Input, ViewChild, ElementRef, Inject } from '@angular/core';
import { JQUERY_TOKEN } from './jQuery.service';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'modal-simple',
  template: `
    <div id="{{elementId}}" #modalcontainer class="modal fade" tabindex="-1" role="dialog">
      <div class="modal-dialog modal-xl" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">{{title}}</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body" (click)="closeModal()">
            <ng-content></ng-content>
          </div>
        </div>
      </div>
    </div>
  `
})
export class ModalSimpleComponent {
  @Input() title: string;
  @Input() elementId: string;
  @Input() closeOnBodyClick = 'false';
  @ViewChild('modalcontainer', null) containerEl: ElementRef;

  constructor(@Inject(JQUERY_TOKEN) private $: any) { }

  closeModal() {
    if (this.closeOnBodyClick.toLocaleLowerCase() === 'true') {
      this.$(this.containerEl.nativeElement).modal('hide');
    }
  }
}
