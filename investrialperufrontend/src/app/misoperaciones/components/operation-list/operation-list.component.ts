import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core'

@Component({
  selector: 'app-operation-list',
  templateUrl: './operation-list.component.html',
  styleUrls: ['./operation-list.component.scss'],
})
export class OperationListComponent implements OnInit {
  @Output() openModalDetailsEvent: EventEmitter<any> = new EventEmitter<any>()

  @Input() operations: any = []
  constructor() {}

  openModalDetails(value: any): void {
    this.openModalDetailsEvent.emit(value)
  }

  ngOnInit() {}
}
