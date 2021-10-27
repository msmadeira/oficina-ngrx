import {Component, Input, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-resident-create-modal',
  templateUrl: './resident-create-modal.component.html',
  styleUrls: ['./resident-create-modal.component.scss']
})
export class ResidentCreateModalComponent {

  @Input() open: boolean = false;

  @Output() openChange = new EventEmitter<boolean>();
}
